import { Transaction, TransactionType, TransactionWithFunc } from "./types";

export class TransactionAnalyzer {
  private transactions: Transaction[];

  constructor(transactions: Transaction[] = []) {
    this.transactions = transactions;
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getAllTransaction(): TransactionWithFunc[] {
    return this.transactions.map((item) => ({ ...item, string: () => JSON.stringify(item) }));
  }

  getUniqueTransactionTypes(): string[] {
    const uniqueTypesSet = new Set();

    this.transactions.forEach((transaction) => {
      uniqueTypesSet.add(transaction.transaction_type);
    });

    return Array.from(uniqueTypesSet) as string[];
  }

  calculateTotalAmount(): number {
    return this.transactions.reduce((total, transaction) => total + transaction.transaction_amount, 0);
  }

  calculateTotalAmountByDate(year?: number, month?: number, day?: number): number {
    let totalAmount = 0;

    this.transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.transaction_date);
      const transactionYear = year ?? transactionDate.getFullYear();
      const transactionMonth = month ?? transactionDate.getMonth() + 1;
      const transactionDay = day ?? transactionDate.getDate();

      if (transactionDate.getFullYear() === transactionYear && transactionDate.getMonth() + 1 === transactionMonth && transactionDate.getDate() === transactionDay) {
        totalAmount += transaction.transaction_amount;
      }
    });

    return totalAmount;
  }

  getTransactionsByType(type: TransactionType): Transaction[] {
    return this.transactions.filter((transaction) => transaction.transaction_type === type);
  }

  getTransactionsInDateRange(startDate: string, endDate: string): Transaction[] {
    return this.transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.transaction_date);
      const startDateTime = startDate ? new Date(startDate) : null;
      const endDateTime = endDate ? new Date(endDate) : null;

      if (startDateTime && transactionDate < startDateTime) return false;
      if (endDateTime && transactionDate > endDateTime) return false;

      return true;
    });
  }

  getTransactionsByMerchant(merchantName: string): Transaction[] {
    return this.transactions.filter((transaction) => transaction.merchant_name === merchantName);
  }

  calculateAverageTransactionAmount(): number {
    const totalAmount = this.calculateTotalAmount();
    const numberOfTransactions = this.transactions.length;

    if (numberOfTransactions === 0) return 0;

    return totalAmount / numberOfTransactions;
  }

  getTransactionsByAmountRange(minAmount: number, maxAmount: number): Transaction[] {
    return this.transactions.filter((transaction) => {
      const transactionAmount = transaction.transaction_amount;
      return transactionAmount >= minAmount && transactionAmount <= maxAmount;
    });
  }

  calculateTotalDebitAmount(): number {
    const debitTransactions = this.getTransactionsByType(TransactionType.Debit);
    return debitTransactions.reduce((total, transaction) => {
      return total + transaction.transaction_amount;
    }, 0);
  }

  findMostTransactionsMonth(): string {
    const transactionsByMonth = {};

    this.transactions.forEach((transaction) => {
      const [year, month] = transaction.transaction_date.split("-");
      const monthKey = `${year}-${month}`;

      if (!transactionsByMonth[monthKey]) {
        transactionsByMonth[monthKey] = 1;
      } else {
        transactionsByMonth[monthKey]++;
      }
    });

    return Object.keys(transactionsByMonth).reduce((a, b) => (transactionsByMonth[a] > transactionsByMonth[b] ? a : b));
  }

  findMostDebitTransactionMonth(): string {
    const transactionsByMonth = {};

    this.getTransactionsByType(TransactionType.Debit).forEach((transaction) => {
      const [year, month] = transaction.transaction_date.split("-");
      const monthKey = `${year}-${month}`;

      if (!transactionsByMonth[monthKey]) {
        transactionsByMonth[monthKey] = 1;
      } else {
        transactionsByMonth[monthKey]++;
      }
    });

    return Object.keys(transactionsByMonth).reduce((a, b) => (transactionsByMonth[a] > transactionsByMonth[b] ? a : b));
  }

  mostTransactionTypes(): TransactionType | "equal" {
    const debitTransactions = this.getTransactionsByType(TransactionType.Debit);
    const creditTransactions = this.getTransactionsByType(TransactionType.Credit);

    if (debitTransactions.length > creditTransactions.length) {
      return TransactionType.Debit;
    } else if (creditTransactions.length > debitTransactions.length) {
      return TransactionType.Credit;
    } else {
      return "equal";
    }
  }

  getTransactionsBeforeDate(date: string): Transaction[] {
    const targetDate = new Date(date);
    return this.transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.transaction_date);
      return transactionDate < targetDate;
    });
  }

  findTransactionById(id: string): Transaction {
    return this.transactions.find((transaction) => transaction.transaction_id === id);
  }

  mapTransactionDescriptions() {
    return this.transactions.map((transaction) => transaction.transaction_description);
  }
}
