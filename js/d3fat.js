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
var burgerfatloli = []

for (i = 0; i < burgerlist.length; i++) { 
burgerfatloli.push([burgerlist[i],fatlist[i]]);
}

//Scatterplot data for Fat-Cal
var burger1fatcal=[{src: "imgs/kfcfilletburger.png", x: calorieslist[0], y : fatlist[0]}];
var burger2fatcal=[{src: "imgs/kfcfillettowerburger.png", x: calorieslist[1], y : fatlist[1]}];
var burger3fatcal=[{src: "imgs/kfczingerburger.png", x: calorieslist[2], y : fatlist[2]}];
var burger4fatcal=[{src: "imgs/kfczingertowerburger.png", x: calorieslist[3], y : fatlist[3]}];
var burger5fatcal=[{src: "imgs/kfcminifilletburger.png", x: calorieslist[4], y : fatlist[4]}];
var burger6fatcal=[{src: "imgs/kfcthedaddyburger.png", x: calorieslist[5], y : fatlist[5]}];
var burger7fatcal=[{src: "imgs/kfcbaconandcheeseburger.png", x: calorieslist[6], y : fatlist[6]}];
var burger8fatcal=[{src: "imgs/kfczingerstacker.png", x: calorieslist[7], y : fatlist[7]}];
var burger9fatcal=[{src: "imgs/mcdnewyorkstack.png", x: calorieslist[8], y : fatlist[8]}];
var burger10fatcal=[{src: "imgs/mcdmississippistack.png", x: calorieslist[9], y : fatlist[9]}];
var burger11fatcal=[{src: "imgs/mcdsouthcarolinastack.png", x: calorieslist[10], y : fatlist[10]}];
var burger12fatcal=[{src: "imgs/mcdkansascitystack.png", x: calorieslist[11], y : fatlist[11]}];
var burger13fatcal=[{src: "imgs/mcdnashvillechicken.png", x: calorieslist[12], y : fatlist[12]}];
var burger14fatcal=[{src: "imgs/mcdalabamachicken.png", x: calorieslist[13], y : fatlist[13]}];
var burger15fatcal=[{src: "imgs/mcdsignatureclassic.png", x: calorieslist[14], y : fatlist[14]}];
var burger16fatcal=[{src: "imgs/mcdsignaturebbq.png", x: calorieslist[15], y : fatlist[15]}];
var burger17fatcal=[{src: "imgs/mcdsignaturespicy.png", x: calorieslist[16], y : fatlist[16]}];
var burger18fatcal=[{src: "imgs/mcdbigmac.png", x: calorieslist[17], y : fatlist[17]}];
var burger19fatcal=[{src: "imgs/mcdquarterpounderwithcheese.png", x: calorieslist[18], y : fatlist[18]}];
var burger20fatcal=[{src: "imgs/mcddoublecheeseburger.png", x: calorieslist[19], y : fatlist[19]}];
var burger21fatcal=[{src: "imgs/mcdbacondoublecheeseburger.png", x: calorieslist[20], y : fatlist[20]}];
var burger22fatcal=[{src: "imgs/mcdcheeseburger.png", x: calorieslist[21], y : fatlist[21]}];
var burger23fatcal=[{src: "imgs/mcdhamburger.png", x: calorieslist[22], y : fatlist[22]}];
var burger24fatcal=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: calorieslist[23], y : fatlist[23]}];
var burger25fatcal=[{src: "imgs/mcdchickenlegendbbq.png", x: calorieslist[24], y : fatlist[24]}];
var burger26fatcal=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: calorieslist[25], y : fatlist[25]}];
var burger27fatcal=[{src: "imgs/mcdmcchickensandwich.png", x: calorieslist[26], y : fatlist[26]}];
var burger28fatcal=[{src: "imgs/mcdmayochicken.png", x: calorieslist[27], y : fatlist[27]}];
var burger29fatcal=[{src: "imgs/mcdfiletofish.png", x: calorieslist[28], y : fatlist[28]}];
var burger30fatcal=[{src: "imgs/mcdvegetabledeluxe.png", x: calorieslist[29], y : fatlist[29]}];
var burger31fatcal=[{src: "imgs/bksmokyblackangus.png", x: calorieslist[30], y : fatlist[30]}];
var burger32fatcal=[{src: "imgs/bkwhoppersandwich.png", x: calorieslist[31], y : fatlist[31]}];
var burger33fatcal=[{src: "imgs/bkbacondoublexl.png", x: calorieslist[32], y : fatlist[32]}];
var burger34fatcal=[{src: "imgs/bktexasbbqking.png", x: calorieslist[33], y : fatlist[33]}];
var burger35fatcal=[{src: "imgs/bkdoublewhoppersandwich.png", x: calorieslist[34], y : fatlist[34]}];
var burger36fatcal=[{src: "imgs/bkbaconking.png", x: calorieslist[35], y : fatlist[35]}];
var burger37fatcal=[{src: "imgs/bkwesternbbqbacon.png", x: calorieslist[36], y : fatlist[36]}];
var burger38fatcal=[{src: "imgs/bkbigkingxl.png", x: calorieslist[37], y : fatlist[37]}];
var burger39fatcal=[{src: "imgs/bklongbigking.png", x: calorieslist[38], y : fatlist[38]}];
var burger40fatcal=[{src: "imgs/bklongtexasbbq.png", x: calorieslist[39], y : fatlist[39]}];
var burger41fatcal=[{src: "imgs/bkdoublecheeseburger.png", x: calorieslist[40], y : fatlist[40]}];
var burger42fatcal=[{src: "imgs/bkcheeseburger.png", x: calorieslist[41], y : fatlist[41]}];
var burger43fatcal=[{src: "imgs/bkbacondoublecheeseburger.png", x: calorieslist[42], y : fatlist[42]}];
var burger44fatcal=[{src: "imgs/bkhamburger.png", x: calorieslist[43], y : fatlist[43]}];
var burger45fatcal=[{src: "imgs/bkwhopperjrsandwich.png", x: calorieslist[44], y : fatlist[44]}];
var burger46fatcal=[{src: "imgs/bkkidscheeseburger.png", x: calorieslist[45], y : fatlist[45]}];
var burger47fatcal=[{src: "imgs/bkkidshamburger.png", x: calorieslist[46], y : fatlist[46]}];
var burger48fatcal=[{src: "imgs/bktexasbbqcrispychicken.png", x: calorieslist[47], y : fatlist[47]}];
var burger49fatcal=[{src: "imgs/bkcrispychicken.png", x: calorieslist[48], y : fatlist[48]}];
var burger50fatcal=[{src: "imgs/bkcrispychickenbaconking.png", x: calorieslist[49], y : fatlist[49]}];
var burger51fatcal=[{src: "imgs/bkbaconcheesechickenroyale.png", x: calorieslist[50], y : fatlist[50]}];
var burger52fatcal=[{src: "imgs/bkchickenroyale.png", x: calorieslist[51], y : fatlist[51]}];
var burger53fatcal=[{src: "imgs/bkchickensandwich.png", x: calorieslist[52], y : fatlist[52]}];
var burger54fatcal=[{src: "imgs/bkkingfish.png", x: calorieslist[53], y : fatlist[53]}];
var burger55fatcal=[{src: "imgs/bkveggiebeanburger.png", x: calorieslist[54], y : fatlist[54]}];
var burger56fatcal=[{src: "imgs/bkkidsveggieburger.png", x: calorieslist[55], y : fatlist[55]}];


