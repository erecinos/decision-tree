var dietChoice = prompt("Would you like to eat something healthy" +
                        " or would you rather indulge?\n\nEnter " +
                        "\"Indulge\" or \"Healthy\"")

if (dietChoice === "Indulge") {
  var cuisineChoice = prompt("What will it be then, fatty? :P" +
                            "\n\nPizza, Tacos, Burgers or Beer?")
  switch(cuisineChoice) {
       case "Pizza":
        window.location = "http://nypizzeria.com/"
        break;
        case "Tacos":
        window.location = "http://www.mitacoponchos.com/"
        break;
        case "Burgers":
        window.location = "https://www.facebook.com/bigdaddysburgersrgv"
        break;
        case "Beer":
        window.location = "http://rooseveltsat7.com/"
        break;
  }
}
else if (dietChoice === "Healthy") {
  var cuisineChoice = prompt("Good for you! No guilt tonight!" +
                            "\n\nWould you like to have a Chicken Salad," +
                            " Vegetable Soup, Hummus Platter, or Salmon & Veggies?")

                            switch(cuisineChoice) {
                                 case "Chicken Salad":
                                  window.location = "http://www.citycafeandcatering.com/"
                                  break;
                                  case "Vegetable Soup":
                                  window.location = "http://www.jasonsdeli.com/menu"
                                  break;
                                  case "Hummus Platter":
                                  window.location = "http://www.myblueonion.com/food-menu/"
                                  break;
                                  case "Salmon & Veggies":
                                  window.location = "http://www.therepublicoftheriogrande.com/"
                                  break;

  }
}
