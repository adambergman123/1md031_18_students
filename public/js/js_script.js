/*
function MenuItem(name, kcal, glut, lakt) {
    this.name = name;
    this.kcal = kcal;
    this.glut = glut;
    this.lakt = lakt;
    this.nameandkcal = function() {
        return this.name + ' innehåller ' + this.kcal + 'kcal';
    };
}


var hypotetiskburgare1 = new MenuItem("Fire Burger", 650, true, true);
var hypotetiskburgare2 = new MenuItem("Water Burger", 50, false, false);
var hypotetiskburgare3 = new MenuItem("Leaf Burger", 150, true, true);
var hypotetiskburgare4 = new MenuItem("Ground Burger", 350, true, true);
var hypotetiskburgare5 = new MenuItem("Chemical Burger", 1950, true, false);

var burgerList = [hypotetiskburgare1, hypotetiskburgare2, hypotetiskburgare3, hypotetiskburgare4, hypotetiskburgare5];
*/

// wrapper_link.style.gridTemplateColumns = "33% 33%";  // SÅHÄR ÄNDRAR MAN GRID IFRÅN JAVASCRIPT
/*
const wrapper_link = document.getElementById("wrapper");


for (burger in burgerList)
{
        var newDiv = document.createElement("div"); // Create the new Div element

        var newListFirstRow = document.createElement("h3");  //Create list-element
        var newListFirstRowContent = document.createTextNode(burgerList[burger].name); // Create text
        newListFirstRow.appendChild(newListFirstRowContent); // Append text to the list-element
        newDiv.appendChild(newListFirstRow);  //Append the list-element to the div-element (will be the first row)

        var burgerImage = document.createElement('img');
        burgerImage.src =  "https://brands-a.prod.onewp.net/app/uploads/sites/18/2020/09/artikel-naturli-restaurang-2112-closeup-naturli-burger-1600x1000.jpg";
        burgerImage.style.width = "400px";
        burgerImage.style.height = "200px";
        newDiv.appendChild(burgerImage);

        var newListSecondRow = document.createElement("li");  //Create list-element
        var newListSecondRowContent = document.createTextNode(burgerList[burger].kcal + " kcal"); //Create text
        newListSecondRow.appendChild(newListSecondRowContent); //Append text to list
        newDiv.appendChild(newListSecondRow); // append list element to div (will be the second row)

        if (burgerList[burger].lakt === true)
        {
          var newListRow = document.createElement("li");  //Create list-element
          var newListRowContent = document.createTextNode("Contains lactose"); //Create text
          newListRow.appendChild(newListRowContent); //Append text to list
          newDiv.appendChild(newListRow); // append list element to div (will be the second row)
        }

        if (burgerList[burger].glut === true)
        {
          var newListRow = document.createElement("li");  //Create list-element
          var newListRowContent = document.createTextNode("Contains gluten"); //Create text
          newListRow.appendChild(newListRowContent); //Append text to list
          newDiv.appendChild(newListRow); // append list element to div (will be the second row)
        }

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = burgerList[burger].name;
        checkbox.id = burgerList[burger].name;

        var label = document.createElement('label');
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('Order'));

        newDiv.appendChild(checkbox);
        newDiv.appendChild(label);

        wrapper_link.appendChild(newDiv); //append the new div to the existing wrapper (which is filled with divs).
}
*/
// Javascript eventlistener:
/*
var myButton = document.getElementById("orderButton");

myButton.onclick = function (){
  console.log("Button clicked!");
}
*/

/*
function getValues() {
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
//            var streetName = document.getElementById("streetname").value;
//            var houseNumber = document.getElementById("housenumber").value;
  var payment = document.getElementById("payment").value;


  var radios = [document.getElementById("male"), document.getElementById("female"), document.getElementById("other"), document.getElementById("undisclosed")];

  for (radio in radios) {
    if (radios[radio].checked) {
      var gender = radios[radio].value;
      break;
    }
  }
  var burgerOrder = [];
  var checkboxes = document.getElementById("wrapper").getElementsByTagName("input");
  for (checkbox in checkboxes) {
    if (checkboxes[checkbox].checked){
      burgerOrder.push(" " + checkboxes[checkbox].name);
    }
  }


  inputValues = [fullName, email, /*streetName, houseNumber,* / payment];

  document.getElementById("recievedOrder").innerHTML = ""; //Clears the paragraph if the button was clicked earlier.

  var receivedOrder_link = document.getElementById("recievedOrder");

  var orderSummary = document.createElement("h3");
  var orderSummaryText = document.createTextNode("Thank you for your order. Order summary:");
  orderSummary.appendChild(orderSummaryText);
  receivedOrder_link.appendChild(orderSummary);

  var line2 = document.createElement("li");
  var line2text = document.createTextNode("Full name: " + fullName);
  line2.appendChild(line2text);
  receivedOrder_link.appendChild(line2);

  var line3 = document.createElement("li");
  var line3text = document.createTextNode("Email-adress: " + email);
  line3.appendChild(line3text);
  receivedOrder_link.appendChild(line3);
/*
  var line4 = document.createElement("li");
  var line4text = document.createTextNode("Street Name: " + streetName);
  line4.appendChild(line4text);
  receivedOrder_link.appendChild(line4);

  var line5 = document.createElement("li");
  var line5text = document.createTextNode("House Number: " + houseNumber);
  line5.appendChild(line5text);
  receivedOrder_link.appendChild(line5);
* /
  var line6 = document.createElement("li");
  var line6text = document.createTextNode("Payment Method: " + payment);
  line6.appendChild(line6text);
  receivedOrder_link.appendChild(line6);

  var line7 = document.createElement("li");
  var line7text = document.createTextNode("Gender: " + gender);
  line7.appendChild(line7text);
  receivedOrder_link.appendChild(line7);

  var line8 = document.createElement("li");
  var line8text = document.createTextNode("Your order: " + burgerOrder);
  line8.appendChild(line8text);
  receivedOrder_link.appendChild(line8);
}
*/
