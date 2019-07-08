//PRELOADED DATA VERSION

//Declare data
var burgerlist = ["Fillet Burger - KFC","Fillet Tower Burger - KFC", "Zinger Burger - KFC","Zinger Tower Burger - KFC","Mini Fillet Burger - KFC","The Daddy Burger - KFC","Bacon and Cheese Burger - KFC","Zinger Stacker - KFC","The New York Stack - McDonalds","The Mississippi Stack - McDonalds","The South Carolina Stack - McDonalds", "The Kansas City Stack - McDonalds", "The Nashville Chicken - McDonalds", "The Alabama Chicken - McDonalds", "The Signature Collection: The Classic - McDonalds","The Signature Collection: The BBQ - McDonalds","The Signature Collection: The Spicy - McDonalds","Big Mac® - McDonalds","Quarter Pounder™ with Cheese - McDonalds","Double Cheeseburger - McDonalds","Bacon Double Cheeseburger - McDonalds","Cheeseburger - McDonalds","Hamburger - McDonalds","Chicken Legend® with Cool Mayo - McDonalds","Chicken Legend® with BBQ Sauce - McDonalds","Chicken Legend® with Hot & Spicy Mayo - McDonalds","McChicken Sandwich® - McDonalds","Mayo Chicken - McDonalds","Filet-o-Fish - McDonalds","Vegetable Deluxe - McDonalds","Smoky Black Angus - Burger King","WHOPPER Sandwich - Burger King","Bacon Double XL - Burger King","Texas BBQ King - Burger King","Double WHOPPER Sandwich - Burger King","Bacon King - Burger King","Western BBQ Bacon - Burger King","Big King XL - Burger King","Long Big King - Burger King","Long Texas BBQ - Burger King","Double Cheeseburger - Burger King","Cheeseburger - Burger King","Bacon Double Cheeseburger - Burger King","Hamburger - Burger King","WHOPPER JR.® Sandwich - Burger King","Kids Cheeseburger - Burger King","Kids Hamburger - Burger King","Texas BBQ Crispy Chicken - Burger King","Crispy Chicken - Burger King","Crispy Chicken Bacon King - Burger King","Bacon Cheese Chicken Royale - Burger King","Chicken Royale - Burger King","Chicken Sandwich - Burger King","King Fish - Burger King","Veggie Bean Burger - Burger King","Kids Veggie Burger - Burger King"]
var calorieslist = [475,620,450,595,290,685,585,780,780,654,667,698,681,647,698,782,635,508,518,445,495,301,250,529,484,519,388,319,329,380,652,540,930,1130,870,1040,740,1010,620,540,440,300,470,260,320,300,250,830,500,700,720,440,390,430,660,330]
var saltlist = [2.02,3.39,1.97,3.22,1.35,4.07,3.51,4.29,3.5,2.4,2.8,3.3,3.9,3.1,2.4,2.4,2.7,2.3,2.5,2.4,2.7,1.6,1.2,1.8,1.6,1.8,1.4,1.1,1.3,1.5,2.5,2.5,3.28,3.9,2.3,4.97,3.18,4.78,3.25,2.08,2.45,1.8,2.25,1.23,1.35,1.43,0.85,4.95,2.65,4.8,4.47,3.2,1.8,2.08,3.58,1.68]
var sugarlist = [5.5,10.2,5.4,8.9,3.2,9.4,9.6,12,6.9,11,13,12,14,6.8,10,14,12,9,10,8.1,8.1,7.3,6.6,4.5,8.4,4.5,7.1,4.6,5.4,7.8,16,12,10,17,12,14,18,13,12,9,7,7,5,6,7,7,6,13,7,9,9,7,5,7,14,7]
var fatlist = [19.3,28,18.8,27.6,10.7,33.4,26.4,37.7,46,34,35,38,34,32,37,44,32,25,27,23,27,12,8.3,21,14,20,16,13,13,14,32,22,52,74,50,59,36,60,33,24,22,13,25,9,16,12,9,43,20,34,42,16,21,20,31,12]
var satfatlist = [2.3,4.6,2.1,4.5,1.4,6.2,5.8,7.3,17,15,16,18,7.7,7.1,16,17,14,9.5,13,12,13,6,3.3,2.5,1.6,2.1,1.8,1.6,2.6,1.4,14,8,24,27,16,26,16,23,11,9,10,5,11,3.5,3.5,5,3.5,9,2.5,9,9,3,4.5,3,6,2.5]

//Define the width, height and padding for all charts
var w = 700;
var h = 600;
var padding = 60;

//Load the data for Cal-histo
var burgercalloli = []

for (i = 0; i < burgerlist.length; i++) { 
burgercalloli.push([burgerlist[i],calorieslist[i]]);
}

