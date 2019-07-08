# WEB SCRAPING FOR THE NAMES OF BURGERS AVAILABLE ON KFC, MCDONALDS AND BURGER KING
# THIS CODE MAY NOT EXTRACT THE CORRECT INFORMATION AS THE MENU OF EACH FAST FOOD RESTAURANT IS ALWAYS CHANGING
# ALL WEBSITES PROVIDED ARE BASED ON THE RESTAURANTS IN THE UK

# LAST UPDATED: 4/5/2019

import requests
import csv
import sqlite3
from bs4 import BeautifulSoup
from itertools import zip_longest

# DECLARE EMPTY LISTS
kfcburgerlist = []
kfclabel = []
mcdburgerlist = []
mcdlabel = []
bkburgerlist = []
bkburgerlist2 = []
bkburgerlist3 = []
bklabel = []
allburgerslist = []
allburgerlabels = []

# DECLARE PRE-LOADED DATA
calorieslist = [475, 620, 450, 595, 290, 685, 585, 780, 780, 654, 667,698,681, 647, 698, 782, 635, 508, 518, 445, 495, 301, 250, 529, 484, 519, 388, 319, 329, 380, 652, 540, 930, 1130, 870, 1040, 740, 1010, 620, 540, 440, 300, 470, 260, 320, 300, 250, 830, 500, 700, 720, 440, 390, 430, 660, 330]
saltlist = [2.02, 3.39, 1.97, 3.22, 1.35, 4.07, 3.51, 4.29,3.5, 2.4, 2.8, 3.3,3.9, 3.1,2.4, 2.4, 2.7, 2.3, 2.5, 2.4, 2.7, 1.6, 1.2, 1.8, 1.6, 1.8, 1.4, 1.1, 1.3, 1.5, 1.0, 2.5, 3.28, 3.90, 2.3, 4.97, 3.18, 4.78, 3.25, 2.08, 2.45, 1.8, 2.25, 1.23, 1.35, 1.43, 0.85, 4.95, 2.65, 4.8, 4.47, 3.2, 1.8, 2.08, 3.58, 1.68]
sugarlist = [5.5, 10.2, 5.4, 8.9, 3.2, 9.4, 9.6, 12.0, 11.0, 13.0, 12.0, 12.0, 14.0, 6.8, 10.0, 14.0, 12.0, 9.0, 10.0, 8.1, 8.1, 7.3, 6.6, 4.5, 8.4, 4.5, 7.1, 4.6, 5.4, 7.8, 16.0, 12.0, 10.0, 17.0, 12.0, 14.0, 18.0, 13.0, 12.0, 9.0, 7.0, 7.0, 5.0, 6.0, 7.0, 7.0, 6.0, 13.0, 7.0, 9.0, 9.0, 7.0, 5.0, 7.0, 14.0, 7.0]
fatlist = [19.3, 28.0, 18.8, 27.6, 10.7, 33.4, 26.4, 37.7, 46.0, 34.0, 35.0, 38.0, 34.0, 32.0, 37.0, 44.0, 32.0, 25.0, 27.0, 23.0, 27.0, 12.0, 8.3, 21.0, 14.0, 20.0, 16.0, 13.0, 13.0, 14.0, 32.0, 22.0, 52.0, 74.0, 50.0, 59.0, 36.0, 60.0, 33.0, 24.0, 22.0, 13.0, 25.0, 9.0, 16.0, 12.0, 9.0, 43.0, 20.0, 34.0, 42.0, 16.0, 21.0, 20.0, 31.0, 12.0]
satfatlist = [2.3, 4.6, 2.1, 4.5, 1.4, 6.2, 5.8, 7.3, 17.0, 15.0, 16.0, 18.0, 7.7,7.1,16.0, 17.0, 14.0, 9.5, 13.0, 12.0, 13.0, 6.0, 3.3, 2.5, 1.6, 2.1, 1.8, 1.6, 2.6, 1.4, 14.0, 8.0, 24.0, 27.0, 16.0, 26.0, 16.0, 23.0, 11.0, 9.0, 10.0, 5.0, 11.0, 3.5, 3.5, 5.0, 3.5, 9.0, 2.5, 9.0, 9.0, 3.0, 4.5, 3.0, 6.0, 2.5]
layerlist = ["Single","Double","Single","Double","Single","Triple","Double","Double","Triple","Triple","Triple","Triple","Single","Double","Double","Double","Single","Double","Single","Double","Triple","Single","Single","Single","Single","Single","Single","Single","Single","Single","Double","Single","Triple","Quadruple","Double","Triple","Double","Double","Double","Triple","Double","Single","Triple","Single","Single","Single","Single","Triple","Single","Double","Double","Single","Single","Single","Double","Single"]
mainingreidentslist = ["Chicken", "Chicken, Bacon", "Chicken", "Chicken, Bacon", "Chicken","Chicken, Vegetable, Bacon","Chicken, Bacon","Chicken, Chicken","Bacon, Beef, Beef","Bacon, Beef, Beef","Bacon, Beef, Beef","Bacon, Beef, Beef","Chicken","Bacon, Chicken","Beef, Bacon","Beef, Bacon","Beef","Beef, Beef","Beef","Beef, Beef","Bacon, Beef, Beef","Beef","Beef","Chicken","Chicken","Chicken","Chicken","Chicken","Fish","Vegetable","Beef, Bacon","Beef","Bacon, Beef, Beef","Bacon, Beef, Beef, Vegetable","Beef, Beef","Bacon, Beef, Beef","Beef, Bacon","Beef, Beef","Beef, Beef","Beef, Beef, Vegetable","Beef, Beef","Beef","Bacon, Beef, Beef","Beef","Beef","Beef","Beef","Bacon, Chicken, Vegetable","Chicken","Bacon, Chicken","Bacon, Chicken","Chicken","Chicken","Fish","Vegetable, Vegetable","Vegetable"]
cheeselist = ["No","Yes","No","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","No","No","No","No","No","No","Yes","No","Yes","No","Yes","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","No","No","Yes","No","Yes","No","Yes","Yes","No","No","No","Yes","No"]

