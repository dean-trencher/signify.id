import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { QRCodeSVG } from "qrcode.react";
import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import html2canvas from "html2canvas";
import IDCard from "./IDCard";

interface IDCardData {
  id: string;
  full_name: string;
  wallet_address: string;
  email: string;
  card_color: string;
  date_of_birth: string;
  created_at: string;
}

export const IDCardHistory = () => {
  const [cards, setCards] = useState<IDCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCards();

    const channel = supabase
      .channel('id-cards-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'id_cards'
        },
        () => fetchCards()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCards = async () => {
    try {
      const { data, error } = await supabase
        .from('id_cards')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCards(data || []);
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCard = async (card: IDCardData) => {
    const cardElement = document.getElementById(`card-${card.id}`);
    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2,
      });

      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `${card.full_name.replace(/\s+/g, "-")}-id-card.png`;
      link.href = url;
      link.click();
    } catch (error) {
      console.error("Error downloading card:", error);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading history...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Card History</h2>
        <p className="text-sm text-muted-foreground">{cards.length} cards generated</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {cards.map((card) => (
            <Card key={card.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{card.full_name}</h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {card.wallet_address.slice(0, 8)}...{card.wallet_address.slice(-6)}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(card.created_at).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="bg-white p-2 rounded">
                  <QRCodeSVG 
                    value={card.wallet_address}
                    size={60}
                    level="H"
                  />
                </div>
              </div>

              <div className="hidden">
                <div id={`card-${card.id}`}>
                  <IDCard
                    holderName={card.full_name}
                    walletAddress={card.wallet_address}
                    variant={card.card_color as "purple" | "green" | "dark"}
                  />
                </div>
              </div>

              <Button
                onClick={() => downloadCard(card)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Card
              </Button>
            </Card>
          ))}

          {cards.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No cards generated yet</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
