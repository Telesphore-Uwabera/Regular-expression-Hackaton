import re


def song_regex(song):
    regex_expr = "\[Verse (\d+)\] (.+)"
    match = re.search(regex_expr, song)
    if match:
        print(f"{song} is in the right format.")
    else:
        print(f"{song} is not in the right format.")
