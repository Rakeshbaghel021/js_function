// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */      
 //Function Decleration

 function param(n) {
 	return (++n);
 }

// Function Expression

let param=function (n) {
	return (++n);
}

// Arrow Function

let param= n => (++n);

// Arrow Function With Curly Bracket

let param = n => {
  return (++n);
};

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

  //Function Decleration

 function param(n) {
 	return (--n);
 }

// Function Expression

let param=function (n) {
	return (--n);
}

// Arrow Function

let param= n => (--n);

// Arrow Function With Curly Bracket

let param = n => {
  return (--n);
}
 
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
  //Function Decleration

 function param(x,y) {
 	return (x+y);
 }

// Function Expression

let param=function (x,y) {
	return (x+y);
}

// Arrow Function

let param= (x,y) => (x+y);

// Arrow Function With Curly Bracket

let param = (x,y) => {
  return (x+y);
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
  //Function Decleration

 function param(x,y) {
 	return (y-x);
 }

// Function Expression

let param=function (x,y) {
	return (y-x);
}

// Arrow Function

let param= (x,y) => (y-x);

// Arrow Function With Curly Bracket

let param = (x,y) => {
  return (y-x);
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
  //Function Decleration

 function param(x,y) {
 	return (x*y);
 }

// Function Expression

let param=function (x,y) {
	return (x*y);
}

// Arrow Function

let param= (x,y) => (x*y);

// Arrow Function With Curly Bracket

let param = (x,y) => {
  return (x*y);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
   //Function Decleration

 function param(x,y) {
 	return (x/y);
 }

// Function Expression

let param=function (x,y) {
	return (x/y);
}

// Arrow Function

let param= (x,y) => (x/y);

// Arrow Function With Curly Bracket

let param = (x,y) => {
  return (x/y);
}

 

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
  //Function Decleration

 function param(x) {
 	return (x*x);
 }

// Function Expression

let param=function (x) {
	return (x*x);
}

// Arrow Function

let param= x=> (x*x);

// Arrow Function With Curly Bracket

let param = x => {
  return (x*x);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 function param(x,y,operation) {
 	if(operation=="+"){
 		return x+y;
 	}
 	else if(operation=="-"){
 		return x-y;
 	}
 	else if(operation=="*"){
 		return x*y;
 	}
 	else if(operation=="/"){
 		return x/y;
 	}

 	
 }
 	
// Function Expression
var param = function(x,y,operation) {
	if(operation=="+") {
		return (x+y);
	}
	else if(operation=="-") {
		return (x-y);
	}
	else if(operation=="*") {
		return (x*y);
	}
	else if(operation=="/") {
		return (x/y);
	}

}
//Arrow Function With Curly Braces
var param = (x,y,operation) => {
	if(operation=="+") {
		return (x+y);
	}
	else if(operation=="-") {
		return (x-y);
	}
	else if(operation=="*") {
		return (x*y);
	}
	else if(operation=="/") {
		return (x/y);
	}

}
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
 function param(a,b) {
 	if(a>b){
 		return true;
 	}
 }
// Function Expression
var param = function(a,b) {
	if (a > b) {
		return(true)
	}

}
//Arrow Function With Curly Braces
var param = (a,b) => {
	if (a > b) {
		return(true)
	}

}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function param(a,b) {
 	if(a<b){
 		return true;
 	}
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
 function param(a,b) {
 	if(a==b){
 		return true;
 	}
 }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 function param(x,y) {
	if (x < y) {
		return x;
	}
	else if ( y < x) {
		return y;
	}
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function param(x,y) {
	if (x > y) {
		return x;
	}
	else if ( y > x) {
		return y;
	}
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 function param(n) {
 	if(n%2==0){
 		return true;
 	}
 }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function param(n) {
	if(n%2==1){
		return true;
	}
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
 function param(score,total) {
 	if((score/total)*100);
 	switch(true);
 	case:(score>100);
 	     alert("excellent")
 	 case:(score<90 && score>80)    
 	     alert("A")
 	 case:(score<80 && score>70)
 	     alert("B")
 	 case:(score<70 && score>60)
 	     alert("C")
 	 case:(score<60 && score>50)
 	     alert("D")
 	 case:(score<50)
 	     alert("F")
 	}
 

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function param(word1,word2) {
     return (word1+" "+word2);
}






















