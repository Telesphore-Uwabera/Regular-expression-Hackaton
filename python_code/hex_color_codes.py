import re

def date_regex(color):
        regex = '^#\w{6}$'
        match = re.search(regex, color)
        if match:
            print(f"{color} is in the right format.")
        else:
            print(f"{color} is not in the right format.")
