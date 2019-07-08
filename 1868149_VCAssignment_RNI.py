import csv
import statistics

# DECLARE LISTS AND PRELOADED DATA
# CAL, SALT, SUGAR, FAT, SAT FAT

# CALORIES (DAILY FOOD ENERGY) - REFERENCED FROM https://www.nutrition.org.uk/attachments/article/234/Nutrition%20Requirements_Revised%20Oct%202016.pdf
# SALT - FLAT RATE 6g FOR ADULTS, 5g for CHILDREN
# TOTAL SUGARS - NOT MORE THAN 5% OF ENERGY (CALORIES) PER DAY
# https://www.nhs.uk/live-well/eat-well/how-does-sugar-in-our-diet-affect-our-health/
# TOTAL FAT - NOT MORE THAN 35% OF DAILY FOOD ENERGY
# https://www.nutrition.org.uk/attachments/article/234/Nutrition%20Requirements_Revised%20Oct%202016.pdf
# SATURATED FAT - NOT MORE THAN 30G FOR MAN 19-64, NOT MORE THAN 20G FOR WOMAN  19-64 OR 10% OF DAILY ENERGY
# https://www.gov.uk/government/news/sacn-publishes-consultation-on-saturated-fats-and-health

# PROTEIN AND CARBOHYDRATES - 4 CALORIES PER GRAM
# FAT - 9 CALORIES PER GRAM
# BASED ON UK DIETARY REQUIREMENTS

# Get average of a list 
def Average(l): 
    return sum(l) / len(l)

# DECLARE LISTS
male1118 = [2127,2247,2414,2620,2820,2964,3083,3155]
malestd1114 = [2127,2247,2414,2620]
malestd1518 = [2820,2964,3083,3155]
malestd1964 = [2772,2749,2629,2581,2581]

male1924 = [2772,6]
male2534 = [2749,6]
male3544 = [2629,6]
male4554 = [2581,6]
male5564 = [2581,6]
datamale1114 = ["Male", "11-14"]
datamale1518 = ["Male", "15-18"]
datamale1964 = ["Male", "19-64"]

female1118 = [2032,2103,2223,2342,2390,2414,2462,2462]
femalestd1114 = [2032,2103,2223,2342]
femalestd1518 = [2390,2414,2462,2462]
femalestd1964 = [2175,2175,2103,2103,2079]

female1924 = [2175,6]
female2534 = [2175,6]
female3544 = [2103,6]
female4554 = [2103,6]
female5564 = [2079,6]
datafemale1114 = ["Female", "11-14"]
datafemale1518 = ["Female", "15-18"]
datafemale1964 = ["Female", "19-64"]

# CALCULATE FOR FEMALE 11 - 14
totalsugarfemalelist1114 = []
totalfatfemalelist1114 = []
totalsatfatfemalelist1114 = []

# GET THE AVERAGE CALORIES FOR FEMALES 11-14
averagecalfemale1114 = sum(female1118[0:4])/4

# CALCULATE THE TOTAL SUGAR, FAT AND SAT FAT FROM INDIVIDUAL CALORIES FOR EACH AGE
for i in range(0,4):
    totalsugarfemale1114 = 0.05 * (female1118[i]) 
    totalsugarfemale1114 = (round(totalsugarfemale1114,1)) / 4
    totalsugarfemalelist1114.append(totalsugarfemale1114)

    totalfatfemale1114 = (0.35 * female1118[i]) / 9
    totalfatfemale1114 = (round(totalfatfemale1114,1))
    totalfatfemalelist1114.append(totalfatfemale1114)

# GET THE AVERAGE OF THE AGES BETWEEN 11 AND 14 
datasugarfemale1114 = Average(totalsugarfemalelist1114)
datafatfemale1114 = Average(totalfatfemalelist1114)

datasatfatfemale1114 = (round(averagecalfemale1114,1) * 0.10) / 9

datafemale1114.append(round(averagecalfemale1114,1))
datafemale1114.append(6)
datafemale1114.append(round(datasugarfemale1114,1))
datafemale1114.append(round(datafatfemale1114,1))
datafemale1114.append(round(datasatfatfemale1114,1))

print(datafemale1114)

# CALCULATE FOR FEMALE 15-18
totalsugarfemalelist1518 = []
totalfatfemalelist1518 = []
totalsatfatfemalelist1518 = []

