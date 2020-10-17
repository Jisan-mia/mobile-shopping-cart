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

//tax calculation function
function taxCalc(tax, addOrDeductNum){
	let taxNum = parseFloat(tax);
	let updateTax = taxNum + addOrDeductNum;
	tax = updateTax;
	document.getElementById('tax').innerHTML = updateTax;
	console.log(updateTax)
}

//total calculation function
function totalCalc(subtotal, tax){
		let subtotalNum = parseFloat(subtotal);
		let taxNum = parseFloat(tax);
		let updateTotal = subtotalNum + taxNum;
		document.getElementById('total').innerHTML = updateTotal;
	}


// function for mobile and mobile cover plus and Minus button
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
	//tax
	let tax = document.getElementById('tax').innerHTML;
	taxCalc(tax, 5);

	// total
	let subtotal = document.getElementById('subtotal').innerHTML;

	// console.log(typeof updateTotal,updateTotal)
	totalCalc(subtotal, tax);


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
	//tax
	let tax = document.getElementById('tax').innerHTML;

	// total
	let subtotal = document.getElementById('subtotal').innerHTML;
	totalCalc(subtotal, tax);

	

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
		//tax
		let tax = document.getElementById('tax').innerHTML;
		taxCalc(tax, -5)

		// total
		let total = document.getElementById('total').innerHTML;
		let totalNum = parseFloat(total);
		let updateTotal = totalNum - 1219 -5;
		// let subtotal = document.getElementById('subtotal').innerHTML;
		document.getElementById('total').innerHTML = updateTotal
		console.log(updateTotal)

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
		//tax
		let tax = document.getElementById('tax').innerHTML;

		// total
		let total = document.getElementById('total').innerHTML;
		let totalNum = parseFloat(total);
		let updateTotal = totalNum - 59 ;
		// let subtotal = document.getElementById('subtotal').innerHTML;
		document.getElementById('total').innerHTML = updateTotal
		console.log(updateTotal)
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

// remove button alert
let phoneRemove = document.getElementById('phoneRemove');
let coverRemove = document.getElementById('coverRemove');

function removeItem(){
	alert('You should buy an iPhone')
}

phoneRemove.addEventListener('click', removeItem)
coverRemove.addEventListener('click', removeItem)

//login
document.getElementById('checkOut').addEventListener('click', function(){
	document.getElementById('main').style.display = 'none'
	document.getElementById('login').style.display = 'block'
})
//buy button
document.getElementById('buyBtn').addEventListener('click', function(){


	let nameInput = document.getElementById('nameInput');
	let passInput = document.getElementById('passInput');
	if(nameInput.value == '' || nameInput.value.length < 2 || passInput.value == "" || passInput.value.length < 2){
		console.log('Invalid')
		alert("Enter Your name or Password")
	}
	else{
		document.getElementById('main').style.display = 'block'
		document.getElementById('login').style.display = 'none'
		document.getElementById('buyer').innerHTML =`Congratulation! ${nameInput.value} <br> View Your Products`
		nameInput.value = '';
		passInput.value = '';

	}

})
//close btn
document.getElementById('closeBtn').addEventListener('click', function(){
	document.getElementById('main').style.display = 'block';
	document.getElementById('login').style.display = 'none'
})