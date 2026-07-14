import pandas as pd


def get_expenses(df):
    return df[df["Transaction Type"] == "Debit"].copy()


def total_expense(df):
    expenses = get_expenses(df)
    return round(expenses["Amount"].sum(), 2)


def highest_expense(df):
    expenses = get_expenses(df)
    return round(expenses["Amount"].max(), 2)


def average_expense(df):
    expenses = get_expenses(df)
    return round(expenses["Amount"].mean(), 2)


def category_wise_expense(df):
    expenses = get_expenses(df)

    return (
        expenses.groupby("Category")["Amount"]
        .sum()
        .sort_values(ascending=False)
    )


def largest_transaction(df):
    expenses = get_expenses(df)

    row = expenses.loc[expenses["Amount"].idxmax()]

    return {
        "Merchant": row["Merchant"],
        "Amount": float(row["Amount"]),
        "Date": row["Date"],
        "Category": row["Category"],
    }