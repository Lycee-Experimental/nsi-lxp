# --- HDR ---#
url_fichier = "films.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)

import csv

films = []
with open("films.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=";")
    for entree in lecteur:
        entree["Ranking"] = int(entree["Ranking"])
        entree["Year"] = int(entree["Year"])
        entree["Minutes"] = int(entree["Minutes"])
        entree["Rating"] = float(entree["Rating"])
        entree["Votes"] = int(entree["Votes"])
        entree["Gross"] = float(entree["Gross"])
        films.append(entree)

annee_films = {
    1941: 3,
    1972: 4,
    1939: 4,
    1994: 8,
    1942: 4,
    1949: 3,
    1980: 7,
    1993: 8,
    1979: 5,
    1990: 3,
    1952: 3,
    1960: 4,
    1968: 5,
    1999: 8,
    1976: 5,
    1954: 5,
    1959: 6,
    1957: 9,
    1964: 6,
    1958: 4,
    1966: 6,
    1931: 3,
    1974: 6,
    2008: 9,
    1982: 11,
    1977: 3,
    1950: 5,
    1981: 3,
    1985: 5,
    1962: 5,
    1975: 8,
    2013: 10,
    1920: 1,
    1940: 7,
    2001: 9,
    1956: 4,
    2015: 9,
    2016: 10,
    1927: 2,
    2003: 10,
    1936: 2,
    1986: 6,
    1934: 2,
    1944: 2,
    1991: 5,
    1971: 4,
    1922: 1,
    1937: 2,
    1969: 5,
    1965: 4,
    1933: 2,
    1995: 11,
    1938: 3,
    1935: 4,
    1948: 4,
    1930: 1,
    1967: 6,
    1951: 6,
    1955: 4,
    2014: 14,
    1926: 1,
    1970: 3,
    1946: 5,
    1997: 8,
    1945: 2,
    1953: 5,
    2007: 8,
    1988: 7,
    1996: 5,
    2018: 7,
    2010: 9,
    1916: 1,
    1925: 2,
    1963: 3,
    2002: 8,
    1998: 11,
    1984: 7,
    1961: 5,
    1978: 5,
    2006: 8,
    2011: 8,
    2004: 11,
    2012: 9,
    1943: 1,
    1989: 5,
    1921: 1,
    1928: 1,
    1983: 2,
    1992: 3,
    2000: 7,
    1973: 6,
    2005: 7,
    1987: 7,
    2009: 10,
    1947: 1,
    2017: 8,
    1924: 1,
    1932: 1,
}
# --- HDR ---#
annee_maxi = None
maxi = 0

# Compléter le code

print(annee_maxi)
print([entree["Name"] for entree in films if entree["Year"] == annee_maxi])