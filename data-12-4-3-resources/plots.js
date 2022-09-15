function init() {
    //d3.select() method is used to select the dropdwon menu and variable selector is assigned
    var selector = d3.select("#selDataset");
    //d3.jason meathod is used to read the data from samples.json
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      //forEach() method is called on the sampleNames array. For each element in the array a dropdown menu option is appended
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

//This function is declared in plots.js, but it is never called in plots.js. 
//It's instead called by the onchange attribute of the dropdown menu in index.html. 
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
    //console.log(newSample);
  }

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  }