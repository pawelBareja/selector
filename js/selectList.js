document.addEventListener("DOMContentLoaded", updateList, false);
var selector = document.getElementById("select");

function updateList() {
  selector.addEventListener("change", function() {
    /*filter out list according to selected value*/
    var selectorValue = selector.value;
    var person = options.filter(function(item) {
      return item.value == selectorValue;
    });

    /*first remove all existing list items*/

    var container = document.getElementById("contact_container");

    if (container.children.length !== 0) {
      while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    }

    /*then create and append items from filtered person array*/

    var iterator = person.length;

    for (var i = 0; i < iterator; i++) {
      var itemContainer = document.createElement("div");
      var brandDiv = document.createElement("p");
      var stationAdress = document.createElement("p");
      var stationPhone = document.createElement("p");

      itemContainer.classList.add("border");
      brandDiv.innerHTML = person[i].brand;
      stationAdress.innerHTML = person[i].adress;
      stationPhone.innerHTML = person[i].phone;

      itemContainer.appendChild(brandDiv);
      itemContainer.appendChild(stationAdress);
      itemContainer.appendChild(stationPhone);
      container.appendChild(itemContainer);
    }

    /*if item list longer than 5 show only 5 first*/

    if (container.children.length >= 5) {
      for (var j = container.children.length - 1; j >= 5; j--) {
        container.children[j].classList.add("inactive");

        /*show button to unhide hidden items*/

        var buttonMore = document.getElementById("buttonMore");
        buttonMore.classList.add("active");
      }

      /*add action to button on click*/

      if (buttonMore) {
        buttonMore.addEventListener("click", function() {
          for (var j = container.children.length - 1; j >= 5; j--) {
            container.children[j].classList.remove("inactive");
          }
          this.classList.remove("active");
        });
      }
    }
  });
}

var options = [
  {
    value: "city",
    brand: "",
    adress: "",
    phone: ""
  },
  {
    value: "paris",
    brand: "Gasoline Top",
    adress: "27 October Av.",
    phone: "+32 435 46 56"
  },
  {
    value: "london",
    brand: "Shello",
    adress: "1 Yours Av.",
    phone: "+33 335 46 56"
  },
  {
    value: "london",
    brand: "BF",
    adress: "1 Sunny st.",
    phone: "+33 111 416 56"
  },
  {
    value: "warsaw",
    brand: "Gasoline Top",
    adress: "21 December Av.",
    phone: "+32 436 46 56"
  },
  {
    value: "warsaw",
    brand: "Shello",
    adress: "1 Arcadia Av.",
    phone: "+33 222 46 56"
  },
  {
    value: "warsaw",
    brand: "BC",
    adress: "1 Always st.",
    phone: "+33 111 222 56"
  },
  {
    value: "warsaw",
    brand: "Shello",
    adress: "1 Yours Av.",
    phone: "+33 335 46 56"
  },
  {
    value: "paris",
    brand: "BF",
    adress: "1 Sunny st.",
    phone: "+33 111 416 56"
  },
  {
    value: "warsaw",
    brand: "Gasoline Top",
    adress: "21 December Av.",
    phone: "+32 436 46 56"
  },
  {
    value: "warsaw",
    brand: "Shello",
    adress: "1 Arcadia Av.",
    phone: "+33 222 46 56"
  },
  {
    value: "paris",
    brand: "BC",
    adress: "1 Always st.",
    phone: "+33 111 222 56"
  },
  {
    value: "london",
    brand: "Shello",
    adress: "1 Yours Av.",
    phone: "+33 335 46 56"
  },
  {
    value: "london",
    brand: "BF",
    adress: "1 Sunny st.",
    phone: "+33 111 416 56"
  },
  {
    value: "paris",
    brand: "Gasoline Top",
    adress: "21 December Av.",
    phone: "+32 436 46 56"
  },
  {
    value: "london",
    brand: "Shello",
    adress: "1 Arcadia Av.",
    phone: "+33 222 46 56"
  },
  {
    value: "london",
    brand: "BC",
    adress: "1 Always st.",
    phone: "+33 111 222 56"
  },
  {
    value: "paris",
    brand: "Shello",
    adress: "1 Yours Av.",
    phone: "+33 335 46 56"
  },
  {
    value: "paris",
    brand: "BF",
    adress: "1 Sunny st.",
    phone: "+33 111 416 56"
  },
  {
    value: "berlin",
    brand: "Gasoline Top",
    adress: "21 December Av.",
    phone: "+32 436 46 56"
  },
  {
    value: "berlin",
    brand: "Shello",
    adress: "1 Arcadia Av.",
    phone: "+33 222 46 56"
  },
  {
    value: "berlin",
    brand: "BC",
    adress: "1 Always st.",
    phone: "+33 111 222 56"
  }
];
