import re

def ip_address(ip):
    regex = '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}'
    match_pattern = re.search(regex, ip)
