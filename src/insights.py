import pandas as pd


def generate_insights(df):

    expenses = df[df["Transaction Type"] == "Debit"].copy()

    insights = []

    total = expenses["Amount"].sum()

    # -----------------------------------
    # Largest Purchase / Anomaly Detection
    # -----------------------------------

    largest = expenses.loc[expenses["Amount"].idxmax()]

    avg = expenses["Amount"].mean()

    # Convert date into "3 March 2025"
    date_obj = pd.to_datetime(largest["Date"])
    formatted_date = f"{date_obj.day} {date_obj.strftime('%B %Y')}"

    insights.append({

        "title": "Anomaly Detection",

        "text": (
            f"On {formatted_date}, you spent ₹{largest['Amount']:,.0f} "
            f"at {largest['Merchant']}, which is "
            f"{largest['Amount']/avg:.1f}× higher than your average purchase."
        )

    })

    # -----------------------------------
    # Highest Spending Category
    # -----------------------------------

    category = (
        expenses.groupby("Category")["Amount"]
        .sum()
        .sort_values(ascending=False)
    )

    top_category = category.index[0]

    top_amount = category.iloc[0]

    percentage = (top_amount / total) * 100

    insights.append({

        "title": "Top Spending Category",

        "text": (
            f"{percentage:.1f}% of your monthly expenses "
            f"were spent on {top_category}."
        )

    })

    # -----------------------------------
    # Subscriptions
    # -----------------------------------

    subs = expenses[
        expenses["Is Subscription"] == "Yes"
    ]

    if len(subs) > 0:

        insights.append({

            "title": "Subscriptions",

            "text": (
                f"You have {len(subs)} active subscriptions "
                f"costing ₹{subs['Amount'].sum():,.0f} this month."
            )

        })

    # -----------------------------------
    # Savings Opportunity
    # -----------------------------------

    food = expenses[
        expenses["Category"] == "Food"
    ]["Amount"].sum()

    save = food * 0.20

    insights.append({

        "title": "Savings Opportunity",

        "text": (
            f"If you reduce food delivery expenses by 20%, "
            f"you could save approximately ₹{save:,.0f} every month."
        )

    })

    # -----------------------------------
    # Month-End Prediction
    # -----------------------------------

    prediction = total * 1.03

    insights.append({

        "title": "Prediction",

        "text": (
            f"Based on your current spending behaviour, "
            f"your estimated spending for next month is "
            f"around ₹{prediction:,.0f}."
        )

    })

    return insights