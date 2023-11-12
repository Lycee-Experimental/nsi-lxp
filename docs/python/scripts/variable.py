liste1 = ['a', 'b', 'c']
liste2 = liste1
liste3 = ['a', 'b', 'c']

print(liste1 == liste2)
print(liste1 == liste3)

print(liste1 is liste2)
print(liste1 is liste3)

print(id(liste1))
print(id(liste2))
print(id(liste3))