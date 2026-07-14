def predict_next_month(df):
    """
    Predict next month's expense based on current month's spending.
    Adds a realistic 3% increase.
    """

    expense_df = df[df["Transaction Type"] == "Debit"]

    total = expense_df["Amount"].sum()

    prediction = total * 1.03

    return round(prediction, 2)