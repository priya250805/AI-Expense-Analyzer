import pandas as pd


def find_subscriptions(df):

    subscriptions = df[
        (df["Is Subscription"] == "Yes") &
        (df["Transaction Type"] == "Debit")
    ].copy()

    if subscriptions.empty:
        return pd.DataFrame(
            columns=["Merchant", "Category", "Amount"]
        )

    return subscriptions[
        ["Merchant", "Category", "Amount"]
    ].sort_values(
        by="Amount",
        ascending=False
    )