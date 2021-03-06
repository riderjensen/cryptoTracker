// JavaScript Document
/*jslint browser:true */
'use strict';


var ERIC_INIT = 4617.03; //5000 - sold stuff of 382.97
var ERIC_NANO = 44.69982043;
var ERIC_DENT = 32358.6963126;
var ERIC_ETH = 0.9137689;

var ericArrayPrice = [];
var ericArrayName = [];
//This is a set order based on total market cap value (may need to be adjusted in the future)- ETH, NANO, DENT
var ericPurchasePrices = [784.01, 16.11, 0.04];

var arrayCount = 0;

var RIDER_INIT = 1000;
var RIDER_ETH = 0.47197506;


var riderArrayPrice = [];
var riderArrayName = [];
//This is a set order based on total market cap value (may need to be adjusted in the future)- XRP, ADA, VEN, and POE
var riderPurchasePrices = [464.40];


//sean init amount spent
var SEAN_INIT = 1000;
// how much ETH Sean has purchased
var SEAN_ETH = 2.00;
// how much the coins are worth when purchased
var seanPurchasePrices = [475.25];
var seanArrayName = [];
var seanArrayPrice = [];

var crypotcurrencyRequest = new XMLHttpRequest();
var cObj;

window.onload = function loadAPI(){
	var cryptoAPI = "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=300";
	crypotcurrencyRequest.open("GET", cryptoAPI, true);
	crypotcurrencyRequest.responseType = 'text';
	crypotcurrencyRequest.send(null);

};

crypotcurrencyRequest.onload = function(){
	if(crypotcurrencyRequest.status == 200){
		cObj = JSON.parse(crypotcurrencyRequest.responseText);
		forLoop("NANO", "DENT", "ETH", "", "ericContent", "e", ericArrayName, ericArrayPrice, ericPurchasePrices);
		forLoop("ETH", "", "", "", "riderContent", "r", riderArrayName, riderArrayPrice, riderPurchasePrices);
		forLoop("ETH", "", "", "", "seanContent", "s", seanArrayName, seanArrayPrice, seanPurchasePrices)
		ericCalculateNumbers();
		riderCalculateNumbers();
		seanCalculateNumbers();
	}
};

function ericCalculateNumbers(){
	var totalPrice = 0;
	for (var i = 0; i < ericArrayName.length; i++) {
		switch(ericArrayName[i]){
			case "Nano":
				var nanoWorth = ERIC_NANO * ericArrayPrice[i];
				var nanoNode = document.createTextNode("Holding: $" +nanoWorth.toFixed(2));
				var NANOHead = document.getElementById("NANOe");
				pNodeCreate(nanoNode, NANOHead);
				totalPrice += nanoWorth;
				break;
			case "Dent":
				var dentWorth = ERIC_DENT * ericArrayPrice[i];
				var dentNode = document.createTextNode("Holding: $" +dentWorth.toFixed(2));
				var dentHead = document.getElementById("DENTe");
				pNodeCreate(dentNode, dentHead);
				totalPrice += dentWorth;
				break;
			case "Ethereum":
				var ethWorth = ERIC_ETH * ericArrayPrice[i];
				var ethNode = document.createTextNode("Holding: $" +ethWorth.toFixed(2));
				var ethHead = document.getElementById("ETHe");
				pNodeCreate(ethNode, ethHead);
				totalPrice += ethWorth;
				break;
			default:

		}
	}
	var totalPriceHtml = document.getElementById("totalPrice");
	var totalPriceNode = document.createTextNode("Total Holdings Worth: $" + totalPrice.toFixed(2));
	pNodeCreate(totalPriceNode, totalPriceHtml);

	var lossesHtml = document.getElementById("losses");
	var lossesNode = document.createTextNode("Total Gain/Loss: $" + (totalPrice - ERIC_INIT).toFixed(2));
	var checkLossClass;
	if (totalPrice > ERIC_INIT){
		checkLossClass = true;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}
	else{
		checkLossClass = false;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}

	var percentLossNode = document.createTextNode("Total Percent Gain/Loss: " + ((((totalPrice - ERIC_INIT)/ERIC_INIT) *100)).toFixed(2) +"%");
	pNodeCreateWithClass(percentLossNode, lossesHtml, checkLossClass);
}

