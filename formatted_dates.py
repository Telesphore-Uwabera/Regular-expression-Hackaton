import re

def dates_regex(dates):
         
         regex = '^\d{2}\-[A-Z]{3}\-\d{4}$'
         match = re.search(regex, dates)

if match:
        print(f"{date} is in the right format.")
    else:
        print(f"{date} is not in the right format.")
