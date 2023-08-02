// Create the request options object
const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      age: 30,
    }),
  };
  
  // Make a POST request with JSON data
  fetch('https://api.example.com/data', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  