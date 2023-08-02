
  function handleMpesaButtonClick(number, amount, taskId) {
    const requestData = {
      number: number,
      amount: amount,
      taskId: taskId
    };

    


    async function pay() {
      const response = await fetch("https://paystack.com/pay/paystarup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log("Received response:", data);
      } else {
        throw new Error("Error: " + response.status);
      }
    }
    
    pay();   

    window.location.href = "https://joinstartup.africa/";
  }

  const url="https://paystack.com/pay/paystarup"
  async function pay(){
    const response = await fetch(url);
    const data = response.json();
    console.log("Received response:", data);
  }

  


  var mpesaButtons = document.querySelectorAll(".mb-3.text-decoration-none.text-dark.link-dark.btn-block.p-3.rounded");

  mpesaButtons.forEach(function (button, index) {
    var number = button.getAttribute("onclick").split("'")[1];
    var amount = button.querySelector(".prictag").getAttribute("data-price-amount");
    var taskId = button.getAttribute("data-id");
    

    var newMpesaButton = document.createElement("button");
    newMpesaButton.textContent = "M-Pesa";
    newMpesaButton.className = "btn btn-primary";

    newMpesaButton.addEventListener("click", function () {
      handleMpesaButtonClick(number, amount, taskId);
    });

    button.appendChild(newMpesaButton);

    var spaceElement = document.createElement("span");
    spaceElement.style.display = "inline-block";
    spaceElement.style.width = "3px";

    newMpesaButton.insertAdjacentElement("afterend", spaceElement);

    if (index === mpesaButtons.length - 1) {
      button.appendChild(spaceElement.cloneNode());
    }
  });

  function handleCardButtonClick(number, amount, taskId) {
    // Add your code for handling the Card button click here
    console.log("Card Button " + number + " clicked! Amount: " + amount + " Task ID: " + taskId );
  }

  var cardButtons = document.querySelectorAll(".mb-3.text-decoration-none.text-dark.link-dark.btn-block.p-3.rounded");

  cardButtons.forEach(function (button, index) {
    var number = button.getAttribute("onclick").split("'")[1];
    var amount = button.querySelector(".prictag").getAttribute("data-price-amount");
    var taskId = button.getAttribute("data-id");
    

    var newCardButton = document.createElement("button");
    newCardButton.textContent = "Card";
    newCardButton.className = "btn btn-warning";

    newCardButton.addEventListener("click", function () {
      handleCardButtonClick(number, amount, taskId);
    });

    button.appendChild(newCardButton);

    var spaceElement = document.createElement("span");
    spaceElement.style.display = "inline-block";
    spaceElement.style.width = "3px";

    newCardButton.insertAdjacentElement("afterend", spaceElement);

    if (index === cardButtons.length - 1) {
      button.appendChild(spaceElement.cloneNode());
    }
  });