averagecalfemale1518 = sum(female1118[4:8])/4

for i in range(4,8):
    totalsugarfemale1518 = 0.05 * (female1118[i]) 
    totalsugarfemale1518 = (round(totalsugarfemale1518,1)) / 4
    totalsugarfemalelist1518.append(totalsugarfemale1518)

    totalfatfemale1518 = (0.35 * female1118[i]) / 9
    totalfatfemale1518 = (round(totalfatfemale1518,1))
    totalfatfemalelist1518.append(totalfatfemale1518)

# GET THE AVERAGE OF THE AGES BETWEEN 15 AND 18
datasugarfemale1518 = Average(totalsugarfemalelist1518)
datafatfemale1518 = Average(totalfatfemalelist1518)

datasatfatfemale1518 = (round(averagecalfemale1518,1) * 0.10) / 9

datafemale1518.append(round(averagecalfemale1518,1))
datafemale1518.append(6)
datafemale1518.append(round(datasugarfemale1518,1))
datafemale1518.append(round(datafatfemale1518,1))
datafemale1518.append(round(datasatfatfemale1518,1))

print(datafemale1518)

# CALCULATE FOR FEMALE 19 - 24
totalsugarfemale1924 = (0.05 * female1924[0]) / 4

totalfatfemale1924 = (0.35 * female1924[0]) / 9
totalfatfemale1924 = (round(totalfatfemale1924,1))

totalsatfatfemale1924 = (0.10 * female1924[0]) / 9

female1924.append(round(totalsugarfemale1924,1))
female1924.append(round(totalfatfemale1924,1))
female1924.append(round(totalsatfatfemale1924,1))

# CALCULATE FOR FEMALE 25 - 34
totalsugarfemale2534 = (0.05 * female2534[0]) /4
totalsugarfemale2534 = (round(totalsugarfemale2534,1))

totalfatfemale2534 = (0.35 * female2534[0]) / 9
totalfatfemale2534 = (round(totalfatfemale2534,1))

totalsatfatfemale2534 = (0.10 * female2534[0]) / 9

female2534.append(totalsugarfemale2534)
female2534.append(totalfatfemale2534)
female2534.append(totalsatfatfemale2534)

# CALCULATE FOR FEMALE 35 - 44
totalsugarfemale3544 = (0.05 * female3544[0]) / 4
totalsugarfemale3544 = (round(totalsugarfemale3544,1))

totalfatfemale3544 = (0.35 * female3544[0]) / 9
totalfatfemale3544= (round(totalfatfemale3544,1))

totalsatfatfemale3544 = (0.10 * female3544[0]) / 9

female3544.append(totalsugarfemale3544)
female3544.append(totalfatfemale3544)
female3544.append(totalsatfatfemale3544)

# CALCULATE FOR FEMALE 45 - 54
totalsugarfemale4554 = (0.05 * female4554[0]) / 4
totalsugarfemale4554 = (round(totalsugarfemale4554,1))

totalfatfemale4554 = (0.35 * female4554[0]) / 9
totalfatfemale4554 = (round(totalfatfemale4554,1))

totalsatfatfemale4554 = (0.10 * female4554[0]) / 9

female4554.append(totalsugarfemale4554)
female4554.append(totalfatfemale4554)
female4554.append(totalsatfatfemale4554)

# CALCULATE FOR FEMALE 55 - 64
totalsugarfemale5564 = (0.05 * female5564[0]) / 4
totalsugarfemale5564 = (round(totalsugarfemale4554,1))

totalfatfemale5564 =  (0.35 * female5564[0]) / 9
totalfatfemale5564 = (round(totalfatfemale5564,1))

totalsatfatfemale5564 = (0.10 * female5564[0]) / 9

female5564.append(totalsugarfemale5564)
female5564.append(totalfatfemale5564)
female5564.append(totalsatfatfemale5564)

female1964cal = [female1924[0],female2534[0],female3544[0],female4554[0], female5564[0]]
female1964salt = [female1924[1],female2534[1],female3544[1],female4554[1], female5564[1]]
female1964sugar = [female1924[2],female2534[2],female3544[2],female4554[2], female5564[2]]
female1964fat = [female1924[3],female2534[3],female3544[3],female4554[3], female5564[3]]
female1964satfat = [female1924[4],female2534[4],female3544[4],female4554[4], female5564[4]]

