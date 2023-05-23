import re

episodes = ['Marvelous Maisel in the forest S12E12: Boardway runner',
            'Holy Grail (1975)',
            'Brian (1979)',
            'Moly (2000)']

regex = '(.+)\d{2}E\d{2}:(.+)'


for episode in episodes:
    match = re.search(regex, episode)
    if match:
        print(episode)