//Load the data for Cal-Salt
var burger1calsalt=[{src: "imgs/kfcfilletburger.png", x: saltlist[0], y : calorieslist[0]}];
var burger2calsalt=[{src: "imgs/kfcfillettowerburger.png", x: saltlist[1], y : calorieslist[1]}];
var burger3calsalt=[{src: "imgs/kfczingerburger.png", x: saltlist[2], y : calorieslist[2]}];
var burger4calsalt=[{src: "imgs/kfczingertowerburger.png", x: saltlist[3], y : calorieslist[3]}];
var burger5calsalt=[{src: "imgs/kfcminifilletburger.png", x: saltlist[4], y : calorieslist[4]}];
var burger6calsalt=[{src: "imgs/kfcthedaddyburger.png", x: saltlist[5], y : calorieslist[5]}];
var burger7calsalt=[{src: "imgs/kfcbaconandcheeseburger.png", x: saltlist[6], y : calorieslist[6]}];
var burger8calsalt=[{src: "imgs/kfczingerstacker.png", x: saltlist[7], y : calorieslist[7]}];
var burger9calsalt=[{src: "imgs/mcdnewyorkstack.png", x: saltlist[8], y : calorieslist[8]}];
var burger10calsalt=[{src: "imgs/mcdmississippistack.png", x: saltlist[9], y : calorieslist[9]}];
var burger11calsalt=[{src: "imgs/mcdsouthcarolinastack.png", x: saltlist[10], y : calorieslist[10]}];
var burger12calsalt=[{src: "imgs/mcdkansascitystack.png", x: saltlist[11], y : calorieslist[11]}];
var burger13calsalt=[{src: "imgs/mcdnashvillechicken.png", x: saltlist[12], y : calorieslist[12]}];
var burger14calsalt=[{src: "imgs/mcdalabamachicken.png", x: saltlist[13], y : calorieslist[13]}];
var burger15calsalt=[{src: "imgs/mcdsignatureclassic.png", x: saltlist[14], y : calorieslist[14]}];
var burger16calsalt=[{src: "imgs/mcdsignaturebbq.png", x: saltlist[15], y : calorieslist[15]}];
var burger17calsalt=[{src: "imgs/mcdsignaturespicy.png", x: saltlist[16], y : calorieslist[16]}];
var burger18calsalt=[{src: "imgs/mcdbigmac.png", x: saltlist[17], y : calorieslist[17]}];
var burger19calsalt=[{src: "imgs/mcdquarterpounderwithcheese.png", x: saltlist[18], y : calorieslist[18]}];
var burger20calsalt=[{src: "imgs/mcddoublecheeseburger.png", x: saltlist[19], y : calorieslist[19]}];
var burger21calsalt=[{src: "imgs/mcdbacondoublecheeseburger.png", x: saltlist[20], y : calorieslist[20]}];
var burger22calsalt=[{src: "imgs/mcdcheeseburger.png", x: saltlist[21], y : calorieslist[21]}];
var burger23calsalt=[{src: "imgs/mcdhamburger.png", x: saltlist[22], y : calorieslist[22]}];
var burger24calsalt=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: saltlist[23], y : calorieslist[23]}];
var burger25calsalt=[{src: "imgs/mcdchickenlegendbbq.png", x: saltlist[24], y : calorieslist[24]}];
var burger26calsalt=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: saltlist[25], y : calorieslist[25]}];
var burger27calsalt=[{src: "imgs/mcdmcchickensandwich.png", x: saltlist[26], y : calorieslist[26]}];
var burger28calsalt=[{src: "imgs/mcdmayochicken.png", x: saltlist[27], y : calorieslist[27]}];
var burger29calsalt=[{src: "imgs/mcdfiletofish.png", x: saltlist[28], y : calorieslist[28]}];
var burger30calsalt=[{src: "imgs/mcdvegetabledeluxe.png", x: saltlist[29], y : calorieslist[29]}];
var burger31calsalt=[{src: "imgs/bksmokyblackangus.png", x: saltlist[30], y : calorieslist[30]}];
var burger32calsalt=[{src: "imgs/bkwhoppersandwich.png", x: saltlist[31], y : calorieslist[31]}];
var burger33calsalt=[{src: "imgs/bkbacondoublexl.png", x: saltlist[32], y : calorieslist[32]}];
var burger34calsalt=[{src: "imgs/bktexasbbqking.png", x: saltlist[33], y : calorieslist[33]}];
var burger35calsalt=[{src: "imgs/bkdoublewhoppersandwich.png", x: saltlist[34], y : calorieslist[34]}];
var burger36calsalt=[{src: "imgs/bkbaconking.png", x: saltlist[35], y : calorieslist[35]}];
var burger37calsalt=[{src: "imgs/bkwesternbbqbacon.png", x: saltlist[36], y : calorieslist[36]}];
var burger38calsalt=[{src: "imgs/bkbigkingxl.png", x: saltlist[37], y : calorieslist[37]}];
var burger39calsalt=[{src: "imgs/bklongbigking.png", x: saltlist[38], y : calorieslist[38]}];
var burger40calsalt=[{src: "imgs/bklongtexasbbq.png", x: saltlist[39], y : calorieslist[39]}];
var burger41calsalt=[{src: "imgs/bkdoublecheeseburger.png", x: saltlist[40], y : calorieslist[40]}];
var burger42calsalt=[{src: "imgs/bkcheeseburger.png", x: saltlist[41], y : calorieslist[41]}];
var burger43calsalt=[{src: "imgs/bkbacondoublecheeseburger.png", x: saltlist[42], y : calorieslist[42]}];
var burger44calsalt=[{src: "imgs/bkhamburger.png", x: saltlist[43], y : calorieslist[43]}];
var burger45calsalt=[{src: "imgs/bkwhopperjrsandwich.png", x: saltlist[44], y : calorieslist[44]}];
var burger46calsalt=[{src: "imgs/bkkidscheeseburger.png", x: saltlist[45], y : calorieslist[45]}];
var burger47calsalt=[{src: "imgs/bkkidshamburger.png", x: saltlist[46], y : calorieslist[46]}];
var burger48calsalt=[{src: "imgs/bktexasbbqcrispychicken.png", x: saltlist[47], y : calorieslist[47]}];
var burger49calsalt=[{src: "imgs/bkcrispychicken.png", x: saltlist[48], y : calorieslist[48]}];
var burger50calsalt=[{src: "imgs/bkcrispychickenbaconking.png", x: saltlist[49], y : calorieslist[49]}];
var burger51calsalt=[{src: "imgs/bkbaconcheesechickenroyale.png", x: saltlist[50], y : calorieslist[50]}];
var burger52calsalt=[{src: "imgs/bkchickenroyale.png", x: saltlist[51], y : calorieslist[51]}];
var burger53calsalt=[{src: "imgs/bkchickensandwich.png", x: saltlist[52], y : calorieslist[52]}];
var burger54calsalt=[{src: "imgs/bkkingfish.png", x: saltlist[53], y : calorieslist[53]}];
var burger55calsalt=[{src: "imgs/bkveggiebeanburger.png", x: saltlist[54], y : calorieslist[54]}];
var burger56calsalt=[{src: "imgs/bkkidsveggieburger.png", x: saltlist[55], y : calorieslist[55]}];

