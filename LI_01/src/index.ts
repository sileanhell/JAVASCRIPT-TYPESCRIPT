import fs from "fs";
import { join } from "path";
import { customConsole } from "./log";
import { TransactionAnalyzer } from "./transactionAnalyzer";
import { CardType, TransactionType } from "./types";

const main = async () => {
  const transactionsJSON = await JSON.parse(fs.readFileSync(join(process.cwd(), "files", "transaction.json"), { encoding: "utf8" }));
  const transactions = new TransactionAnalyzer(transactionsJSON);

  // 1. addTransaction()
  transactions.addTransaction({
    transaction_id: "999",
    transaction_date: "2024-01-01",
    transaction_amount: 1000.0,
    transaction_type: TransactionType.Credit,
    transaction_description: "Payment for camin",
    merchant_name: "SuperCamin",
    card_type: CardType.Visa,
  });
  customConsole.log(
    "1. addTransaction()\n\n",
    transactions.getAllTransaction().find((item) => item.transaction_id === "999")
  );

  // 2. getAllTransaction()
  customConsole.log("2. getAllTransaction()\n\n", transactions.getAllTransaction().slice(0, 4));

  // 3. [extra] add method string() to transaction object
  customConsole.log("3. [extra]\n\n0", transactions.getAllTransaction()[0].string());

  // 4. getUniqueTransactionTypes()
  customConsole.log("4. getUniqueTransactionTypes()\n\n", transactions.getUniqueTransactionTypes());

  // 5. calculateTotalAmount()
  customConsole.log("5. calculateTotalAmount()\n\n", transactions.calculateTotalAmount());

  // 6. calculateTotalAmountByDate(year, month, day)
  customConsole.log("6. calculateTotalAmountByDate(2019, 1)\n\n", transactions.calculateTotalAmountByDate(2019, 1));

  // 7. getTransactionsByType(type)
  customConsole.log("7. getTransactionsByType('credit')\n\n", transactions.getTransactionsByType(TransactionType.Credit).slice(0, 3));

  // 8. getTransactionsInDateRange(type)
  customConsole.log("8. getTransactionsInDateRange('2019-01-02', '2019-01-05')\n\n", transactions.getTransactionsInDateRange("2019-01-02", "2019-01-05"));

  // 9. getTransactionsByMerchant(merchantName)
  customConsole.log("9. getTransactionsByMerchant('Cafe123')\n\n", transactions.getTransactionsByMerchant("Cafe123"));

  // 10. calculateAverageTransactionAmount()
  customConsole.log("10. calculateAverageTransactionAmount()\n\n", transactions.calculateAverageTransactionAmount());

  // 11. getTransactionsByAmountRange(minAmount, maxAmount)
  customConsole.log("11. getTransactionsByAmountRange(50, 55)\n\n", transactions.getTransactionsByAmountRange(50, 55));

  // 12. calculateTotalDebitAmount()
  customConsole.log("12. calculateTotalDebitAmount()\n\n", transactions.calculateTotalDebitAmount());

  // 13. findMostTransactionsMonth()
  customConsole.log("13. findMostTransactionsMonth()\n\n", transactions.findMostTransactionsMonth());

  // 14. findMostDebitTransactionMonth()
  customConsole.log("14. findMostDebitTransactionMonth()\n\n", transactions.findMostDebitTransactionMonth());

  // 15. getTransactionsBeforeDate(date)
  customConsole.log("15. getTransactionsBeforeDate('2019-01-03')\n\n", transactions.getTransactionsBeforeDate("2019-01-03"));

  // 16. findTransactionById(id)
  customConsole.log("16. findTransactionById('1')\n\n", transactions.findTransactionById("1"));

  // 17. mapTransactionDescriptions()
  customConsole.log("17. mapTransactionDescriptions()\n\n", transactions.mapTransactionDescriptions());
};

main();
