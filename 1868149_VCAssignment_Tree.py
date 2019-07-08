import csv

burgerlist = []
restaurantlist = []
layerslist = []
ingredientslist = []
cheeselist = []

quadrupleburgerslayerindex = []
tripleburgerslayerindex = []
doubleburgerslayerindex = []
singleburgerslayerindex = []

with open("1868149dataset.csv", "r") as readf:
 reader = csv.reader(readf)
 for row in reader:
     burgerlist.append(row[0])
     restaurantlist.append(row[1])
     layerslist.append(row[7])
     ingredientslist.append(row[8])
     cheeselist.append(row[9])

# Load the data from the .csv
dburger = [{'Burger': burgerlist[1], 'Layers': layerslist[1], 'Ingredients': ingredientslist[1], 'Cheese': cheeselist[1]}
          ,{'Burger': burgerlist[2], 'Layers': layerslist[2], 'Ingredients': ingredientslist[2], 'Cheese': cheeselist[2]}
          ,{'Burger': burgerlist[3], 'Layers': layerslist[3], 'Ingredients': ingredientslist[3], 'Cheese': cheeselist[3]}
          ,{'Burger': burgerlist[4], 'Layers': layerslist[4], 'Ingredients': ingredientslist[4], 'Cheese': cheeselist[4]}
          ,{'Burger': burgerlist[5], 'Layers': layerslist[5], 'Ingredients': ingredientslist[5], 'Cheese': cheeselist[5]}
          ,{'Burger': burgerlist[6], 'Layers': layerslist[6], 'Ingredients': ingredientslist[6], 'Cheese': cheeselist[6]}
          ,{'Burger': burgerlist[7], 'Layers': layerslist[7], 'Ingredients': ingredientslist[7], 'Cheese': cheeselist[7]}
          ,{'Burger': burgerlist[8], 'Layers': layerslist[8], 'Ingredients': ingredientslist[8], 'Cheese': cheeselist[8]}
          ,{'Burger': burgerlist[9], 'Layers': layerslist[9], 'Ingredients': ingredientslist[9], 'Cheese': cheeselist[9]}
          ,{'Burger': burgerlist[10], 'Layers': layerslist[10], 'Ingredients': ingredientslist[10], 'Cheese': cheeselist[10]}
          ,{'Burger': burgerlist[11], 'Layers': layerslist[11], 'Ingredients': ingredientslist[11], 'Cheese': cheeselist[11]}
          ,{'Burger': burgerlist[12], 'Layers': layerslist[12], 'Ingredients': ingredientslist[12], 'Cheese': cheeselist[12]}
          ,{'Burger': burgerlist[13], 'Layers': layerslist[13], 'Ingredients': ingredientslist[13], 'Cheese': cheeselist[13]}
          ,{'Burger': burgerlist[14], 'Layers': layerslist[14], 'Ingredients': ingredientslist[14], 'Cheese': cheeselist[14]}
          ,{'Burger': burgerlist[15], 'Layers': layerslist[15], 'Ingredients': ingredientslist[15], 'Cheese': cheeselist[15]}
          ,{'Burger': burgerlist[16], 'Layers': layerslist[16], 'Ingredients': ingredientslist[16], 'Cheese': cheeselist[16]}
          ,{'Burger': burgerlist[17], 'Layers': layerslist[17], 'Ingredients': ingredientslist[17], 'Cheese': cheeselist[17]}
          ,{'Burger': burgerlist[18], 'Layers': layerslist[18], 'Ingredients': ingredientslist[18], 'Cheese': cheeselist[18]}
          ,{'Burger': burgerlist[19], 'Layers': layerslist[19], 'Ingredients': ingredientslist[19], 'Cheese': cheeselist[19]}
          ,{'Burger': burgerlist[20], 'Layers': layerslist[20], 'Ingredients': ingredientslist[20], 'Cheese': cheeselist[20]}
          ,{'Burger': burgerlist[21], 'Layers': layerslist[21], 'Ingredients': ingredientslist[21], 'Cheese': cheeselist[21]}
          ,{'Burger': burgerlist[22], 'Layers': layerslist[22], 'Ingredients': ingredientslist[22], 'Cheese': cheeselist[22]}
          ,{'Burger': burgerlist[23], 'Layers': layerslist[23], 'Ingredients': ingredientslist[23], 'Cheese': cheeselist[23]}
          ,{'Burger': burgerlist[24], 'Layers': layerslist[24], 'Ingredients': ingredientslist[24], 'Cheese': cheeselist[24]}
          ,{'Burger': burgerlist[25], 'Layers': layerslist[25], 'Ingredients': ingredientslist[25], 'Cheese': cheeselist[25]}
          ,{'Burger': burgerlist[26], 'Layers': layerslist[26], 'Ingredients': ingredientslist[26], 'Cheese': cheeselist[26]}
          ,{'Burger': burgerlist[27], 'Layers': layerslist[27], 'Ingredients': ingredientslist[27], 'Cheese': cheeselist[27]}
          ,{'Burger': burgerlist[28], 'Layers': layerslist[28], 'Ingredients': ingredientslist[28], 'Cheese': cheeselist[28]}
          ,{'Burger': burgerlist[29], 'Layers': layerslist[29], 'Ingredients': ingredientslist[29], 'Cheese': cheeselist[29]}
          ,{'Burger': burgerlist[30], 'Layers': layerslist[30], 'Ingredients': ingredientslist[30], 'Cheese': cheeselist[30]}
          ,{'Burger': burgerlist[31], 'Layers': layerslist[31], 'Ingredients': ingredientslist[31], 'Cheese': cheeselist[31]}
          ,{'Burger': burgerlist[32], 'Layers': layerslist[32], 'Ingredients': ingredientslist[32], 'Cheese': cheeselist[32]}
          ,{'Burger': burgerlist[33], 'Layers': layerslist[33], 'Ingredients': ingredientslist[33], 'Cheese': cheeselist[33]}
          ,{'Burger': burgerlist[34], 'Layers': layerslist[34], 'Ingredients': ingredientslist[34], 'Cheese': cheeselist[34]}
          ,{'Burger': burgerlist[35], 'Layers': layerslist[35], 'Ingredients': ingredientslist[35], 'Cheese': cheeselist[35]}
          ,{'Burger': burgerlist[36], 'Layers': layerslist[36], 'Ingredients': ingredientslist[36], 'Cheese': cheeselist[36]}
          ,{'Burger': burgerlist[37], 'Layers': layerslist[37], 'Ingredients': ingredientslist[37], 'Cheese': cheeselist[37]}
          ,{'Burger': burgerlist[38], 'Layers': layerslist[38], 'Ingredients': ingredientslist[38], 'Cheese': cheeselist[38]}
          ,{'Burger': burgerlist[39], 'Layers': layerslist[39], 'Ingredients': ingredientslist[39], 'Cheese': cheeselist[39]}
          ,{'Burger': burgerlist[40], 'Layers': layerslist[40], 'Ingredients': ingredientslist[40], 'Cheese': cheeselist[40]}
          ,{'Burger': burgerlist[41], 'Layers': layerslist[41], 'Ingredients': ingredientslist[41], 'Cheese': cheeselist[41]}
          ,{'Burger': burgerlist[42], 'Layers': layerslist[42], 'Ingredients': ingredientslist[42], 'Cheese': cheeselist[42]}
          ,{'Burger': burgerlist[43], 'Layers': layerslist[43], 'Ingredients': ingredientslist[43], 'Cheese': cheeselist[43]}
          ,{'Burger': burgerlist[44], 'Layers': layerslist[44], 'Ingredients': ingredientslist[44], 'Cheese': cheeselist[44]}
          ,{'Burger': burgerlist[45], 'Layers': layerslist[45], 'Ingredients': ingredientslist[45], 'Cheese': cheeselist[45]}
          ,{'Burger': burgerlist[46], 'Layers': layerslist[46], 'Ingredients': ingredientslist[46], 'Cheese': cheeselist[46]}
          ,{'Burger': burgerlist[47], 'Layers': layerslist[47], 'Ingredients': ingredientslist[47], 'Cheese': cheeselist[47]}
          ,{'Burger': burgerlist[48], 'Layers': layerslist[48], 'Ingredients': ingredientslist[48], 'Cheese': cheeselist[48]}
          ,{'Burger': burgerlist[49], 'Layers': layerslist[49], 'Ingredients': ingredientslist[49], 'Cheese': cheeselist[49]}
          ,{'Burger': burgerlist[50], 'Layers': layerslist[50], 'Ingredients': ingredientslist[50], 'Cheese': cheeselist[50]}
          ,{'Burger': burgerlist[51], 'Layers': layerslist[51], 'Ingredients': ingredientslist[51], 'Cheese': cheeselist[51]}
          ,{'Burger': burgerlist[52], 'Layers': layerslist[52], 'Ingredients': ingredientslist[52], 'Cheese': cheeselist[52]}
          ,{'Burger': burgerlist[53], 'Layers': layerslist[53], 'Ingredients': ingredientslist[53], 'Cheese': cheeselist[53]}
          ,{'Burger': burgerlist[54], 'Layers': layerslist[54], 'Ingredients': ingredientslist[54], 'Cheese': cheeselist[54]}
          ,{'Burger': burgerlist[55], 'Layers': layerslist[55], 'Ingredients': ingredientslist[55], 'Cheese': cheeselist[55]}
          ,{'Burger': burgerlist[56], 'Layers': layerslist[56], 'Ingredients': ingredientslist[56], 'Cheese': cheeselist[56]}]



