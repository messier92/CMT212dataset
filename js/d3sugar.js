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
var burgersugarloli = []

for (i = 0; i < burgerlist.length; i++) { 
burgersugarloli.push([burgerlist[i],sugarlist[i]]);
}

//Scatterplot data for Sugar-Cal
var burger1sugarcal=[{src: "imgs/kfcfilletburger.png", x: calorieslist[0], y: sugarlist[0]}];
var burger2sugarcal=[{src: "imgs/kfcfillettowerburger.png", x: calorieslist[1], y: sugarlist[1]}];
var burger3sugarcal=[{src: "imgs/kfczingerburger.png", x: calorieslist[2], y: sugarlist[2]}];
var burger4sugarcal=[{src: "imgs/kfczingertowerburger.png", x: calorieslist[3], y: sugarlist[3]}];
var burger5sugarcal=[{src: "imgs/kfcminifilletburger.png", x: calorieslist[4], y: sugarlist[4]}];
var burger6sugarcal=[{src: "imgs/kfcthedaddyburger.png", x: calorieslist[5], y: sugarlist[5]}];
var burger7sugarcal=[{src: "imgs/kfcbaconandcheeseburger.png", x: calorieslist[6], y: sugarlist[6]}];
var burger8sugarcal=[{src: "imgs/kfczingerstacker.png", x: calorieslist[7], y: sugarlist[7]}];
var burger9sugarcal=[{src: "imgs/mcdnewyorkstack.png", x: calorieslist[8], y: sugarlist[8]}];
var burger10sugarcal=[{src: "imgs/mcdmississippistack.png", x: calorieslist[9], y: sugarlist[9]}];
var burger11sugarcal=[{src: "imgs/mcdsouthcarolinastack.png", x: calorieslist[10], y: sugarlist[10]}];
var burger12sugarcal=[{src: "imgs/mcdkansascitystack.png", x: calorieslist[11], y: sugarlist[11]}];
var burger13sugarcal=[{src: "imgs/mcdnashvillechicken.png", x: calorieslist[12], y: sugarlist[12]}];
var burger14sugarcal=[{src: "imgs/mcdalabamachicken.png", x: calorieslist[13], y: sugarlist[13]}];
var burger15sugarcal=[{src: "imgs/mcdsignatureclassic.png", x: calorieslist[14], y: sugarlist[14]}];
var burger16sugarcal=[{src: "imgs/mcdsignaturebbq.png", x: calorieslist[15], y: sugarlist[15]}];
var burger17sugarcal=[{src: "imgs/mcdsignaturespicy.png", x: calorieslist[16], y: sugarlist[16]}];
var burger18sugarcal=[{src: "imgs/mcdbigmac.png", x: calorieslist[17], y: sugarlist[17]}];
var burger19sugarcal=[{src: "imgs/mcdquarterpounderwithcheese.png", x: calorieslist[18], y: sugarlist[18]}];
var burger20sugarcal=[{src: "imgs/mcddoublecheeseburger.png", x: calorieslist[19], y: sugarlist[19]}];
var burger21sugarcal=[{src: "imgs/mcdbacondoublecheeseburger.png", x: calorieslist[20], y: sugarlist[20]}];
var burger22sugarcal=[{src: "imgs/mcdcheeseburger.png", x: calorieslist[21], y: sugarlist[21]}];
var burger23sugarcal=[{src: "imgs/mcdhamburger.png", x: calorieslist[22], y: sugarlist[22]}];
var burger24sugarcal=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: calorieslist[23], y: sugarlist[23]}];
var burger25sugarcal=[{src: "imgs/mcdchickenlegendbbq.png", x: calorieslist[24], y: sugarlist[24]}];
var burger26sugarcal=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: calorieslist[25], y: sugarlist[25]}];
var burger27sugarcal=[{src: "imgs/mcdmcchickensandwich.png", x: calorieslist[26], y: sugarlist[26]}];
var burger28sugarcal=[{src: "imgs/mcdmayochicken.png", x: calorieslist[27], y: sugarlist[27]}];
var burger29sugarcal=[{src: "imgs/mcdfiletofish.png", x: calorieslist[28], y: sugarlist[28]}];
var burger30sugarcal=[{src: "imgs/mcdvegetabledeluxe.png", x: calorieslist[29], y: sugarlist[29]}];
var burger31sugarcal=[{src: "imgs/bksmokyblackangus.png", x: calorieslist[30], y: sugarlist[30]}];
var burger32sugarcal=[{src: "imgs/bkwhoppersandwich.png", x: calorieslist[31], y: sugarlist[31]}];
var burger33sugarcal=[{src: "imgs/bkbacondoublexl.png", x: calorieslist[32], y: sugarlist[32]}];
var burger34sugarcal=[{src: "imgs/bktexasbbqking.png", x: calorieslist[33], y: sugarlist[33]}];
var burger35sugarcal=[{src: "imgs/bkdoublewhoppersandwich.png", x: calorieslist[34], y: sugarlist[34]}];
var burger36sugarcal=[{src: "imgs/bkbaconking.png", x: calorieslist[35], y: sugarlist[35]}];
var burger37sugarcal=[{src: "imgs/bkwesternbbqbacon.png", x: calorieslist[36], y: sugarlist[36]}];
var burger38sugarcal=[{src: "imgs/bkbigkingxl.png", x: calorieslist[37], y: sugarlist[37]}];
var burger39sugarcal=[{src: "imgs/bklongbigking.png", x: calorieslist[38], y: sugarlist[38]}];
var burger40sugarcal=[{src: "imgs/bklongtexasbbq.png", x: calorieslist[39], y: sugarlist[39]}];
var burger41sugarcal=[{src: "imgs/bkdoublecheeseburger.png", x: calorieslist[40], y: sugarlist[40]}];
var burger42sugarcal=[{src: "imgs/bkcheeseburger.png", x: calorieslist[41], y: sugarlist[41]}];
var burger43sugarcal=[{src: "imgs/bkbacondoublecheeseburger.png", x: calorieslist[42], y: sugarlist[42]}];
var burger44sugarcal=[{src: "imgs/bkhamburger.png", x: calorieslist[43], y: sugarlist[43]}];
var burger45sugarcal=[{src: "imgs/bkwhopperjrsandwich.png", x: calorieslist[44], y: sugarlist[44]}];
var burger46sugarcal=[{src: "imgs/bkkidscheeseburger.png", x: calorieslist[45], y: sugarlist[45]}];
var burger47sugarcal=[{src: "imgs/bkkidshamburger.png", x: calorieslist[46], y: sugarlist[46]}];
var burger48sugarcal=[{src: "imgs/bktexasbbqcrispychicken.png", x: calorieslist[47], y: sugarlist[47]}];
var burger49sugarcal=[{src: "imgs/bkcrispychicken.png", x: calorieslist[48], y: sugarlist[48]}];
var burger50sugarcal=[{src: "imgs/bkcrispychickenbaconking.png", x: calorieslist[49], y: sugarlist[49]}];
var burger51sugarcal=[{src: "imgs/bkbaconcheesechickenroyale.png", x: calorieslist[50], y: sugarlist[50]}];
var burger52sugarcal=[{src: "imgs/bkchickenroyale.png", x: calorieslist[51], y: sugarlist[51]}];
var burger53sugarcal=[{src: "imgs/bkchickensandwich.png", x: calorieslist[52], y: sugarlist[52]}];
var burger54sugarcal=[{src: "imgs/bkkingfish.png", x: calorieslist[53], y: sugarlist[53]}];
var burger55sugarcal=[{src: "imgs/bkveggiebeanburger.png", x: calorieslist[54], y: sugarlist[54]}];
var burger56sugarcal=[{src: "imgs/bkkidsveggieburger.png", x: calorieslist[55], y: sugarlist[55]}];


