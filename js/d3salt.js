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
var burgersaltloli = []

for (i = 0; i < burgerlist.length; i++) { 
burgersaltloli.push([burgerlist[i],saltlist[i]]);
}

//Begin Scatterplot for Salt
//Load the data for Salt-Cal
var burger1saltcal=[{src: "imgs/kfcfilletburger.png", x: calorieslist[0], y: saltlist[0]}];
var burger2saltcal=[{src: "imgs/kfcfillettowerburger.png", x: calorieslist[1], y: saltlist[1]}];
var burger3saltcal=[{src: "imgs/kfczingerburger.png", x: calorieslist[2], y: saltlist[2]}];
var burger4saltcal=[{src: "imgs/kfczingertowerburger.png", x: calorieslist[3], y: saltlist[3]}];
var burger5saltcal=[{src: "imgs/kfcminifilletburger.png", x: calorieslist[4], y: saltlist[4]}];
var burger6saltcal=[{src: "imgs/kfcthedaddyburger.png", x: calorieslist[5], y: saltlist[5]}];
var burger7saltcal=[{src: "imgs/kfcbaconandcheeseburger.png", x: calorieslist[6], y: saltlist[6]}];
var burger8saltcal=[{src: "imgs/kfczingerstacker.png", x: calorieslist[7], y: saltlist[7]}];
var burger9saltcal=[{src: "imgs/mcdnewyorkstack.png", x: calorieslist[8], y: saltlist[8]}];
var burger10saltcal=[{src: "imgs/mcdmississippistack.png", x: calorieslist[9], y: saltlist[9]}];
var burger11saltcal=[{src: "imgs/mcdsouthcarolinastack.png", x: calorieslist[10], y: saltlist[10]}];
var burger12saltcal=[{src: "imgs/mcdkansascitystack.png", x: calorieslist[11], y: saltlist[11]}];
var burger13saltcal=[{src: "imgs/mcdnashvillechicken.png", x: calorieslist[12], y: saltlist[12]}];
var burger14saltcal=[{src: "imgs/mcdalabamachicken.png", x: calorieslist[13], y: saltlist[13]}];
var burger15saltcal=[{src: "imgs/mcdsignatureclassic.png", x: calorieslist[14], y: saltlist[14]}];
var burger16saltcal=[{src: "imgs/mcdsignaturebbq.png", x: calorieslist[15], y: saltlist[15]}];
var burger17saltcal=[{src: "imgs/mcdsignaturespicy.png", x: calorieslist[16], y: saltlist[16]}];
var burger18saltcal=[{src: "imgs/mcdbigmac.png", x: calorieslist[17], y: saltlist[17]}];
var burger19saltcal=[{src: "imgs/mcdquarterpounderwithcheese.png", x: calorieslist[18], y: saltlist[18]}];
var burger20saltcal=[{src: "imgs/mcddoublecheeseburger.png", x: calorieslist[19], y: saltlist[19]}];
var burger21saltcal=[{src: "imgs/mcdbacondoublecheeseburger.png", x: calorieslist[20], y: saltlist[20]}];
var burger22saltcal=[{src: "imgs/mcdcheeseburger.png", x: calorieslist[21], y: saltlist[21]}];
var burger23saltcal=[{src: "imgs/mcdhamburger.png", x: calorieslist[22], y: saltlist[22]}];
var burger24saltcal=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: calorieslist[23], y: saltlist[23]}];
var burger25saltcal=[{src: "imgs/mcdchickenlegendbbq.png", x: calorieslist[24], y: saltlist[24]}];
var burger26saltcal=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: calorieslist[25], y: saltlist[25]}];
var burger27saltcal=[{src: "imgs/mcdmcchickensandwich.png", x: calorieslist[26], y: saltlist[26]}];
var burger28saltcal=[{src: "imgs/mcdmayochicken.png", x: calorieslist[27], y: saltlist[27]}];
var burger29saltcal=[{src: "imgs/mcdfiletofish.png", x: calorieslist[28], y: saltlist[28]}];
var burger30saltcal=[{src: "imgs/mcdvegetabledeluxe.png", x: calorieslist[29], y: saltlist[29]}];
var burger31saltcal=[{src: "imgs/bksmokyblackangus.png", x: calorieslist[30], y: saltlist[30]}];
var burger32saltcal=[{src: "imgs/bkwhoppersandwich.png", x: calorieslist[31], y: saltlist[31]}];
var burger33saltcal=[{src: "imgs/bkbacondoublexl.png", x: calorieslist[32], y: saltlist[32]}];
var burger34saltcal=[{src: "imgs/bktexasbbqking.png", x: calorieslist[33], y: saltlist[33]}];
var burger35saltcal=[{src: "imgs/bkdoublewhoppersandwich.png", x: calorieslist[34], y: saltlist[34]}];
var burger36saltcal=[{src: "imgs/bkbaconking.png", x: calorieslist[35], y: saltlist[35]}];
var burger37saltcal=[{src: "imgs/bkwesternbbqbacon.png", x: calorieslist[36], y: saltlist[36]}];
var burger38saltcal=[{src: "imgs/bkbigkingxl.png", x: calorieslist[37], y: saltlist[37]}];
var burger39saltcal=[{src: "imgs/bklongbigking.png", x: calorieslist[38], y: saltlist[38]}];
var burger40saltcal=[{src: "imgs/bklongtexasbbq.png", x: calorieslist[39], y: saltlist[39]}];
var burger41saltcal=[{src: "imgs/bkdoublecheeseburger.png", x: calorieslist[40], y: saltlist[40]}];
var burger42saltcal=[{src: "imgs/bkcheeseburger.png", x: calorieslist[41], y: saltlist[41]}];
var burger43saltcal=[{src: "imgs/bkbacondoublecheeseburger.png", x: calorieslist[42], y: saltlist[42]}];
var burger44saltcal=[{src: "imgs/bkhamburger.png", x: calorieslist[43], y: saltlist[43]}];
var burger45saltcal=[{src: "imgs/bkwhopperjrsandwich.png", x: calorieslist[44], y: saltlist[44]}];
var burger46saltcal=[{src: "imgs/bkkidscheeseburger.png", x: calorieslist[45], y: saltlist[45]}];
var burger47saltcal=[{src: "imgs/bkkidshamburger.png", x: calorieslist[46], y: saltlist[46]}];
var burger48saltcal=[{src: "imgs/bktexasbbqcrispychicken.png", x: calorieslist[47], y: saltlist[47]}];
var burger49saltcal=[{src: "imgs/bkcrispychicken.png", x: calorieslist[48], y: saltlist[48]}];
var burger50saltcal=[{src: "imgs/bkcrispychickenbaconking.png", x: calorieslist[49], y: saltlist[49]}];
var burger51saltcal=[{src: "imgs/bkbaconcheesechickenroyale.png", x: calorieslist[50], y: saltlist[50]}];
var burger52saltcal=[{src: "imgs/bkchickenroyale.png", x: calorieslist[51], y: saltlist[51]}];
var burger53saltcal=[{src: "imgs/bkchickensandwich.png", x: calorieslist[52], y: saltlist[52]}];
var burger54saltcal=[{src: "imgs/bkkingfish.png", x: calorieslist[53], y: saltlist[53]}];
var burger55saltcal=[{src: "imgs/bkveggiebeanburger.png", x: calorieslist[54], y: saltlist[54]}];
var burger56saltcal=[{src: "imgs/bkkidsveggieburger.png", x: calorieslist[55], y: saltlist[55]}];