//Load the data for Cal-Sugar
var burger1calsugar=[{src: "imgs/kfcfilletburger.png", x: sugarlist[0], y : calorieslist[0]}];
var burger2calsugar=[{src: "imgs/kfcfillettowerburger.png", x: sugarlist[1], y : calorieslist[1]}];
var burger3calsugar=[{src: "imgs/kfczingerburger.png", x: sugarlist[2], y : calorieslist[2]}];
var burger4calsugar=[{src: "imgs/kfczingertowerburger.png", x: sugarlist[3], y : calorieslist[3]}];
var burger5calsugar=[{src: "imgs/kfcminifilletburger.png", x: sugarlist[4], y : calorieslist[4]}];
var burger6calsugar=[{src: "imgs/kfcthedaddyburger.png", x: sugarlist[5], y : calorieslist[5]}];
var burger7calsugar=[{src: "imgs/kfcbaconandcheeseburger.png", x: sugarlist[6], y : calorieslist[6]}];
var burger8calsugar=[{src: "imgs/kfczingerstacker.png", x: sugarlist[7], y : calorieslist[7]}];
var burger9calsugar=[{src: "imgs/mcdnewyorkstack.png", x: sugarlist[8], y : calorieslist[8]}];
var burger10calsugar=[{src: "imgs/mcdmississippistack.png", x: sugarlist[9], y : calorieslist[9]}];
var burger11calsugar=[{src: "imgs/mcdsouthcarolinastack.png", x: sugarlist[10], y : calorieslist[10]}];
var burger12calsugar=[{src: "imgs/mcdkansascitystack.png", x: sugarlist[11], y : calorieslist[11]}];
var burger13calsugar=[{src: "imgs/mcdnashvillechicken.png", x: sugarlist[12], y : calorieslist[12]}];
var burger14calsugar=[{src: "imgs/mcdalabamachicken.png", x: sugarlist[13], y : calorieslist[13]}];
var burger15calsugar=[{src: "imgs/mcdsignatureclassic.png", x: sugarlist[14], y : calorieslist[14]}];
var burger16calsugar=[{src: "imgs/mcdsignaturebbq.png", x: sugarlist[15], y : calorieslist[15]}];
var burger17calsugar=[{src: "imgs/mcdsignaturespicy.png", x: sugarlist[16], y : calorieslist[16]}];
var burger18calsugar=[{src: "imgs/mcdbigmac.png", x: sugarlist[17], y : calorieslist[17]}];
var burger19calsugar=[{src: "imgs/mcdquarterpounderwithcheese.png", x: sugarlist[18], y : calorieslist[18]}];
var burger20calsugar=[{src: "imgs/mcddoublecheeseburger.png", x: sugarlist[19], y : calorieslist[19]}];
var burger21calsugar=[{src: "imgs/mcdbacondoublecheeseburger.png", x: sugarlist[20], y : calorieslist[20]}];
var burger22calsugar=[{src: "imgs/mcdcheeseburger.png", x: sugarlist[21], y : calorieslist[21]}];
var burger23calsugar=[{src: "imgs/mcdhamburger.png", x: sugarlist[22], y : calorieslist[22]}];
var burger24calsugar=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: sugarlist[23], y : calorieslist[23]}];
var burger25calsugar=[{src: "imgs/mcdchickenlegendbbq.png", x: sugarlist[24], y : calorieslist[24]}];
var burger26calsugar=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: sugarlist[25], y : calorieslist[25]}];
var burger27calsugar=[{src: "imgs/mcdmcchickensandwich.png", x: sugarlist[26], y : calorieslist[26]}];
var burger28calsugar=[{src: "imgs/mcdmayochicken.png", x: sugarlist[27], y : calorieslist[27]}];
var burger29calsugar=[{src: "imgs/mcdfiletofish.png", x: sugarlist[28], y : calorieslist[28]}];
var burger30calsugar=[{src: "imgs/mcdvegetabledeluxe.png", x: sugarlist[29], y : calorieslist[29]}];
var burger31calsugar=[{src: "imgs/bksmokyblackangus.png", x: sugarlist[30], y : calorieslist[30]}];
var burger32calsugar=[{src: "imgs/bkwhoppersandwich.png", x: sugarlist[31], y : calorieslist[31]}];
var burger33calsugar=[{src: "imgs/bkbacondoublexl.png", x: sugarlist[32], y : calorieslist[32]}];
var burger34calsugar=[{src: "imgs/bktexasbbqking.png", x: sugarlist[33], y : calorieslist[33]}];
var burger35calsugar=[{src: "imgs/bkdoublewhoppersandwich.png", x: sugarlist[34], y : calorieslist[34]}];
var burger36calsugar=[{src: "imgs/bkbaconking.png", x: sugarlist[35], y : calorieslist[35]}];
var burger37calsugar=[{src: "imgs/bkwesternbbqbacon.png", x: sugarlist[36], y : calorieslist[36]}];
var burger38calsugar=[{src: "imgs/bkbigkingxl.png", x: sugarlist[37], y : calorieslist[37]}];
var burger39calsugar=[{src: "imgs/bklongbigking.png", x: sugarlist[38], y : calorieslist[38]}];
var burger40calsugar=[{src: "imgs/bklongtexasbbq.png", x: sugarlist[39], y : calorieslist[39]}];
var burger41calsugar=[{src: "imgs/bkdoublecheeseburger.png", x: sugarlist[40], y : calorieslist[40]}];
var burger42calsugar=[{src: "imgs/bkcheeseburger.png", x: sugarlist[41], y : calorieslist[41]}];
var burger43calsugar=[{src: "imgs/bkbacondoublecheeseburger.png", x: sugarlist[42], y : calorieslist[42]}];
var burger44calsugar=[{src: "imgs/bkhamburger.png", x: sugarlist[43], y : calorieslist[43]}];
var burger45calsugar=[{src: "imgs/bkwhopperjrsandwich.png", x: sugarlist[44], y : calorieslist[44]}];
var burger46calsugar=[{src: "imgs/bkkidscheeseburger.png", x: sugarlist[45], y : calorieslist[45]}];
var burger47calsugar=[{src: "imgs/bkkidshamburger.png", x: sugarlist[46], y : calorieslist[46]}];
var burger48calsugar=[{src: "imgs/bktexasbbqcrispychicken.png", x: sugarlist[47], y : calorieslist[47]}];
var burger49calsugar=[{src: "imgs/bkcrispychicken.png", x: sugarlist[48], y : calorieslist[48]}];
var burger50calsugar=[{src: "imgs/bkcrispychickenbaconking.png", x: sugarlist[49], y : calorieslist[49]}];
var burger51calsugar=[{src: "imgs/bkbaconcheesechickenroyale.png", x: sugarlist[50], y : calorieslist[50]}];
var burger52calsugar=[{src: "imgs/bkchickenroyale.png", x: sugarlist[51], y : calorieslist[51]}];
var burger53calsugar=[{src: "imgs/bkchickensandwich.png", x: sugarlist[52], y : calorieslist[52]}];
var burger54calsugar=[{src: "imgs/bkkingfish.png", x: sugarlist[53], y : calorieslist[53]}];
var burger55calsugar=[{src: "imgs/bkveggiebeanburger.png", x: sugarlist[54], y : calorieslist[54]}];
var burger56calsugar=[{src: "imgs/bkkidsveggieburger.png", x: sugarlist[55], y : calorieslist[55]}];



