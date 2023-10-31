total_family = 0
total_horror = 0

for entree in films:
    if "Family" in entree["Genres"]:
        total_family += entree["Votes"]
    elif "Horror" in entree["Genres"]:
        total_horror += entree["Votes"]