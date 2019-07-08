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
var burgersatfatloli = []

for (i = 0; i < burgerlist.length; i++) { 
burgersatfatloli.push([burgerlist[i],satfatlist[i]]);
}

//Scatterplot data for SatFat-Cal
var burger1satfatcal=[{src: "imgs/kfcfilletburger.png", x: calorieslist[0], y : satfatlist[0]}];
var burger2satfatcal=[{src: "imgs/kfcfillettowerburger.png", x: calorieslist[1], y : satfatlist[1]}];
var burger3satfatcal=[{src: "imgs/kfczingerburger.png", x: calorieslist[2], y : satfatlist[2]}];
var burger4satfatcal=[{src: "imgs/kfczingertowerburger.png", x: calorieslist[3], y : satfatlist[3]}];
var burger5satfatcal=[{src: "imgs/kfcminifilletburger.png", x: calorieslist[4], y : satfatlist[4]}];
var burger6satfatcal=[{src: "imgs/kfcthedaddyburger.png", x: calorieslist[5], y : satfatlist[5]}];
var burger7satfatcal=[{src: "imgs/kfcbaconandcheeseburger.png", x: calorieslist[6], y : satfatlist[6]}];
var burger8satfatcal=[{src: "imgs/kfczingerstacker.png", x: calorieslist[7], y : satfatlist[7]}];
var burger9satfatcal=[{src: "imgs/mcdnewyorkstack.png", x: calorieslist[8], y : satfatlist[8]}];
var burger10satfatcal=[{src: "imgs/mcdmississippistack.png", x: calorieslist[9], y : satfatlist[9]}];
var burger11satfatcal=[{src: "imgs/mcdsouthcarolinastack.png", x: calorieslist[10], y : satfatlist[10]}];
var burger12satfatcal=[{src: "imgs/mcdkansascitystack.png", x: calorieslist[11], y : satfatlist[11]}];
var burger13satfatcal=[{src: "imgs/mcdnashvillechicken.png", x: calorieslist[12], y : satfatlist[12]}];
var burger14satfatcal=[{src: "imgs/mcdalabamachicken.png", x: calorieslist[13], y : satfatlist[13]}];
var burger15satfatcal=[{src: "imgs/mcdsignatureclassic.png", x: calorieslist[14], y : satfatlist[14]}];
var burger16satfatcal=[{src: "imgs/mcdsignaturebbq.png", x: calorieslist[15], y : satfatlist[15]}];
var burger17satfatcal=[{src: "imgs/mcdsignaturespicy.png", x: calorieslist[16], y : satfatlist[16]}];
var burger18satfatcal=[{src: "imgs/mcdbigmac.png", x: calorieslist[17], y : satfatlist[17]}];
var burger19satfatcal=[{src: "imgs/mcdquarterpounderwithcheese.png", x: calorieslist[18], y : satfatlist[18]}];
var burger20satfatcal=[{src: "imgs/mcddoublecheeseburger.png", x: calorieslist[19], y : satfatlist[19]}];
var burger21satfatcal=[{src: "imgs/mcdbacondoublecheeseburger.png", x: calorieslist[20], y : satfatlist[20]}];
var burger22satfatcal=[{src: "imgs/mcdcheeseburger.png", x: calorieslist[21], y : satfatlist[21]}];
var burger23satfatcal=[{src: "imgs/mcdhamburger.png", x: calorieslist[22], y : satfatlist[22]}];
var burger24satfatcal=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: calorieslist[23], y : satfatlist[23]}];
var burger25satfatcal=[{src: "imgs/mcdchickenlegendbbq.png", x: calorieslist[24], y : satfatlist[24]}];
var burger26satfatcal=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: calorieslist[25], y : satfatlist[25]}];
var burger27satfatcal=[{src: "imgs/mcdmcchickensandwich.png", x: calorieslist[26], y : satfatlist[26]}];
var burger28satfatcal=[{src: "imgs/mcdmayochicken.png", x: calorieslist[27], y : satfatlist[27]}];
var burger29satfatcal=[{src: "imgs/mcdfiletofish.png", x: calorieslist[28], y : satfatlist[28]}];
var burger30satfatcal=[{src: "imgs/mcdvegetabledeluxe.png", x: calorieslist[29], y : satfatlist[29]}];
var burger31satfatcal=[{src: "imgs/bksmokyblackangus.png", x: calorieslist[30], y : satfatlist[30]}];
var burger32satfatcal=[{src: "imgs/bkwhoppersandwich.png", x: calorieslist[31], y : satfatlist[31]}];
var burger33satfatcal=[{src: "imgs/bkbacondoublexl.png", x: calorieslist[32], y : satfatlist[32]}];
var burger34satfatcal=[{src: "imgs/bktexasbbqking.png", x: calorieslist[33], y : satfatlist[33]}];
var burger35satfatcal=[{src: "imgs/bkdoublewhoppersandwich.png", x: calorieslist[34], y : satfatlist[34]}];
var burger36satfatcal=[{src: "imgs/bkbaconking.png", x: calorieslist[35], y : satfatlist[35]}];
var burger37satfatcal=[{src: "imgs/bkwesternbbqbacon.png", x: calorieslist[36], y : satfatlist[36]}];
var burger38satfatcal=[{src: "imgs/bkbigkingxl.png", x: calorieslist[37], y : satfatlist[37]}];
var burger39satfatcal=[{src: "imgs/bklongbigking.png", x: calorieslist[38], y : satfatlist[38]}];
var burger40satfatcal=[{src: "imgs/bklongtexasbbq.png", x: calorieslist[39], y : satfatlist[39]}];
var burger41satfatcal=[{src: "imgs/bkdoublecheeseburger.png", x: calorieslist[40], y : satfatlist[40]}];
var burger42satfatcal=[{src: "imgs/bkcheeseburger.png", x: calorieslist[41], y : satfatlist[41]}];
var burger43satfatcal=[{src: "imgs/bkbacondoublecheeseburger.png", x: calorieslist[42], y : satfatlist[42]}];
var burger44satfatcal=[{src: "imgs/bkhamburger.png", x: calorieslist[43], y : satfatlist[43]}];
var burger45satfatcal=[{src: "imgs/bkwhopperjrsandwich.png", x: calorieslist[44], y : satfatlist[44]}];
var burger46satfatcal=[{src: "imgs/bkkidscheeseburger.png", x: calorieslist[45], y : satfatlist[45]}];
var burger47satfatcal=[{src: "imgs/bkkidshamburger.png", x: calorieslist[46], y : satfatlist[46]}];
var burger48satfatcal=[{src: "imgs/bktexasbbqcrispychicken.png", x: calorieslist[47], y : satfatlist[47]}];
var burger49satfatcal=[{src: "imgs/bkcrispychicken.png", x: calorieslist[48], y : satfatlist[48]}];
var burger50satfatcal=[{src: "imgs/bkcrispychickenbaconking.png", x: calorieslist[49], y : satfatlist[49]}];
var burger51satfatcal=[{src: "imgs/bkbaconcheesechickenroyale.png", x: calorieslist[50], y : satfatlist[50]}];
var burger52satfatcal=[{src: "imgs/bkchickenroyale.png", x: calorieslist[51], y : satfatlist[51]}];
var burger53satfatcal=[{src: "imgs/bkchickensandwich.png", x: calorieslist[52], y : satfatlist[52]}];
var burger54satfatcal=[{src: "imgs/bkkingfish.png", x: calorieslist[53], y : satfatlist[53]}];
var burger55satfatcal=[{src: "imgs/bkveggiebeanburger.png", x: calorieslist[54], y : satfatlist[54]}];
var burger56satfatcal=[{src: "imgs/bkkidsveggieburger.png", x: calorieslist[55], y : satfatlist[55]}];