datafemale1964.append(round(Average(female1964cal),1))
datafemale1964.append(round(Average(female1964salt),1))
datafemale1964.append(round(Average(female1964sugar),1))
datafemale1964.append(round(Average(female1964fat),1))
datafemale1964.append(round(Average(female1964satfat),1))

print(datafemale1964)

# CALCULATE FOR MALE 11 - 14
totalsugarmalelist1114 = []
totalfatmalelist1114 = []
totalsatfatmalelist1114 = []

# GET THE AVERAGE CALORIES FOR MALES 11-14
averagecalmale1114 = sum(male1118[0:4])/4

# CALCULATE THE TOTAL SUGAR, FAT AND SAT FAT FROM INDIVIDUAL CALORIES FOR EACH AGE
for i in range(0,4):
    totalsugarmale1114 = (0.05 * (male1118[i])) / 4
    totalsugarmale1114 = (round(totalsugarmale1114,1))
    totalsugarmalelist1114.append(totalsugarmale1114)

    totalfatmale1114 = (0.35 * male1118[i]) / 9
    totalfatmale1114 = (round(totalfatmale1114,1))
    totalfatmalelist1114.append(totalfatmale1114)
    

# GET THE AVERAGE OF THE AGES BETWEEN 11 AND 14 
datasugarmale1114 = Average(totalsugarmalelist1114)
datafatmale1114 = Average(totalfatmalelist1114)

datasatfatmale1114 = (round(averagecalmale1114,1) * 0.10) / 9

datamale1114.append(round(averagecalmale1114,1))
datamale1114.append(6)
datamale1114.append(round(datasugarmale1114,1))
datamale1114.append(round(datafatmale1114,1))
datamale1114.append(round(datasatfatmale1114,1))

print(datamale1114)

# CALCULATE FOR MALE 15-18
totalsugarmalelist1518 = []
totalfatmalelist1518 = []
totalsatfatmalelist1518 = []

averagecalmale1518 = sum(male1118[4:8])/4

for i in range(4,8):
    totalsugarmale1518 = (0.05 * (male1118[i])) / 4
    totalsugarmale1518 = (round(totalsugarmale1518,1))
    totalsugarmalelist1518.append(totalsugarmale1518)

    totalfatmale1518 = (0.35 * male1118[i]) / 9
    totalfatmale1518 = (round(totalfatmale1518,1))
    totalfatmalelist1518.append(totalfatmale1518)


datasugarmale1518 = Average(totalsugarmalelist1518)
datafatmale1518 = Average(totalfatmalelist1518)

datasatfatmale1518 = (round(averagecalmale1518,1) * 0.10) / 9

datamale1518.append(round(averagecalmale1518,1))
datamale1518.append(6)
datamale1518.append(round(datasugarmale1518,1))
datamale1518.append(round(datafatmale1518,1))
datamale1518.append(round(datasatfatmale1518,1))

print(datamale1518)
    
# CALCULATE FOR MALE 19 - 24
totalsugarmale1924 = (0.05 * male1924[0]) / 4

totalfatmale1924 = (0.35 * male1924[0]) / 9
totalfatmale1924 = (round(totalfatmale1924,1))

totalsatfatmale1924 = (0.10 * male1924[0]) / 9


male1924.append(round(totalsugarmale1924,1))
male1924.append(round(totalfatmale1924,1))
male1924.append(round(totalsatfatmale1924,1))

# CALCULATE FOR MALE 25 - 34
totalsugarmale2534 = (0.05 * male2534[0]) / 4
totalsugarmale2534 = (round(totalsugarmale2534,1))

totalfatmale2534 = (0.35 * male2534[0]) / 9
totalfatmale2534 = (round(totalfatmale2534,1))

totalsatfatmale2534 = (0.10 * male2534[0]) / 9

male2534.append(totalsugarmale2534)
male2534.append(totalfatmale2534)
male2534.append(totalsatfatmale2534)

# CALCULATE FOR MALE 35 - 44
totalsugarmale3544 = (0.05 * male3544[0] ) / 4
totalsugarmale3544 = (round(totalsugarmale3544,1))

totalfatmale3544 = (0.35 * male3544[0]) / 9
totalfatmale3544= (round(totalfatmale3544,1))

totalsatfatmale3544 = (0.10 * male3544[0]) / 9