//Scatterplot data for Sugar-Salt
var burger1sugarsalt=[{src: "imgs/kfcfilletburger.png", x: saltlist[0], y: sugarlist[0]}];
var burger2sugarsalt=[{src: "imgs/kfcfillettowerburger.png", x: saltlist[1], y: sugarlist[1]}];
var burger3sugarsalt=[{src: "imgs/kfczingerburger.png", x: saltlist[2], y: sugarlist[2]}];
var burger4sugarsalt=[{src: "imgs/kfczingertowerburger.png", x: saltlist[3], y: sugarlist[3]}];
var burger5sugarsalt=[{src: "imgs/kfcminifilletburger.png", x: saltlist[4], y: sugarlist[4]}];
var burger6sugarsalt=[{src: "imgs/kfcthedaddyburger.png", x: saltlist[5], y: sugarlist[5]}];
var burger7sugarsalt=[{src: "imgs/kfcbaconandcheeseburger.png", x: saltlist[6], y: sugarlist[6]}];
var burger8sugarsalt=[{src: "imgs/kfczingerstacker.png", x: saltlist[7], y: sugarlist[7]}];
var burger9sugarsalt=[{src: "imgs/mcdnewyorkstack.png", x: saltlist[8], y: sugarlist[8]}];
var burger10sugarsalt=[{src: "imgs/mcdmississippistack.png", x: saltlist[9], y: sugarlist[9]}];
var burger11sugarsalt=[{src: "imgs/mcdsouthcarolinastack.png", x: saltlist[10], y: sugarlist[10]}];
var burger12sugarsalt=[{src: "imgs/mcdkansascitystack.png", x: saltlist[11], y: sugarlist[11]}];
var burger13sugarsalt=[{src: "imgs/mcdnashvillechicken.png", x: saltlist[12], y: sugarlist[12]}];
var burger14sugarsalt=[{src: "imgs/mcdalabamachicken.png", x: saltlist[13], y: sugarlist[13]}];
var burger15sugarsalt=[{src: "imgs/mcdsignatureclassic.png", x: saltlist[14], y: sugarlist[14]}];
var burger16sugarsalt=[{src: "imgs/mcdsignaturebbq.png", x: saltlist[15], y: sugarlist[15]}];
var burger17sugarsalt=[{src: "imgs/mcdsignaturespicy.png", x: saltlist[16], y: sugarlist[16]}];
var burger18sugarsalt=[{src: "imgs/mcdbigmac.png", x: saltlist[17], y: sugarlist[17]}];
var burger19sugarsalt=[{src: "imgs/mcdquarterpounderwithcheese.png", x: saltlist[18], y: sugarlist[18]}];
var burger20sugarsalt=[{src: "imgs/mcddoublecheeseburger.png", x: saltlist[19], y: sugarlist[19]}];
var burger21sugarsalt=[{src: "imgs/mcdbacondoublecheeseburger.png", x: saltlist[20], y: sugarlist[20]}];
var burger22sugarsalt=[{src: "imgs/mcdcheeseburger.png", x: saltlist[21], y: sugarlist[21]}];
var burger23sugarsalt=[{src: "imgs/mcdhamburger.png", x: saltlist[22], y: sugarlist[22]}];
var burger24sugarsalt=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: saltlist[23], y: sugarlist[23]}];
var burger25sugarsalt=[{src: "imgs/mcdchickenlegendbbq.png", x: saltlist[24], y: sugarlist[24]}];
var burger26sugarsalt=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: saltlist[25], y: sugarlist[25]}];
var burger27sugarsalt=[{src: "imgs/mcdmcchickensandwich.png", x: saltlist[26], y: sugarlist[26]}];
var burger28sugarsalt=[{src: "imgs/mcdmayochicken.png", x: saltlist[27], y: sugarlist[27]}];
var burger29sugarsalt=[{src: "imgs/mcdfiletofish.png", x: saltlist[28], y: sugarlist[28]}];
var burger30sugarsalt=[{src: "imgs/mcdvegetabledeluxe.png", x: saltlist[29], y: sugarlist[29]}];
var burger31sugarsalt=[{src: "imgs/bksmokyblackangus.png", x: saltlist[30], y: sugarlist[30]}];
var burger32sugarsalt=[{src: "imgs/bkwhoppersandwich.png", x: saltlist[31], y: sugarlist[31]}];
var burger33sugarsalt=[{src: "imgs/bkbacondoublexl.png", x: saltlist[32], y: sugarlist[32]}];
var burger34sugarsalt=[{src: "imgs/bktexasbbqking.png", x: saltlist[33], y: sugarlist[33]}];
var burger35sugarsalt=[{src: "imgs/bkdoublewhoppersandwich.png", x: saltlist[34], y: sugarlist[34]}];
var burger36sugarsalt=[{src: "imgs/bkbaconking.png", x: saltlist[35], y: sugarlist[35]}];
var burger37sugarsalt=[{src: "imgs/bkwesternbbqbacon.png", x: saltlist[36], y: sugarlist[36]}];
var burger38sugarsalt=[{src: "imgs/bkbigkingxl.png", x: saltlist[37], y: sugarlist[37]}];
var burger39sugarsalt=[{src: "imgs/bklongbigking.png", x: saltlist[38], y: sugarlist[38]}];
var burger40sugarsalt=[{src: "imgs/bklongtexasbbq.png", x: saltlist[39], y: sugarlist[39]}];
var burger41sugarsalt=[{src: "imgs/bkdoublecheeseburger.png", x: saltlist[40], y: sugarlist[40]}];
var burger42sugarsalt=[{src: "imgs/bkcheeseburger.png", x: saltlist[41], y: sugarlist[41]}];
var burger43sugarsalt=[{src: "imgs/bkbacondoublecheeseburger.png", x: saltlist[42], y: sugarlist[42]}];
var burger44sugarsalt=[{src: "imgs/bkhamburger.png", x: saltlist[43], y: sugarlist[43]}];
var burger45sugarsalt=[{src: "imgs/bkwhopperjrsandwich.png", x: saltlist[44], y: sugarlist[44]}];
var burger46sugarsalt=[{src: "imgs/bkkidscheeseburger.png", x: saltlist[45], y: sugarlist[45]}];
var burger47sugarsalt=[{src: "imgs/bkkidshamburger.png", x: saltlist[46], y: sugarlist[46]}];
var burger48sugarsalt=[{src: "imgs/bktexasbbqcrispychicken.png", x: saltlist[47], y: sugarlist[47]}];
var burger49sugarsalt=[{src: "imgs/bkcrispychicken.png", x: saltlist[48], y: sugarlist[48]}];
var burger50sugarsalt=[{src: "imgs/bkcrispychickenbaconking.png", x: saltlist[49], y: sugarlist[49]}];
var burger51sugarsalt=[{src: "imgs/bkbaconcheesechickenroyale.png", x: saltlist[50], y: sugarlist[50]}];
var burger52sugarsalt=[{src: "imgs/bkchickenroyale.png", x: saltlist[51], y: sugarlist[51]}];
var burger53sugarsalt=[{src: "imgs/bkchickensandwich.png", x: saltlist[52], y: sugarlist[52]}];
var burger54sugarsalt=[{src: "imgs/bkkingfish.png", x: saltlist[53], y: sugarlist[53]}];
var burger55sugarsalt=[{src: "imgs/bkveggiebeanburger.png", x: saltlist[54], y: sugarlist[54]}];
var burger56sugarsalt=[{src: "imgs/bkkidsveggieburger.png", x: saltlist[55], y: sugarlist[55]}];

