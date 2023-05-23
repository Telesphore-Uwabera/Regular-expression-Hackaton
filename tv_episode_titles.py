import re

def episode_regex(episode):
            
           regex = '(.+)\d{2}E\d{2}:(.+)'
           match = re.search(regex, episode)

    if match:
        print(f"{episode} is in the right format.")
    else:
        print(f"{episode} is not in the right format.")
