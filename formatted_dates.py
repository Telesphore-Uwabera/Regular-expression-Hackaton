import re

def date_regex(date):
         
         regex = '^\d{2}\-[A-Z]{3}\-\d{4}$'
         match = re.search(regex, date)

if match:
        print(f"{date} is in the right format.")
    else:
        print(f"{date} is not in the right format.")
