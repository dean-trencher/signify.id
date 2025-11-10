import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export const TickerDisplay = () => {
  const [config, setConfig] = useState({ contract_address: '', pump_fun_link: '' });

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

  const copyAddress = () => {
    if (config.contract_address) {
      navigator.clipboard.writeText(config.contract_address);
      toast.success('Contract address copied!');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-solana-purple to-solana-green py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-6 text-xs text-white">
        <div className="flex items-center gap-2">
          <span className="font-bold">$SIGNIFY</span>
        </div>
        {config.contract_address && (
          <div className="flex items-center gap-2">
            <span className="opacity-80">CA:</span>
            <code className="bg-black/20 px-2 py-1 rounded">
              {config.contract_address.slice(0, 6)}...{config.contract_address.slice(-4)}
            </code>
            <button onClick={copyAddress} className="hover:opacity-80">
              <Copy className="w-3 h-3" />
            </button>
          </div>
        )}
        {config.pump_fun_link && (
          <a 
            href={config.pump_fun_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <span>Pump.fun</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