function riderCalculateNumbers(){
	var totalPrice = 0;
	for (var i = 0; i < riderArrayName.length; i++) {
		switch(riderArrayName[i]){
			case "Ethereum":
				var ethWorth = RIDER_ETH * riderArrayPrice[i];
				var ethNode = document.createTextNode("Holding: $" +ethWorth.toFixed(2));
				var ethHead = document.getElementById("ETHr");
				pNodeCreate(ethNode, ethHead);
				totalPrice += ethWorth;
				break;
			case "XRP":
				var nanoWorth = RIDER_XRP * riderArrayPrice[i];
				var nanoNode = document.createTextNode("Holding: $" +nanoWorth.toFixed(2));
				var NANOHead = document.getElementById("XRPr");
				pNodeCreate(nanoNode, NANOHead);
				totalPrice += nanoWorth;
				break;
			case "Cardano":
				var dentWorth = RIDER_ADA * riderArrayPrice[i];
				var dentNode = document.createTextNode("Holding: $" +dentWorth.toFixed(2));
				var dentHead = document.getElementById("ADAr");
				pNodeCreate(dentNode, dentHead);
				totalPrice += dentWorth;
				break;
			case "Po.et":
				var poeWorth = RIDER_POE * riderArrayPrice[i];
				var poeNode = document.createTextNode("Holding: $" +poeWorth.toFixed(2));
				var poeHead = document.getElementById("POEr");
				pNodeCreate(poeNode, poeHead);
				totalPrice += poeWorth;
				break;
			default:

		}
	}
	var totalPriceHtml = document.getElementById("riderTotalPrice");
	var totalPriceNode = document.createTextNode("Total Holdings Worth: $" + totalPrice.toFixed(2));
	pNodeCreate(totalPriceNode, totalPriceHtml);

	var lossesHtml = document.getElementById("riderLosses");
	var lossesNode = document.createTextNode("Total Gain/Loss: $" + (totalPrice - RIDER_INIT).toFixed(2));
	var checkLossClass;
	if (totalPrice > RIDER_INIT){
		checkLossClass = true;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}
	else{
		checkLossClass = false;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}

	var percentLossNode = document.createTextNode("Total Percent Gain/Loss: " + ((((totalPrice - RIDER_INIT)/RIDER_INIT) *100)).toFixed(2) +"%");
	pNodeCreateWithClass(percentLossNode, lossesHtml, checkLossClass);
}

function seanCalculateNumbers(){
	var totalPrice = 0;
	for (var i = 0; i < seanArrayName.length; i++) {
		switch(seanArrayName[i]){
			case "Ethereum":
				var ethWorth = SEAN_ETH * seanArrayPrice[i];
				var ethNode = document.createTextNode("Holding: $" +ethWorth.toFixed(2));
				var ethHead = document.getElementById("ETHs");
				pNodeCreate(ethNode, ethHead);
				totalPrice += ethWorth;
				break;
			default:

		}
	}
	var totalPriceHtml = document.getElementById("seanTotalPrice");
	var totalPriceNode = document.createTextNode("Total Holdings Worth: $" + totalPrice.toFixed(2));
	pNodeCreate(totalPriceNode, totalPriceHtml);

	var lossesHtml = document.getElementById("seanLosses");
	var lossesNode = document.createTextNode("Total Gain/Loss: $" + (totalPrice - SEAN_INIT).toFixed(2));
	var checkLossClass;
	if (totalPrice > SEAN_INIT){
		checkLossClass = true;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}
	else{
		checkLossClass = false;
		pNodeCreateWithClass(lossesNode, lossesHtml, checkLossClass);
	}

	var percentLossNode = document.createTextNode("Total Percent Gain/Loss: " + ((((totalPrice - SEAN_INIT)/SEAN_INIT) *100)).toFixed(2) +"%");
	pNodeCreateWithClass(percentLossNode, lossesHtml, checkLossClass);
}


function pNodeCreate(nodeText, nodeName){
	var pNode = document.createElement("p");
	pNode.appendChild(nodeText);
	nodeName.appendChild(pNode);
}

function pNodeCreateWithClass(nodeText, nodeName, className){
	var pNode = document.createElement("p");
	if (className) {
		pNode.setAttribute("class", "gained");
	}
	else if(!className){
		pNode.setAttribute("class", "lossed");
	}
	pNode.appendChild(nodeText);
	nodeName.appendChild(pNode);
}

function forLoop(sym1, sym2, sym3, sym4, content, letter, arrayName, arrayPrice, purchasePrice){
	arrayCount = 0;
	var purchasePriceCounter = 0;
	for (var i = 0; i < cObj.length; i++) {
			if (cObj[i].symbol == sym1 || cObj[i].symbol == sym2 || cObj[i].symbol == sym3 || cObj[i].symbol == sym4) {

				var price = cObj[i].price_usd;
				var name = cObj[i].name;
				arrayPrice[arrayCount] = price;
				arrayName[arrayCount] = name;
				arrayCount++;
				var nameNode = document.createTextNode(cObj[i].name);
				var nameTag = document.createElement("H4");

				var purchasePriceNode = document.createTextNode(" Purchased: $"+purchasePrice[purchasePriceCounter]);
				var purchasePriceTag = document.createElement("p");
				
				var priceNode = document.createTextNode("Current: $" +cObj[i].price_usd);
				var priceTag = document.createElement("p");
				priceTag.setAttribute("class", "cryptoPrice");

				var iconTag = document.createElement("i");
				if(cObj[i].price_usd >= purchasePrice[purchasePriceCounter]){
					iconTag.setAttribute("class", "fas fa-chevron-up gained");
				}
				else if(cObj[i].price_usd < purchasePrice[purchasePriceCounter]){
					iconTag.setAttribute("class", "fas fa-chevron-down lossed");
				}
				purchasePriceCounter++;

				var onPage = document.getElementById(content);
				var extraDiv = document.createElement("div");
				extraDiv.setAttribute("id", cObj[i].symbol + letter);
				extraDiv.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");


				nameTag.appendChild(nameNode);
				purchasePriceTag.appendChild(iconTag);
				purchasePriceTag.appendChild(purchasePriceNode);
				priceTag.appendChild(priceNode);
				extraDiv.appendChild(nameTag);
				extraDiv.appendChild(priceTag);
				extraDiv.appendChild(purchasePriceTag);
				onPage.appendChild(extraDiv);
			}
			
		}
}