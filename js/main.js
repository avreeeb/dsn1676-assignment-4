// JavaScript Document

var blueberry = {
	fullName :"Vaccinium corymbosum",
	growsOnShrub: true,
	energy: 240,
	carbohydrates: 14.49,
	protein: 0.74
};

var grapes = {
	fullName:"Vitis vinifera",
	growsOnShrub: false,
	energy: 288,
	carbohydrates: 18.1,
	protein: 0.72
};
	
var redCurrant = {
	fullName:"Ribes rubrum",
	growsOnShrub: true,
	energy: 234,
	carbohydrates: 13.8,
	protein: 1.4
};

var writeBerryInfo = function (berry) {
	document.write("<h1>" + berry.fullName + "</h1>")
	
	document.write("<dl>");
	
	document.write("<dt>Grows On Shrub</dt>");
	document.write("<dd>" + berry.growsOnShrub + "</dt>");
	
	document.write("<dt>Energy</dt>");
	document.write("<dd>" + berry.energy + " kJ</dt>");
	
	document.write("<dt>Carbohydrates</dt>");
	document.write("<dd>" + berry.carbohydrates + "g</dt>");
	
	document.write("<dt>Protein</dt>");
	document.write("<dd>" + berry.protein + "</dt>");
	
	document.write("</dl>");
};

writeBerryInfo(blueberry);
writeBerryInfo(grapes);
writeBerryInfo(redCurrant);