//Load the data for Salt-Sugar
var burger1saltsugar=[{src: "imgs/kfcfilletburger.png", x: sugarlist[0], y: saltlist[0]}];
var burger2saltsugar=[{src: "imgs/kfcfillettowerburger.png", x: sugarlist[1], y: saltlist[1]}];
var burger3saltsugar=[{src: "imgs/kfczingerburger.png", x: sugarlist[2], y: saltlist[2]}];
var burger4saltsugar=[{src: "imgs/kfczingertowerburger.png", x: sugarlist[3], y: saltlist[3]}];
var burger5saltsugar=[{src: "imgs/kfcminifilletburger.png", x: sugarlist[4], y: saltlist[4]}];
var burger6saltsugar=[{src: "imgs/kfcthedaddyburger.png", x: sugarlist[5], y: saltlist[5]}];
var burger7saltsugar=[{src: "imgs/kfcbaconandcheeseburger.png", x: sugarlist[6], y: saltlist[6]}];
var burger8saltsugar=[{src: "imgs/kfczingerstacker.png", x: sugarlist[7], y: saltlist[7]}];
var burger9saltsugar=[{src: "imgs/mcdnewyorkstack.png", x: sugarlist[8], y: saltlist[8]}];
var burger10saltsugar=[{src: "imgs/mcdmississippistack.png", x: sugarlist[9], y: saltlist[9]}];
var burger11saltsugar=[{src: "imgs/mcdsouthcarolinastack.png", x: sugarlist[10], y: saltlist[10]}];
var burger12saltsugar=[{src: "imgs/mcdkansascitystack.png", x: sugarlist[11], y: saltlist[11]}];
var burger13saltsugar=[{src: "imgs/mcdnashvillechicken.png", x: sugarlist[12], y: saltlist[12]}];
var burger14saltsugar=[{src: "imgs/mcdalabamachicken.png", x: sugarlist[13], y: saltlist[13]}];
var burger15saltsugar=[{src: "imgs/mcdsignatureclassic.png", x: sugarlist[14], y: saltlist[14]}];
var burger16saltsugar=[{src: "imgs/mcdsignaturebbq.png", x: sugarlist[15], y: saltlist[15]}];
var burger17saltsugar=[{src: "imgs/mcdsignaturespicy.png", x: sugarlist[16], y: saltlist[16]}];
var burger18saltsugar=[{src: "imgs/mcdbigmac.png", x: sugarlist[17], y: saltlist[17]}];
var burger19saltsugar=[{src: "imgs/mcdquarterpounderwithcheese.png", x: sugarlist[18], y: saltlist[18]}];
var burger20saltsugar=[{src: "imgs/mcddoublecheeseburger.png", x: sugarlist[19], y: saltlist[19]}];
var burger21saltsugar=[{src: "imgs/mcdbacondoublecheeseburger.png", x: sugarlist[20], y: saltlist[20]}];
var burger22saltsugar=[{src: "imgs/mcdcheeseburger.png", x: sugarlist[21], y: saltlist[21]}];
var burger23saltsugar=[{src: "imgs/mcdhamburger.png", x: sugarlist[22], y: saltlist[22]}];
var burger24saltsugar=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: sugarlist[23], y: saltlist[23]}];
var burger25saltsugar=[{src: "imgs/mcdchickenlegendbbq.png", x: sugarlist[24], y: saltlist[24]}];
var burger26saltsugar=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: sugarlist[25], y: saltlist[25]}];
var burger27saltsugar=[{src: "imgs/mcdmcchickensandwich.png", x: sugarlist[26], y: saltlist[26]}];
var burger28saltsugar=[{src: "imgs/mcdmayochicken.png", x: sugarlist[27], y: saltlist[27]}];
var burger29saltsugar=[{src: "imgs/mcdfiletofish.png", x: sugarlist[28], y: saltlist[28]}];
var burger30saltsugar=[{src: "imgs/mcdvegetabledeluxe.png", x: sugarlist[29], y: saltlist[29]}];
var burger31saltsugar=[{src: "imgs/bksmokyblackangus.png", x: sugarlist[30], y: saltlist[30]}];
var burger32saltsugar=[{src: "imgs/bkwhoppersandwich.png", x: sugarlist[31], y: saltlist[31]}];
var burger33saltsugar=[{src: "imgs/bkbacondoublexl.png", x: sugarlist[32], y: saltlist[32]}];
var burger34saltsugar=[{src: "imgs/bktexasbbqking.png", x: sugarlist[33], y: saltlist[33]}];
var burger35saltsugar=[{src: "imgs/bkdoublewhoppersandwich.png", x: sugarlist[34], y: saltlist[34]}];
var burger36saltsugar=[{src: "imgs/bkbaconking.png", x: sugarlist[35], y: saltlist[35]}];
var burger37saltsugar=[{src: "imgs/bkwesternbbqbacon.png", x: sugarlist[36], y: saltlist[36]}];
var burger38saltsugar=[{src: "imgs/bkbigkingxl.png", x: sugarlist[37], y: saltlist[37]}];
var burger39saltsugar=[{src: "imgs/bklongbigking.png", x: sugarlist[38], y: saltlist[38]}];
var burger40saltsugar=[{src: "imgs/bklongtexasbbq.png", x: sugarlist[39], y: saltlist[39]}];
var burger41saltsugar=[{src: "imgs/bkdoublecheeseburger.png", x: sugarlist[40], y: saltlist[40]}];
var burger42saltsugar=[{src: "imgs/bkcheeseburger.png", x: sugarlist[41], y: saltlist[41]}];
var burger43saltsugar=[{src: "imgs/bkbacondoublecheeseburger.png", x: sugarlist[42], y: saltlist[42]}];
var burger44saltsugar=[{src: "imgs/bkhamburger.png", x: sugarlist[43], y: saltlist[43]}];
var burger45saltsugar=[{src: "imgs/bkwhopperjrsandwich.png", x: sugarlist[44], y: saltlist[44]}];
var burger46saltsugar=[{src: "imgs/bkkidscheeseburger.png", x: sugarlist[45], y: saltlist[45]}];
var burger47saltsugar=[{src: "imgs/bkkidshamburger.png", x: sugarlist[46], y: saltlist[46]}];
var burger48saltsugar=[{src: "imgs/bktexasbbqcrispychicken.png", x: sugarlist[47], y: saltlist[47]}];
var burger49saltsugar=[{src: "imgs/bkcrispychicken.png", x: sugarlist[48], y: saltlist[48]}];
var burger50saltsugar=[{src: "imgs/bkcrispychickenbaconking.png", x: sugarlist[49], y: saltlist[49]}];
var burger51saltsugar=[{src: "imgs/bkbaconcheesechickenroyale.png", x: sugarlist[50], y: saltlist[50]}];
var burger52saltsugar=[{src: "imgs/bkchickenroyale.png", x: sugarlist[51], y: saltlist[51]}];
var burger53saltsugar=[{src: "imgs/bkchickensandwich.png", x: sugarlist[52], y: saltlist[52]}];
var burger54saltsugar=[{src: "imgs/bkkingfish.png", x: sugarlist[53], y: saltlist[53]}];
var burger55saltsugar=[{src: "imgs/bkveggiebeanburger.png", x: sugarlist[54], y: saltlist[54]}];
var burger56saltsugar=[{src: "imgs/bkkidsveggieburger.png", x: sugarlist[55], y: saltlist[55]}];