//Scatterplot data for Fat-Salt
var burger1fatsalt=[{src: "imgs/kfcfilletburger.png", x: saltlist[0], y : fatlist[0]}];
var burger2fatsalt=[{src: "imgs/kfcfillettowerburger.png", x: saltlist[1], y : fatlist[1]}];
var burger3fatsalt=[{src: "imgs/kfczingerburger.png", x: saltlist[2], y : fatlist[2]}];
var burger4fatsalt=[{src: "imgs/kfczingertowerburger.png", x: saltlist[3], y : fatlist[3]}];
var burger5fatsalt=[{src: "imgs/kfcminifilletburger.png", x: saltlist[4], y : fatlist[4]}];
var burger6fatsalt=[{src: "imgs/kfcthedaddyburger.png", x: saltlist[5], y : fatlist[5]}];
var burger7fatsalt=[{src: "imgs/kfcbaconandcheeseburger.png", x: saltlist[6], y : fatlist[6]}];
var burger8fatsalt=[{src: "imgs/kfczingerstacker.png", x: saltlist[7], y : fatlist[7]}];
var burger9fatsalt=[{src: "imgs/mcdnewyorkstack.png", x: saltlist[8], y : fatlist[8]}];
var burger10fatsalt=[{src: "imgs/mcdmississippistack.png", x: saltlist[9], y : fatlist[9]}];
var burger11fatsalt=[{src: "imgs/mcdsouthcarolinastack.png", x: saltlist[10], y : fatlist[10]}];
var burger12fatsalt=[{src: "imgs/mcdkansascitystack.png", x: saltlist[11], y : fatlist[11]}];
var burger13fatsalt=[{src: "imgs/mcdnashvillechicken.png", x: saltlist[12], y : fatlist[12]}];
var burger14fatsalt=[{src: "imgs/mcdalabamachicken.png", x: saltlist[13], y : fatlist[13]}];
var burger15fatsalt=[{src: "imgs/mcdsignatureclassic.png", x: saltlist[14], y : fatlist[14]}];
var burger16fatsalt=[{src: "imgs/mcdsignaturebbq.png", x: saltlist[15], y : fatlist[15]}];
var burger17fatsalt=[{src: "imgs/mcdsignaturespicy.png", x: saltlist[16], y : fatlist[16]}];
var burger18fatsalt=[{src: "imgs/mcdbigmac.png", x: saltlist[17], y : fatlist[17]}];
var burger19fatsalt=[{src: "imgs/mcdquarterpounderwithcheese.png", x: saltlist[18], y : fatlist[18]}];
var burger20fatsalt=[{src: "imgs/mcddoublecheeseburger.png", x: saltlist[19], y : fatlist[19]}];
var burger21fatsalt=[{src: "imgs/mcdbacondoublecheeseburger.png", x: saltlist[20], y : fatlist[20]}];
var burger22fatsalt=[{src: "imgs/mcdcheeseburger.png", x: saltlist[21], y : fatlist[21]}];
var burger23fatsalt=[{src: "imgs/mcdhamburger.png", x: saltlist[22], y : fatlist[22]}];
var burger24fatsalt=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: saltlist[23], y : fatlist[23]}];
var burger25fatsalt=[{src: "imgs/mcdchickenlegendbbq.png", x: saltlist[24], y : fatlist[24]}];
var burger26fatsalt=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: saltlist[25], y : fatlist[25]}];
var burger27fatsalt=[{src: "imgs/mcdmcchickensandwich.png", x: saltlist[26], y : fatlist[26]}];
var burger28fatsalt=[{src: "imgs/mcdmayochicken.png", x: saltlist[27], y : fatlist[27]}];
var burger29fatsalt=[{src: "imgs/mcdfiletofish.png", x: saltlist[28], y : fatlist[28]}];
var burger30fatsalt=[{src: "imgs/mcdvegetabledeluxe.png", x: saltlist[29], y : fatlist[29]}];
var burger31fatsalt=[{src: "imgs/bksmokyblackangus.png", x: saltlist[30], y : fatlist[30]}];
var burger32fatsalt=[{src: "imgs/bkwhoppersandwich.png", x: saltlist[31], y : fatlist[31]}];
var burger33fatsalt=[{src: "imgs/bkbacondoublexl.png", x: saltlist[32], y : fatlist[32]}];
var burger34fatsalt=[{src: "imgs/bktexasbbqking.png", x: saltlist[33], y : fatlist[33]}];
var burger35fatsalt=[{src: "imgs/bkdoublewhoppersandwich.png", x: saltlist[34], y : fatlist[34]}];
var burger36fatsalt=[{src: "imgs/bkbaconking.png", x: saltlist[35], y : fatlist[35]}];
var burger37fatsalt=[{src: "imgs/bkwesternbbqbacon.png", x: saltlist[36], y : fatlist[36]}];
var burger38fatsalt=[{src: "imgs/bkbigkingxl.png", x: saltlist[37], y : fatlist[37]}];
var burger39fatsalt=[{src: "imgs/bklongbigking.png", x: saltlist[38], y : fatlist[38]}];
var burger40fatsalt=[{src: "imgs/bklongtexasbbq.png", x: saltlist[39], y : fatlist[39]}];
var burger41fatsalt=[{src: "imgs/bkdoublecheeseburger.png", x: saltlist[40], y : fatlist[40]}];
var burger42fatsalt=[{src: "imgs/bkcheeseburger.png", x: saltlist[41], y : fatlist[41]}];
var burger43fatsalt=[{src: "imgs/bkbacondoublecheeseburger.png", x: saltlist[42], y : fatlist[42]}];
var burger44fatsalt=[{src: "imgs/bkhamburger.png", x: saltlist[43], y : fatlist[43]}];
var burger45fatsalt=[{src: "imgs/bkwhopperjrsandwich.png", x: saltlist[44], y : fatlist[44]}];
var burger46fatsalt=[{src: "imgs/bkkidscheeseburger.png", x: saltlist[45], y : fatlist[45]}];
var burger47fatsalt=[{src: "imgs/bkkidshamburger.png", x: saltlist[46], y : fatlist[46]}];
var burger48fatsalt=[{src: "imgs/bktexasbbqcrispychicken.png", x: saltlist[47], y : fatlist[47]}];
var burger49fatsalt=[{src: "imgs/bkcrispychicken.png", x: saltlist[48], y : fatlist[48]}];
var burger50fatsalt=[{src: "imgs/bkcrispychickenbaconking.png", x: saltlist[49], y : fatlist[49]}];
var burger51fatsalt=[{src: "imgs/bkbaconcheesechickenroyale.png", x: saltlist[50], y : fatlist[50]}];
var burger52fatsalt=[{src: "imgs/bkchickenroyale.png", x: saltlist[51], y : fatlist[51]}];
var burger53fatsalt=[{src: "imgs/bkchickensandwich.png", x: saltlist[52], y : fatlist[52]}];
var burger54fatsalt=[{src: "imgs/bkkingfish.png", x: saltlist[53], y : fatlist[53]}];
var burger55fatsalt=[{src: "imgs/bkveggiebeanburger.png", x: saltlist[54], y : fatlist[54]}];
var burger56fatsalt=[{src: "imgs/bkkidsveggieburger.png", x: saltlist[55], y : fatlist[55]}];

