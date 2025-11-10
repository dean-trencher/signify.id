-- Create ticker configuration table
CREATE TABLE public.ticker_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contract_address TEXT NOT NULL,
  pump_fun_link TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Insert default ticker config
INSERT INTO public.ticker_config (contract_address, pump_fun_link)
VALUES ('', '');

-- Create id_cards table
CREATE TABLE public.id_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT,
  date_of_birth DATE,
  card_color TEXT NOT NULL DEFAULT 'purple',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create visitor tracking table
CREATE TABLE public.visitor_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT UNIQUE NOT NULL,
  last_seen TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ticker_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.id_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;

-- Ticker config policies (readable by all, editable only from /edit page - we'll handle auth in frontend)
CREATE POLICY "Ticker config readable by all"
  ON public.ticker_config
  FOR SELECT
  USING (true);

CREATE POLICY "Ticker config updatable by all"
  ON public.ticker_config
  FOR UPDATE
  USING (true);

-- ID cards policies
CREATE POLICY "ID cards readable by all"
  ON public.id_cards
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert ID cards"
  ON public.id_cards
  FOR INSERT
  WITH CHECK (true);

-- Visitor sessions policies
CREATE POLICY "Visitor sessions readable by all"
  ON public.visitor_sessions
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert visitor sessions"
  ON public.visitor_sessions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update visitor sessions"
  ON public.visitor_sessions
  FOR UPDATE
  USING (true);

-- Function to clean up old visitor sessions (older than 5 minutes)
CREATE OR REPLACE FUNCTION clean_old_visitor_sessions()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM public.visitor_sessions
  WHERE last_seen < NOW() - INTERVAL '5 minutes';
END;
$$;

-- Create index for better performance
CREATE INDEX idx_visitor_sessions_last_seen ON public.visitor_sessions(last_seen);
CREATE INDEX idx_id_cards_wallet ON public.id_cards(wallet_address);