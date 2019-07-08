//PRELOADED DATA VERSION

//Declare data
var burgerlist = ["Fillet Burger - KFC","Fillet Tower Burger - KFC", "Zinger Burger - KFC","Zinger Tower Burger - KFC","Mini Fillet Burger - KFC","The Daddy Burger - KFC","Bacon and Cheese Burger - KFC","Zinger Stacker - KFC","The New York Stack - McDonalds","The Mississippi Stack - McDonalds","The South Carolina Stack - McDonalds", "The Kansas City Stack - McDonalds", "The Nashville Chicken - McDonalds", "The Alabama Chicken - McDonalds", "The Signature Collection: The Classic - McDonalds","The Signature Collection: The BBQ - McDonalds","The Signature Collection: The Spicy - McDonalds","Big Mac® - McDonalds","Quarter Pounder™ with Cheese - McDonalds","Double Cheeseburger - McDonalds","Bacon Double Cheeseburger - McDonalds","Cheeseburger - McDonalds","Hamburger - McDonalds","Chicken Legend® with Cool Mayo - McDonalds","Chicken Legend® with BBQ Sauce - McDonalds","Chicken Legend® with Hot & Spicy Mayo - McDonalds","McChicken Sandwich® - McDonalds","Mayo Chicken - McDonalds","Filet-o-Fish - McDonalds","Vegetable Deluxe - McDonalds","Smoky Black Angus - Burger King","WHOPPER Sandwich - Burger King","Bacon Double XL - Burger King","Texas BBQ King - Burger King","Double WHOPPER Sandwich - Burger King","Bacon King - Burger King","Western BBQ Bacon - Burger King","Big King XL - Burger King","Long Big King - Burger King","Long Texas BBQ - Burger King","Double Cheeseburger - Burger King","Cheeseburger - Burger King","Bacon Double Cheeseburger - Burger King","Hamburger - Burger King","WHOPPER JR.® Sandwich - Burger King","Kids Cheeseburger - Burger King","Kids Hamburger - Burger King","Texas BBQ Crispy Chicken - Burger King","Crispy Chicken - Burger King","Crispy Chicken Bacon King - Burger King","Bacon Cheese Chicken Royale - Burger King","Chicken Royale - Burger King","Chicken Sandwich - Burger King","King Fish - Burger King","Veggie Bean Burger - Burger King","Kids Veggie Burger - Burger King"]
var calorieslist = [475,620,450,595,290,685,585,780,780,654,667,698,681,647,698,782,635,508,518,445,495,301,250,529,484,519,388,319,329,380,652,540,930,1130,870,1040,740,1010,620,540,440,300,470,260,320,300,250,830,500,700,720,440,390,430,660,330]
var saltlist = [2.02,3.39,1.97,3.22,1.35,4.07,3.51,4.29,3.5,2.4,2.8,3.3,3.9,3.1,2.4,2.4,2.7,2.3,2.5,2.4,2.7,1.6,1.2,1.8,1.6,1.8,1.4,1.1,1.3,1.5,2.5,2.5,3.28,3.9,2.3,4.97,3.18,4.78,3.25,2.08,2.45,1.8,2.25,1.23,1.35,1.43,0.85,4.95,2.65,4.8,4.47,3.2,1.8,2.08,3.58,1.68]
var sugarlist = [5.5,10.2,5.4,8.9,3.2,9.4,9.6,12,6.9, 11,13,12,14,6.8,10,14,12,9,10,8.1,8.1,7.3,6.6,4.5,8.4,4.5,7.1,4.6,5.4,7.8,16,12,10,17,12,14,18,13,12,9,7,7,5,6,7,7,6,13,7,9,9,7,5,7,14,7]
var fatlist = [19.3,28,18.8,27.6,10.7,33.4,26.4,37.7,46,34,35,38,34,32,37,44,32,25,27,23,27,12,8.3,21,14,20,16,13,13,14,32,22,52,74,50,59,36,60,33,24,22,13,25,9,16,12,9,43,20,34,42,16,21,20,31,12]
var satfatlist = [2.3,4.6,2.1,4.5,1.4,6.2,5.8,7.3,17,15,16,18,7.7,7.1,16,17,14,9.5,13,12,13,6,3.3,2.5,1.6,2.1,1.8,1.6,2.6,1.4,14,8,24,27,16,26,16,23,11,9,10,5,11,3.5,3.5,5,3.5,9,2.5,9,9,3,4.5,3,6,2.5]

