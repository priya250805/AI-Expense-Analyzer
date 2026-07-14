from src.analyzer import (
    total_expense,
    highest_expense,
    average_expense,
    category_wise_expense,
    largest_transaction,
)

from src.subscriptions import find_subscriptions
from src.predictor import predict_next_month
from src.insights import generate_insights


def generate_summary(df):

    largest = largest_transaction(df)

    return {

        "Total Expense": total_expense(df),

        "Highest Expense": highest_expense(df),

        "Average Expense": average_expense(df),

        "Category Wise Expense": category_wise_expense(df),

        "Subscriptions": find_subscriptions(df),

        "Next Month Prediction": predict_next_month(df),

        "Largest Transaction": largest,

        "insights": generate_insights(df),

    }