//Scatterplot data for SatFat-Salt
var burger1satfatsalt=[{src: "imgs/kfcfilletburger.png", x: saltlist[0], y : satfatlist[0]}];
var burger2satfatsalt=[{src: "imgs/kfcfillettowerburger.png", x: saltlist[1], y : satfatlist[1]}];
var burger3satfatsalt=[{src: "imgs/kfczingerburger.png", x: saltlist[2], y : satfatlist[2]}];
var burger4satfatsalt=[{src: "imgs/kfczingertowerburger.png", x: saltlist[3], y : satfatlist[3]}];
var burger5satfatsalt=[{src: "imgs/kfcminifilletburger.png", x: saltlist[4], y : satfatlist[4]}];
var burger6satfatsalt=[{src: "imgs/kfcthedaddyburger.png", x: saltlist[5], y : satfatlist[5]}];
var burger7satfatsalt=[{src: "imgs/kfcbaconandcheeseburger.png", x: saltlist[6], y : satfatlist[6]}];
var burger8satfatsalt=[{src: "imgs/kfczingerstacker.png", x: saltlist[7], y : satfatlist[7]}];
var burger9satfatsalt=[{src: "imgs/mcdnewyorkstack.png", x: saltlist[8], y : satfatlist[8]}];
var burger10satfatsalt=[{src: "imgs/mcdmississippistack.png", x: saltlist[9], y : satfatlist[9]}];
var burger11satfatsalt=[{src: "imgs/mcdsouthcarolinastack.png", x: saltlist[10], y : satfatlist[10]}];
var burger12satfatsalt=[{src: "imgs/mcdkansascitystack.png", x: saltlist[11], y : satfatlist[11]}];
var burger13satfatsalt=[{src: "imgs/mcdnashvillechicken.png", x: saltlist[12], y : satfatlist[12]}];
var burger14satfatsalt=[{src: "imgs/mcdalabamachicken.png", x: saltlist[13], y : satfatlist[13]}];
var burger15satfatsalt=[{src: "imgs/mcdsignatureclassic.png", x: saltlist[14], y : satfatlist[14]}];
var burger16satfatsalt=[{src: "imgs/mcdsignaturebbq.png", x: saltlist[15], y : satfatlist[15]}];
var burger17satfatsalt=[{src: "imgs/mcdsignaturespicy.png", x: saltlist[16], y : satfatlist[16]}];
var burger18satfatsalt=[{src: "imgs/mcdbigmac.png", x: saltlist[17], y : satfatlist[17]}];
var burger19satfatsalt=[{src: "imgs/mcdquarterpounderwithcheese.png", x: saltlist[18], y : satfatlist[18]}];
var burger20satfatsalt=[{src: "imgs/mcddoublecheeseburger.png", x: saltlist[19], y : satfatlist[19]}];
var burger21satfatsalt=[{src: "imgs/mcdbacondoublecheeseburger.png", x: saltlist[20], y : satfatlist[20]}];
var burger22satfatsalt=[{src: "imgs/mcdcheeseburger.png", x: saltlist[21], y : satfatlist[21]}];
var burger23satfatsalt=[{src: "imgs/mcdhamburger.png", x: saltlist[22], y : satfatlist[22]}];
var burger24satfatsalt=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: saltlist[23], y : satfatlist[23]}];
var burger25satfatsalt=[{src: "imgs/mcdchickenlegendbbq.png", x: saltlist[24], y : satfatlist[24]}];
var burger26satfatsalt=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: saltlist[25], y : satfatlist[25]}];
var burger27satfatsalt=[{src: "imgs/mcdmcchickensandwich.png", x: saltlist[26], y : satfatlist[26]}];
var burger28satfatsalt=[{src: "imgs/mcdmayochicken.png", x: saltlist[27], y : satfatlist[27]}];
var burger29satfatsalt=[{src: "imgs/mcdfiletofish.png", x: saltlist[28], y : satfatlist[28]}];
var burger30satfatsalt=[{src: "imgs/mcdvegetabledeluxe.png", x: saltlist[29], y : satfatlist[29]}];
var burger31satfatsalt=[{src: "imgs/bksmokyblackangus.png", x: saltlist[30], y : satfatlist[30]}];
var burger32satfatsalt=[{src: "imgs/bkwhoppersandwich.png", x: saltlist[31], y : satfatlist[31]}];
var burger33satfatsalt=[{src: "imgs/bkbacondoublexl.png", x: saltlist[32], y : satfatlist[32]}];
var burger34satfatsalt=[{src: "imgs/bktexasbbqking.png", x: saltlist[33], y : satfatlist[33]}];
var burger35satfatsalt=[{src: "imgs/bkdoublewhoppersandwich.png", x: saltlist[34], y : satfatlist[34]}];
var burger36satfatsalt=[{src: "imgs/bkbaconking.png", x: saltlist[35], y : satfatlist[35]}];
var burger37satfatsalt=[{src: "imgs/bkwesternbbqbacon.png", x: saltlist[36], y : satfatlist[36]}];
var burger38satfatsalt=[{src: "imgs/bkbigkingxl.png", x: saltlist[37], y : satfatlist[37]}];
var burger39satfatsalt=[{src: "imgs/bklongbigking.png", x: saltlist[38], y : satfatlist[38]}];
var burger40satfatsalt=[{src: "imgs/bklongtexasbbq.png", x: saltlist[39], y : satfatlist[39]}];
var burger41satfatsalt=[{src: "imgs/bkdoublecheeseburger.png", x: saltlist[40], y : satfatlist[40]}];
var burger42satfatsalt=[{src: "imgs/bkcheeseburger.png", x: saltlist[41], y : satfatlist[41]}];
var burger43satfatsalt=[{src: "imgs/bkbacondoublecheeseburger.png", x: saltlist[42], y : satfatlist[42]}];
var burger44satfatsalt=[{src: "imgs/bkhamburger.png", x: saltlist[43], y : satfatlist[43]}];
var burger45satfatsalt=[{src: "imgs/bkwhopperjrsandwich.png", x: saltlist[44], y : satfatlist[44]}];
var burger46satfatsalt=[{src: "imgs/bkkidscheeseburger.png", x: saltlist[45], y : satfatlist[45]}];
var burger47satfatsalt=[{src: "imgs/bkkidshamburger.png", x: saltlist[46], y : satfatlist[46]}];
var burger48satfatsalt=[{src: "imgs/bktexasbbqcrispychicken.png", x: saltlist[47], y : satfatlist[47]}];
var burger49satfatsalt=[{src: "imgs/bkcrispychicken.png", x: saltlist[48], y : satfatlist[48]}];
var burger50satfatsalt=[{src: "imgs/bkcrispychickenbaconking.png", x: saltlist[49], y : satfatlist[49]}];
var burger51satfatsalt=[{src: "imgs/bkbaconcheesechickenroyale.png", x: saltlist[50], y : satfatlist[50]}];
var burger52satfatsalt=[{src: "imgs/bkchickenroyale.png", x: saltlist[51], y : satfatlist[51]}];
var burger53satfatsalt=[{src: "imgs/bkchickensandwich.png", x: saltlist[52], y : satfatlist[52]}];
var burger54satfatsalt=[{src: "imgs/bkkingfish.png", x: saltlist[53], y : satfatlist[53]}];
var burger55satfatsalt=[{src: "imgs/bkveggiebeanburger.png", x: saltlist[54], y : satfatlist[54]}];
var burger56satfatsalt=[{src: "imgs/bkkidsveggieburger.png", x: saltlist[55], y : satfatlist[55]}];