//Scatterplot data for Sugar-Fat
var burger1sugarfat=[{src: "imgs/kfcfilletburger.png", x: fatlist[0], y: sugarlist[0]}];
var burger2sugarfat=[{src: "imgs/kfcfillettowerburger.png", x: fatlist[1], y: sugarlist[1]}];
var burger3sugarfat=[{src: "imgs/kfczingerburger.png", x: fatlist[2], y: sugarlist[2]}];
var burger4sugarfat=[{src: "imgs/kfczingertowerburger.png", x: fatlist[3], y: sugarlist[3]}];
var burger5sugarfat=[{src: "imgs/kfcminifilletburger.png", x: fatlist[4], y: sugarlist[4]}];
var burger6sugarfat=[{src: "imgs/kfcthedaddyburger.png", x: fatlist[5], y: sugarlist[5]}];
var burger7sugarfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: fatlist[6], y: sugarlist[6]}];
var burger8sugarfat=[{src: "imgs/kfczingerstacker.png", x: fatlist[7], y: sugarlist[7]}];
var burger9sugarfat=[{src: "imgs/mcdnewyorkstack.png", x: fatlist[8], y: sugarlist[8]}];
var burger10sugarfat=[{src: "imgs/mcdmississippistack.png", x: fatlist[9], y: sugarlist[9]}];
var burger11sugarfat=[{src: "imgs/mcdsouthcarolinastack.png", x: fatlist[10], y: sugarlist[10]}];
var burger12sugarfat=[{src: "imgs/mcdkansascitystack.png", x: fatlist[11], y: sugarlist[11]}];
var burger13sugarfat=[{src: "imgs/mcdnashvillechicken.png", x: fatlist[12], y: sugarlist[12]}];
var burger14sugarfat=[{src: "imgs/mcdalabamachicken.png", x: fatlist[13], y: sugarlist[13]}];
var burger15sugarfat=[{src: "imgs/mcdsignatureclassic.png", x: fatlist[14], y: sugarlist[14]}];
var burger16sugarfat=[{src: "imgs/mcdsignaturebbq.png", x: fatlist[15], y: sugarlist[15]}];
var burger17sugarfat=[{src: "imgs/mcdsignaturespicy.png", x: fatlist[16], y: sugarlist[16]}];
var burger18sugarfat=[{src: "imgs/mcdbigmac.png", x: fatlist[17], y: sugarlist[17]}];
var burger19sugarfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: fatlist[18], y: sugarlist[18]}];
var burger20sugarfat=[{src: "imgs/mcddoublecheeseburger.png", x: fatlist[19], y: sugarlist[19]}];
var burger21sugarfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: fatlist[20], y: sugarlist[20]}];
var burger22sugarfat=[{src: "imgs/mcdcheeseburger.png", x: fatlist[21], y: sugarlist[21]}];
var burger23sugarfat=[{src: "imgs/mcdhamburger.png", x: fatlist[22], y: sugarlist[22]}];
var burger24sugarfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: fatlist[23], y: sugarlist[23]}];
var burger25sugarfat=[{src: "imgs/mcdchickenlegendbbq.png", x: fatlist[24], y: sugarlist[24]}];
var burger26sugarfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: fatlist[25], y: sugarlist[25]}];
var burger27sugarfat=[{src: "imgs/mcdmcchickensandwich.png", x: fatlist[26], y: sugarlist[26]}];
var burger28sugarfat=[{src: "imgs/mcdmayochicken.png", x: fatlist[27], y: sugarlist[27]}];
var burger29sugarfat=[{src: "imgs/mcdfiletofish.png", x: fatlist[28], y: sugarlist[28]}];
var burger30sugarfat=[{src: "imgs/mcdvegetabledeluxe.png", x: fatlist[29], y: sugarlist[29]}];
var burger31sugarfat=[{src: "imgs/bksmokyblackangus.png", x: fatlist[30], y: sugarlist[30]}];
var burger32sugarfat=[{src: "imgs/bkwhoppersandwich.png", x: fatlist[31], y: sugarlist[31]}];
var burger33sugarfat=[{src: "imgs/bkbacondoublexl.png", x: fatlist[32], y: sugarlist[32]}];
var burger34sugarfat=[{src: "imgs/bktexasbbqking.png", x: fatlist[33], y: sugarlist[33]}];
var burger35sugarfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: fatlist[34], y: sugarlist[34]}];
var burger36sugarfat=[{src: "imgs/bkbaconking.png", x: fatlist[35], y: sugarlist[35]}];
var burger37sugarfat=[{src: "imgs/bkwesternbbqbacon.png", x: fatlist[36], y: sugarlist[36]}];
var burger38sugarfat=[{src: "imgs/bkbigkingxl.png", x: fatlist[37], y: sugarlist[37]}];
var burger39sugarfat=[{src: "imgs/bklongbigking.png", x: fatlist[38], y: sugarlist[38]}];
var burger40sugarfat=[{src: "imgs/bklongtexasbbq.png", x: fatlist[39], y: sugarlist[39]}];
var burger41sugarfat=[{src: "imgs/bkdoublecheeseburger.png", x: fatlist[40], y: sugarlist[40]}];
var burger42sugarfat=[{src: "imgs/bkcheeseburger.png", x: fatlist[41], y: sugarlist[41]}];
var burger43sugarfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: fatlist[42], y: sugarlist[42]}];
var burger44sugarfat=[{src: "imgs/bkhamburger.png", x: fatlist[43], y: sugarlist[43]}];
var burger45sugarfat=[{src: "imgs/bkwhopperjrsandwich.png", x: fatlist[44], y: sugarlist[44]}];
var burger46sugarfat=[{src: "imgs/bkkidscheeseburger.png", x: fatlist[45], y: sugarlist[45]}];
var burger47sugarfat=[{src: "imgs/bkkidshamburger.png", x: fatlist[46], y: sugarlist[46]}];
var burger48sugarfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: fatlist[47], y: sugarlist[47]}];
var burger49sugarfat=[{src: "imgs/bkcrispychicken.png", x: fatlist[48], y: sugarlist[48]}];
var burger50sugarfat=[{src: "imgs/bkcrispychickenbaconking.png", x: fatlist[49], y: sugarlist[49]}];
var burger51sugarfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: fatlist[50], y: sugarlist[50]}];
var burger52sugarfat=[{src: "imgs/bkchickenroyale.png", x: fatlist[51], y: sugarlist[51]}];
var burger53sugarfat=[{src: "imgs/bkchickensandwich.png", x: fatlist[52], y: sugarlist[52]}];
var burger54sugarfat=[{src: "imgs/bkkingfish.png", x: fatlist[53], y: sugarlist[53]}];
var burger55sugarfat=[{src: "imgs/bkveggiebeanburger.png", x: fatlist[54], y: sugarlist[54]}];
var burger56sugarfat=[{src: "imgs/bkkidsveggieburger.png", x: fatlist[55], y: sugarlist[55]}];


