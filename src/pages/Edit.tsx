import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    id: '',
    contract_address: '',
    pump_fun_link: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    const { data } = await supabase
      .from('ticker_config')
      .select('*')
      .single();
    
    if (data) {
      setConfig(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('ticker_config')
        .update({
          contract_address: config.contract_address,
          pump_fun_link: config.pump_fun_link,
          updated_at: new Date().toISOString(),
        })
        .eq('id', config.id);

      if (error) throw error;

      toast.success('Ticker configuration updated!');
    } catch (error) {
      console.error('Error updating config:', error);
      toast.error('Failed to update configuration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Edit Ticker Configuration
            </h1>
            <p className="text-muted-foreground mt-2">
              Update the $SIGNIFY ticker information displayed on the homepage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="contract_address">Contract Address</Label>
              <Input
                id="contract_address"
                value={config.contract_address}
                onChange={(e) => setConfig({ ...config, contract_address: e.target.value })}
                placeholder="Enter Solana contract address"
              />
            </div>

            <div>
              <Label htmlFor="pump_fun_link">Pump.fun Link</Label>
              <Input
                id="pump_fun_link"
                value={config.pump_fun_link}
                onChange={(e) => setConfig({ ...config, pump_fun_link: e.target.value })}
                placeholder="https://pump.fun/..."
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
