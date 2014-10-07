/* Write a function named isAnagram to determine if two strings are anagrams of each other.

For example, the words, cat and act will return true as they are just permutations of another.
If they are not anagrams, return false.

Sample Test cases: (eh, he), (tab, bat), (cheater, teacher), (despair, diapers)

Skeleton: 

Stretch Challenge: Using Javascript display the time it took in milliseconds 

How I'll test the code. I will run your functions using a call like this console.log(isAnagram('bat','tab'));
*/

function isAnagram (word1, word2){
	var array1 = word1.split("");
	var array2 = word2.split("");

	array1.sort();
	array2.sort();

	if (array1.length != array2.length) return false;

	
	
	for(var i = 0; i < array1.length; i++){
		if (array1[i] == array2[i]){
			console.log(array1[i] + " " + array2[i])

		} else {
			return false;
		}
}
return true;
}

	

	



	//if (array1.charAt(0) == array2.charAt(0)){
	//	console.log('The first letter matches!');
	//}


	/*if (array1 == array2) {
		document.write('This is an anagram.');
	} else {
		document.write('This is not an anagram.')
	} */




console.log(isAnagram ('diaper', 'despair')) 

//Making a random change
