def get_category(merchant):
    merchant = merchant.lower()

    if merchant in ["swiggy", "zomato", "starbucks"]:
        return "Food"

    elif merchant in ["uber", "ola"]:
        return "Travel"

    elif merchant in ["amazon", "flipkart"]:
        return "Shopping"

    elif merchant in ["netflix", "spotify", "youtube premium"]:
        return "Subscription"

    else:
        return "Others"