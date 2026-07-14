import pandas as pd
from charts import category_pie_chart, merchant_bar_chart
from categorizer import get_category
from subscriptions import find_subscriptions
from predictor import predict_next_month
from summary import generate_summary
from analyzer import (
    total_expense,
    highest_expense,
    average_expense,
    category_wise_expense
)

from data_loader import load_data

df = load_data("data/bank_statement.csv")

df["Category"] = df["Merchant"].apply(get_category)

df.to_csv("data/categorized_statement.csv", index=False)

print("\nCategorized Transactions\n")
print(df)

print("\n----------------------------")
print("Total Expense: ₹", total_expense(df))
print("Highest Expense: ₹", highest_expense(df))
print("Average Expense: ₹", average_expense(df))

print("\nCategory-wise Expense:")
print(category_wise_expense(df))
category_pie_chart(df)
merchant_bar_chart(df)
print("\nDetected Subscriptions:\n")
print(find_subscriptions(df))
print("\nPredicted Expense for Next Month:")
print("₹", predict_next_month())
summary = generate_summary(df)

print("\n========== FINANCIAL SUMMARY ==========\n")

for key, value in summary.items():
    print(f"{key}:\n{value}\n")