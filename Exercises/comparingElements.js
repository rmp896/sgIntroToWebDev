var testArray = [0, 1, 1, "1", 3, "311"];

for (var arrayPosition = 0; 
	arrayPosition < testArray.length - 1; arrayPosition++) {
	var currentElement = testArray[arrayPosition];
	var nextElement = testArray[arrayPosition + 1]

	console.log("Testing" + currentElement + " and " + nextElement + "(greater than): " 
		+ (currentElement > nextElement)); 

	
    // Is currentElement less than or equal to nextElement?
    console.log("Testing " + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));

    // Are they equal to (==) each other?
    if (currentElement == nextElement) 
	{
        // If they are equal to (==) each other, are they strictly equal(===) to each other?
        console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
        
		// If they are not strictly equal (===), what are their types?
        if (currentElement !== nextElement) 
		{
            // We can use the typeof() function of JavaScript to identify the type of an element
            console.log(currentElement + " is " + typeof(currentElement)); 
            console.log(nextElement  + " is " +  typeof(nextElement));
        }
    } else 
	{
        console.log("Testing " + currentElement + " and " + nextElement + "(equal to): false");

    }
}