//Load the data for Cal-Fat
var burger1calfat=[{src: "imgs/kfcfilletburger.png", x: fatlist[0], y : calorieslist[0]}];
var burger2calfat=[{src: "imgs/kfcfillettowerburger.png", x: fatlist[1], y : calorieslist[1]}];
var burger3calfat=[{src: "imgs/kfczingerburger.png", x: fatlist[2], y : calorieslist[2]}];
var burger4calfat=[{src: "imgs/kfczingertowerburger.png", x: fatlist[3], y : calorieslist[3]}];
var burger5calfat=[{src: "imgs/kfcminifilletburger.png", x: fatlist[4], y : calorieslist[4]}];
var burger6calfat=[{src: "imgs/kfcthedaddyburger.png", x: fatlist[5], y : calorieslist[5]}];
var burger7calfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: fatlist[6], y : calorieslist[6]}];
var burger8calfat=[{src: "imgs/kfczingerstacker.png", x: fatlist[7], y : calorieslist[7]}];
var burger9calfat=[{src: "imgs/mcdnewyorkstack.png", x: fatlist[8], y : calorieslist[8]}];
var burger10calfat=[{src: "imgs/mcdmississippistack.png", x: fatlist[9], y : calorieslist[9]}];
var burger11calfat=[{src: "imgs/mcdsouthcarolinastack.png", x: fatlist[10], y : calorieslist[10]}];
var burger12calfat=[{src: "imgs/mcdkansascitystack.png", x: fatlist[11], y : calorieslist[11]}];
var burger13calfat=[{src: "imgs/mcdnashvillechicken.png", x: fatlist[12], y : calorieslist[12]}];
var burger14calfat=[{src: "imgs/mcdalabamachicken.png", x: fatlist[13], y : calorieslist[13]}];
var burger15calfat=[{src: "imgs/mcdsignatureclassic.png", x: fatlist[14], y : calorieslist[14]}];
var burger16calfat=[{src: "imgs/mcdsignaturebbq.png", x: fatlist[15], y : calorieslist[15]}];
var burger17calfat=[{src: "imgs/mcdsignaturespicy.png", x: fatlist[16], y : calorieslist[16]}];
var burger18calfat=[{src: "imgs/mcdbigmac.png", x: fatlist[17], y : calorieslist[17]}];
var burger19calfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: fatlist[18], y : calorieslist[18]}];
var burger20calfat=[{src: "imgs/mcddoublecheeseburger.png", x: fatlist[19], y : calorieslist[19]}];
var burger21calfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: fatlist[20], y : calorieslist[20]}];
var burger22calfat=[{src: "imgs/mcdcheeseburger.png", x: fatlist[21], y : calorieslist[21]}];
var burger23calfat=[{src: "imgs/mcdhamburger.png", x: fatlist[22], y : calorieslist[22]}];
var burger24calfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: fatlist[23], y : calorieslist[23]}];
var burger25calfat=[{src: "imgs/mcdchickenlegendbbq.png", x: fatlist[24], y : calorieslist[24]}];
var burger26calfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: fatlist[25], y : calorieslist[25]}];
var burger27calfat=[{src: "imgs/mcdmcchickensandwich.png", x: fatlist[26], y : calorieslist[26]}];
var burger28calfat=[{src: "imgs/mcdmayochicken.png", x: fatlist[27], y : calorieslist[27]}];
var burger29calfat=[{src: "imgs/mcdfiletofish.png", x: fatlist[28], y : calorieslist[28]}];
var burger30calfat=[{src: "imgs/mcdvegetabledeluxe.png", x: fatlist[29], y : calorieslist[29]}];
var burger31calfat=[{src: "imgs/bksmokyblackangus.png", x: fatlist[30], y : calorieslist[30]}];
var burger32calfat=[{src: "imgs/bkwhoppersandwich.png", x: fatlist[31], y : calorieslist[31]}];
var burger33calfat=[{src: "imgs/bkbacondoublexl.png", x: fatlist[32], y : calorieslist[32]}];
var burger34calfat=[{src: "imgs/bktexasbbqking.png", x: fatlist[33], y : calorieslist[33]}];
var burger35calfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: fatlist[34], y : calorieslist[34]}];
var burger36calfat=[{src: "imgs/bkbaconking.png", x: fatlist[35], y : calorieslist[35]}];
var burger37calfat=[{src: "imgs/bkwesternbbqbacon.png", x: fatlist[36], y : calorieslist[36]}];
var burger38calfat=[{src: "imgs/bkbigkingxl.png", x: fatlist[37], y : calorieslist[37]}];
var burger39calfat=[{src: "imgs/bklongbigking.png", x: fatlist[38], y : calorieslist[38]}];
var burger40calfat=[{src: "imgs/bklongtexasbbq.png", x: fatlist[39], y : calorieslist[39]}];
var burger41calfat=[{src: "imgs/bkdoublecheeseburger.png", x: fatlist[40], y : calorieslist[40]}];
var burger42calfat=[{src: "imgs/bkcheeseburger.png", x: fatlist[41], y : calorieslist[41]}];
var burger43calfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: fatlist[42], y : calorieslist[42]}];
var burger44calfat=[{src: "imgs/bkhamburger.png", x: fatlist[43], y : calorieslist[43]}];
var burger45calfat=[{src: "imgs/bkwhopperjrsandwich.png", x: fatlist[44], y : calorieslist[44]}];
var burger46calfat=[{src: "imgs/bkkidscheeseburger.png", x: fatlist[45], y : calorieslist[45]}];
var burger47calfat=[{src: "imgs/bkkidshamburger.png", x: fatlist[46], y : calorieslist[46]}];
var burger48calfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: fatlist[47], y : calorieslist[47]}];
var burger49calfat=[{src: "imgs/bkcrispychicken.png", x: fatlist[48], y : calorieslist[48]}];
var burger50calfat=[{src: "imgs/bkcrispychickenbaconking.png", x: fatlist[49], y : calorieslist[49]}];
var burger51calfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: fatlist[50], y : calorieslist[50]}];
var burger52calfat=[{src: "imgs/bkchickenroyale.png", x: fatlist[51], y : calorieslist[51]}];
var burger53calfat=[{src: "imgs/bkchickensandwich.png", x: fatlist[52], y : calorieslist[52]}];
var burger54calfat=[{src: "imgs/bkkingfish.png", x: fatlist[53], y : calorieslist[53]}];
var burger55calfat=[{src: "imgs/bkveggiebeanburger.png", x: fatlist[54], y : calorieslist[54]}];
var burger56calfat=[{src: "imgs/bkkidsveggieburger.png", x: fatlist[55], y : calorieslist[55]}];


