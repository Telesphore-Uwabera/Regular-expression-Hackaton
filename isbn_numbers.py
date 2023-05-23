import re

def isbn_regex(isbn):
  
    regex = "^ISBN\s\d{3}-\d{1}-\d{3}-\d{5}-\d{1}$"
    match = re.search(regex, isbn)
    
    if match:
        print(f"{isbn} is in the right format.")
    else:
        print(f"{isbn} is not in the right format.")
