
//this is the default graph that shows up.  It only changes after you select DataSet2 from dropdown menu
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  //this function is triggered when theres a change to the HTML DOM(d.3) element with id of dropMenu
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    //variable dropdown is assigned to the DOM element
    var dropdownMenu = d3.select("#dropdownMenu");
    //dataset is assigned value of the dropdown menu eithr dataset1 or dataset2
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    
    //Plot.restyle() method does not create a brand new chart from scratch, it modifies it. More efficient than Plotyly.newPlot()
    Plotly.restyle("plot", trace);
  };
  
  init();