//Load the data for Cal-Saturated Fat
var burger1calsatfat=[{src: "imgs/kfcfilletburger.png", x: satfatlist[0], y : calorieslist[0]}];
var burger2calsatfat=[{src: "imgs/kfcfillettowerburger.png", x: satfatlist[1], y : calorieslist[1]}];
var burger3calsatfat=[{src: "imgs/kfczingerburger.png", x: satfatlist[2], y : calorieslist[2]}];
var burger4calsatfat=[{src: "imgs/kfczingertowerburger.png", x: satfatlist[3], y : calorieslist[3]}];
var burger5calsatfat=[{src: "imgs/kfcminifilletburger.png", x: satfatlist[4], y : calorieslist[4]}];
var burger6calsatfat=[{src: "imgs/kfcthedaddyburger.png", x: satfatlist[5], y : calorieslist[5]}];
var burger7calsatfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: satfatlist[6], y : calorieslist[6]}];
var burger8calsatfat=[{src: "imgs/kfczingerstacker.png", x: satfatlist[7], y : calorieslist[7]}];
var burger9calsatfat=[{src: "imgs/mcdnewyorkstack.png", x: satfatlist[8], y : calorieslist[8]}];
var burger10calsatfat=[{src: "imgs/mcdmississippistack.png", x: satfatlist[9], y : calorieslist[9]}];
var burger11calsatfat=[{src: "imgs/mcdsouthcarolinastack.png", x: satfatlist[10], y : calorieslist[10]}];
var burger12calsatfat=[{src: "imgs/mcdkansascitystack.png", x: satfatlist[11], y : calorieslist[11]}];
var burger13calsatfat=[{src: "imgs/mcdnashvillechicken.png", x: satfatlist[12], y : calorieslist[12]}];
var burger14calsatfat=[{src: "imgs/mcdalabamachicken.png", x: satfatlist[13], y : calorieslist[13]}];
var burger15calsatfat=[{src: "imgs/mcdsignatureclassic.png", x: satfatlist[14], y : calorieslist[14]}];
var burger16calsatfat=[{src: "imgs/mcdsignaturebbq.png", x: satfatlist[15], y : calorieslist[15]}];
var burger17calsatfat=[{src: "imgs/mcdsignaturespicy.png", x: satfatlist[16], y : calorieslist[16]}];
var burger18calsatfat=[{src: "imgs/mcdbigmac.png", x: satfatlist[17], y : calorieslist[17]}];
var burger19calsatfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: satfatlist[18], y : calorieslist[18]}];
var burger20calsatfat=[{src: "imgs/mcddoublecheeseburger.png", x: satfatlist[19], y : calorieslist[19]}];
var burger21calsatfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: satfatlist[20], y : calorieslist[20]}];
var burger22calsatfat=[{src: "imgs/mcdcheeseburger.png", x: satfatlist[21], y : calorieslist[21]}];
var burger23calsatfat=[{src: "imgs/mcdhamburger.png", x: satfatlist[22], y : calorieslist[22]}];
var burger24calsatfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: satfatlist[23], y : calorieslist[23]}];
var burger25calsatfat=[{src: "imgs/mcdchickenlegendbbq.png", x: satfatlist[24], y : calorieslist[24]}];
var burger26calsatfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: satfatlist[25], y : calorieslist[25]}];
var burger27calsatfat=[{src: "imgs/mcdmcchickensandwich.png", x: satfatlist[26], y : calorieslist[26]}];
var burger28calsatfat=[{src: "imgs/mcdmayochicken.png", x: satfatlist[27], y : calorieslist[27]}];
var burger29calsatfat=[{src: "imgs/mcdfiletofish.png", x: satfatlist[28], y : calorieslist[28]}];
var burger30calsatfat=[{src: "imgs/mcdvegetabledeluxe.png", x: satfatlist[29], y : calorieslist[29]}];
var burger31calsatfat=[{src: "imgs/bksmokyblackangus.png", x: satfatlist[30], y : calorieslist[30]}];
var burger32calsatfat=[{src: "imgs/bkwhoppersandwich.png", x: satfatlist[31], y : calorieslist[31]}];
var burger33calsatfat=[{src: "imgs/bkbacondoublexl.png", x: satfatlist[32], y : calorieslist[32]}];
var burger34calsatfat=[{src: "imgs/bktexasbbqking.png", x: satfatlist[33], y : calorieslist[33]}];
var burger35calsatfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: satfatlist[34], y : calorieslist[34]}];
var burger36calsatfat=[{src: "imgs/bkbaconking.png", x: satfatlist[35], y : calorieslist[35]}];
var burger37calsatfat=[{src: "imgs/bkwesternbbqbacon.png", x: satfatlist[36], y : calorieslist[36]}];
var burger38calsatfat=[{src: "imgs/bkbigkingxl.png", x: satfatlist[37], y : calorieslist[37]}];
var burger39calsatfat=[{src: "imgs/bklongbigking.png", x: satfatlist[38], y : calorieslist[38]}];
var burger40calsatfat=[{src: "imgs/bklongtexasbbq.png", x: satfatlist[39], y : calorieslist[39]}];
var burger41calsatfat=[{src: "imgs/bkdoublecheeseburger.png", x: satfatlist[40], y : calorieslist[40]}];
var burger42calsatfat=[{src: "imgs/bkcheeseburger.png", x: satfatlist[41], y : calorieslist[41]}];
var burger43calsatfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: satfatlist[42], y : calorieslist[42]}];
var burger44calsatfat=[{src: "imgs/bkhamburger.png", x: satfatlist[43], y : calorieslist[43]}];
var burger45calsatfat=[{src: "imgs/bkwhopperjrsandwich.png", x: satfatlist[44], y : calorieslist[44]}];
var burger46calsatfat=[{src: "imgs/bkkidscheeseburger.png", x: satfatlist[45], y : calorieslist[45]}];
var burger47calsatfat=[{src: "imgs/bkkidshamburger.png", x: satfatlist[46], y : calorieslist[46]}];
var burger48calsatfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: satfatlist[47], y : calorieslist[47]}];
var burger49calsatfat=[{src: "imgs/bkcrispychicken.png", x: satfatlist[48], y : calorieslist[48]}];
var burger50calsatfat=[{src: "imgs/bkcrispychickenbaconking.png", x: satfatlist[49], y : calorieslist[49]}];
var burger51calsatfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: satfatlist[50], y : calorieslist[50]}];
var burger52calsatfat=[{src: "imgs/bkchickenroyale.png", x: satfatlist[51], y : calorieslist[51]}];
var burger53calsatfat=[{src: "imgs/bkchickensandwich.png", x: satfatlist[52], y : calorieslist[52]}];
var burger54calsatfat=[{src: "imgs/bkkingfish.png", x: satfatlist[53], y : calorieslist[53]}];
var burger55calsatfat=[{src: "imgs/bkveggiebeanburger.png", x: satfatlist[54], y : calorieslist[54]}];
var burger56calsatfat=[{src: "imgs/bkkidsveggieburger.png", x: satfatlist[55], y : calorieslist[55]}];


