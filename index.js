// ................Question 1 in (ES_NEXT Lab_3)......................

/* 
1.	create a dynamic object using Proxy such that it has only the following properties
a∙ name property that accepts only string of 7 characters.
b∙ address property that accepts only string value.
c∙ age property that accepts numerical value between 25 and 60.

*/

/*
let object={
    userName:"aly Khaled",
    age:26,
    address:"Cairo",
}
let handle_conditions_of_proxy =
{
    get(object,property,proxy)
    {
        // console.log(proxy)
     if(property in object)
     {
        return object[property]
     }
     else
     {
        throw `property ${property} not exist `;
     }
    },
    set(object,property,value,proxy)
    {
        
        if(property in object)
        {
                if(property=="userName" )
                {
                    if( value.length==7 && typeof(value)==='string')
                    {
                        console.log(property+" property edited sucssesfully");
                        object[property]=value;
                    }
                    else{
                        console.log("name property that accepts only string of 7 characters.")
                    }
                }
                

                else if(property=="age" )
                {
                    if( value>25 && value<60)
                    {
                        console.log(property+" property edited sucssesfully");
                        object[property]=value;
                    }
                    else{
                        console.log("age property that accepts numerical value between 25 and 60")
                    }
                }

                else if(property=="address" )
                {
                    if( typeof(value)==='string')
                    {
                        console.log(property+" property edited sucssesfully");
                        object[property]=value;
                    }
                    else{
                        console.log(" address property that accepts only string value")
                    }
                }
        }
        else 
        {
            throw " can't set this value because there is no property with this name";
        }
    }

}
let Proxy_object=new Proxy(object,handle_conditions_of_proxy) ;
// console.log(Proxy_object.userName);

Proxy_object.userName="Mohamed";
console.log(Proxy_object.userName);

Proxy_object.age="59";
console.log(Proxy_object.age);

Proxy_object.address="Aswan";
console.log(Proxy_object.address);
*/

// ................Question 2 in (ES_NEXT Lab_3)......................

/* 
2.	Using ES6 new Syntax & features: Write a script to create different shapes (rectangle, square, circle) make all of them inherits from shape class.
a.	each shape contains two functions to calculate its area and its parameter.
b.	Display the area and each object parameter in your console by overriding toString().
c.	Make static property count in any class and function static return count of objects created from this class 
*/

/*
Object.prototype.toString=function()
{
    this.area();
    this.parameter();
    console.log("Lenth = "+this.length);
    console.log("Width = "+this.width);
}


class Shape {
    static count=0 ;
    constructor (length,width){
        Shape.count++;
        this.length=length;
        this.width=width;
    }
    area(){ 
        console.log("Area = "+this.length*this.width);
    }
    parameter(){ 
        console.log("Parameter = "+(this.length+this.width)*2);
    }
    // Static Function
    static getCount()
    {
        return Shape.count;
    }

}


class Rectangle extends Shape {
    constructor(length,width) {
        super(length,width);
    }
    
}

class Square extends Shape {
    constructor(length,width) {
        super(length,width);
    }
}


let rect1= new Rectangle (5,10);
let squ1= new Square (20,5);

// point a
rect1.area();
rect1.parameter();
squ1.area();
squ1.parameter();

console.log ("................................")
// point b
rect1.toString();
squ1.toString();
console.log(".....................")


// point c
console.log("number of created classes = "+Shape.getCount());
*/

// ................Question 3 in (ES_NEXT Lab_3)......................

/* 
3- Create a generator that returns Fibonacci series that takes only one parameter.
 Make two different implementations as described below:

    A. the parameter passed determines the number of elements displayed from the series. 
    B. the parameter passed determines the max number of the displayed series should not exceed its value. 

*/


/*
let num = parseInt(prompt("Please enter number : "));
console.log("you want " +num+ " only");
let arr = [0, 1];
*/



/*
// point (a) using generator function 
function* fibonacci_series_function (num){

    if(num==1){
        arr.pop();
    }
    else if(num==2){
        arr.push(1);
    }
    else{
        for (let index = 0; index < num-2; index++) {
            arr[index+2]=arr[index]+arr[index+1];
    
        }
    }
    // console.log(arr); // to check th values in array
    for (let i of arr) {
        console.log(i);
    }
    
}
let generator=fibonacci_series_function(num);
generator.next();

*/



/*
//point b using generator function 
function* fibonacci_series_function_max (num){
    if(num==1){
        arr.pop();
    }
    else if(num==2){
        arr.push(1);
    }
    else
    {
        for (let index = 0; index < num; index++) {
            if((arr[index]+arr[index+1])<num){
                arr[index+2]=arr[index]+arr[index+1];
            }
           
            
        }
        
    }
    for (let i of arr) {
        console.log(i);
    }
}
let generator_max = fibonacci_series_function_max(num);
generator_max.next();
*/


// point (a) using normal function 
/*
function fibonacci_series_function (num){

    if(num==1){
        arr.pop();
        console.log(arr);
    }
    else if(num==2){
        console.log(arr);
    }
    else{
        for (let index = 0; index < num-2; index++) {
            arr[index+2]=arr[index]+arr[index+1];
            // console.log(arr[index+2]);
            console.log(arr);
            
        }
    }
}
fibonacci_series_function(num);

*/

//point b using normal function 
/*
function fibonacci_series_function (num){
    if(num==1){
        arr.pop();
        console.log(arr);
    }
    else if(num==2){
        arr.push(1);
        console.log(arr);
    }
    else
    {
        for (let index = 0; index < num; index++) {
            if((arr[index]+arr[index+1])<num){
                arr[index+2]=arr[index]+arr[index+1];
            }
           
            
        }
        console.log(arr);
    }
}
fibonacci_series_function(num);

*/




// ................Question 4 in (ES_NEXT Lab_3)......................
/* 
 4- iterator Create an iterable object by implementing @@iterator method 
 i.e. Symbol.iterator, so that you can use for..of and 
 retrieve its properties. retrieving the object properties 
 and its values

*/

/*

let person={
    userName:"Mohamed",
    address:"cairo",
    age:26,
    job:"Developer",
}

person[Symbol.iterator]=function()
{
    let keys=Object.keys(this);
    let values=Object.values(this);
    let i=0;
    return{
        next:()=>
        {
            if(i<keys.length)
            {
                let res={value:`${keys[i]}: ${values[i]}`,done:false};
                i++;
                return res;
            }
            else
            {
                return {value:undefined,done:true}
            }
        }
    }
}

for(let key of person)
{
    console.log(key);
}
*/



// ................Question 5 in (ES_NEXT Lab_3)......................

/* 
    5-Study new array api methods then create the following methods and apply it on this array var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
        1.	test that every element in the given array is a string 
        2.	test that some of array elements starts with "a"
        3.	generate new array filtered from the given array with only elements that starts with "b" or "s" 

*/


/*
let fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;
// point a
let all_items_string_items=fruits.filter((item,indx)=>
{
    return typeof(item)=='string';
})

console.log("All string items in fruits : "+ all_items_string_items);


// point b
let new_fruits=[];
for (let index = 0; index < fruits.length; index++) {
    if(fruits[index].startsWith("a")==true)
    {
        new_fruits[index]=fruits[index];
    }
    
}

console.log(new_fruits)

// point b (another solution) 

let all_items_starts_with_a=fruits.filter((item)=>
{
    return item.startsWith("a")==true;
})

console.log(all_items_starts_with_a);


// point c 
let all_items_starts_with_b_or_s=fruits.filter((item)=>
{
    return item.startsWith("s")==true || item.startsWith("b")==true;
})

console.log(all_items_starts_with_b_or_s);

*/
