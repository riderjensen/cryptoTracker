// JavaScript Document
/*jslint browser:true */
'use strict';

var coinMatch;
var crypotcurrencyRequest = new XMLHttpRequest();
var cObj;

window.onload = function loadAPI(){
	var cryptoAPI = "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=0";

	crypotcurrencyRequest.open("GET", cryptoAPI, true);
	crypotcurrencyRequest.responseType = 'text';
	crypotcurrencyRequest.send(null);

};

crypotcurrencyRequest.onload = function(){
	if(crypotcurrencyRequest.status == 200){
		cObj = JSON.parse(crypotcurrencyRequest.responseText);
		for (var i =0; i <= 100; i++) {
			var coinNode = document.createElement("option");
			coinNode.setAttribute("value", cObj[i].name + " (" + cObj[i].symbol + ")");
			var onDoc = document.getElementById("coins");
			onDoc.appendChild(coinNode);


		}
		
	}
};

document.getElementById("clearButton").onclick = function clearInformation(){
	document.getElementById("form").reset();
};

document.getElementById("submitButton").onclick = function displayInformation(){
	var userAmount = document.getElementById("coinNumber").value;
	var userCoin = document.getElementById("coinSelection").value;
	var coinName = userCoin.split(" (");
	var coinPrice = 0;
	
	for (var i = 0; i < cObj.length; i++) {
		if(cObj[i].name === coinName[0]){
			coinPrice = cObj[i].price_usd;
			coinMatch=i;
		}
	}
	if(userAmount >= 1){
		var totalPrice = (coinPrice *userAmount).toFixed(2);
		document.getElementById("totalCostOnPage").innerHTML = ("The total cost of that cryptocurrency purchase would be: $" + totalPrice);
	}
	
	var info = 1;
	document.getElementById("info" +info).innerHTML = "Name: " +cObj[coinMatch].name;
	info++;
	document.getElementById("info" +info).innerHTML = "Symbol: " +cObj[coinMatch].symbol;
	info++;
	document.getElementById("info" +info).innerHTML = "Price: $" +cObj[coinMatch].price_usd;
	info++;
	document.getElementById("info" +info).innerHTML = "Max Supply: " +cObj[coinMatch].max_supply;
	info++;
	document.getElementById("info" +info).innerHTML = "1 Hour Percent Change: " +cObj[coinMatch].percent_change_1h + "%";
	if(cObj[coinMatch].percent_change_1h >= 0){
		document.getElementById("info" +info).className = "gained";
	}
	else{
		document.getElementById("info" +info).className = "lossed";
	}
	info++;
	document.getElementById("info" +info).innerHTML = "24 Hour Percent Change: " +cObj[coinMatch].percent_change_24h + "%";
	if(cObj[coinMatch].percent_change_24h >= 0){
		document.getElementById("info" +info).className = "gained";
	}
	else{
		document.getElementById("info" +info).className = "lossed";
	}
	info++;
	document.getElementById("info" +info).innerHTML = "7 Day Percent Change: " +cObj[coinMatch].percent_change_7d + "%";
	if(cObj[coinMatch].percent_change_7d >= 0){
		document.getElementById("info" +info).className = "gained";
	}
	else{
		document.getElementById("info" +info).className = "lossed";
	}
	info++;
	document.getElementById("info" +info).innerHTML = "Learn more by clicking <a target="+ "_blank"+" href=" + "https://coinmarketcap.com/currencies/" +cObj[coinMatch].name +" > here</a>.";

};