//Begin Lollipop for Calories
var marginloli = {top: 90, right: 30, bottom: 200, left: 60},
    widthloli = 960 - marginloli.left - marginloli.right,
    heightloli = 500 - marginloli.top - marginloli.bottom;

var svglolical = d3.select("#loli_datavizcal")
  .append("svg")
    .attr("width", widthloli + marginloli.left + marginloli.right)
    .attr("height", heightloli + marginloli.top + marginloli.bottom)
  .append("g")
    .attr("transform",
          "translate(" + marginloli.left + "," + marginloli.top + ")");

// Add X axis 
var x = d3.scaleBand()
  .range([ 0, widthloli])
  .domain(burgerlist.map(function(d) { return d; }))
  .padding(1);
svglolical.append("g")
  .attr("transform", "translate(0," + heightloli + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 1200])
  .range([ heightloli, 0]);
svglolical.append("g")
  .call(d3.axisLeft(y));

var yAxiscalloli = d3.axisLeft().scale(y).ticks(5);		

// text label for the y axis
svglolical.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1) + " ," + 
                           (h - h/0.95 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//Lines
for (i = 0; i < 8; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#b27a7a")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#A3080C")
    .attr("stroke", "#A3080C")
}

//Lines
for (i = 8; i < 30; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#27742d")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#DA291C")
    .attr("stroke", "#DA291C")
}

//Lines
for (i = 30; i < 33; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 33; i < 34; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(calorieslist[i] + 24); })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bktexasbbqking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King [Calories: 1130 kCal]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King [Calories: 1130 kCal]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });

}