male3544.append(totalsugarmale3544)
male3544.append(totalfatmale3544)
male3544.append(totalsatfatmale3544)

# CALCULATE FOR MALE 45 - 54
totalsugarmale4554 = (0.05 * male4554[0]) / 4
totalsugarmale4554 = (round(totalsugarmale4554,1))

totalfatmale4554 = (0.35 * male4554[0]) / 9
totalfatmale4554 = (round(totalfatmale4554,1))

totalsatfatmale4554 = (0.10 * male4554[0]) / 9

male4554.append(totalsugarmale4554)
male4554.append(totalfatmale4554)
male4554.append(totalsatfatmale4554)

# CALCULATE FOR MALE 55 - 64
totalsugarmale5564 = (0.05 * male5564[0]) /4
totalsugarmale5564 = (round(totalsugarmale4554,1))

totalfatmale5564 =  (0.35 * male5564[0]) / 9
totalfatmale5564 = (round(totalfatmale5564,1))

totalsatfatmale5564 = (0.10 * male5564[0]) / 9

male5564.append(totalsugarmale5564)
male5564.append(totalfatmale5564)
male5564.append(totalsatfatmale5564)

male1964cal = [male1924[0],male2534[0],male3544[0],male4554[0], male5564[0]]
male1964salt = [male1924[1],male2534[1],male3544[1],male4554[1], male5564[1]]
male1964sugar = [male1924[2],male2534[2],male3544[2],male4554[2], male5564[2]]
male1964fat = [male1924[3],male2534[3],male3544[3],male4554[3], male5564[3]]
male1964satfat = [male1924[4],male2534[4],male3544[4],male4554[4], male5564[4]]

datamale1964.append(round(Average(male1964cal),1))
datamale1964.append(round(Average(male1964salt),1))
datamale1964.append(round(Average(male1964sugar),1))
datamale1964.append(round(Average(male1964fat),1))
datamale1964.append(round(Average(male1964satfat),1))

print(datamale1964)


header = ['Gender','Age Band','Calories','Salt','Sugar', 'Fat', 'Saturated Fat', "Calories Standard Deviation"]


datamale1114.append(round(statistics.stdev(malestd1114)))
datamale1518.append(round(statistics.stdev(malestd1518)))
datamale1964.append(round(statistics.stdev(malestd1964)))

datafemale1114.append(round(statistics.stdev(femalestd1114)))
datafemale1518.append(round(statistics.stdev(femalestd1518)))
datafemale1964.append(round(statistics.stdev(femalestd1964)))

with open('1868149rni.csv', 'w', encoding="utf-8", newline='') as writeFile:
    writer = csv.writer(writeFile)
    writer.writerow(header)
    writer.writerow(datafemale1114)
    writer.writerow(datafemale1518)
    writer.writerow(datafemale1964)
    writer.writerow(datamale1114)
    writer.writerow(datamale1518)
    writer.writerow(datamale1964)
    

writeFile.close()




# DEFUNCT CODE

#averagefemale = [2000,6]
#childrenmale710 = []

# CALCULATE FOR AVERAGE FEMALE
# SUGAR
#totalsugarsavgfemale = 0.05 * averagefemale[0]

# FAT
#totalfatavgfemale = (0.35 * 2000) / 9
#totalfatavgfemale = (round(totalfatavgfemale,1))

#averagefemale.append(totalsugarsavgfemale)
#averagefemale.append(totalfatavgfemale)
#averagefemale.append(20)


# childrenmale710 = []
# CALCULATE FOR CHILDREN 7 - 10 (MALE)
#totalcalavgchildren = ((1649+1745+1840+2032)/4)
#totalfatavgchildren = (0.35 * totalcalavgchildren) / 9
#totalfatavgchildren = (round(totalfatavgchildren,1))
#totalsatfatavgchildren = 0.11 * totalfatavgchildren
#totalsatfatavgchildren = (round(totalsatfatavgchildren,1))
#totalsugaravgchildren = (0.11 * totalcalavgchildren) / 4
#totalsugaravgchildren = (round(totalsugaravgchildren,1))
#childrenmale710.append(totalcalavgchildren)
#childrenmale710.append(5)
#childrenmale710.append(totalsugaravgchildren)
#childrenmale710.append(totalfatavgchildren)
#childrenmale710.append(totalsatfatavgchildren)
#print(childrenmale710)

