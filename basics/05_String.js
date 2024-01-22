const name ="hitesh"
const repocount=50

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName =new String('basketball')

//String length:->The length property returns the length of a string

console.log(gameName.length);

// String chatAt():->The charAt() method returns the character at a specified index (position) in a string

console.log(gameName.charAt(3));

//string CharCodeAt() :->The charCodeAt() method returns the code of the character at a specified index in a string:

console.log(gameName.charCodeAt(2));


//IndexOf():-> it is reverse of charAt() method

console.log(gameName.indexOf(2));

//string toUppercase():->A string is converted to upper case 

console.log(gameName.toUpperCase());

// String toUpperCase():->A string is converted to lower case with 

console.log(gameName.toLowerCase());

//String concat():-> join two or more string **//**  concat() uses instead of +

const fname="vaibhav";
const lname="deshmukh";

console.log(fname.concat(" ",lname));

//substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring()

const newString =gameName.substring(0,5)
console.log(newString);

//String Trim():-> the trim() method removes whitespace from both side of string
const player ="     ms dhoni     "
console.log(player.trim());

//String TrimStar() :->the trimStart() methode works like trim() , but removes whitespace only from the star of a string

console.log(player.trimStart())

//String trimEnd():-> method works like trim(), but removes whitespace only from the end of a string.

console.log(player.trimEnd());

//String Slice():->slice() extracts a part of a string and returns the extracted part in a new string.

const anotherString =gameName.slice(-8,4)
console.log(anotherString);