//Scatterplot data for SatFat-Sugar
var burger1satfatsugar=[{src: "imgs/kfcfilletburger.png", x: sugarlist[0], y : satfatlist[0]}];
var burger2satfatsugar=[{src: "imgs/kfcfillettowerburger.png", x: sugarlist[1], y : satfatlist[1]}];
var burger3satfatsugar=[{src: "imgs/kfczingerburger.png", x: sugarlist[2], y : satfatlist[2]}];
var burger4satfatsugar=[{src: "imgs/kfczingertowerburger.png", x: sugarlist[3], y : satfatlist[3]}];
var burger5satfatsugar=[{src: "imgs/kfcminifilletburger.png", x: sugarlist[4], y : satfatlist[4]}];
var burger6satfatsugar=[{src: "imgs/kfcthedaddyburger.png", x: sugarlist[5], y : satfatlist[5]}];
var burger7satfatsugar=[{src: "imgs/kfcbaconandcheeseburger.png", x: sugarlist[6], y : satfatlist[6]}];
var burger8satfatsugar=[{src: "imgs/kfczingerstacker.png", x: sugarlist[7], y : satfatlist[7]}];
var burger9satfatsugar=[{src: "imgs/mcdnewyorkstack.png", x: sugarlist[8], y : satfatlist[8]}];
var burger10satfatsugar=[{src: "imgs/mcdmississippistack.png", x: sugarlist[9], y : satfatlist[9]}];
var burger11satfatsugar=[{src: "imgs/mcdsouthcarolinastack.png", x: sugarlist[10], y : satfatlist[10]}];
var burger12satfatsugar=[{src: "imgs/mcdkansascitystack.png", x: sugarlist[11], y : satfatlist[11]}];
var burger13satfatsugar=[{src: "imgs/mcdnashvillechicken.png", x: sugarlist[12], y : satfatlist[12]}];
var burger14satfatsugar=[{src: "imgs/mcdalabamachicken.png", x: sugarlist[13], y : satfatlist[13]}];
var burger15satfatsugar=[{src: "imgs/mcdsignatureclassic.png", x: sugarlist[14], y : satfatlist[14]}];
var burger16satfatsugar=[{src: "imgs/mcdsignaturebbq.png", x: sugarlist[15], y : satfatlist[15]}];
var burger17satfatsugar=[{src: "imgs/mcdsignaturespicy.png", x: sugarlist[16], y : satfatlist[16]}];
var burger18satfatsugar=[{src: "imgs/mcdbigmac.png", x: sugarlist[17], y : satfatlist[17]}];
var burger19satfatsugar=[{src: "imgs/mcdquarterpounderwithcheese.png", x: sugarlist[18], y : satfatlist[18]}];
var burger20satfatsugar=[{src: "imgs/mcddoublecheeseburger.png", x: sugarlist[19], y : satfatlist[19]}];
var burger21satfatsugar=[{src: "imgs/mcdbacondoublecheeseburger.png", x: sugarlist[20], y : satfatlist[20]}];
var burger22satfatsugar=[{src: "imgs/mcdcheeseburger.png", x: sugarlist[21], y : satfatlist[21]}];
var burger23satfatsugar=[{src: "imgs/mcdhamburger.png", x: sugarlist[22], y : satfatlist[22]}];
var burger24satfatsugar=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: sugarlist[23], y : satfatlist[23]}];
var burger25satfatsugar=[{src: "imgs/mcdchickenlegendbbq.png", x: sugarlist[24], y : satfatlist[24]}];
var burger26satfatsugar=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: sugarlist[25], y : satfatlist[25]}];
var burger27satfatsugar=[{src: "imgs/mcdmcchickensandwich.png", x: sugarlist[26], y : satfatlist[26]}];
var burger28satfatsugar=[{src: "imgs/mcdmayochicken.png", x: sugarlist[27], y : satfatlist[27]}];
var burger29satfatsugar=[{src: "imgs/mcdfiletofish.png", x: sugarlist[28], y : satfatlist[28]}];
var burger30satfatsugar=[{src: "imgs/mcdvegetabledeluxe.png", x: sugarlist[29], y : satfatlist[29]}];
var burger31satfatsugar=[{src: "imgs/bksmokyblackangus.png", x: sugarlist[30], y : satfatlist[30]}];
var burger32satfatsugar=[{src: "imgs/bkwhoppersandwich.png", x: sugarlist[31], y : satfatlist[31]}];
var burger33satfatsugar=[{src: "imgs/bkbacondoublexl.png", x: sugarlist[32], y : satfatlist[32]}];
var burger34satfatsugar=[{src: "imgs/bktexasbbqking.png", x: sugarlist[33], y : satfatlist[33]}];
var burger35satfatsugar=[{src: "imgs/bkdoublewhoppersandwich.png", x: sugarlist[34], y : satfatlist[34]}];
var burger36satfatsugar=[{src: "imgs/bkbaconking.png", x: sugarlist[35], y : satfatlist[35]}];
var burger37satfatsugar=[{src: "imgs/bkwesternbbqbacon.png", x: sugarlist[36], y : satfatlist[36]}];
var burger38satfatsugar=[{src: "imgs/bkbigkingxl.png", x: sugarlist[37], y : satfatlist[37]}];
var burger39satfatsugar=[{src: "imgs/bklongbigking.png", x: sugarlist[38], y : satfatlist[38]}];
var burger40satfatsugar=[{src: "imgs/bklongtexasbbq.png", x: sugarlist[39], y : satfatlist[39]}];
var burger41satfatsugar=[{src: "imgs/bkdoublecheeseburger.png", x: sugarlist[40], y : satfatlist[40]}];
var burger42satfatsugar=[{src: "imgs/bkcheeseburger.png", x: sugarlist[41], y : satfatlist[41]}];
var burger43satfatsugar=[{src: "imgs/bkbacondoublecheeseburger.png", x: sugarlist[42], y : satfatlist[42]}];
var burger44satfatsugar=[{src: "imgs/bkhamburger.png", x: sugarlist[43], y : satfatlist[43]}];
var burger45satfatsugar=[{src: "imgs/bkwhopperjrsandwich.png", x: sugarlist[44], y : satfatlist[44]}];
var burger46satfatsugar=[{src: "imgs/bkkidscheeseburger.png", x: sugarlist[45], y : satfatlist[45]}];
var burger47satfatsugar=[{src: "imgs/bkkidshamburger.png", x: sugarlist[46], y : satfatlist[46]}];
var burger48satfatsugar=[{src: "imgs/bktexasbbqcrispychicken.png", x: sugarlist[47], y : satfatlist[47]}];
var burger49satfatsugar=[{src: "imgs/bkcrispychicken.png", x: sugarlist[48], y : satfatlist[48]}];
var burger50satfatsugar=[{src: "imgs/bkcrispychickenbaconking.png", x: sugarlist[49], y : satfatlist[49]}];
var burger51satfatsugar=[{src: "imgs/bkbaconcheesechickenroyale.png", x: sugarlist[50], y : satfatlist[50]}];
var burger52satfatsugar=[{src: "imgs/bkchickenroyale.png", x: sugarlist[51], y : satfatlist[51]}];
var burger53satfatsugar=[{src: "imgs/bkchickensandwich.png", x: sugarlist[52], y : satfatlist[52]}];
var burger54satfatsugar=[{src: "imgs/bkkingfish.png", x: sugarlist[53], y : satfatlist[53]}];
var burger55satfatsugar=[{src: "imgs/bkveggiebeanburger.png", x: sugarlist[54], y : satfatlist[54]}];
var burger56satfatsugar=[{src: "imgs/bkkidsveggieburger.png", x: sugarlist[55], y : satfatlist[55]}];

