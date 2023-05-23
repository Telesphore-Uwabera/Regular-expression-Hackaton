import re


def jokes_regex(joke):
    regex_expr = "(^Why did the .+\?)\s(Because .+)+"
    match = re.search(regex_expr, joke)
    if match:
        print(f"{joke} is in the right format.")
    else:
        print(f"{joke} is not in the right format.")

