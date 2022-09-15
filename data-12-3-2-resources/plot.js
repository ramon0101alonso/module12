
//module 12.2.2
//go to live server and then inspect, go to console, and then type consoloe.log to get data
//console.log(cityGrowths);

//first step is to sort the cities by population growth.  cityGrowths is coming from the data.js 
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
//step two is to get the top 5
var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
//parseInt converts the "string numbers" into Intergers and gets the population growth for top 5
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);