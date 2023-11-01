let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.substring(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.split([]));
//10
console.log(challenge.split(" "));
//11
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));
//12
console.log(challenge.replace("30 Days Of Python"));
//13
console.log(challenge.charAt(15));
//14
const index = challenge.indexOf("J");
console.log(challenge.charCodeAt(index));
//15
console.log(challenge.indexOf("a"));
//16
console.log(challenge.lastIndexOf("a"));
//17
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
//18
console.log(sentence.lastIndexOf("because"));
//19
console.log(sentence.search("because"));
//20
let text = " 30 Days Of JavaScript ";
console.log(text.trim());
//21
console.log(challenge.startsWith("30"));
//22
console.log(challenge.endsWith("pt"));
//23
console.log(challenge.match(/a/g));
//24
let text1 = "30 Days of";
let text2 = "JavaScript";
let result = text1.concat("", text2);
console.log(result);
//25
console.log(challenge.repeat(2));