//Scatterplot data for Fat-Sugar
var burger1fatsugar=[{src: "imgs/kfcfilletburger.png", x: sugarlist[0], y : fatlist[0]}];
var burger2fatsugar=[{src: "imgs/kfcfillettowerburger.png", x: sugarlist[1], y : fatlist[1]}];
var burger3fatsugar=[{src: "imgs/kfczingerburger.png", x: sugarlist[2], y : fatlist[2]}];
var burger4fatsugar=[{src: "imgs/kfczingertowerburger.png", x: sugarlist[3], y : fatlist[3]}];
var burger5fatsugar=[{src: "imgs/kfcminifilletburger.png", x: sugarlist[4], y : fatlist[4]}];
var burger6fatsugar=[{src: "imgs/kfcthedaddyburger.png", x: sugarlist[5], y : fatlist[5]}];
var burger7fatsugar=[{src: "imgs/kfcbaconandcheeseburger.png", x: sugarlist[6], y : fatlist[6]}];
var burger8fatsugar=[{src: "imgs/kfczingerstacker.png", x: sugarlist[7], y : fatlist[7]}];
var burger9fatsugar=[{src: "imgs/mcdnewyorkstack.png", x: sugarlist[8], y : fatlist[8]}];
var burger10fatsugar=[{src: "imgs/mcdmississippistack.png", x: sugarlist[9], y : fatlist[9]}];
var burger11fatsugar=[{src: "imgs/mcdsouthcarolinastack.png", x: sugarlist[10], y : fatlist[10]}];
var burger12fatsugar=[{src: "imgs/mcdkansascitystack.png", x: sugarlist[11], y : fatlist[11]}];
var burger13fatsugar=[{src: "imgs/mcdnashvillechicken.png", x: sugarlist[12], y : fatlist[12]}];
var burger14fatsugar=[{src: "imgs/mcdalabamachicken.png", x: sugarlist[13], y : fatlist[13]}];
var burger15fatsugar=[{src: "imgs/mcdsignatureclassic.png", x: sugarlist[14], y : fatlist[14]}];
var burger16fatsugar=[{src: "imgs/mcdsignaturebbq.png", x: sugarlist[15], y : fatlist[15]}];
var burger17fatsugar=[{src: "imgs/mcdsignaturespicy.png", x: sugarlist[16], y : fatlist[16]}];
var burger18fatsugar=[{src: "imgs/mcdbigmac.png", x: sugarlist[17], y : fatlist[17]}];
var burger19fatsugar=[{src: "imgs/mcdquarterpounderwithcheese.png", x: sugarlist[18], y : fatlist[18]}];
var burger20fatsugar=[{src: "imgs/mcddoublecheeseburger.png", x: sugarlist[19], y : fatlist[19]}];
var burger21fatsugar=[{src: "imgs/mcdbacondoublecheeseburger.png", x: sugarlist[20], y : fatlist[20]}];
var burger22fatsugar=[{src: "imgs/mcdcheeseburger.png", x: sugarlist[21], y : fatlist[21]}];
var burger23fatsugar=[{src: "imgs/mcdhamburger.png", x: sugarlist[22], y : fatlist[22]}];
var burger24fatsugar=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: sugarlist[23], y : fatlist[23]}];
var burger25fatsugar=[{src: "imgs/mcdchickenlegendbbq.png", x: sugarlist[24], y : fatlist[24]}];
var burger26fatsugar=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: sugarlist[25], y : fatlist[25]}];
var burger27fatsugar=[{src: "imgs/mcdmcchickensandwich.png", x: sugarlist[26], y : fatlist[26]}];
var burger28fatsugar=[{src: "imgs/mcdmayochicken.png", x: sugarlist[27], y : fatlist[27]}];
var burger29fatsugar=[{src: "imgs/mcdfiletofish.png", x: sugarlist[28], y : fatlist[28]}];
var burger30fatsugar=[{src: "imgs/mcdvegetabledeluxe.png", x: sugarlist[29], y : fatlist[29]}];
var burger31fatsugar=[{src: "imgs/bksmokyblackangus.png", x: sugarlist[30], y : fatlist[30]}];
var burger32fatsugar=[{src: "imgs/bkwhoppersandwich.png", x: sugarlist[31], y : fatlist[31]}];
var burger33fatsugar=[{src: "imgs/bkbacondoublexl.png", x: sugarlist[32], y : fatlist[32]}];
var burger34fatsugar=[{src: "imgs/bktexasbbqking.png", x: sugarlist[33], y : fatlist[33]}];
var burger35fatsugar=[{src: "imgs/bkdoublewhoppersandwich.png", x: sugarlist[34], y : fatlist[34]}];
var burger36fatsugar=[{src: "imgs/bkbaconking.png", x: sugarlist[35], y : fatlist[35]}];
var burger37fatsugar=[{src: "imgs/bkwesternbbqbacon.png", x: sugarlist[36], y : fatlist[36]}];
var burger38fatsugar=[{src: "imgs/bkbigkingxl.png", x: sugarlist[37], y : fatlist[37]}];
var burger39fatsugar=[{src: "imgs/bklongbigking.png", x: sugarlist[38], y : fatlist[38]}];
var burger40fatsugar=[{src: "imgs/bklongtexasbbq.png", x: sugarlist[39], y : fatlist[39]}];
var burger41fatsugar=[{src: "imgs/bkdoublecheeseburger.png", x: sugarlist[40], y : fatlist[40]}];
var burger42fatsugar=[{src: "imgs/bkcheeseburger.png", x: sugarlist[41], y : fatlist[41]}];
var burger43fatsugar=[{src: "imgs/bkbacondoublecheeseburger.png", x: sugarlist[42], y : fatlist[42]}];
var burger44fatsugar=[{src: "imgs/bkhamburger.png", x: sugarlist[43], y : fatlist[43]}];
var burger45fatsugar=[{src: "imgs/bkwhopperjrsandwich.png", x: sugarlist[44], y : fatlist[44]}];
var burger46fatsugar=[{src: "imgs/bkkidscheeseburger.png", x: sugarlist[45], y : fatlist[45]}];
var burger47fatsugar=[{src: "imgs/bkkidshamburger.png", x: sugarlist[46], y : fatlist[46]}];
var burger48fatsugar=[{src: "imgs/bktexasbbqcrispychicken.png", x: sugarlist[47], y : fatlist[47]}];
var burger49fatsugar=[{src: "imgs/bkcrispychicken.png", x: sugarlist[48], y : fatlist[48]}];
var burger50fatsugar=[{src: "imgs/bkcrispychickenbaconking.png", x: sugarlist[49], y : fatlist[49]}];
var burger51fatsugar=[{src: "imgs/bkbaconcheesechickenroyale.png", x: sugarlist[50], y : fatlist[50]}];
var burger52fatsugar=[{src: "imgs/bkchickenroyale.png", x: sugarlist[51], y : fatlist[51]}];
var burger53fatsugar=[{src: "imgs/bkchickensandwich.png", x: sugarlist[52], y : fatlist[52]}];
var burger54fatsugar=[{src: "imgs/bkkingfish.png", x: sugarlist[53], y : fatlist[53]}];
var burger55fatsugar=[{src: "imgs/bkveggiebeanburger.png", x: sugarlist[54], y : fatlist[54]}];
var burger56fatsugar=[{src: "imgs/bkkidsveggieburger.png", x: sugarlist[55], y : fatlist[55]}];


