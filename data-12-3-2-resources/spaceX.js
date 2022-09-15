//module 12.3.1

//URL to the SpaceX is defined
//const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
//d3.json().then() method JavaScript promise to wait for the data retrieval to finish before moving on to the next code
//d3.json(url).then(receivedData => console.log(receivedData));

//module 12.3.2
const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

//this will simply print hello in the console
//d3.json("samples.json").then(function(data){
    //console.log("hello");
//});

//this will show all the data in the console
d3.json("samples.json").then(function(data){
    console.log(data);
});

//this will only get the wfreq property from each "person" in the data.metadata array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//the weekly belly button washing frequency, of each person into a new array  wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//this will get all the nulls out of the array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

//display the metadata of any individual from the dataset:
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});