//Scatterplot data for SatFat-Fat
var burger1satfatfat=[{src: "imgs/kfcfilletburger.png", x: fatlist[0], y : satfatlist[0]}];
var burger2satfatfat=[{src: "imgs/kfcfillettowerburger.png", x: fatlist[1], y : satfatlist[1]}];
var burger3satfatfat=[{src: "imgs/kfczingerburger.png", x: fatlist[2], y : satfatlist[2]}];
var burger4satfatfat=[{src: "imgs/kfczingertowerburger.png", x: fatlist[3], y : satfatlist[3]}];
var burger5satfatfat=[{src: "imgs/kfcminifilletburger.png", x: fatlist[4], y : satfatlist[4]}];
var burger6satfatfat=[{src: "imgs/kfcthedaddyburger.png", x: fatlist[5], y : satfatlist[5]}];
var burger7satfatfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: fatlist[6], y : satfatlist[6]}];
var burger8satfatfat=[{src: "imgs/kfczingerstacker.png", x: fatlist[7], y : satfatlist[7]}];
var burger9satfatfat=[{src: "imgs/mcdnewyorkstack.png", x: fatlist[8], y : satfatlist[8]}];
var burger10satfatfat=[{src: "imgs/mcdmississippistack.png", x: fatlist[9], y : satfatlist[9]}];
var burger11satfatfat=[{src: "imgs/mcdsouthcarolinastack.png", x: fatlist[10], y : satfatlist[10]}];
var burger12satfatfat=[{src: "imgs/mcdkansascitystack.png", x: fatlist[11], y : satfatlist[11]}];
var burger13satfatfat=[{src: "imgs/mcdnashvillechicken.png", x: fatlist[12], y : satfatlist[12]}];
var burger14satfatfat=[{src: "imgs/mcdalabamachicken.png", x: fatlist[13], y : satfatlist[13]}];
var burger15satfatfat=[{src: "imgs/mcdsignatureclassic.png", x: fatlist[14], y : satfatlist[14]}];
var burger16satfatfat=[{src: "imgs/mcdsignaturebbq.png", x: fatlist[15], y : satfatlist[15]}];
var burger17satfatfat=[{src: "imgs/mcdsignaturespicy.png", x: fatlist[16], y : satfatlist[16]}];
var burger18satfatfat=[{src: "imgs/mcdbigmac.png", x: fatlist[17], y : satfatlist[17]}];
var burger19satfatfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: fatlist[18], y : satfatlist[18]}];
var burger20satfatfat=[{src: "imgs/mcddoublecheeseburger.png", x: fatlist[19], y : satfatlist[19]}];
var burger21satfatfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: fatlist[20], y : satfatlist[20]}];
var burger22satfatfat=[{src: "imgs/mcdcheeseburger.png", x: fatlist[21], y : satfatlist[21]}];
var burger23satfatfat=[{src: "imgs/mcdhamburger.png", x: fatlist[22], y : satfatlist[22]}];
var burger24satfatfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: fatlist[23], y : satfatlist[23]}];
var burger25satfatfat=[{src: "imgs/mcdchickenlegendbbq.png", x: fatlist[24], y : satfatlist[24]}];
var burger26satfatfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: fatlist[25], y : satfatlist[25]}];
var burger27satfatfat=[{src: "imgs/mcdmcchickensandwich.png", x: fatlist[26], y : satfatlist[26]}];
var burger28satfatfat=[{src: "imgs/mcdmayochicken.png", x: fatlist[27], y : satfatlist[27]}];
var burger29satfatfat=[{src: "imgs/mcdfiletofish.png", x: fatlist[28], y : satfatlist[28]}];
var burger30satfatfat=[{src: "imgs/mcdvegetabledeluxe.png", x: fatlist[29], y : satfatlist[29]}];
var burger31satfatfat=[{src: "imgs/bksmokyblackangus.png", x: fatlist[30], y : satfatlist[30]}];
var burger32satfatfat=[{src: "imgs/bkwhoppersandwich.png", x: fatlist[31], y : satfatlist[31]}];
var burger33satfatfat=[{src: "imgs/bkbacondoublexl.png", x: fatlist[32], y : satfatlist[32]}];
var burger34satfatfat=[{src: "imgs/bktexasbbqking.png", x: fatlist[33], y : satfatlist[33]}];
var burger35satfatfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: fatlist[34], y : satfatlist[34]}];
var burger36satfatfat=[{src: "imgs/bkbaconking.png", x: fatlist[35], y : satfatlist[35]}];
var burger37satfatfat=[{src: "imgs/bkwesternbbqbacon.png", x: fatlist[36], y : satfatlist[36]}];
var burger38satfatfat=[{src: "imgs/bkbigkingxl.png", x: fatlist[37], y : satfatlist[37]}];
var burger39satfatfat=[{src: "imgs/bklongbigking.png", x: fatlist[38], y : satfatlist[38]}];
var burger40satfatfat=[{src: "imgs/bklongtexasbbq.png", x: fatlist[39], y : satfatlist[39]}];
var burger41satfatfat=[{src: "imgs/bkdoublecheeseburger.png", x: fatlist[40], y : satfatlist[40]}];
var burger42satfatfat=[{src: "imgs/bkcheeseburger.png", x: fatlist[41], y : satfatlist[41]}];
var burger43satfatfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: fatlist[42], y : satfatlist[42]}];
var burger44satfatfat=[{src: "imgs/bkhamburger.png", x: fatlist[43], y : satfatlist[43]}];
var burger45satfatfat=[{src: "imgs/bkwhopperjrsandwich.png", x: fatlist[44], y : satfatlist[44]}];
var burger46satfatfat=[{src: "imgs/bkkidscheeseburger.png", x: fatlist[45], y : satfatlist[45]}];
var burger47satfatfat=[{src: "imgs/bkkidshamburger.png", x: fatlist[46], y : satfatlist[46]}];
var burger48satfatfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: fatlist[47], y : satfatlist[47]}];
var burger49satfatfat=[{src: "imgs/bkcrispychicken.png", x: fatlist[48], y : satfatlist[48]}];
var burger50satfatfat=[{src: "imgs/bkcrispychickenbaconking.png", x: fatlist[49], y : satfatlist[49]}];
var burger51satfatfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: fatlist[50], y : satfatlist[50]}];
var burger52satfatfat=[{src: "imgs/bkchickenroyale.png", x: fatlist[51], y : satfatlist[51]}];
var burger53satfatfat=[{src: "imgs/bkchickensandwich.png", x: fatlist[52], y : satfatlist[52]}];
var burger54satfatfat=[{src: "imgs/bkkingfish.png", x: fatlist[53], y : satfatlist[53]}];
var burger55satfatfat=[{src: "imgs/bkveggiebeanburger.png", x: fatlist[54], y : satfatlist[54]}];
var burger56satfatfat=[{src: "imgs/bkkidsveggieburger.png", x: fatlist[55], y : satfatlist[55]}];



