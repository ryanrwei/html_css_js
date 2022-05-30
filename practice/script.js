
/***** 製作簡單計算機 ******/

// prompt: input的意思, 預設的值會是String 
// alert:就是會跳出來的訊息

// var user_name = prompt("plz enter name");
// document.write("hello ", user_name);

// var num1 = prompt("plz enter num1");
// var num2 = prompt("plz enter num2");

// // num1 = parseInt(num1);  //轉型，無條件去小數
// // num2 = parseInt(num2);

// num1 = parseFloat(num1);  //轉型
// num2 = parseFloat(num2);

// document.write("<br/>"); 
// document.write(num1 + num2); 

/***** ARRAY ******/
// var score = [1,2,3,4,5,6,7,8,9];
// document.write(score); 

/***** FUNCTION ******/
// function hello(){
//     document.write("this is a func"); 
// }

// hello();

/***** OBJECT ******/
// var person = {
//     name: "Ryan",
//     age: 25,
//     print_name: function(){
//         document.write(this.name); 
//     }
// };
// person.print_name();



/***** CLASS 就是JAVA那種(藍圖) ******/

// class Phone {
//     constructor(number, year, is_waterproof){
//         this.number = number;
//         this.year = year;
//         this.is_waterproof = is_waterproof;
//     }
//     phone_age(){
//         return 2021 - this.year;
//     }
// }

// var phone1 = new Phone("123", 2020, false);
// document.write(phone1.phone_age());

/////////////////////////////////////////////////////
        /***** 如何取得HTML元素 ******/
/////////////////////////////////////////////////////

/*
document, prompt, var... 都是 window底下的屬性
而window是一個全域的物件，而我們寫的東西都是在全域底下，所以可以省略不寫
window 是負責處理、操作.html的東西
所以 document = window.document, prompt = window.prompt

https://www.w3schools.com/js/js_window.asp
*/

/* 

// 藉由標籤的id取得標籤
var h1 = document.getElementById("header");
// console.log會在devTool的console裡面
console.log(h1);

// 改變標籤內容
h1.innerText = "ryan is short";
h1.style.backgroundColor="red";
h1.style.color="blue";

var link = document.getElementById("link");
console.log(link);
link.href = "https://www.facebook.com/";

*/

/////////////////////////////////////////////////////
        /***** Event Listener ******/
/////////////////////////////////////////////////////
// function handle_click(ele){
//     // alert("you clicked it !!!");
//     console.log(ele);
//     ele.innerText = "按屁阿";
//     ele.style.color="red";
// }

// var btn = document.getElementById("btn");
// /*
// addEventListener 用來監聽事件，需要傳入兩個參數
// 第一個參數是: 甚麼樣的事件
// 第二個參數是: 觸發後，會執行甚麼
// this 就是btn這個標籤
// */
// btn.addEventListener("click", function(){
//     // alert("you clicked it !!!");
//     this.innerText = "按屁阿";
// })

// var img = document.getElementById("img");
// btn.addEventListener("mouseover", function(){
//     this.src = "dog.jpg";
// })

// btn.addEventListener("mouseout", function(){
//     this.src = "cat.jpg";
// })





