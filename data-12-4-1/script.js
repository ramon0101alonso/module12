
//The first line uses the d3.selectAll() method to create an event listener. Whenever there is a change to the HTML body,
//the updatePage()function is called. That is, when an event occurs on the page, such as selection of a dropdown 
//menu option, the updatePage() function is triggered.
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  //The function uses d3.selectAll() to select the dropdown menu, which has an id of selectOption.
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};