//Scatterplot data for Sugar-Satfat
var burger1sugarsatfat=[{src: "imgs/kfcfilletburger.png", x: satfatlist[0], y: sugarlist[0]}];
var burger2sugarsatfat=[{src: "imgs/kfcfillettowerburger.png", x: satfatlist[1], y: sugarlist[1]}];
var burger3sugarsatfat=[{src: "imgs/kfczingerburger.png", x: satfatlist[2], y: sugarlist[2]}];
var burger4sugarsatfat=[{src: "imgs/kfczingertowerburger.png", x: satfatlist[3], y: sugarlist[3]}];
var burger5sugarsatfat=[{src: "imgs/kfcminifilletburger.png", x: satfatlist[4], y: sugarlist[4]}];
var burger6sugarsatfat=[{src: "imgs/kfcthedaddyburger.png", x: satfatlist[5], y: sugarlist[5]}];
var burger7sugarsatfat=[{src: "imgs/kfcbaconandcheeseburger.png", x: satfatlist[6], y: sugarlist[6]}];
var burger8sugarsatfat=[{src: "imgs/kfczingerstacker.png", x: satfatlist[7], y: sugarlist[7]}];
var burger9sugarsatfat=[{src: "imgs/mcdnewyorkstack.png", x: satfatlist[8], y: sugarlist[8]}];
var burger10sugarsatfat=[{src: "imgs/mcdmississippistack.png", x: satfatlist[9], y: sugarlist[9]}];
var burger11sugarsatfat=[{src: "imgs/mcdsouthcarolinastack.png", x: satfatlist[10], y: sugarlist[10]}];
var burger12sugarsatfat=[{src: "imgs/mcdkansascitystack.png", x: satfatlist[11], y: sugarlist[11]}];
var burger13sugarsatfat=[{src: "imgs/mcdnashvillechicken.png", x: satfatlist[12], y: sugarlist[12]}];
var burger14sugarsatfat=[{src: "imgs/mcdalabamachicken.png", x: satfatlist[13], y: sugarlist[13]}];
var burger15sugarsatfat=[{src: "imgs/mcdsignatureclassic.png", x: satfatlist[14], y: sugarlist[14]}];
var burger16sugarsatfat=[{src: "imgs/mcdsignaturebbq.png", x: satfatlist[15], y: sugarlist[15]}];
var burger17sugarsatfat=[{src: "imgs/mcdsignaturespicy.png", x: satfatlist[16], y: sugarlist[16]}];
var burger18sugarsatfat=[{src: "imgs/mcdbigmac.png", x: satfatlist[17], y: sugarlist[17]}];
var burger19sugarsatfat=[{src: "imgs/mcdquarterpounderwithcheese.png", x: satfatlist[18], y: sugarlist[18]}];
var burger20sugarsatfat=[{src: "imgs/mcddoublecheeseburger.png", x: satfatlist[19], y: sugarlist[19]}];
var burger21sugarsatfat=[{src: "imgs/mcdbacondoublecheeseburger.png", x: satfatlist[20], y: sugarlist[20]}];
var burger22sugarsatfat=[{src: "imgs/mcdcheeseburger.png", x: satfatlist[21], y: sugarlist[21]}];
var burger23sugarsatfat=[{src: "imgs/mcdhamburger.png", x: satfatlist[22], y: sugarlist[22]}];
var burger24sugarsatfat=[{src: "imgs/mcdchickenlegendcoolmayo.png", x: satfatlist[23], y: sugarlist[23]}];
var burger25sugarsatfat=[{src: "imgs/mcdchickenlegendbbq.png", x: satfatlist[24], y: sugarlist[24]}];
var burger26sugarsatfat=[{src: "imgs/mcdchickenlegendhotandspicymayo.png", x: satfatlist[25], y: sugarlist[25]}];
var burger27sugarsatfat=[{src: "imgs/mcdmcchickensandwich.png", x: satfatlist[26], y: sugarlist[26]}];
var burger28sugarsatfat=[{src: "imgs/mcdmayochicken.png", x: satfatlist[27], y: sugarlist[27]}];
var burger29sugarsatfat=[{src: "imgs/mcdfiletofish.png", x: satfatlist[28], y: sugarlist[28]}];
var burger30sugarsatfat=[{src: "imgs/mcdvegetabledeluxe.png", x: satfatlist[29], y: sugarlist[29]}];
var burger31sugarsatfat=[{src: "imgs/bksmokyblackangus.png", x: satfatlist[30], y: sugarlist[30]}];
var burger32sugarsatfat=[{src: "imgs/bkwhoppersandwich.png", x: satfatlist[31], y: sugarlist[31]}];
var burger33sugarsatfat=[{src: "imgs/bkbacondoublexl.png", x: satfatlist[32], y: sugarlist[32]}];
var burger34sugarsatfat=[{src: "imgs/bktexasbbqking.png", x: satfatlist[33], y: sugarlist[33]}];
var burger35sugarsatfat=[{src: "imgs/bkdoublewhoppersandwich.png", x: satfatlist[34], y: sugarlist[34]}];
var burger36sugarsatfat=[{src: "imgs/bkbaconking.png", x: satfatlist[35], y: sugarlist[35]}];
var burger37sugarsatfat=[{src: "imgs/bkwesternbbqbacon.png", x: satfatlist[36], y: sugarlist[36]}];
var burger38sugarsatfat=[{src: "imgs/bkbigkingxl.png", x: satfatlist[37], y: sugarlist[37]}];
var burger39sugarsatfat=[{src: "imgs/bklongbigking.png", x: satfatlist[38], y: sugarlist[38]}];
var burger40sugarsatfat=[{src: "imgs/bklongtexasbbq.png", x: satfatlist[39], y: sugarlist[39]}];
var burger41sugarsatfat=[{src: "imgs/bkdoublecheeseburger.png", x: satfatlist[40], y: sugarlist[40]}];
var burger42sugarsatfat=[{src: "imgs/bkcheeseburger.png", x: satfatlist[41], y: sugarlist[41]}];
var burger43sugarsatfat=[{src: "imgs/bkbacondoublecheeseburger.png", x: satfatlist[42], y: sugarlist[42]}];
var burger44sugarsatfat=[{src: "imgs/bkhamburger.png", x: satfatlist[43], y: sugarlist[43]}];
var burger45sugarsatfat=[{src: "imgs/bkwhopperjrsandwich.png", x: satfatlist[44], y: sugarlist[44]}];
var burger46sugarsatfat=[{src: "imgs/bkkidscheeseburger.png", x: satfatlist[45], y: sugarlist[45]}];
var burger47sugarsatfat=[{src: "imgs/bkkidshamburger.png", x: satfatlist[46], y: sugarlist[46]}];
var burger48sugarsatfat=[{src: "imgs/bktexasbbqcrispychicken.png", x: satfatlist[47], y: sugarlist[47]}];
var burger49sugarsatfat=[{src: "imgs/bkcrispychicken.png", x: satfatlist[48], y: sugarlist[48]}];
var burger50sugarsatfat=[{src: "imgs/bkcrispychickenbaconking.png", x: satfatlist[49], y: sugarlist[49]}];
var burger51sugarsatfat=[{src: "imgs/bkbaconcheesechickenroyale.png", x: satfatlist[50], y: sugarlist[50]}];
var burger52sugarsatfat=[{src: "imgs/bkchickenroyale.png", x: satfatlist[51], y: sugarlist[51]}];
var burger53sugarsatfat=[{src: "imgs/bkchickensandwich.png", x: satfatlist[52], y: sugarlist[52]}];
var burger54sugarsatfat=[{src: "imgs/bkkingfish.png", x: satfatlist[53], y: sugarlist[53]}];
var burger55sugarsatfat=[{src: "imgs/bkveggiebeanburger.png", x: satfatlist[54], y: sugarlist[54]}];
var burger56sugarsatfat=[{src: "imgs/bkkidsveggieburger.png", x: satfatlist[55], y: sugarlist[55]}];


