//module 12.3.1

//URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
//d3.json().then() method JavaScript promise to wait for the data retrieval to finish before moving on to the next code
d3.json(url).then(receivedData => console.log(receivedData));