# SCRAPE INFORMATION FROM KFC AND APPEND THE NAMES OF THE BURGER INTO THE RESPECTIVE LIST
result1 = requests.get("https://www.kfc.co.uk/our-food/for-one/burgers")
srckfc = result1.content
soupkfc = BeautifulSoup(srckfc, 'lxml')
kfc = soupkfc.find_all("span", {"class": "block-product__product-title"})
for burger in kfc:
        kfcburgerlist.append(burger.get_text())

kfcburgerlist = kfcburgerlist[4:12]
print(kfcburgerlist)

for i in range(len(kfcburgerlist)):
    kfclabel.append('KFC')

# SCRAPE INFORMATION FROM MCDONALDS AND APPEND THE NAMES OF THE BURGER INTO THE RESPECTIVE LIST
result2 = requests.get("https://www.mcdonalds.com/gb/en-gb/menu/burgers.html")
srcmcd = result2.content
soupmcd = BeautifulSoup(srcmcd, 'lxml')
mcd = soupmcd.find_all("h4", {"class": "making-iconic-header"})
for burger in mcd:
        mcdburgerlist.append(burger.get_text())

for i in range(len(mcdburgerlist)):
    mcdlabel.append('McDonalds')

# SCRAPE INFORMATION FROM BURGER KING AND APPEND THE NAMES OF THE BURGER INTO THE RESPECTIVE LIST
result3 = requests.get("https://www.burgerking.co.uk/menu/flame-grilled-burgers")
srcbk = result3.content
soupbk = BeautifulSoup(srcbk, 'lxml')
bk = soupbk.find_all("span")
for burger in bk:
        bkburgerlist.append(burger.get_text())

bkburgerlist = bkburgerlist[18::]

result4 = requests.get("https://www.burgerking.co.uk/menu/crispy-tender-chicken")
srcbk2 = result4.content
soupbk2 = BeautifulSoup(srcbk2, 'lxml')
bk2 = soupbk2.find_all("span")
for burger in bk2:
        bkburgerlist2.append(burger.get_text())

bkburgerlist2 = bkburgerlist2[18:24]

result5 = requests.get("https://www.burgerking.co.uk/menu/veggie-fish-salad")
srcbk3 = result5.content
soupbk3 = BeautifulSoup(srcbk3, 'lxml')
bk3 = soupbk3.find_all("span")
for burger in bk3:
        bkburgerlist3.append(burger.get_text())

bkburgerlist3 = bkburgerlist3[18:21]

bkburgerlist = bkburgerlist+bkburgerlist2+bkburgerlist3

for i in range(len(bkburgerlist)):
    bklabel.append('Burger King')

# APPEND ALL THE BURTGERS AND THEIR RESPECTIVE RESTAURANTS
allburgerlist = kfcburgerlist+mcdburgerlist+bkburgerlist
allburgerlabels = kfclabel+mcdlabel+bklabel

print(allburgerlist)




# SAVE DATA IN .CSV FORMAT
d = [allburgerlist, allburgerlabels, calorieslist, saltlist, sugarlist, fatlist, satfatlist,layerlist, mainingreidentslist, cheeselist]
export_data = zip_longest(*d, fillvalue = '')
with open('1868149dataset.csv', 'w', encoding="utf-8", newline='') as myfile:
      wr = csv.writer(myfile)
      wr.writerow(("Burgers", "Restaurant","Calories","Salt","Sugar","Fat","Saturated Fat","Layers","Main Ingredients","Cheese"))
      wr.writerows(export_data)
