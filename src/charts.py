import matplotlib.pyplot as plt


def category_pie_chart(df):
    category_data = df.groupby("Category")["Amount"].sum()

    plt.figure(figsize=(7, 7))
    plt.pie(
        category_data,
        labels=category_data.index,
        autopct="%1.1f%%",
        startangle=90
    )
    plt.title("Expense Distribution by Category")
    plt.savefig("data/category_pie_chart.png")
    plt.show()
def merchant_bar_chart(df):
    merchant_data = df.groupby("Merchant")["Amount"].sum()

    plt.figure(figsize=(8, 5))
    merchant_data.plot(kind="bar")

    plt.title("Expense by Merchant")
    plt.xlabel("Merchant")
    plt.ylabel("Amount (₹)")

    plt.tight_layout()
    plt.savefig("data/merchant_bar_chart.png")
    plt.show()