//Begin Lollipop for Sugar
var marginloli = {top: 90, right: 30, bottom: 200, left: 100},
    widthloli = 960 - marginloli.left - marginloli.right,
    heightloli = 500 - marginloli.top - marginloli.bottom;

var svglolisugar = d3.select("#loli_datavizsugar")
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
svglolisugar.append("g")
  .attr("transform", "translate(0," + heightloli + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 20])
  .range([ heightloli, 0]);
svglolisugar.append("g")
  .call(d3.axisLeft(y));

var yAxissugarloli = d3.axisLeft().scale(y).ticks(5);		

// text label for the y axis
svglolisugar.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1) + " ," + 
                           (h - h/0.95 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//Lines
for (i = 0; i < 8; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#b27a7a")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#A3080C")
    .attr("stroke", "#A3080C")
}

//Lines
for (i = 8; i < 30; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#27742d")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#DA291C")
    .attr("stroke", "#DA291C")
}

//PLOT FOR TOP 3
//Lines
for (i = 30; i < 31; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(sugarlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bksmokyblackangus.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King [Sugar: 16 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King [Sugar: 16 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 31; i < 33; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 33; i < 34; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(sugarlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bktexasbbqking.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King [Sugar: 17 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King [Sugar: 17 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 34; i < 36; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("r", "4")
    .style("fill", "#EE1D23")
}

//PLOT FOR TOP 3
//Lines
for (i = 36; i < 37; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("svg:image")
    .attr("x", function(d) { return x(burgerlist[i]) - 12; })
    .attr("y", function(d) { return y(sugarlist[i]) - 12; })
    .attr("y2", y(0))
    .attr("width", 25)
    .attr("height", 25)
    .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
    .on("mouseover", function(d){
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King [Sugar: 18 g]");
  })
  .on("mousemove", function(d){
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King [Sugar: 18 g]");
  })
  .on("mouseout", function(d){
    return tooltip.style("visibility", "hidden");
  });
}

//Lines
for (i = 37; i < 56; i++) { 
svglolisugar.selectAll("myline")
  .data(burgersugarloli[i])
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(burgerlist[i]); })
    .attr("x2", function(d) { return x(burgerlist[i]); })
    .attr("y1", function(d) { return y(sugarlist[i]); })
    .attr("y2", y(0))
    .attr("stroke", "#185494")

// Circles
svglolisugar.selectAll("mycircle")
  .data(burgersugarloli[i])
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(burgerlist[i]); })
    .attr("cy", function(d) { return y(sugarlist[i]); })
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
var yScalesugar = d3.scaleLinear()
		.domain([0, 20])
		.range([h - padding, padding]);

var xScalesugarcal = d3.scaleLinear()
		.domain([0, 1200])
		.range([padding, w - padding * 2]);

var xScalesugarsalt = d3.scaleLinear()
		.domain([0, 5])
		.range([padding, w - padding * 2]);

var xScalesugarfat = d3.scaleLinear()
		.domain([0, 75])
		.range([padding, w - padding * 2]);

var xScalesugarsatfat = d3.scaleLinear()
		.domain([0, 30])
		.range([padding, w - padding * 2]);

var yAxissugar = d3.axisLeft().scale(yScalesugar).ticks(5);		
var xAxissugarcal = d3.axisBottom().scale(xScalesugarcal).ticks(5);
var xAxissugarsalt = d3.axisBottom().scale(xScalesugarsalt).ticks(5);
var xAxissugarfat = d3.axisBottom().scale(xScalesugarfat).ticks(5);
var xAxissugarsatfat = d3.axisBottom().scale(xScalesugarsatfat).ticks(5);

//Create svg element
var svgsugarcal = d3.select("#scatterplot_datavizsugarcal")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsugarsalt = d3.select("#scatterplot_datavizsugarsalt")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Create svg element
var svgsugarfat = d3.select("#scatterplot_datavizsugarfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


//Create svg element
var svgsugarsatfat = d3.select("#scatterplot_datavizsugarsatfat")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//Sugar-Cal
//x-axis
svgsugarcal.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissugarcal);
	
// text label for the x axis
svgsugarcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Calories (kCal)");

//y-axis
svgsugarcal.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissugar);

// text label for the y axis
svgsugarcal.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//Sugar-Salt
//x-axis
svgsugarsalt.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissugarsalt);
	
// text label for the x axis
svgsugarsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Salt (g)");

//y-axis
svgsugarsalt.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissugar);

// text label for the y axis
svgsugarsalt.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05 ) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//Sugar-Fat
//x-axis
svgsugarfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissugarfat);
	