# Sort by number of layers
for i in dburger:
    if (i['Layers'] == 'Quadruple'):
        quadrupleburgerslayerindex.append(dburger.index(i))
    elif i['Layers'] == 'Triple':
        tripleburgerslayerindex.append(dburger.index(i))
    elif i['Layers'] == 'Double':
        doubleburgerslayerindex.append(dburger.index(i))
    else:
        singleburgerslayerindex.append(dburger.index(i))

# Get the main ingredients for each burger per layer
for i in quadrupleburgerslayerindex:
    print(dburger[i]['Burger'] + " : " + dburger[i]['Ingredients'] + " : " + dburger[i]['Cheese'])

for i in tripleburgerslayerindex:
    print(dburger[i]['Burger'] + " : " + dburger[i]['Ingredients'] + " : " + dburger[i]['Cheese'])

for i in doubleburgerslayerindex:
    print(dburger[i]['Burger'] + " : " + dburger[i]['Ingredients'] + " : " + dburger[i]['Cheese'])

for i in singleburgerslayerindex:
    print(dburger[i]['Burger'] + " : " + dburger[i]['Ingredients'] + " : " + dburger[i]['Cheese'])



### DEFUNCT
# Sort the list
#dburger=sorted(dburger, key=lambda i: (i['Layers'], i['Ingredients']),reverse=True)

#    for i in range(len(burgerlist)):
#        testd = [{'burger': burgerlist[i], 'layers' : layerslist[i]}]
