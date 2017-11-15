import re
import requests

regex = r"<a class=\"skins\" title=\"(.*)\" href=\"http:\/\/ddragon\.leagueoflegends\.com\/cdn\/img\/champion\/splash\/(.*)\">"

link = "http://gameinfo.las.leagueoflegends.com/es/game-info/champions/aatrox/"

ff = requests.get(link).content

print re.findall(ff, regex)