//Lines
for (i = 34; i < 35; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 35; i < 36; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(calorieslist[i] + 24); })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbaconking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King [Calories: 1040 kCal]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King [Calories: 1040 kCal]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 36; i < 37; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 37; i < 38; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(calorieslist[i] + 24); })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbigkingxl.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King [Calories: 1010 kCal]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King [Calories: 1010 kCal]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 38; i < burgerlist.length; i++) { 
svglolical.selectAll("myline")
  .data(burgercalloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolical.selectAll("mycircle")
  .data(burgercalloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(calorieslist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//Add the tooltip for all scatterplot
var tooltip = d3.selectAll(".scatterplot")
  .append("div")
  .style("position", "absolute")
  .style("font-family", "sans-serif")
  .style("font-size", "10px")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .style("border", "1px solid black")
  .style("background", "white");

//Scatterplot Axis - yScale stays the same, xScale varies
var yScalecal = d3.scaleLinear()
		.domain([0, 1200])
		.range([h - padding, padding]);

var xScalecalsalt = d3.scaleLinear()
		.domain([0, 5])
		.range([padding, w - padding * 2]);

var xScalecalsugar = d3.scaleLinear()
		.domain([0, 20])
		.range([padding, w - padding * 2]);

var xScalecalfat = d3.scaleLinear()
		.domain([0, 75])
		.range([padding, w - padding * 2]);

var xScalecalsatfat = d3.scaleLinear()
		.domain([0, 30])
		.range([padding, w - padding * 2]);

var yAxiscal = d3.axisLeft().scale(yScalecal).ticks(5);		
var xAxiscalsalt = d3.axisBottom().scale(xScalecalsalt).ticks(5);
var xAxiscalsugar = d3.axisBottom().scale(xScalecalsugar).ticks(5);
var xAxiscalfat = d3.axisBottom().scale(xScalecalfat).ticks(5);
var xAxiscalsatfat = d3.axisBottom().scale(xScalecalsatfat).ticks(5);

//Create svg element
var svgcalsalt = d3.select("#scatterplot_datavizcalsalt")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgcalsugar = d3.select("#scatterplot_datavizcalsugar")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgcalfat = d3.select("#scatterplot_datavizcalfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Create svg element
var svgcalsatfat = d3.select("#scatterplot_datavizcalsatfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Cal-Salt
//x-axis
svgcalsalt.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalsalt);
	
// text label for the x axis
svgcalsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//y-axis
svgcalsalt.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxiscal);

// text label for the y axis
svgcalsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//Cal-Sugar
//x-axis
svgcalsugar.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalsugar);
	
// text label for the x axis
svgcalsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//y-axis
svgcalsugar.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxiscal);

// text label for the y axis
svgcalsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//Cal-Fat
//x-axis
svgcalfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalfat);
	
// text label for the x axis
svgcalfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//y-axis
svgcalfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxiscal);

