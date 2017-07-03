//plot a graph of miles vs. time

function parser1(d) {
	d.Months= + d.Month || " ";
     d.CountUsed= +d.Used || " ";
    d.CountNew= +d.New || " ";
    d.NewSales= +d.TotalSalesNew || " ";
    var thenum = d.TotalSalesNew.replace( /^\D+/g, '');
    d.UsedSales= +d.TotalSalesUsed || " ";
    d.pDate = + d["Year "] ;

    return d;
}
// Read in .csv data 
d3.csv("MVA_Vehicle_Sales_Counts_by_Month_for_CY_2002_-_2015.csv", parser1,
       csvJSON(csvdata);
}); 

//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}



