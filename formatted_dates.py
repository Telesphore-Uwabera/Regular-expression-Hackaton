import re

dates = ['21-MAR-1982',
         '31st-APR-1982',
         '21-JUN-1875',
         '09/DEC/1672',
         ]


regex = '^\d{2}\-[A-Z]{3}\-\d{4}$'

for date in dates:
    match = re.search(regex, date)
    if match:
        print(date)