//Load the data for Salt-Fat
var burger1saltfat=[{src: "imgs/kfcfilletburger.png", x: fatlist[0], y: saltlist[0]}];
var burger2saltfat=[{src: "imgs/kfcfillettowerburger.png", x: fatlist[1], y: saltlist[1]}];
var burger3saltfat=[{src: "imgs/kfczingerburger.png", x: fatlist[2], y: saltlist[2]}];
var burger4saltfat=[{src: "imgs/kfczingertowerburger.png", x: fatlist[3], y: saltlist[3]}];
var burger5saltfat=[{src: "imgs/kfcminifilletburger.png", x: fatlist[4], y: saltlist[4]}];
var burger6saltfat=[{src: "imgs/kfcthedaddyburger.png", x: fatlist[5], y: saltlist[5]}];
var burger7saltfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: fatlist[6], y: saltlist[6]}];
var burger8saltfat=[{src: "imgs/kfczingerstacker.png", x: fatlist[7], y: saltlist[7]}];
var burger9saltfat=[{src: "imgs/mcdnewyorkstack.png", x: fatlist[8], y: saltlist[8]}];
var burger10saltfat=[{src: "imgs/mcdmississippistack.png", x: fatlist[9], y: saltlist[9]}];
var burger11saltfat=[{src: "imgs/mcdsouthcarolinastack.png", x: fatlist[10], y: saltlist[10]}];
var burger12saltfat=[{src: "imgs/mcdkansascitystack.png", x: fatlist[11], y: saltlist[11]}];
var burger13saltfat=[{src: "imgs/mcdnashvillechicken.png", x: fatlist[12], y: saltlist[12]}];
var burger14saltfat=[{src: "imgs/mcdalabamachicken.png", x: fatlist[13], y: saltlist[13]}];
var burger15saltfat=[{src: "imgs/mcdsignatureclassic.png", x: fatlist[14], y: saltlist[14]}];
var burger16saltfat=[{src: "imgs/mcdsignaturebbq.png", x: fatlist[15], y: saltlist[15]}];
var burger17saltfat=[{src: "imgs/mcdsignaturespicy.png", x: fatlist[16], y: saltlist[16]}];
var burger18saltfat=[{src: "imgs/mcdbigmac.png", x: fatlist[17], y: saltlist[17]}];
var burger19saltfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: fatlist[18], y: saltlist[18]}];
var burger20saltfat=[{src: "imgs/mcddoublecheeseburger.png", x: fatlist[19], y: saltlist[19]}];
var burger21saltfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: fatlist[20], y: saltlist[20]}];
var burger22saltfat=[{src: "imgs/mcdcheeseburger.png", x: fatlist[21], y: saltlist[21]}];
var burger23saltfat=[{src: "imgs/mcdhamburger.png", x: fatlist[22], y: saltlist[22]}];
var burger24saltfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: fatlist[23], y: saltlist[23]}];
var burger25saltfat=[{src: "imgs/mcdchickenlegendbbq.png", x: fatlist[24], y: saltlist[24]}];
var burger26saltfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: fatlist[25], y: saltlist[25]}];
var burger27saltfat=[{src: "imgs/mcdmcchickensandwich.png", x: fatlist[26], y: saltlist[26]}];
var burger28saltfat=[{src: "imgs/mcdmayochicken.png", x: fatlist[27], y: saltlist[27]}];
var burger29saltfat=[{src: "imgs/mcdfiletofish.png", x: fatlist[28], y: saltlist[28]}];
var burger30saltfat=[{src: "imgs/mcdvegetabledeluxe.png", x: fatlist[29], y: saltlist[29]}];
var burger31saltfat=[{src: "imgs/bksmokyblackangus.png", x: fatlist[30], y: saltlist[30]}];
var burger32saltfat=[{src: "imgs/bkwhoppersandwich.png", x: fatlist[31], y: saltlist[31]}];
var burger33saltfat=[{src: "imgs/bkbacondoublexl.png", x: fatlist[32], y: saltlist[32]}];
var burger34saltfat=[{src: "imgs/bktexasbbqking.png", x: fatlist[33], y: saltlist[33]}];
var burger35saltfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: fatlist[34], y: saltlist[34]}];
var burger36saltfat=[{src: "imgs/bkbaconking.png", x: fatlist[35], y: saltlist[35]}];
var burger37saltfat=[{src: "imgs/bkwesternbbqbacon.png", x: fatlist[36], y: saltlist[36]}];
var burger38saltfat=[{src: "imgs/bkbigkingxl.png", x: fatlist[37], y: saltlist[37]}];
var burger39saltfat=[{src: "imgs/bklongbigking.png", x: fatlist[38], y: saltlist[38]}];
var burger40saltfat=[{src: "imgs/bklongtexasbbq.png", x: fatlist[39], y: saltlist[39]}];
var burger41saltfat=[{src: "imgs/bkdoublecheeseburger.png", x: fatlist[40], y: saltlist[40]}];
var burger42saltfat=[{src: "imgs/bkcheeseburger.png", x: fatlist[41], y: saltlist[41]}];
var burger43saltfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: fatlist[42], y: saltlist[42]}];
var burger44saltfat=[{src: "imgs/bkhamburger.png", x: fatlist[43], y: saltlist[43]}];
var burger45saltfat=[{src: "imgs/bkwhopperjrsandwich.png", x: fatlist[44], y: saltlist[44]}];
var burger46saltfat=[{src: "imgs/bkkidscheeseburger.png", x: fatlist[45], y: saltlist[45]}];
var burger47saltfat=[{src: "imgs/bkkidshamburger.png", x: fatlist[46], y: saltlist[46]}];
var burger48saltfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: fatlist[47], y: saltlist[47]}];
var burger49saltfat=[{src: "imgs/bkcrispychicken.png", x: fatlist[48], y: saltlist[48]}];
var burger50saltfat=[{src: "imgs/bkcrispychickenbaconking.png", x: fatlist[49], y: saltlist[49]}];
var burger51saltfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: fatlist[50], y: saltlist[50]}];
var burger52saltfat=[{src: "imgs/bkchickenroyale.png", x: fatlist[51], y: saltlist[51]}];
var burger53saltfat=[{src: "imgs/bkchickensandwich.png", x: fatlist[52], y: saltlist[52]}];
var burger54saltfat=[{src: "imgs/bkkingfish.png", x: fatlist[53], y: saltlist[53]}];
var burger55saltfat=[{src: "imgs/bkveggiebeanburger.png", x: fatlist[54], y: saltlist[54]}];
var burger56saltfat=[{src: "imgs/bkkidsveggieburger.png", x: fatlist[55], y: saltlist[55]}];

