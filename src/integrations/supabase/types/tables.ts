export interface TickerConfig {
  id: string;
  contract_address: string;
  pump_fun_link: string;
  created_at?: string;
  updated_at?: string;
}

export interface IDCard {
  id: string;
  wallet_address: string;
  full_name: string;
  email?: string;
  date_of_birth?: string;
  card_color: string;
  created_at?: string;
}

export interface VisitorSession {
  id: string;
  session_id: string;
  last_seen?: string;
}
