// CHAPTER 38-42 TASK # 1


// function power(){
//     var a = +prompt("Enter any number");
//     var b = +prompt("Enter power");

//     var c = Math.pow(a,b);

//     alert(c);

    
// }

// power();





// CHAPTER 38-42 TASK # 2

// function leapYear(){
//     var a = +prompt("Enter any Year");
//     if(a%4===0){
//         alert("It is a LEAP YEAR")
//     }
//     else{
//         alert("It is NOT A LEAP YEAR");
//     }
// }

// leapYear();





// CHAPTER 38-42 TASK # 3

// var a,b,c,s,ar;

// function first(){
    
//      a = +prompt("Enter value of side of triangle, denoted by a")
//      b = +prompt("Enter value of side of triangle, denoted by b")
//      c = +prompt("Enter value of side of triangle, denoted by c")

//     s = (a+b+c)/2; 

       
// }

// function area(){
//   ar = s*(s-a)*(s-b)*(s-c);
//   alert("Area of a triangle is: " + ar);
// }

// first();
// area(); 





// CHAPTER 38-42 TASK # 4

// function mainFunction(){

// }

// function average(avg){
     
//     var first = +prompt("Enter marks of first subject");
//     var second = +prompt("Enter marks of second subject");
//     var third = +prompt("Enter marks of third subject");

//     var avg = (first + second + third)/3
//     return avg;
// }

// function percentage(){



// }







// CHAPTER 38-42 TASK # 7

// function Vowels(string){
//     let word = string.toLowerCase()
//     if(/[aeiou]/.test(word)){
//          return true
//       } else {
//          return false
//       }
//     }

//     function delCut(string){
        
        
//         if (hasVowels(string)){
//            if(string.length == 1){
//              return ""
//            } else {
//              let characterArray = string.split("")
//              return characterArray.map(character => {
//                  if(/[aeiouyAEIOUY]/.test(character)){
//                     character = ""
//                  } else {return character}
//              }).join("")
//           }
//         } else {return string}
        
//       }


// delCut(prompt("Enter any string"));




// CHAPTER 38-42 TASK # 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   alert(findOccurrences());






// CHAPTER 38-42 TASK # 8

// var distance = +prompt("Enter distance between two cities in KM")

// meters();
// feet();
// inches();
// centimeters();

// function meters(){
//     var m = distance*1000;
//     alert("The distance between two cities in meters is: " + m);
// }
// function feet(){
//     var f = distance*3281
//     alert("The distance between two cities in feet is: "+ f)
// }
// function inches(){
//     var i = distance*39370
//     alert("The distance between two cities in inches is: "+ i)
// }
// function centimeters(){
//     var cm = distance*100000
//     alert("The distance between two cities in centimeters is: "+ cm)
// }





// CHAPTER 38-42 TASK # 8

// function currency(){
//     var amount = +prompt("Enter amount to withdraw (in hundreds)");
//     var a = parseInt(amount/100);
//     var b = parseInt((amount%100)/50);
//     var c = parseInt(((amount%100)%50)/10);
//     alert("You will have " + a + " hundred notes, " + b + " fifty notes and " + c + " ten notes");

// }

// currency();





// CHAPTER 43-48 TASK # 5

// var a = document.getElementById("counter");
// var b = document.getElementById("increase");
// var c = document.getElementById("decrease");
// var count = 0;

// b.onclick = function(){
//     count++;
//     a.innerHTML = count;
// }

// c.onclick = function(){
//     count--;
//     a.innerHTML  = count;
// }








// CHAPTER 49-52 TASK # 2

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }
