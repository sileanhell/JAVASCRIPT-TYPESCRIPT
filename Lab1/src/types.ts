export interface Transaction {
  transaction_id: string;
  transaction_date: string;
  transaction_amount: number;
  transaction_type: TransactionType;
  transaction_description: string;
  merchant_name: string;
  card_type: CardType;
}

export interface TransactionWithFunc extends Transaction {
  string: () => string;
}

export enum CardType {
  Amex = "Amex",
  Discover = "Discover",
  MasterCard = "MasterCard",
  Visa = "Visa",
}

export enum TransactionType {
  Credit = "credit",
  Debit = "debit",
}
