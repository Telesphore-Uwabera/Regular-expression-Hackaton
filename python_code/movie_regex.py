import re


def movie_regex(movie):
    regex_expr = "(.+) \((\d{4})\)"
    match = re.search(regex_expr, movie)
    if match:
        print(f"{movie} is in the right format.")
    else:
        print(f"{movie} is not in the right format.")
