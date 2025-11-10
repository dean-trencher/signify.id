import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye } from 'lucide-react';

export const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [sessionId] = useState(() => 
    `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    initSession();
    const interval = setInterval(updateSession, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('visitor-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'visitor_sessions'
        },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const initSession = async () => {
    await supabase.from('visitor_sessions').upsert({
      session_id: sessionId,
      last_seen: new Date().toISOString()
    });
    fetchCount();
  };

  const updateSession = async () => {
    await supabase
      .from('visitor_sessions')
      .update({ last_seen: new Date().toISOString() })
      .eq('session_id', sessionId);
    
    // Clean old sessions
    await supabase.rpc('clean_old_visitor_sessions');
  };

  const fetchCount = async () => {
    const { count: activeCount } = await supabase
      .from('visitor_sessions')
      .select('*', { count: 'exact', head: true });
    
    setCount(activeCount || 0);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-solana-green" />
        <span className="text-sm font-medium">{count} online</span>
      </div>
    </div>
  );
};