// text label for the x axis
svgsugarfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Fat (g)");

//y-axis
svgsugarfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissugar);

// text label for the y axis
svgsugarfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//Sugar-SatFat
//x-axis
svgsugarsatfat.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxissugarsatfat);
	
// text label for the x axis
svgsugarsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/2 ) + " ," + 
                           (h - h/50) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Saturated Fat (g)");

//y-axis
svgsugarsatfat.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxissugar);

// text label for the y axis
svgsugarsatfat.append("text")             	
      	      .attr("transform",
            "translate(" + (w - w/1.1) + " ," + 
                           (h - h/1.05) + ")")
       	  .style("text-anchor", "middle")
      	  .text("Sugar (g)");

//Plot ALL the burgers

//Plot for Sugar-Cal

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger1sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger2sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger3sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger4sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger5sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger6sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger7sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger8sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger9sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger10sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger11sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger12sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger13sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger14sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger15sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger16sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger17sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger18sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger19sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger20sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger21sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger22sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger23sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger24sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger25sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger26sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger27sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger28sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger29sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger30sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger31sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger32sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger33sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger34sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger35sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger36sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger37sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger38sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger39sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger40sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger41sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger42sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger43sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger44sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger45sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger46sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger47sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger48sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger49sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger50sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger51sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger52sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger53sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger54sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger55sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarcal.append("g")
   .selectAll(".myPoint")
   .data(burger56sugarcal)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesugarcal(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Calories: " + d.x + "kCal]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Plot for Sugar-Salt

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger1sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger2sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger3sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger4sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger5sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger6sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger7sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger8sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger9sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger10sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger11sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger12sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger13sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger14sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger15sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger16sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger17sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger18sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger19sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger20sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger21sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger22sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger23sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger24sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger25sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger26sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger27sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger28sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger29sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger30sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger31sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger32sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger33sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger34sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger35sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger36sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger37sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger38sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger39sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger40sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger41sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger42sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger43sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger44sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger45sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger46sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger47sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger48sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger49sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger50sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger51sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger52sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger53sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger54sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger55sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsalt.append("g")
   .selectAll(".myPoint")
   .data(burger56sugarsalt)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesugarsalt(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Salt: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

//Plot for Sugar-Fat

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger1sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger2sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger3sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger4sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger5sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger6sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger7sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger8sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger9sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger10sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger11sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger12sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger13sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger14sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger15sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger16sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger17sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger18sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger19sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger20sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger21sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger22sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger23sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger24sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger25sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger26sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger27sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger28sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger29sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger30sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger31sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger32sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger33sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger34sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger35sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger36sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger37sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger38sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger39sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger40sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger41sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger42sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger43sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger44sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger45sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger46sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger47sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger48sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger49sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger50sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger51sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger52sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger53sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger54sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger55sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarfat.append("g")
   .selectAll(".myPoint")
   .data(burger56sugarfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesugarfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


//Plot for Sugar-SatFat

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger1sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfilletburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
   return tooltip.style("visibility", "visible").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   	.attr("position", "absolute")
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger2sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcfillettowerburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Fillet Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger3sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger4sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingertowerburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Tower Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger5sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcminifilletburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mini Fillet Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger6sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcthedaddyburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("The Daddy Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger7sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfcbaconandcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon and Cheese Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger8sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/kfczingerstackerburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Zinger Stacker Burger, KFC" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger9sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnewyorkstack.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("New York Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger10sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmississippistack.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mississippi Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger11sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsouthcarolinastack.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("South Carolina Stack, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Tasty, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger12sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdkansascitystack.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kansas City Stack, McDonalds" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	 d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger13sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdnashvillechicken.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Nashville Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger14sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdalabamachicken.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Alabama Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger15sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignatureclassic.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Classic, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
    .attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger16sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturebbq.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The BBQ, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger17sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdsignaturespicy.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Signature Collection: The Spicy, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger18sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigmac.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big Mac, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger19sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdquarterpounderwithcheese.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Quarter Pounder with Cheese, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
 	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger20sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcddoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger21sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
   	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger22sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger23sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdbigtasty.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger24sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendcoolmayo.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
  	d3.select(this).transition()
   	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Cool Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger25sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendbbq.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
    d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with BBQ Sauce, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger26sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdchickenlegendhotandspicymayo.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Legend with Hot and Spicy Mayo, McDonalds" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Legend with Hot and Spicy Mayo, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger27sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmcchickensandwich.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("McChicken Sandwich, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger28sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdmayochicken.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Mayo Chicken, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger29sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdfiletofish.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Filet-O-Fish, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger30sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/mcdvegetabledeluxe.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Vegetable Deluxe, McDonalds"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger31sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bksmokyblackangus.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Smoky Black Angus, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger32sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger33sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublexl.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger34sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqking.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger35sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublewhoppersandwich.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double WHOPPER Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger36sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconking.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger37sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwesternbbqbacon.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Western BBQ Bacon, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger38sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbigkingxl.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Big King XL, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger39sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongbigking.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Big King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger40sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bklongtexasbbq.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Long Texas BBQ, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger41sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkdoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
    d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger42sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger43sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbacondoublecheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Double Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger44sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkhamburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	 d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger45sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkwhopperjrsandwich.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("WHOPPER Jr. Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger46sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidscheeseburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Cheeseburger, Burger King" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Cheeseburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger47sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidshamburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Hamburger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger48sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bktexasbbqcrispychicken.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Texas BBQ Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger49sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychicken.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger50sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkcrispychickenbaconking.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Crispy Chicken Bacon King, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger51sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkbaconcheesechickenroyale.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Bacon Cheese Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger52sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickenroyale.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Royale, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger53sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkchickensandwich.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Chicken Sandwich, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger54sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkingfish.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("King Fish, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });


svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger55sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkveggiebeanburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Veggie Bean Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mouseout", function(d){
  	   	d3.select(this).transition()
  	.attr("width", 25)
   	.attr("height", 25)
    return tooltip.style("visibility", "hidden");
  });

svgsugarsatfat.append("g")
   .selectAll(".myPoint")
   .data(burger56sugarsatfat)
   .enter()
   .append("svg:image")
   .attr("xlink:href", "imgs/bkkidsveggieburger.png")
   .attr("x", function(d) {return xScalesugarsatfat(d.x);})      
   .attr("y", function(d) {return yScalesugar(d.y);})
   .attr("width", 25)
   .attr("height", 25)
   .on("mouseover", function(d){
   	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
   return tooltip.style("visibility", "visible").text("Kids Veggie Burger, Burger King" + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
  })
  .on("mousemove", function(d){
  	d3.select(this).transition()
  	.attr("width", 50)
   	.attr("height", 50)
    return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").text("Kids Veggie Burger, Burger King"  + " [Sugar: " + d.y + "g" + ", Saturated Fat: " + d.x + "g]");
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