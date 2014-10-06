var numBeers = prompt("How many bottles of beer are there on the wall?");

function songStart(bottles){
	for (var i = numBeers; i > 2; i--){
		document.write (i + ' bottles of beer on the wall, '  + i + ' bottles of beer. <br />' + ' Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall. <br />')
	}
	document.write ('2 bottles of beer on the wall, 2 bottles of beer. <br /> Take one down and pass it around, 1 bottle of beer on the wall. <br />')
	document.write ('1 bottle of beer on the wall, 1 bottle of beer. <br />' + ' Take one down and pass it around, ' + ' no more bottles of beer on the wall. <br />')
	document.write ('No more bottles of beer on the wall, no more bottles of beer. <br /> Go to the store and buy some more, 99 bottles of beer on the wall.')
}

songStart(numBeers);
/* 
1. Using the javascript keyword prompt ask the user for the number of bottles of beer on the wall and output the lyrics of the song to the page.

Input: 99

Output: 
*/