//Begin Lollipop for Salt
var marginloli = {top: 90, right: 30, bottom: 200, left: 100},
    widthloli = 960 - marginloli.left - marginloli.right,
    heightloli = 500 - marginloli.top - marginloli.bottom;

var svglolisatfat = d3.select("#loli_datavizsatfat")
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
svglolisatfat.append("g")
  .attr("transform", "translate(0," + heightloli + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 30])
  .range([ heightloli, 0]);
svglolisatfat.append("g")
  .call(d3.axisLeft(y));

var yAxissatfatloli = d3.axisLeft().scale(y).ticks(5);		

// text label for the y axis
svglolisatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1) + " ," + 
                           (h - h/0.95 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Saturated Fat (g)");

//Lines
for (i = 0; i < 8; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#b27a7a")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#A3080C")
    .attr("stroke", "#A3080C")
}

//Lines
for (i = 8; i < 30; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#27742d")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#DA291C")
    .attr("stroke", "#DA291C")
}


//Lines
for (i = 30; i < 32; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 32; i < 33; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(satfatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbacondoublexl.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King [Sat Fat: 24 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King [Sat Fat: 24 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//PLOT FOR TOP 3
//Lines
for (i = 33; i < 34; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(satfatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bktexasbbqking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King [Sat Fat: 27 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King [Sat Fat: 27 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 34; i < 35; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 35; i < 36; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(satfatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbaconking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King [Sat Fat: 26 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King [Sat Fat: 26 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 36; i < 56; i++) { 
svglolisatfat.selectAll("myline")
  .data(burgersatfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(satfatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisatfat.selectAll("mycircle")
  .data(burgersatfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(satfatlist[i]); })
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
var yScalesatfat = d3.scaleLinear()
		.domain([0, 30])
		.range([h - padding, padding]);

var xScalesatfatcal = d3.scaleLinear()
		.domain([0, 1200])
		.range([padding, w - padding * 2]);

var xScalesatfatsalt = d3.scaleLinear()
		.domain([0, 5])
		.range([padding, w - padding * 2]);

var xScalesatfatsugar = d3.scaleLinear()
		.domain([0, 20])
		.range([padding, w - padding * 2]);

var xScalesatfatfat = d3.scaleLinear()
		.domain([0, 75])
		.range([padding, w - padding * 2]);

var yAxissatfat = d3.axisLeft().scale(yScalesatfat).ticks(5);		
var xAxissatfatcal = d3.axisBottom().scale(xScalesatfatcal).ticks(5);
var xAxissatfatsalt = d3.axisBottom().scale(xScalesatfatsalt).ticks(5);
var xAxissatfatsugar = d3.axisBottom().scale(xScalesatfatsugar).ticks(5);
var xAxissatfatfat = d3.axisBottom().scale(xScalesatfatfat).ticks(5);

//Create svg element
var svgsatfatcal = d3.select("#scatterplot_datavizsatfatcal")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsatfatsalt = d3.select("#scatterplot_datavizsatfatsalt")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsatfatsugar = d3.select("#scatterplot_datavizsatfatsugar")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Create svg element
var svgsatfatfat = d3.select("#scatterplot_datavizsatfatfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//x-axis
svgsatfatcal.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissatfatcal);
	
// text label for the x axis
svgsatfatcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//y-axis
svgsatfatcal.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissatfat);

// text label for the y axis
svgsatfatcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sat Fat (g)");

//x-axis
svgsatfatsalt.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissatfatsalt);
	
// text label for the x axis
svgsatfatsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//y-axis
svgsatfatsalt.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissatfat);

// text label for the y axis
svgsatfatsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sat Fat (g)");

//x-axis
svgsatfatsugar.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissatfatsugar);
	
// text label for the x axis
svgsatfatsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//y-axis
svgsatfatsugar.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissatfat);

// text label for the y axis
svgsatfatsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sat Fat (g)");

//x-axis
svgsatfatfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissatfatfat);
	
// text label for the x axis
svgsatfatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//y-axis
svgsatfatfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissatfat);

// text label for the y axis
svgsatfatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("SatFat (g)");

//Plot ALL the burgers
//SatFat-Cal

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger1satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger2satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger3satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger4satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger5satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger6satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger7satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger8satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger9satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger10satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger11satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger12satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger13satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger14satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger15satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger16satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger17satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger18satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger19satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger20satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger21satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger22satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger23satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger24satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger25satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger26satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger27satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger28satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger29satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger30satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger31satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger32satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger33satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger34satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger35satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger36satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger37satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger38satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger39satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger40satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger41satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger42satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger43satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger44satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger45satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger46satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger47satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger48satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger49satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger50satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger51satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger52satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger53satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger54satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger55satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger56satfatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesatfatcal(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


//SatFat-Salt

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger1satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger2satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger3satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger4satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger5satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger6satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger7satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger8satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger9satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger10satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger11satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger12satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger13satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger14satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger15satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger16satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger17satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger18satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger19satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger20satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger21satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger22satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger23satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger24satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger25satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger26satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger27satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger28satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger29satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger30satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger31satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger32satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger33satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger34satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger35satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger36satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger37satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger38satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger39satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger40satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger41satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger42satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger43satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger44satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger45satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger46satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger47satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger48satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger49satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger50satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger51satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger52satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger53satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger54satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger55satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger56satfatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesatfatsalt(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//SatFat-Sugar

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger1satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger2satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger3satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger4satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger5satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger6satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger7satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger8satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger9satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger10satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger11satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger12satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger13satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger14satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger15satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger16satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger17satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger18satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger19satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger20satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger21satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger22satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger23satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger24satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger25satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger26satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger27satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger28satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger29satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger30satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger31satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger32satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger33satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger34satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger35satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger36satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger37satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger38satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger39satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger40satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger41satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger42satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger43satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger44satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger45satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger46satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger47satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger48satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger49satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger50satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger51satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger52satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger53satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger54satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger55satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger56satfatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesatfatsugar(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//SatFat-Fat

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger1satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger2satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger3satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger4satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger5satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger6satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger7satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger8satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger9satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger10satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger11satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger12satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger13satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger14satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger15satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger16satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger17satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger18satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger19satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger20satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger21satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger22satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger23satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger24satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger25satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger26satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger27satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger28satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger29satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger30satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger31satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger32satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger33satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger34satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger35satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger36satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger37satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger38satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger39satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger40satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger41satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger42satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger43satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger44satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger45satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger46satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger47satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger48satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger49satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger50satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger51satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger52satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger53satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger54satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger55satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsatfatfat.append("g")
   .selectAll(".myPoint")
   .data(burger56satfatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesatfatfat(d.x);})      
   .attr("y", function(d) {return yScalesatfat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Saturated Fat:" + d.y + "g" + ", Fat: " + d.x + "g]");
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