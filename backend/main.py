from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
import sys

# Add project root to Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from src.categorizer import get_category
from src.summary import generate_summary

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Backend Running"}


@app.post("/upload")
async def upload_csv(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)

    if "Category" not in df.columns:
     df["Category"] = df["Merchant"].apply(get_category)

    expense_df = df[df["Transaction Type"] == "Debit"]
    print("Debit Total =", expense_df["Amount"].sum())

    result = generate_summary(df)
    print("Total Expense =", result["Total Expense"])
    print("Prediction =", result["Next Month Prediction"])

    return {
        "Total Expense": float(result["Total Expense"]),
        "Highest Expense": float(result["Highest Expense"]),
        "Average Expense": float(result["Average Expense"]),
        "Category Wise Expense": result["Category Wise Expense"].to_dict(),
        "Subscriptions": result["Subscriptions"].to_dict(orient="records"),
        "Next Month Prediction": float(result["Next Month Prediction"]),
        "Largest Transaction": result["Largest Transaction"],
        "insights": result["insights"],
    }