//Load the data for Salt-SatFat
var burger1saltsatfat=[{src: "imgs/kfcfilletburger.png", x: satfatlist[0], y: saltlist[0]}];
var burger2saltsatfat=[{src: "imgs/kfcfillettowerburger.png", x: satfatlist[1], y: saltlist[1]}];
var burger3saltsatfat=[{src: "imgs/kfczingerburger.png", x: satfatlist[2], y: saltlist[2]}];
var burger4saltsatfat=[{src: "imgs/kfczingertowerburger.png", x: satfatlist[3], y: saltlist[3]}];
var burger5saltsatfat=[{src: "imgs/kfcminifilletburger.png", x: satfatlist[4], y: saltlist[4]}];
var burger6saltsatfat=[{src: "imgs/kfcthedaddyburger.png", x: satfatlist[5], y: saltlist[5]}];
var burger7saltsatfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: satfatlist[6], y: saltlist[6]}];
var burger8saltsatfat=[{src: "imgs/kfczingerstacker.png", x: satfatlist[7], y: saltlist[7]}];
var burger9saltsatfat=[{src: "imgs/mcdnewyorkstack.png", x: satfatlist[8], y: saltlist[8]}];
var burger10saltsatfat=[{src: "imgs/mcdmississippistack.png", x: satfatlist[9], y: saltlist[9]}];
var burger11saltsatfat=[{src: "imgs/mcdsouthcarolinastack.png", x: satfatlist[10], y: saltlist[10]}];
var burger12saltsatfat=[{src: "imgs/mcdkansascitystack.png", x: satfatlist[11], y: saltlist[11]}];
var burger13saltsatfat=[{src: "imgs/mcdnashvillechicken.png", x: satfatlist[12], y: saltlist[12]}];
var burger14saltsatfat=[{src: "imgs/mcdalabamachicken.png", x: satfatlist[13], y: saltlist[13]}];
var burger15saltsatfat=[{src: "imgs/mcdsignatureclassic.png", x: satfatlist[14], y: saltlist[14]}];
var burger16saltsatfat=[{src: "imgs/mcdsignaturebbq.png", x: satfatlist[15], y: saltlist[15]}];
var burger17saltsatfat=[{src: "imgs/mcdsignaturespicy.png", x: satfatlist[16], y: saltlist[16]}];
var burger18saltsatfat=[{src: "imgs/mcdbigmac.png", x: satfatlist[17], y: saltlist[17]}];
var burger19saltsatfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: satfatlist[18], y: saltlist[18]}];
var burger20saltsatfat=[{src: "imgs/mcddoublecheeseburger.png", x: satfatlist[19], y: saltlist[19]}];
var burger21saltsatfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: satfatlist[20], y: saltlist[20]}];
var burger22saltsatfat=[{src: "imgs/mcdcheeseburger.png", x: satfatlist[21], y: saltlist[21]}];
var burger23saltsatfat=[{src: "imgs/mcdhamburger.png", x: satfatlist[22], y: saltlist[22]}];
var burger24saltsatfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: satfatlist[23], y: saltlist[23]}];
var burger25saltsatfat=[{src: "imgs/mcdchickenlegendbbq.png", x: satfatlist[24], y: saltlist[24]}];
var burger26saltsatfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: satfatlist[25], y: saltlist[25]}];
var burger27saltsatfat=[{src: "imgs/mcdmcchickensandwich.png", x: satfatlist[26], y: saltlist[26]}];
var burger28saltsatfat=[{src: "imgs/mcdmayochicken.png", x: satfatlist[27], y: saltlist[27]}];
var burger29saltsatfat=[{src: "imgs/mcdfiletofish.png", x: satfatlist[28], y: saltlist[28]}];
var burger30saltsatfat=[{src: "imgs/mcdvegetabledeluxe.png", x: satfatlist[29], y: saltlist[29]}];
var burger31saltsatfat=[{src: "imgs/bksmokyblackangus.png", x: satfatlist[30], y: saltlist[30]}];
var burger32saltsatfat=[{src: "imgs/bkwhoppersandwich.png", x: satfatlist[31], y: saltlist[31]}];
var burger33saltsatfat=[{src: "imgs/bkbacondoublexl.png", x: satfatlist[32], y: saltlist[32]}];
var burger34saltsatfat=[{src: "imgs/bktexasbbqking.png", x: satfatlist[33], y: saltlist[33]}];
var burger35saltsatfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: satfatlist[34], y: saltlist[34]}];
var burger36saltsatfat=[{src: "imgs/bkbaconking.png", x: satfatlist[35], y: saltlist[35]}];
var burger37saltsatfat=[{src: "imgs/bkwesternbbqbacon.png", x: satfatlist[36], y: saltlist[36]}];
var burger38saltsatfat=[{src: "imgs/bkbigkingxl.png", x: satfatlist[37], y: saltlist[37]}];
var burger39saltsatfat=[{src: "imgs/bklongbigking.png", x: satfatlist[38], y: saltlist[38]}];
var burger40saltsatfat=[{src: "imgs/bklongtexasbbq.png", x: satfatlist[39], y: saltlist[39]}];
var burger41saltsatfat=[{src: "imgs/bkdoublecheeseburger.png", x: satfatlist[40], y: saltlist[40]}];
var burger42saltsatfat=[{src: "imgs/bkcheeseburger.png", x: satfatlist[41], y: saltlist[41]}];
var burger43saltsatfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: satfatlist[42], y: saltlist[42]}];
var burger44saltsatfat=[{src: "imgs/bkhamburger.png", x: satfatlist[43], y: saltlist[43]}];
var burger45saltsatfat=[{src: "imgs/bkwhopperjrsandwich.png", x: satfatlist[44], y: saltlist[44]}];
var burger46saltsatfat=[{src: "imgs/bkkidscheeseburger.png", x: satfatlist[45], y: saltlist[45]}];
var burger47saltsatfat=[{src: "imgs/bkkidshamburger.png", x: satfatlist[46], y: saltlist[46]}];
var burger48saltsatfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: satfatlist[47], y: saltlist[47]}];
var burger49saltsatfat=[{src: "imgs/bkcrispychicken.png", x: satfatlist[48], y: saltlist[48]}];
var burger50saltsatfat=[{src: "imgs/bkcrispychickenbaconking.png", x: satfatlist[49], y: saltlist[49]}];
var burger51saltsatfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: satfatlist[50], y: saltlist[50]}];
var burger52saltsatfat=[{src: "imgs/bkchickenroyale.png", x: satfatlist[51], y: saltlist[51]}];
var burger53saltsatfat=[{src: "imgs/bkchickensandwich.png", x: satfatlist[52], y: saltlist[52]}];
var burger54saltsatfat=[{src: "imgs/bkkingfish.png", x: satfatlist[53], y: saltlist[53]}];
var burger55saltsatfat=[{src: "imgs/bkveggiebeanburger.png", x: satfatlist[54], y: saltlist[54]}];
var burger56saltsatfat=[{src: "imgs/bkkidsveggieburger.png", x: satfatlist[55], y: saltlist[55]}];