myfile.close()


## CHECKING
print(allburgerlist[5], calorieslist[5], saltlist[5], sugarlist[5], fatlist[5], satfatlist[5])
print(allburgerlist[13], calorieslist[13], saltlist[13], sugarlist[13], fatlist[13], satfatlist[13])
print(allburgerlist[21], calorieslist[21], saltlist[21], sugarlist[21], fatlist[21], satfatlist[21])
print(allburgerlist[36], calorieslist[36], saltlist[36], sugarlist[36], fatlist[36], satfatlist[36])
print(allburgerlist[42], calorieslist[42], saltlist[42], sugarlist[42], fatlist[42], satfatlist[42])
## CHECKING

## GET THE TOP 3 BURGERS HIGHEST IN CALORIES AND THEIR INDEX ##
top3cal = sorted(calorieslist, reverse=True)[:3]
print(top3cal)
print('calories')
top3calindex = []
top3calindex.append(calorieslist.index(top3cal[0]))
top3calindex.append(calorieslist.index(top3cal[1]))
top3calindex.append(calorieslist.index(top3cal[2]))

print(top3calindex)
print('caloriesindex')

top3calburgername = []
top3calburgername.append(allburgerlist[top3calindex[0]])
top3calburgername.append(allburgerlist[top3calindex[1]])
top3calburgername.append(allburgerlist[top3calindex[2]])

print(top3calburgername)

## GET THE TOP 3 BURGERS HIGHEST IN SALT AND THEIR INDEX ##
top3salt = sorted(saltlist, reverse=True)[:3]
print(top3salt)
print('salt')

top3saltindex = []
top3saltindex.append(saltlist.index(top3salt[0]))
top3saltindex.append(saltlist.index(top3salt[1]))
top3saltindex.append(saltlist.index(top3salt[2]))

print(top3saltindex)
print('saltindex')

top3saltburgername = []
top3saltburgername.append(allburgerlist[top3saltindex[0]])
top3saltburgername.append(allburgerlist[top3saltindex[1]])
top3saltburgername.append(allburgerlist[top3saltindex[2]])

print(top3saltburgername)

## GET THE TOP 3 BURGERS HIGHEST IN SUGAR AND THEIR INDEX ##
top3sugar = sorted(sugarlist, reverse=True)[:3]
print(top3sugar)
print('sugar')

top3sugarindex = []
top3sugarindex.append(sugarlist.index(top3sugar[0]))
top3sugarindex.append(sugarlist.index(top3sugar[1]))
top3sugarindex.append(sugarlist.index(top3sugar[2]))

print(top3sugarindex)
print('sugarindex')

top3sugarburgername = []
top3sugarburgername.append(allburgerlist[top3sugarindex[0]])
top3sugarburgername.append(allburgerlist[top3sugarindex[1]])
top3sugarburgername.append(allburgerlist[top3sugarindex[2]])

print(top3sugarburgername)

## GET THE TOP 3 BURGERS HIGHEST IN FAT AND THEIR INDEX ##
top3fat = sorted(fatlist, reverse=True)[:3]
print(top3fat)
print('fat')

top3fatindex = []
top3fatindex.append(fatlist.index(top3fat[0]))
top3fatindex.append(fatlist.index(top3fat[1]))
top3fatindex.append(fatlist.index(top3fat[2]))

print(top3fatindex)
print('fatindex')

top3fatburgername = []
top3fatburgername.append(allburgerlist[top3fatindex[0]])
top3fatburgername.append(allburgerlist[top3fatindex[1]])
top3fatburgername.append(allburgerlist[top3fatindex[2]])

print(top3fatburgername)

## GET THE TOP 3 BURGERS HIGHEST IN SATURATED FAT AND THEIR INDEX ##
top3satfat = sorted(satfatlist, reverse=True)[:3]
print(top3satfat)
print('sat fat')

top3satfatindex = []
top3satfatindex.append(satfatlist.index(top3satfat[0]))
top3satfatindex.append(satfatlist.index(top3satfat[1]))
top3satfatindex.append(satfatlist.index(top3satfat[2]))

print(top3satfatindex)
print('sat fatindex')

top3satfatburgername = []
top3satfatburgername.append(allburgerlist[top3satfatindex[0]])
top3satfatburgername.append(allburgerlist[top3satfatindex[1]])
top3satfatburgername.append(allburgerlist[top3satfatindex[2]])

print(top3satfatburgername)