//Scatterplot data for Fat-Satfat
var burger1fatsatfat=[{src: "imgs/kfcfilletburger.png", x: satfatlist[0], y : fatlist[0]}];
var burger2fatsatfat=[{src: "imgs/kfcfillettowerburger.png", x: satfatlist[1], y : fatlist[1]}];
var burger3fatsatfat=[{src: "imgs/kfczingerburger.png", x: satfatlist[2], y : fatlist[2]}];
var burger4fatsatfat=[{src: "imgs/kfczingertowerburger.png", x: satfatlist[3], y : fatlist[3]}];
var burger5fatsatfat=[{src: "imgs/kfcminifilletburger.png", x: satfatlist[4], y : fatlist[4]}];
var burger6fatsatfat=[{src: "imgs/kfcthedaddyburger.png", x: satfatlist[5], y : fatlist[5]}];
var burger7fatsatfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: satfatlist[6], y : fatlist[6]}];
var burger8fatsatfat=[{src: "imgs/kfczingerstacker.png", x: satfatlist[7], y : fatlist[7]}];
var burger9fatsatfat=[{src: "imgs/mcdnewyorkstack.png", x: satfatlist[8], y : fatlist[8]}];
var burger10fatsatfat=[{src: "imgs/mcdmississippistack.png", x: satfatlist[9], y : fatlist[9]}];
var burger11fatsatfat=[{src: "imgs/mcdsouthcarolinastack.png", x: satfatlist[10], y : fatlist[10]}];
var burger12fatsatfat=[{src: "imgs/mcdkansascitystack.png", x: satfatlist[11], y : fatlist[11]}];
var burger13fatsatfat=[{src: "imgs/mcdnashvillechicken.png", x: satfatlist[12], y : fatlist[12]}];
var burger14fatsatfat=[{src: "imgs/mcdalabamachicken.png", x: satfatlist[13], y : fatlist[13]}];
var burger15fatsatfat=[{src: "imgs/mcdsignatureclassic.png", x: satfatlist[14], y : fatlist[14]}];
var burger16fatsatfat=[{src: "imgs/mcdsignaturebbq.png", x: satfatlist[15], y : fatlist[15]}];
var burger17fatsatfat=[{src: "imgs/mcdsignaturespicy.png", x: satfatlist[16], y : fatlist[16]}];
var burger18fatsatfat=[{src: "imgs/mcdbigmac.png", x: satfatlist[17], y : fatlist[17]}];
var burger19fatsatfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: satfatlist[18], y : fatlist[18]}];
var burger20fatsatfat=[{src: "imgs/mcddoublecheeseburger.png", x: satfatlist[19], y : fatlist[19]}];
var burger21fatsatfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: satfatlist[20], y : fatlist[20]}];
var burger22fatsatfat=[{src: "imgs/mcdcheeseburger.png", x: satfatlist[21], y : fatlist[21]}];
var burger23fatsatfat=[{src: "imgs/mcdhamburger.png", x: satfatlist[22], y : fatlist[22]}];
var burger24fatsatfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: satfatlist[23], y : fatlist[23]}];
var burger25fatsatfat=[{src: "imgs/mcdchickenlegendbbq.png", x: satfatlist[24], y : fatlist[24]}];
var burger26fatsatfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: satfatlist[25], y : fatlist[25]}];
var burger27fatsatfat=[{src: "imgs/mcdmcchickensandwich.png", x: satfatlist[26], y : fatlist[26]}];
var burger28fatsatfat=[{src: "imgs/mcdmayochicken.png", x: satfatlist[27], y : fatlist[27]}];
var burger29fatsatfat=[{src: "imgs/mcdfiletofish.png", x: satfatlist[28], y : fatlist[28]}];
var burger30fatsatfat=[{src: "imgs/mcdvegetabledeluxe.png", x: satfatlist[29], y : fatlist[29]}];
var burger31fatsatfat=[{src: "imgs/bksmokyblackangus.png", x: satfatlist[30], y : fatlist[30]}];
var burger32fatsatfat=[{src: "imgs/bkwhoppersandwich.png", x: satfatlist[31], y : fatlist[31]}];
var burger33fatsatfat=[{src: "imgs/bkbacondoublexl.png", x: satfatlist[32], y : fatlist[32]}];
var burger34fatsatfat=[{src: "imgs/bktexasbbqking.png", x: satfatlist[33], y : fatlist[33]}];
var burger35fatsatfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: satfatlist[34], y : fatlist[34]}];
var burger36fatsatfat=[{src: "imgs/bkbaconking.png", x: satfatlist[35], y : fatlist[35]}];
var burger37fatsatfat=[{src: "imgs/bkwesternbbqbacon.png", x: satfatlist[36], y : fatlist[36]}];
var burger38fatsatfat=[{src: "imgs/bkbigkingxl.png", x: satfatlist[37], y : fatlist[37]}];
var burger39fatsatfat=[{src: "imgs/bklongbigking.png", x: satfatlist[38], y : fatlist[38]}];
var burger40fatsatfat=[{src: "imgs/bklongtexasbbq.png", x: satfatlist[39], y : fatlist[39]}];
var burger41fatsatfat=[{src: "imgs/bkdoublecheeseburger.png", x: satfatlist[40], y : fatlist[40]}];
var burger42fatsatfat=[{src: "imgs/bkcheeseburger.png", x: satfatlist[41], y : fatlist[41]}];
var burger43fatsatfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: satfatlist[42], y : fatlist[42]}];
var burger44fatsatfat=[{src: "imgs/bkhamburger.png", x: satfatlist[43], y : fatlist[43]}];
var burger45fatsatfat=[{src: "imgs/bkwhopperjrsandwich.png", x: satfatlist[44], y : fatlist[44]}];
var burger46fatsatfat=[{src: "imgs/bkkidscheeseburger.png", x: satfatlist[45], y : fatlist[45]}];
var burger47fatsatfat=[{src: "imgs/bkkidshamburger.png", x: satfatlist[46], y : fatlist[46]}];
var burger48fatsatfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: satfatlist[47], y : fatlist[47]}];
var burger49fatsatfat=[{src: "imgs/bkcrispychicken.png", x: satfatlist[48], y : fatlist[48]}];
var burger50fatsatfat=[{src: "imgs/bkcrispychickenbaconking.png", x: satfatlist[49], y : fatlist[49]}];
var burger51fatsatfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: satfatlist[50], y : fatlist[50]}];
var burger52fatsatfat=[{src: "imgs/bkchickenroyale.png", x: satfatlist[51], y : fatlist[51]}];
var burger53fatsatfat=[{src: "imgs/bkchickensandwich.png", x: satfatlist[52], y : fatlist[52]}];
var burger54fatsatfat=[{src: "imgs/bkkingfish.png", x: satfatlist[53], y : fatlist[53]}];
var burger55fatsatfat=[{src: "imgs/bkveggiebeanburger.png", x: satfatlist[54], y : fatlist[54]}];
var burger56fatsatfat=[{src: "imgs/bkkidsveggieburger.png", x: satfatlist[55], y : fatlist[55]}];