//Begin Lollipop for Salt
var marginloli = {top: 90, right: 30, bottom: 200, left: 100},
    widthloli = 960 - marginloli.left - marginloli.right,
    heightloli = 500 - marginloli.top - marginloli.bottom;

var svglolisalt = d3.select("#loli_datavizsalt")
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
svglolisalt.append("g")
  .attr("transform", "translate(0," + heightloli + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 5])
  .range([ heightloli, 0]);
svglolisalt.append("g")
  .call(d3.axisLeft(y));

var yAxissaltloli = d3.axisLeft().scale(y).ticks(5);		

// text label for the y axis
svglolisalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1) + " ," + 
                           (h - h/0.95 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//Lines
for (i = 0; i < 8; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#b27a7a")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#A3080C")
    .attr("stroke", "#A3080C")
}

//Lines
for (i = 8; i < 30; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#27742d")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#DA291C")
    .attr("stroke", "#DA291C")
}

//Lines
for (i = 30; i < 35; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 35; i < 36; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(saltlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkbaconking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King [Salt: 4.97 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King [Salt: 4.97 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 36; i < 47; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//Lines
for (i = 47; i < 48; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
    .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(saltlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King [Salt: 4.95 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King [Salt: 4.95 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 48; i < 50; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//Lines
for (i = 50; i < 51; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
    .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(saltlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King™, Burger King [Salt: 4.8 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King™, Burger King [Salt: 4.8 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 51; i < 56; i++) { 
svglolisalt.selectAll("myline")
  .data(burgersaltloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(saltlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisalt.selectAll("mycircle")
  .data(burgersaltloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(saltlist[i]); })
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
var yScalesalt = d3.scaleLinear()
		.domain([0, 5])
		.range([h - padding, padding]);

var xScalesaltcal = d3.scaleLinear()
		.domain([0, 1200])
		.range([padding, w - padding * 2]);

var xScalesaltsugar = d3.scaleLinear()
		.domain([0, 20])
		.range([padding, w - padding * 2]);

var xScalesaltfat = d3.scaleLinear()
		.domain([0, 75])
		.range([padding, w - padding * 2]);

var xScalesaltsatfat = d3.scaleLinear()
		.domain([0, 30])
		.range([padding, w - padding * 2]);

var yAxissalt = d3.axisLeft().scale(yScalesalt).ticks(5);		
var xAxissaltcal = d3.axisBottom().scale(xScalesaltcal).ticks(5);
var xAxissaltsugar = d3.axisBottom().scale(xScalesaltsugar).ticks(5);
var xAxissaltfat = d3.axisBottom().scale(xScalesaltfat).ticks(5);
var xAxissaltsatfat = d3.axisBottom().scale(xScalesaltsatfat).ticks(5);

//Create svg element
var svgsaltcal = d3.select("#scatterplot_datavizsaltcal")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsaltsugar = d3.select("#scatterplot_datavizsaltsugar")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsaltfat = d3.select("#scatterplot_datavizsaltfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Create svg element
var svgsaltsatfat = d3.select("#scatterplot_datavizsaltsatfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Salt-Cal
//x-axis
svgsaltcal.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissaltcal);
	
// text label for the x axis
svgsaltcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//y-axis
svgsaltcal.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissalt);

// text label for the y axis
svgsaltcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//Salt-Sugar
//x-axis
svgsaltsugar.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissaltsugar);
	
// text label for the x axis
svgsaltsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//y-axis
svgsaltsugar.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissalt);

// text label for the y axis
svgsaltsugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//Salt-Fat
//x-axis
svgsaltfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalfat);
	
// text label for the x axis
svgsaltfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//y-axis
svgsaltfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissalt);

// text label for the y axis
svgsaltfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//Salt-SatFat
//x-axis
svgsaltsatfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxiscalsatfat);
	
// text label for the x axis
svgsaltsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Saturated Fat (g)");

//y-axis
svgsaltsatfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissalt);

// text label for the y axis
svgsaltsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//Plot ALL the burgers

//Salt-Cal
svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger1saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger2saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger3saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger4saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger5saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger6saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger7saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger8saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger9saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger10saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger11saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger12saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger13saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger14saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger15saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger16saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger17saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger18saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger19saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger20saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger21saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger22saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger23saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger24saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger25saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger26saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger27saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger28saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger29saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger30saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger31saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger32saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger33saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger34saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger35saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger36saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger37saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger38saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger39saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger40saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger41saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger42saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger43saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger44saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger45saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger46saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger47saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger48saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger49saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger50saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger51saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger52saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger53saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger54saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger55saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltcal.append("g")
   .selectAll(".myPoint")
   .data(burger56saltcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesaltcal(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Salt-Sugar
svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger1saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger2saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger3saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger4saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger5saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger6saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger7saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger8saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger9saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger10saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger11saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger12saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger13saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger14saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger15saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger16saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger17saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger18saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger19saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger20saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger21saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger22saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger23saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger24saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger25saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger26saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger27saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger28saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger29saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger30saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger31saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger32saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger33saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger34saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger35saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger36saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger37saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger38saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger39saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger40saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger41saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger42saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger43saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger44saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger45saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger46saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger47saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger48saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger49saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger50saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger51saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger52saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger53saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger54saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger55saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsugar.append("g")
   .selectAll(".myPoint")
   .data(burger56saltsugar)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesaltsugar(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Sugar: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


//Salt-Fat
svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger1saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger2saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger3saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger4saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger5saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger6saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger7saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger8saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger9saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger10saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger11saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger12saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger13saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger14saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger15saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger16saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger17saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger18saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger19saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger20saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger21saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger22saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger23saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger24saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger25saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger26saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger27saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger28saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger29saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger30saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger31saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger32saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger33saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger34saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger35saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger36saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger37saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger38saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger39saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger40saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger41saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger42saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger43saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger44saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger45saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger46saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger47saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger48saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger49saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger50saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger51saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger52saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger53saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger54saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger55saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltfat.append("g")
   .selectAll(".myPoint")
   .data(burger56saltfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesaltfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });





//Salt-SatFat
svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger1saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger2saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger3saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger4saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger5saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger6saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger7saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger8saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger9saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger10saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger11saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger12saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger13saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger14saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger15saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger16saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger17saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger18saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger19saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger20saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger21saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger22saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger23saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger24saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger25saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger26saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger27saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger28saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger29saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger30saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger31saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger32saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger33saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger34saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger35saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger36saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger37saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger38saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger39saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger40saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger41saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger42saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger43saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger44saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger45saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger46saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger47saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger48saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger49saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger50saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger51saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger52saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger53saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger54saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger55saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsaltsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger56saltsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesaltsatfat(d.x);})      
   .attr("y", function(d) {return yScalesalt(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Salt: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
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