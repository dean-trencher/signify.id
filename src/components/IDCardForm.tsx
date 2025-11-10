import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import IDCard from './IDCard';
import html2canvas from 'html2canvas';

interface IDCardFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  walletAddress: string;
}

const colors = [
  { name: 'Purple', value: 'purple' as const, gradient: 'from-solana-purple to-purple-600' },
  { name: 'Green', value: 'green' as const, gradient: 'from-solana-green to-green-600' },
  { name: 'Dark', value: 'dark' as const, gradient: 'from-gray-800 to-gray-950' },
];

export const IDCardForm = ({ open, onOpenChange, walletAddress }: IDCardFormProps) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    date_of_birth: '',
  });
  const [selectedColor, setSelectedColor] = useState<'purple' | 'green' | 'dark'>('purple');
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('id_cards').insert({
        wallet_address: walletAddress,
        full_name: formData.full_name,
        email: formData.email,
        date_of_birth: formData.date_of_birth || null,
        card_color: selectedColor,
      });

      if (error) throw error;

      setShowPreview(true);

      // Send email with card image
      setTimeout(async () => {
        try {
          const cardElement = document.getElementById('id-card-preview');
          if (cardElement && formData.email) {
            const canvas = await html2canvas(cardElement, {
              scale: 2,
              backgroundColor: null,
            });
            const imageBase64 = canvas.toDataURL("image/png");

            await supabase.functions.invoke("send-id-card-email", {
              body: {
                to: formData.email,
                fullName: formData.full_name,
                walletAddress,
                cardImageBase64: imageBase64,
              },
            });

            toast.success('ID Card generated and sent to your email!');
          } else {
            toast.success('ID Card generated successfully!');
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          toast.success('ID Card generated! (Email delivery failed)');
        }
      }, 500);
    } catch (error) {
      console.error('Error creating ID card:', error);
      toast.error('Failed to generate ID card');
    } finally {
      setLoading(false);
    }
  };

  const downloadCard = async () => {
    const cardElement = document.getElementById('id-card-preview');
    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        backgroundColor: null,
      });
      
      const link = document.createElement('a');
      link.download = `signify-id-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success('ID Card downloaded!');
    } catch (error) {
      console.error('Error downloading card:', error);
      toast.error('Failed to download card');
    }
  };

  const resetForm = () => {
    setFormData({ full_name: '', email: '', date_of_birth: '' });
    setSelectedColor('purple');
    setShowPreview(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {showPreview ? 'Your ID Card' : 'Generate Your ID Card'}
          </DialogTitle>
        </DialogHeader>

        {!showPreview ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="full_name">Full Name *</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="date_of_birth">Date of Birth</Label>
              <Input
                id="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
              />
            </div>

            <div>
              <Label>Card Color *</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setSelectedColor(color.value)}
                    className={`h-12 rounded-lg bg-gradient-to-br ${color.gradient} relative ${
                      selectedColor === color.value ? 'ring-2 ring-foreground ring-offset-2' : ''
                    }`}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Generating...' : 'Generate ID Card'}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div id="id-card-preview" className="flex justify-center p-4">
              <IDCard
                holderName={formData.full_name}
                walletAddress={walletAddress}
                variant={selectedColor}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={downloadCard} className="flex-1">
                Download Card
              </Button>
              <Button onClick={resetForm} variant="outline" className="flex-1">
                Create Another
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
