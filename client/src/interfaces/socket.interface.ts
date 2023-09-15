export interface ExchangeRes {
  table:  string;
  action: string;
  data:   ExchangeData[];
}

export interface ExchangeData {
  symbol:    string;
  id:        number;
  side:      'Sell' | 'Buy';
  size:      number;
  price:     number;
  timestamp: string;
}