// text label for the y axis
svgcalfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//Cal-SatFat
//x-axis
svgcalsatfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalsatfat);
	
// text label for the x axis
svgcalsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Saturated Fat (g)");

//y-axis
svgcalsatfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxiscal);

// text label for the y axis
svgcalsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//Plot ALL the burgers
//Plot for Cal-Salt
svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger1calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger2calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger3calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger4calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger5calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger6calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger7calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger8calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger9calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger10calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger11calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger12calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger13calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger14calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger15calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger16calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger17calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger18calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger19calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger20calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger21calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger22calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger23calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger24calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger25calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger26calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger27calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger28calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger29calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger30calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger31calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger32calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger33calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger34calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger35calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger36calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger37calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger38calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger39calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger40calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger41calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger42calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger43calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger44calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger45calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger46calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger47calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger48calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger49calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger50calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger51calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger52calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger53calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger54calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger55calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsalt.append("g")
   .selectAll(".myPoint")
   .data(burger56calsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalecalsalt(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Cal-Sugar
svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger1calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger2calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger3calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger4calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger5calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger6calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger7calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger8calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger9calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger10calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger11calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger12calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger13calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger14calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger15calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger16calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger17calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger18calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger19calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger20calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger21calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger22calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger23calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger24calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger25calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger26calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger27calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger28calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger29calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger30calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger31calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger32calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger33calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger34calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger35calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger36calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger37calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger38calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger39calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger40calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger41calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger42calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger43calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger44calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger45calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger46calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger47calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger48calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger49calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger50calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger51calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger52calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger53calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger54calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger55calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsugar.append("g")
   .selectAll(".myPoint")
   .data(burger56calsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalecalsugar(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Cal-Fat
svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger1calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger2calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger3calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger4calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger5calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger6calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger7calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger8calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger9calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger10calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger11calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger12calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger13calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger14calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger15calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger16calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger17calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger18calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger19calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger20calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger21calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger22calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger23calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger24calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger25calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger26calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger27calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger28calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger29calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger30calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger31calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger32calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger33calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger34calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger35calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger36calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger37calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger38calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger39calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger40calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger41calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger42calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger43calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger44calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger45calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger46calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger47calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger48calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger49calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger50calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger51calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger52calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger53calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger54calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger55calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalfat.append("g")
   .selectAll(".myPoint")
   .data(burger56calfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalecalfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Cal-SatFat

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger1calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger2calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger3calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger4calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger5calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger6calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger7calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger8calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger9calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger10calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger11calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger12calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger13calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger14calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger15calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger16calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger17calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger18calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger19calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger20calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger21calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger22calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger23calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger24calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger25calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger26calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger27calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger28calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger29calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger30calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger31calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger32calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger33calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger34calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger35calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger36calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger37calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger38calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger39calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger40calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger41calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger42calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger43calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger44calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger45calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger46calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger47calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger48calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger49calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger50calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger51calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger52calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger53calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger54calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger55calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgcalsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger56calsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalecalsatfat(d.x);})      
   .attr("y", function(d) {return yScalecal(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Calories: " + d.y + "kCal" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


d3.selectAll("g").on("mouseover", function(){
	d3.select(this).raise()
});