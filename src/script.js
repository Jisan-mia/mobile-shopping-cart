//this is a shoping cart project using javascript
//Note: If you don't have a mature/solid knowledge about function in JavaScript you may not understand all the things clearly

let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');

//finding movile cover 
let coverPlusBtn = document.getElementById('coverPlusBtn');
let coverMinusBtn = document.getElementById('coverMinusBtn');



//count the counter value 
function countCounterValue(count, addOrDeductNum, id){
	let countNum = parseFloat(count);
	let updateCount = countNum + addOrDeductNum;
	count = updateCount;
	document.getElementById(id).value = count;
}

//count price
function countPrice(price, addOrDeductPrice, id){
	let priceNum = parseFloat(price);
	let updatePrice = priceNum + addOrDeductPrice;
	price = updatePrice;
	document.getElementById(id).innerHTML = price;
}

//subtotal calculation
function subtotalCalc(phonePrice,coverPrice, addOrDeductNumber ){
	let phonePrcieNumber = parseFloat(phonePrice);
	let coverPriceNumber = parseFloat(coverPrice);
	let updateSubtotal = phonePrcieNumber + coverPriceNumber + addOrDeductNumber;
	document.getElementById('subtotal').innerHTML = updateSubtotal;
	console.log(updateSubtotal)
}
// function for mobile and mobile cover plus button
function allPlusMinusBtnFunc(countId,posOrNegOne, priceId, individualPrice, remainId){
	//calc counter
	let count = document.getElementById(countId).value;
	countCounterValue(count, posOrNegOne, countId);

	//calc price
	let price = document.getElementById(priceId).innerHTML;
	countPrice(price, individualPrice, priceId);

	//calc subtotal
	let remainPrice = document.getElementById(remainId).innerHTML;
	subtotalCalc(price, remainPrice, individualPrice);
}

//plus button funtion
function plusBtnFunc(){
	allPlusMinusBtnFunc('phoneCount',1 ,'phonePrice', 1219, 'coverPrice')

	//without using allPlusMinusBtnFunc function
	/*//phone count
	let phoneCount = document.getElementById('phoneCount').value;
	countCounterValue(phoneCount, 1, 'phoneCount')

	//phone price
	let phonePrice = document.getElementById('phonePrice').innerHTML;
	countPrice(phonePrice, 1219, 'phonePrice');

	//subtotal
	let coverPrice = document.getElementById('coverPrice').innerHTML;

	subtotalCalc(phonePrice, coverPrice, 1219)*/
}

//cover plus button function
function coverPlusBtnFunc(){
	allPlusMinusBtnFunc('coverCount',1 ,'coverPrice', 59, 'phonePrice')

	//without using allPlusMinusBtnFunc function
	/*let coverCount = document.getElementById('coverCount').value;

	// cover counter
	countCounterValue(coverCount, 1, 'coverCount');

	//cover price 
	let coverPrice = document.getElementById('coverPrice').innerHTML;
	countPrice(coverPrice, 59, 'coverPrice');

	//subtotal
	
	let phonePrice = document.getElementById('phonePrice').innerHTML;

	subtotalCalc(phonePrice, coverPrice, 59)*/

}

//minus button function
function minusBtnFunc(){
	let phoneCount = document.getElementById('phoneCount').value;
	if(phoneCount > 1){
		allPlusMinusBtnFunc('phoneCount',-1 ,'phonePrice', -1219, 'coverPrice')

		//without using allPlusMinusBtnFunc function
		/*//phone counter
		countCounterValue(phoneCount, -1, 'phoneCount')

		//phone price
		let phonePrice = document.getElementById('phonePrice').innerHTML;
		countPrice(phonePrice, -1219, 'phonePrice');

		//subtotal
		
		let coverPrice = document.getElementById('coverPrice').innerHTML;

		subtotalCalc(phonePrice, coverPrice, -1219)*/
	}
}



//cover minus button function
function coverMinusBtnFunc(){
	let coverCount = document.getElementById('coverCount').value;
	if(coverCount > 1){
		allPlusMinusBtnFunc('coverCount',-1 ,'coverPrice', -59, 'phonePrice')

		//without using allPlusMinusBtnFunc function
		/*//cover count
		countCounterValue(coverCount, -1, 'coverCount')

		//cover price 
		let coverPrice = document.getElementById('coverPrice').innerHTML;
		countPrice(coverPrice, -59, 'coverPrice');

		///subtotal
		
		let phonePrice = document.getElementById('phonePrice').innerHTML;

		subtotalCalc(phonePrice, coverPrice, -59)*/
	}
}



plusBtn.addEventListener('click', function(){
	plusBtnFunc();
});

minusBtn.addEventListener('click', function(){
	minusBtnFunc();
})

coverPlusBtn.addEventListener('click', function(){
	coverPlusBtnFunc();
})
coverMinusBtn.addEventListener('click', function(){
	coverMinusBtnFunc();
})
