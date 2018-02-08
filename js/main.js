// JavaScript Document
/*jslint browser:true */
'use strict';


var ERIC_INIT = 5000;
var ERIC_XRB = 44.69982043;
var ERIC_VEN = 132.6867804;
var ERIC_POE = 7398.3317625;
var ERIC_DENT = 32358.6963126;

var ericArrayPrice = [];
var ericArrayName = [];

var arrayCount = 0;

var RIDER_INIT = 1000;

var riderArrayPrice = [];
var riderArrayName = [];


var crypotcurrencyRequest = new XMLHttpRequest();
var cObj;

window.onload = function loadAPI(){
	var cryptoAPI = "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=200";

	crypotcurrencyRequest.open("GET", cryptoAPI, true);
	crypotcurrencyRequest.responseType = 'text';
	crypotcurrencyRequest.send(null);

};

crypotcurrencyRequest.onload = function(){
	if(crypotcurrencyRequest.status == 200){
		cObj = JSON.parse(crypotcurrencyRequest.responseText);
		console.log(cObj);
		console.log(cObj[1]);
		forLoop("XRB", "VEN", "DENT", "POE", "ericContent", "e", ericArrayName, ericArrayPrice);
		forLoop("XRB", "VEN", "DENT", "POE", "riderContent", "r", riderArrayName, riderArrayPrice);
		ericCalculateNumbers();
		riderCalculateNumbers();
	}
};

function ericCalculateNumbers(){
	var totalPrice = 0;
	for (var i = 0; i < ericArrayName.length; i++) {
		switch(ericArrayName[i]){
			case "VeChain":
				var venWorth = ERIC_VEN * ericArrayPrice[i];
				var venNode = document.createTextNode("Holdings Worth: $" +venWorth.toFixed(2));
				var venHead = document.getElementById("VENe");
				pNodeCreate(venNode, venHead);
				totalPrice += venWorth;
				break;
			case "Nano":
				var nanoWorth = ERIC_XRB * ericArrayPrice[i];
				var nanoNode = document.createTextNode("Holdings Worth: $" +nanoWorth.toFixed(2));
				var xrbHead = document.getElementById("XRBe");
				pNodeCreate(nanoNode, xrbHead);
				totalPrice += nanoWorth;
				break;
			case "Dent":
				var dentWorth = ERIC_DENT * ericArrayPrice[i];
				var dentNode = document.createTextNode("Holdings Worth: $" +dentWorth.toFixed(2));
				var dentHead = document.getElementById("DENTe");
				pNodeCreate(dentNode, dentHead);
				totalPrice += dentWorth;
				break;
			case "Po.et":
				var poeWorth = ERIC_POE * ericArrayPrice[i];
				var poeNode = document.createTextNode("Holdings Worth: $" +poeWorth.toFixed(2));
				var poeHead = document.getElementById("POEe");
				pNodeCreate(poeNode, poeHead);
				totalPrice += poeWorth;
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
			case "VeChain":
				var venWorth = ERIC_VEN * riderArrayPrice[i];
				var venNode = document.createTextNode("Holdings Worth: $" +venWorth.toFixed(2));
				var venHead = document.getElementById("VENr");
				pNodeCreate(venNode, venHead);
				totalPrice += venWorth;
				break;
			case "Nano":
				var nanoWorth = ERIC_XRB * riderArrayPrice[i];
				var nanoNode = document.createTextNode("Holdings Worth: $" +nanoWorth.toFixed(2));
				var xrbHead = document.getElementById("XRBr");
				pNodeCreate(nanoNode, xrbHead);
				totalPrice += nanoWorth;
				break;
			case "Dent":
				var dentWorth = ERIC_DENT * riderArrayPrice[i];
				var dentNode = document.createTextNode("Holdings Worth: $" +dentWorth.toFixed(2));
				var dentHead = document.getElementById("DENTr");
				pNodeCreate(dentNode, dentHead);
				totalPrice += dentWorth;
				break;
			case "Po.et":
				var poeWorth = ERIC_POE * riderArrayPrice[i];
				var poeNode = document.createTextNode("Holdings Worth: $" +poeWorth.toFixed(2));
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

function forLoop(sym1, sym2, sym3, sym4, content, letter, arrayName, arrayPrice){
	arrayCount = 0;
	for (var i = 0; i < cObj.length; i++) {
			if (cObj[i].symbol == sym1 || cObj[i].symbol == sym2 || cObj[i].symbol == sym3 || cObj[i].symbol == sym4) {

				var riderPrice = cObj[i].price_usd;
				var riderName = cObj[i].name;
				arrayPrice[arrayCount] = riderPrice;
				arrayName[arrayCount] = riderName;
				arrayCount++;
				var riderNameNode = document.createTextNode(cObj[i].name);
				var riderNameTag = document.createElement("H3");
				
				var riderPriceNode = document.createTextNode("Current Price: $" +cObj[i].price_usd);
				var riderPriceTag = document.createElement("p");
				riderPriceTag.setAttribute("class", "cryptoPrice");
				var riderOnPage = document.getElementById(content);
				var riderExtraDiv = document.createElement("div");
				riderExtraDiv.setAttribute("id", cObj[i].symbol + letter);

				riderNameTag.appendChild(riderNameNode);
				riderPriceTag.appendChild(riderPriceNode);
				riderExtraDiv.appendChild(riderNameTag);
				riderExtraDiv.appendChild(riderPriceTag);
				riderOnPage.appendChild(riderExtraDiv);
			}
			
		}
}