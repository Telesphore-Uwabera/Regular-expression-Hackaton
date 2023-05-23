import re

def usernames_regex(username):
  
    regex = "^@\w+"
    match = re.search(regex, username)
    
    if match:
        print(f"{username} is in the right format.")
    else:
        print(f"{username} is not in the right format.")