refcalories = [2175, 2432, 2127, 2352, 3005, 2662]
refsalt = [6,6,6,6,6,6]
refsugar = [27.2, 30.4, 26.7, 29.4, 37.6, 33.3]
reffat = [84.6, 94.5, 82.7, 91.5, 116.9, 133.2]
refsatfat = [24.2, 27, 23.6, 26.1, 33.4, 29.6]

//Populate the dropdown list
var select = document.getElementById("burger-dropdown"); 

for(var i = 0; i < burgerlist.length; i++) {
    var opt = burgerlist[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

//Enable changing of dropdown list selection by clicking on the image
function choose(element){
    document.getElementById("burger-dropdown").selectedIndex = element.getAttribute("value");
} 

var getgenderage = document.getElementById('selgenderageburger');
    getgenderage.onsubmit = function(e) {
    e.preventDefault();

    d3.select("#barchart_datavizcal").select("svg").remove();
    d3.select("#barchart_datavizsalt").select("svg").remove();
    d3.select("#barchart_datavizsugar").select("svg").remove();
    d3.select("#barchart_datavizfat").select("svg").remove();
    d3.select("#barchart_datavizsatfat").select("svg").remove();

    d3.select("#caltext").selectAll("p").remove();
    d3.select("#salttext").selectAll("p").remove();
    d3.select("#sugartext").selectAll("p").remove();
    d3.select("#fattext").selectAll("p").remove();
    d3.select("#satfattext").selectAll("p").remove();

    var selgender = document.getElementById('gender-dropdown');
    var selagegroup = document.getElementById('age-dropdown');
    var selburger = document.getElementById('burger-dropdown')

    var imageadult= document.getElementById('humandisplay');


    if (selgender.value == "notsel" || selagegroup.value == "notsel" || selburger.value == "notsel") {
    		alert('Please ensure all dropdown are selected');
    		return
    }


    	if (selgender.value === "Female" && selagegroup.value === "1114") {
    		var calrni =[{xtitle: "Reference", Value : refcalories[0]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
    		var saltrni =[{xtitle: "Reference", Value : refsalt[0]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
    		var sugarrni =[{xtitle: "Reference", Value : refsugar[0]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
    		var fatrni =[{xtitle: "Reference", Value : reffat[0]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
    		var satfatrni =[{xtitle: "Reference", Value : refsatfat[0]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[0]) * 100) + "% of Daily Calories Intake");      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[0] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")

       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[0]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[0] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")

       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[0]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[0] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[0]) * 100) + "% of Daily Fat Intake" );      
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[0] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[0]) * 100) + "% of Daily Sat Fat Intake" );      
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[0] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")
    	}

      else if (selgender.value === "Female" && selagegroup.value === "1518") {
        var calrni =[{xtitle: "Reference", Value : refcalories[1]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
        var saltrni =[{xtitle: "Reference", Value : refsalt[1]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
        var sugarrni =[{xtitle: "Reference", Value : refsugar[1]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
        var fatrni =[{xtitle: "Reference", Value : reffat[1]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
        var satfatrni =[{xtitle: "Reference", Value : refsatfat[1]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[1]) * 100) + "% of Daily Calories Intake" );      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[1] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")
       
       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[1]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[1] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")

       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[1]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[1] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[1]) * 100) + "% of Daily Fat Intake" );      
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[1] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[1]) * 100) + "% of Daily Sat Fat Intake" );
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[1] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")      
      }

      else if (selgender.value === "Female" && selagegroup.value === "1964") {
        var calrni =[{xtitle: "Reference", Value : refcalories[2]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
        var saltrni =[{xtitle: "Reference", Value : refsalt[2]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
        var sugarrni =[{xtitle: "Reference", Value : refsugar[2]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
        var fatrni =[{xtitle: "Reference", Value : reffat[2]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
        var satfatrni =[{xtitle: "Reference", Value : refsatfat[2]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[2]) * 100) + "% of Daily Calories Intake" );      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[2] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")

       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[2]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[2] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")

       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[2]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[2] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[2]) * 100) + "% of Daily Fat Intake" );     
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[2] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[2]) * 100) + "% of Daily Sat Fat Intake" );    
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[2] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")        
      }

      else if (selgender.value === "Male" && selagegroup.value === "1114") {
        var calrni =[{xtitle: "Reference", Value : refcalories[3]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
        var saltrni =[{xtitle: "Reference", Value : refsalt[3]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
        var sugarrni =[{xtitle: "Reference", Value : refsugar[3]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
        var fatrni =[{xtitle: "Reference", Value : reffat[3]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
        var satfatrni =[{xtitle: "Reference", Value : refsatfat[3]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[3]) * 100) + "% of Daily Calories Intake" );      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[3] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")

       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[3]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[3] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")

       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[3]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[3] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[3]) * 100) + "% of Daily Fat Intake" );      
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[3] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[3]) * 100) + "% of Daily Sat Fat Intake" );      
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[3] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")        
      }

      else if (selgender.value === "Male" && selagegroup.value === "1518") {
        var calrni =[{xtitle: "Reference", Value : refcalories[4]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
        var saltrni =[{xtitle: "Reference", Value : refsalt[4]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
        var sugarrni =[{xtitle: "Reference", Value : refsugar[4]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
        var fatrni =[{xtitle: "Reference", Value : reffat[4]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
        var satfatrni =[{xtitle: "Reference", Value : refsatfat[4]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[4]) * 100) + "% of Daily Calories Intake" );      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[4] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")
       
       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[4]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[4] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")
       
       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[4]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[4] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[4]) * 100) + "% of Daily Fat Intake" );      
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[4] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[4]) * 100) + "% of Daily Sat Fat Intake" );      
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[4] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")        
      }

      else if (selgender.value === "Male" && selagegroup.value === "1964") {
        var calrni =[{xtitle: "Reference", Value : refcalories[5]}, {xtitle: select.value, Value: calorieslist[select.selectedIndex-1]}];
        var saltrni =[{xtitle: "Reference", Value : refsalt[5]}, {xtitle: select.value, Value: saltlist[select.selectedIndex-1]}];
        var sugarrni =[{xtitle: "Reference", Value : refsugar[5]}, {xtitle: select.value, Value: sugarlist[select.selectedIndex-1]}];
        var fatrni =[{xtitle: "Reference", Value : reffat[5]}, {xtitle: select.value, Value: fatlist[select.selectedIndex-1]}];
        var satfatrni =[{xtitle: "Reference", Value : refsatfat[5]}, {xtitle: select.value, Value: satfatlist[select.selectedIndex-1]}];

       var tcal = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((calorieslist[select.selectedIndex-1])/refcalories[5]) * 100) + "% of Daily Calories Intake" );      
       var treccal = document.createTextNode("The recommended daily calories for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refcalories[5] + "kcal")
       var treccal2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + calorieslist[select.selectedIndex-1] + "kCal per serving.")

       var tsalt = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((saltlist[select.selectedIndex-1])/refsalt[5]) * 100) + "% of Daily Salt Intake" );      
       var trecsalt = document.createTextNode("The recommended daily salt for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsalt[5] + "g")
       var trecsalt2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + saltlist[select.selectedIndex-1] + "g per serving.")

       var tsugar = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((sugarlist[select.selectedIndex-1])/refsugar[5]) * 100) + "% of Daily Sugar Intake" );      
       var trecsugar = document.createTextNode("The recommended daily sugar for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsugar[5] + "g")
       var trecsugar2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + sugarlist[select.selectedIndex-1] + "g per serving.")

       var tfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((fatlist[select.selectedIndex-1])/reffat[5]) * 100) + "% of Daily Fat Intake" );      
       var trecfat = document.createTextNode("The recommended daily fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  reffat[5] + "g")
       var trecfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + fatlist[select.selectedIndex-1] + "g per serving.")

       var tsatfat = document.createTextNode(selburger.options[selburger.selectedIndex].text + " is ~" + Math.round(((satfatlist[select.selectedIndex-1])/refsatfat[5]) * 100) + "% of Daily Sat Fat Intake" );      
       var trecsatfat = document.createTextNode("The recommended daily saturated fat for " + selgender.options[selgender.selectedIndex].text + "," + selagegroup.options[selagegroup.selectedIndex].text + " is " +  refsatfat[5] + "g")
       var trecsatfat2 = document.createTextNode(selburger.options[selburger.selectedIndex].text + " provides " + satfatlist[select.selectedIndex-1] + "g per serving.")        
      }

      // set the dimensions and margins of the graph
			var margin = {top: 50, right: 25, bottom: 260, left: 50},
		    width = 500 - margin.left - margin.right,
		    height = 560 - margin.top - margin.bottom;

    		// append the svg object to the body of the page
    		var svgcalbar = d3.select("#barchart_datavizcal")
    		.append("svg")
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    		.attr("transform",
          	"translate(" + margin.left + "," + margin.top + ")");

          	// append the svg object to the body of the page
    		var svgsaltbar = d3.select("#barchart_datavizsalt")
    		.append("svg")
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    		.attr("transform",
          	"translate(" + margin.left + "," + margin.top + ")");

          	// append the svg object to the body of the page
    		var svgsugarbar = d3.select("#barchart_datavizsugar")
    		.append("svg")
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    		.attr("transform",
          	"translate(" + margin.left + "," + margin.top + ")");

          	// append the svg object to the body of the page
    		var svgfatbar = d3.select("#barchart_datavizfat")
    		.append("svg")
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    		.attr("transform",
          	"translate(" + margin.left + "," + margin.top + ")");

          	// append the svg object to the body of the page
    		var svgsatfatbar = d3.select("#barchart_datavizsatfat")
    		.append("svg")
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    		.attr("transform",
          	"translate(" + margin.left + "," + margin.top + ")");

        	// X axis
       		 var xcal = d3.scaleBand()
  			.range([ 0, width ])
  			.domain(calrni.map(function(d) { return d.xtitle; }))
  			.padding(0.2);
		
			svgcalbar.append("g")
  			.attr("transform", "translate(0," + height + ")")
  			.call(d3.axisBottom(xcal))
  			.selectAll("text")
    		.attr("transform", "translate(-10,0)rotate(-45)")
    		.style("text-anchor", "end");

			// Add Y axis
			var ycal = d3.scaleLinear()
  			.domain([0, 3100])
  			.range([ height, 0]);
			svgcalbar.append("g")
  			.call(d3.axisLeft(ycal));

			// Bars
			svgcalbar.selectAll("mybar")
			.data(calrni)
  			.enter()
  			.append("rect")
    		.attr("x", function(d) { return xcal(d.xtitle); })
    		.attr("y", function(d) { return ycal(d.Value); })
    		.attr("width", xcal.bandwidth())
    		.attr("height", function(d) { return height - ycal(d.Value); })
    		.attr("fill", "#8601AF")

    		// X axis
       		var xsalt = d3.scaleBand()
  			.range([ 0, width ])
  			.domain(saltrni.map(function(d) { return d.xtitle; }))
  			.padding(0.2);
		
			svgsaltbar.append("g")
  			.attr("transform", "translate(0," + height + ")")
  			.call(d3.axisBottom(xsalt))
  			.selectAll("text")
    		.attr("transform", "translate(-10,0)rotate(-45)")
    		.style("text-anchor", "end");

			// Add Y axis
			var ysalt = d3.scaleLinear()
  			.domain([0, 8])
  			.range([ height, 0]);
			svgsaltbar.append("g")
  			.call(d3.axisLeft(ysalt));

			// Bars
			svgsaltbar.selectAll("mybar")
			.data(saltrni)
  			.enter()
  			.append("rect")
    		.attr("x", function(d) { return xsalt(d.xtitle); })
    		.attr("y", function(d) { return ysalt(d.Value); })
    		.attr("width", xsalt.bandwidth())
    		.attr("height", function(d) { return height - ysalt(d.Value); })
    		.attr("fill", "#8601AF")

    		// X axis
       		var xsugar = d3.scaleBand()
  			.range([ 0, width ])
  			.domain(sugarrni.map(function(d) { return d.xtitle; }))
  			.padding(0.2);
		
			svgsugarbar.append("g")
  			.attr("transform", "translate(0," + height + ")")
  			.call(d3.axisBottom(xsugar))
  			.selectAll("text")
    		.attr("transform", "translate(-10,0)rotate(-45)")
    		.style("text-anchor", "end");

			// Add Y axis
			var ysugar = d3.scaleLinear()
  			.domain([0, 35])
  			.range([ height, 0]);
			svgsugarbar.append("g")
  			.call(d3.axisLeft(ysugar));

			// Bars
			svgsugarbar.selectAll("mybar")
			.data(sugarrni)
  			.enter()
  			.append("rect")
    		.attr("x", function(d) { return xsugar(d.xtitle); })
    		.attr("y", function(d) { return ysugar(d.Value); })
    		.attr("width", xsugar.bandwidth())
    		.attr("height", function(d) { return height - ysugar(d.Value); })
    		.attr("fill", "#8601AF")

    		    		// X axis
       		var xfat = d3.scaleBand()
  			.range([ 0, width ])
  			.domain(fatrni.map(function(d) { return d.xtitle; }))
  			.padding(0.2);
		
			svgfatbar.append("g")
  			.attr("transform", "translate(0," + height + ")")
  			.call(d3.axisBottom(xfat))
  			.selectAll("text")
    		.attr("transform", "translate(-10,0)rotate(-45)")
    		.style("text-anchor", "end");

			// Add Y axis
			var yfat = d3.scaleLinear()
  			.domain([0, 135])
  			.range([ height, 0]);
			svgfatbar.append("g")
  			.call(d3.axisLeft(yfat));

			// Bars
			svgfatbar.selectAll("mybar")
			.data(fatrni)
  			.enter()
  			.append("rect")
    		.attr("x", function(d) { return xfat(d.xtitle); })
    		.attr("y", function(d) { return yfat(d.Value); })
    		.attr("width", xfat.bandwidth())
    		.attr("height", function(d) { return height - yfat(d.Value); })
    		.attr("fill", "#8601AF")

    		    		// X axis
       		var xsatfat = d3.scaleBand()
  			.range([ 0, width ])
  			.domain(satfatrni.map(function(d) { return d.xtitle; }))
  			.padding(0.2);
		
			svgsatfatbar.append("g")
  			.attr("transform", "translate(0," + height + ")")
  			.call(d3.axisBottom(xsatfat))
  			.selectAll("text")
    		.attr("transform", "translate(-10,0)rotate(-45)")
    		.style("text-anchor", "end");

			// Add Y axis
			var ysatfat = d3.scaleLinear()
  			.domain([0, 35])
  			.range([ height, 0]);
			svgsatfatbar.append("g")
  			.call(d3.axisLeft(ysatfat));

			// Bars
			svgsatfatbar.selectAll("mybar")
			.data(satfatrni)
  			.enter()
  			.append("rect")
    		.attr("x", function(d) { return xsatfat(d.xtitle); })
    		.attr("y", function(d) { return ysatfat(d.Value); })
    		.attr("width", xsatfat.bandwidth())
    		.attr("height", function(d) { return height - ysatfat(d.Value); })
    		.attr("fill", "#8601AF")

       var paracal = document.createElement("P");  
       var paracal1 = document.createElement("P");  
       var paracal2 = document.createElement("P");  

       var parasalt = document.createElement("P");
       var parasalt1 = document.createElement("P");
       var parasalt2 = document.createElement ("P")

       var parasugar = document.createElement("P");  
       var parasugar1 = document.createElement("P");
       var parasugar2 = document.createElement("P");

       var parafat = document.createElement("P");
       var parafat1 = document.createElement("P");
       var parafat2 = document.createElement("P");

       var parasatfat = document.createElement("P");
       var parasatfat1 = document.createElement("P");
       var parasatfat2 = document.createElement("P");  

       paracal.appendChild(tcal);       
       paracal1.appendChild(treccal);
       paracal2.appendChild(treccal2);         

       parasalt.appendChild(tsalt);
       parasalt1.appendChild(trecsalt)
       parasalt2.appendChild(trecsalt2)

       parasugar.appendChild(tsugar);
       parasugar1.appendChild(trecsugar)
       parasugar2.appendChild(trecsugar2);

       parafat.appendChild(tfat);
       parafat1.appendChild(trecfat);
       parafat2.appendChild(trecfat2);

       parasatfat.appendChild(tsatfat);
       parasatfat1.appendChild(trecsatfat);
       parasatfat2.appendChild(trecsatfat2);

       document.getElementById("caltext").appendChild(paracal);  
       document.getElementById("caltext").appendChild(paracal1);  
       document.getElementById("caltext").appendChild(paracal2);  

       document.getElementById("salttext").appendChild(parasalt); 
       document.getElementById("salttext").appendChild(parasalt1);
       document.getElementById("salttext").appendChild(parasalt2);  

       document.getElementById("sugartext").appendChild(parasugar);
       document.getElementById("sugartext").appendChild(parasugar1); 
       document.getElementById("sugartext").appendChild(parasugar2); 

       document.getElementById("fattext").appendChild(parafat);
       document.getElementById("fattext").appendChild(parafat1);
       document.getElementById("fattext").appendChild(parafat2);

       document.getElementById("satfattext").appendChild(parasatfat); 
       document.getElementById("satfattext").appendChild(parasatfat1); 
       document.getElementById("satfattext").appendChild(parasatfat2); 
}
