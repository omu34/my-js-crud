 
  function handleMpesaButtonClick(number, amount) {    
    var requestData = {
      number: number,
      amount: amount
    };
    
    fetch("http://example.com/api/endpoint", {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {        
        console.log("Received response:", data);        
      })
      .catch(error => {        
        console.error("Error:", error);
      });
	  
    window.location.href = "http://localhost/start-down/";
  }

  var mpesaButtons = document.querySelectorAll(".mb-3.text-decoration-none.text-dark.link-dark.btn-block.p-3.rounded");

  mpesaButtons.forEach(function (button, index) {
    var number = button.getAttribute("onclick").split("'")[1];
    var amount = button.querySelector(".prictag").getAttribute("data-price-amount");

    var newMpesaButton = document.createElement("button");
    newMpesaButton.textContent = "M-Pesa";
    newMpesaButton.className = "btn btn-primary";
    
    newMpesaButton.addEventListener("click", function () {
      handleMpesaButtonClick(number, amount);
    });

    button.insertAdjacentElement("beforeend", newMpesaButton);

    var spaceElement = document.createElement("span");
    spaceElement.style.display = "inline-block";
    spaceElement.style.width = "3px";
 
    newMpesaButton.insertAdjacentElement("afterend", spaceElement);
    
    if (index === mpesaButtons.length - 1) {
      button.insertAdjacentElement("afterend", spaceElement.cloneNode());
    }
  });

  var cardButtons = document.querySelectorAll(".mb-3.text-decoration-none.text-dark.link-dark.btn-block.p-3.rounded");

  cardButtons.forEach(function(button, index) {
    var number = button.getAttribute("onclick").split("'")[1];
    var amount = button.querySelector(".prictag").getAttribute("data-price-amount");
   
    var newCardButton = document.createElement("button");
    newCardButton.textContent = "Card";
    newCardButton.className = "btn btn-warning";
    
    newCardButton.addEventListener("click", function() {
      handleCardButtonClick(number, amount);
    });
	  
    button.insertAdjacentElement("beforeend", newCardButton);

    var spaceElement = document.createElement("span");
    spaceElement.style.display = "inline-block";
    spaceElement.style.width = "3px";
    
    newCardButton.insertAdjacentElement("afterend", spaceElement);
    
    if (index === cardButtons.length - 1) {
      button.insertAdjacentElement("afterend", spaceElement.cloneNode());
    }
  });
