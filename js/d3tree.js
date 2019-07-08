// Code adapted from: https://www.d3-graph-gallery.com/graph/dendrogram_basic.html and https://bl.ocks.org/Coola85/51a4bf6b231370cb56a6b7b8da2ff7a7

// Load the tree data
data = {
  "children": [
    {
      "name": "Quadruple",
      "children": [
        {
          "name": "Bacon, Beef, Beef, Vegetable*",
          "colname": "level3",
          "children": [
            {
              "name": "Cheese",
              "colname": "level4",
              "children": [
              {
                "name": "Texas BBQ King - Burger King",
                "colname": "level5"
              }]
            }
          ]
        },
      ],
      "colname": "level2"
    },
    {
      "name": "Triple",
      "children": [
        {
          "name": "Bacon, Chicken, Vegetable*",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "The Daddy Burger - KFC",
              "colname": "level5"
            },
            {
              "name" : "Texas BBQ Crispy Chicken - Burger King",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Bacon, Beef, Beef",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "The New York Stack - McDonalds",
              "colname": "level5"
            },
            {
              "name": "The Mississippi Stack - McDonalds",
              "colname": "level5"
            },
            {
              "name": "The South Carolina Stack - McDonalds",
              "colname": "level5"
            },
            {
              "name": "The Kansas City Stack - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Bacon Double Cheeseburger - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Bacon Double XL - Burger King",
              "colname": "level5"
            },
            {
              "name": "Bacon King - Burger King",
              "colname": "level5"
            },
            {
              "name": "Bacon Double Cheeseburger - Burger King",
              "colname": "level5"
            }
            ]
          }

          ]
        },
        {
          "name": "Beef, Beef, Vegetable*",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Long Texas BBQ - Burger King",
              "colname": "level5"
            }]
          }]
        }
      ],
      "colname": "level2"
    },
    {
      "name": "Double",
      "children": [
        {
          "name": "Bacon, Chicken",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "The Alabama Chicken - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Crispy Chicken Bacon King - Burger King",
              "colname": "level5"
            },
            {
              "name": "Bacon Cheese Chicken Royale - Burger King",
              "colname": "level5"
            }
            ]
          }
          ]
        },
        {
          "name": "Beef, Bacon",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "The Signature Collection: The Classic - McDonalds",
              "colname": "level5"
            },
            {
              "name": "The Signature Collection: The BBQ - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Smoky Black Angus - Burger King",
              "colname": "level5"
            },
            {
              "name": "Western BBQ Bacon - Burger King",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Beef, Beef",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Big Mac - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Double Cheeseburger - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Big King XL - Burger King",
              "colname": "level5"
            },
            {
              "name": "Long Big King - Burger King",
              "colname": "level5"
            },
            {
              "name": "Double Cheeseburger - Burger King",
              "colname": "level5"
            }
            ]
          },
          {
            "name": "No Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Double WHOPPER Sandwich - Burger King",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Chicken, Bacon",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Fillet Tower Burger - KFC",
              "colname": "level5"
            },
            {
              "name": "Zinger Tower Burger - KFC",
              "colname": "level5"
            },
            {
              "name": "Bacon and Cheese Burger - KFC",
              "colname": "level5"
            }
            ]
          }]
        },
        {
          "name": "Chicken, Chicken",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Zinger Stacker - KFC",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Vegetable*, Vegetable*",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Veggie Bean Burger - Burger King",
              "colname": "level5"
            }]
          }]
        }
      ],
      "colname": "level2"
    },
    {
      "name": "Single",
      "children": [
        {
          "name": "Beef",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "The Signature Collection: The Spicy - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Quarter Pounder with Cheese - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Cheeseburger - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Cheeseburger - Burger King",
              "colname": "level5"
            },
            {
              "name": "Kids Cheeseburger - Burger King",
              "colname": "level5"
            }]
          },
          {
            "name": "No Cheese",
            "colname": "level4",
            "children" : [
            {
              "name": "Hamburger - McDonalds",
              "colname": "level5"
            },
            {
              "name": "WHOPPER Sandwich - Burger King",
              "colname": "level5"
            },
            {
              "name": "Hamburger - Burger King",
              "colname": "level5"
            },
            {
              "name": "Whopper JR Sandwich - Burger King",
              "colname": "level5"
            },
            {
              "name": "Kids Hamburger - Burger King",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Chicken",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
             "name": "The Nashville Chicken - McDonalds",
             "colname": "level5" 
            }]
          },
          {
            "name": "No Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Fillet Burger - KFC",
              "colname": "level5"
            },
            {
              "name": "Zinger Burger - KFC",
              "colname": "level5"
            },
            {
              "name": "Mini Fillet Burger - KFC",
              "colname": "level5"
            },
            {
              "name": "Chicken Legend with Cool Mayo - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Chicken Legend with BBQ Sauce - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Chicken Legend with Hot & Spicy Mayo - McDonalds",
              "colname": "level5"
            },
            {
              "name": "McChicken Sandwich - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Mayo Chicken - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Crispy Chicken - Burger King",
              "colname": "level5"
            },
            {
              "name": "Chicken Royale - Burger King",
              "colname": "level5"
            },
            {
              "name": "Chicken Sandwich - Burger King",
              "colname": "level5"
            }]

          }]
        },
        {
          "name": "Fish",
          "colname": "level3",
          "children": [
          {
            "name": "Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Filet-O-Fish - McDonalds",
              "colname": "level5"
            }]
          },
          {
            "name": "No Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "King Fish - Burger King",
              "colname": "level5"
            }]
          }]
        },
        {
          "name": "Vegetable*",
          "colname": "level3",
          "children": [
          {
            "name": "No Cheese",
            "colname": "level4",
            "children": [
            {
              "name": "Vegetable Deluxe - McDonalds",
              "colname": "level5"
            },
            {
              "name": "Kids Veggie Burger - Burger King",
              "colname": "level5"
            }]
          }]
        }
      ],
      "colname": "level2"
    },
  ],
  "name": "BURGERS"
}

//Set the dimensions and margins of the SVG
var width = 1600
var height = 1300  

//Append the svg object to the visualisation
var svg = d3.select("#tree")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(40,0)");  

//Create the cluster layout:
  var cluster = d3.cluster()
    .size([height, width - 500]);  

//Give the data to this cluster layout:
  var root = d3.hierarchy(data, function(d) {
      return d.children;
  });
  cluster(root);

// Add the links between nodes:
  svg.selectAll('path')
    .data( root.descendants().slice(1) )
    .enter()
    .append('path')
    .attr("d", function(d) {
        return "M" + d.y + "," + d.x
                + "C" + (d.parent.y + 50) + "," + d.x
                + " " + (d.parent.y + 150) + "," + d.parent.x // 50 and 150 are coordinates of inflexion, play with it to change links shape
                + " " + d.parent.y + "," + d.parent.x;
              })
    .style("fill", 'none')
    .attr("stroke", '#ccc')

// Append the text to each node
  svg.selectAll("g")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("transform", function(d) {
          return "translate(" + d.y + "," + d.x + ")"
      })
      .append("text")
      .text(function(d) {return d.data.name;})
      .attr("x", x)
      .attr("dx", 5)
      .attr("y", y)
