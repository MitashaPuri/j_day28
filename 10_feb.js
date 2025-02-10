// Topic : *********reg expression*********
// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.

// 1 . syntax: **********/pattern/modifiers**********;
// 2 . Example
// /w3schools/i;
// Example explained:

// /w3schools/i  is a regular expression.

// w3schools  is a pattern (to be used in a search).

// i  is a modifier (modifies the search to be case-insensitive).


//3 . ****** Using String Methods*******
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().

// The search() method uses an expression to search for a match, and returns the position of the match.

// The replace() method returns a modified string where the pattern is replaced.


//  4 .using String search() With a String
// The search() method searches a string for a specified value and returns the position of the match:

// Example
// Use a string to do a search for "W3schools" in a string:

// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// The result in n will be:
// 6

// 5 . Using String search() With a Regular Expression
// Example
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:
// let text = "Visit W3Schools";
// let n = text.search(/w3schools/i);
// The result in n will be:
// 6

// 6 .Using String replace() With a String
// The replace() method replaces a specified value with another value in a string:
// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");


// 7 .Use String replace() With a Regular Expression
// Example
// Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:
// let text = "Visit Microsoft!";
// let result = text.replace(/microsoft/i, "W3Schools");
// The result in res will be:
// Visit W3Schools!

//  8 . Regular Expression Patterns
// Brackets are used to find a range of characters:
// Expression	Description	Try it
// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |


//  9 .Metacharacters are characters with a special meaning:
// Metacharacter	Description	Try it
// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx	


// 10 .Quantifier	Description	Try it ::::// Quantifiers define quantities:
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n