//Begin Lollipop for Fat
var marginloli = {top: 90, right: 30, bottom: 200, left: 100},
    widthloli = 960 - marginloli.left - marginloli.right,
    heightloli = 500 - marginloli.top - marginloli.bottom;

var svglolifat = d3.select("#loli_datavizfat")
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
svglolifat.append("g")
  .attr("transform", "translate(0," + heightloli + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 75])
  .range([ heightloli, 0]);
svglolifat.append("g")
  .call(d3.axisLeft(y));

var yAxisfatloli = d3.axisLeft().scale(y).ticks(5);		

// text label for the y axis
svglolifat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1) + " ," + 
                           (h - h/0.95 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//Lines
for (i = 0; i < 8; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#b27a7a")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#A3080C")
    .attr("stroke", "#A3080C")
}

//Lines
for (i = 8; i < 30; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#27742d")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#DA291C")
    .attr("stroke", "#DA291C")
}

//Lines
for (i = 30; i < 33; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 33; i < 34; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(fatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bktexasbbqking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King [Fat: 74 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King [Fat: 74 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 34; i < 35; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 35; i < 36; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(fatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbaconking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King [Fat: 59 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King [Fat: 59 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 36; i < 37; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}


//PLOT FOR TOP 3
//Lines
for (i = 37; i < 38; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(fatlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbigkingxl.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King [Fat: 60 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King [Fat: 60 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}


//Lines
for (i = 38; i < 56; i++) { 
svglolifat.selectAll("myline")
  .data(burgerfatloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(fatlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolifat.selectAll("mycircle")
  .data(burgerfatloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(fatlist[i]); })
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
var yScalefat = d3.scaleLinear()
		.domain([0, 75])
		.range([h - padding, padding]);

var xScalefatcal = d3.scaleLinear()
		.domain([0, 1200])
		.range([padding, w - padding * 2]);

var xScalefatsalt = d3.scaleLinear()
		.domain([0, 5])
		.range([padding, w - padding * 2]);

var xScalefatsugar = d3.scaleLinear()
		.domain([0, 20])
		.range([padding, w - padding * 2]);

var xScalefatsatfat = d3.scaleLinear()
		.domain([0, 30])
		.range([padding, w - padding * 2]);

var yAxisfat = d3.axisLeft().scale(yScalefat).ticks(5);		
var xAxisfatcal = d3.axisBottom().scale(xScalefatcal).ticks(5);
var xAxisfatsalt = d3.axisBottom().scale(xScalefatsalt).ticks(5);
var xAxisfatsugar = d3.axisBottom().scale(xScalefatsugar).ticks(5);
var xAxisfatsatfat = d3.axisBottom().scale(xScalefatsatfat).ticks(5);

//Create svg element
var svgfatcal = d3.select("#scatterplot_datavizfatcal")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgfatsalt = d3.select("#scatterplot_datavizfatsalt")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgfatsugar = d3.select("#scatterplot_datavizfatsugar")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Create svg element
var svgfatsatfat = d3.select("#scatterplot_datavizfatsatfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//x-axis
svgfatcal.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxisfatcal);
	
// text label for the x axis
svgfatcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//y-axis
svgfatcal.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxisfat);

// text label for the y axis
svgfatcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//x-axis
svgfatsalt.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxisfatsalt);
	
// text label for the x axis
svgfatsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//y-axis
svgfatsalt.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxisfat);

// text label for the y axis
svgfatsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//Cal-Fat
//x-axis
svgfatsugar.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxisfatsugar);
	
// text label for the x axis
svgfatsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//y-axis
svgfatsugar.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxisfat);

// text label for the y axis
svgfatsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//x-axis
svgfatsatfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxisfatsatfat);
	
// text label for the x axis
svgfatsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Saturated Fat (g)");

//y-axis
svgfatsatfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxisfat);

// text label for the y axis
svgfatsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//Plot ALL the burgers
//Fat-Cal

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger1fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger2fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger3fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger4fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger5fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger6fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger7fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger8fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger9fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger10fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger11fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger12fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger13fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger14fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger15fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger16fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger17fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger18fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger19fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger20fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger21fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger22fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger23fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger24fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger25fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger26fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger27fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger28fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger29fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger30fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger31fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger32fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger33fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger34fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger35fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger36fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger37fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger38fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger39fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger40fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger41fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger42fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger43fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger44fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger45fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger46fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger47fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger48fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger49fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger50fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger51fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger52fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger53fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger54fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger55fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatcal.append("g")
   .selectAll(".myPoint")
   .data(burger56fatcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalefatcal(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Fat-Salt

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger1fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger2fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger3fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger4fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger5fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger6fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger7fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger8fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger9fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger10fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger11fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger12fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger13fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger14fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger15fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger16fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger17fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger18fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger19fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger20fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger21fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger22fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger23fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger24fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger25fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger26fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger27fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger28fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger29fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger30fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger31fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger32fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger33fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger34fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger35fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger36fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger37fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger38fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger39fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger40fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger41fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger42fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger43fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger44fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger45fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger46fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger47fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger48fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger49fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger50fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger51fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger52fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger53fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger54fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger55fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsalt.append("g")
   .selectAll(".myPoint")
   .data(burger56fatsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalefatsalt(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


//Fat-Sugar

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger1fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger2fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger3fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger4fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger5fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger6fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger7fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger8fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger9fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger10fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger11fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger12fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger13fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger14fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger15fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger16fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger17fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger18fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger19fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger20fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger21fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger22fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger23fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger24fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger25fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger26fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger27fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger28fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger29fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger30fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger31fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger32fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger33fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger34fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger35fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger36fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger37fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger38fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger39fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger40fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger41fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger42fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger43fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger44fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger45fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger46fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger47fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger48fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger49fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger50fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger51fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger52fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger53fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger54fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger55fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsugar.append("g")
   .selectAll(".myPoint")
   .data(burger56fatsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalefatsugar(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


//Fat-SatFat

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger1fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger2fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger3fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger4fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger5fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger6fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger7fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger8fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger9fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger10fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger11fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger12fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger13fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger14fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger15fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger16fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger17fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger18fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger19fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger20fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger21fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger22fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger23fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger24fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger25fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger26fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger27fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger28fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger29fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger30fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger31fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger32fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger33fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger34fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger35fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger36fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger37fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger38fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger39fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger40fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger41fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger42fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger43fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger44fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger45fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger46fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger47fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger48fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger49fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger50fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger51fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger52fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger53fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger54fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger55fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgfatsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger56fatsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalefatsatfat(d.x);})      
   .attr("y", function(d) {return yScalefat(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Fat: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
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