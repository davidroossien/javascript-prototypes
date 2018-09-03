/*
 * Given a string (i.e. ‘strstr’), check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.  You don't know how long the
 * substrings are, or how many times the substring is to be repeated to make the string. 
 * So you must test for each possibility.
 *
 * For example "abab" can be created by appending "ab" to "ab", but "abac" cannot be
 * created by appending a substring to itself.
 * 
 * Input:
 * a string
 * 
 * Output:
 * true if all substrings are identical
 * 
 * Example:
 * 
 * Input:  abcabcabc
 * Output: true
 * 
 * When finished:
 *  1. Describe the Big O performance of your solution.
 *  2. What test cases would you write?
 * 
 * Strategy: 
 * 
 * 1. We only need to check substring lengths that divide evenly into the string length. Use modulus.
 * 2. We can also shorten the search because no substring longer than 1/2 the string needs to be checked.
 * 
 * @astring string to test
 * @return true if some substrings are identical
 */ 
function isComposedOfSubstrings(astring){

    // validate the input
    if (astring == undefined || astring == null || astring.length == 0) {
        console.log('RETURN FALSE empty string!');
        return false;
    }

    // Shorten the search because no substring longer than 1/2 the string needs to be checked.
    for (var i = 0; i < astring.length / 2; i++) {
        
        console.log('Checking substrings of length ' + (i + 1));
        
        // We only need to check substring lengths that divide evenly into the string length. 
        // Use modulus.
        if (astring.length % (i + 1) == 0) {
            
            console.log('Modulus test passed, checking substrings of length ' + (i + 1));
            
            var allSubstringsAreIdentical = true;
            
            // contains the substrings of equal length i+1
            var stringArray = [];
            
            console.log('Adding substrings to stringArray[]');

            // load the substrings into the stringArray
            // k increases by the substring length
            // m is used as the stringArray index
            for (var k = 0, m = 0; k < astring.length; k = k + i + 1, m++) {
                
                // slice the string into i+1 long substrings
                stringArray[m] = astring.slice(k, k + i + 1);

                console.log('stringArray[' + m + '] = ' + stringArray[m]);
            }

            console.log('Finished adding substrings, stringArray.length = ' + stringArray.length);

            // do the comparisons between the substrings in the stringArray
            for (var j = 0; j < stringArray.length-1; j++) {

                console.log('Comparing stringArray[' + j + '] = ' + stringArray[j] + ', stringArray[' + (j + 1) + '] = ' + stringArray[j + 1]);

                if (stringArray[j].localeCompare(stringArray[j + 1]) != 0) {
                    console.log('Substrings are NOT identical !');
                    allSubstringsAreIdentical = false;
                    break;
                }
                else {
                    console.log('Substrings ARE identical !');
                }
            }

            if (allSubstringsAreIdentical == true) {
                console.log('RETURN TRUE All Substrings Are Identical for ' + (i + 1) + ' character long substrings !!!');
                return true;
            }
            else {
                console.log('Substrings Are Not Identical for ' + (i + 1) + ' character long substrings.');
            }
            // keep going and check the next possibility
        }
    }
    
    console.log('RETURN FALSE Substrings Are NOT Identical !');
    return false;
}

// test cases

// test empty string
// expect false
isComposedOfSubstrings("");

// test all characters equal, even number of characters
// expect true
isComposedOfSubstrings("aaaa");

// test all characters equal, odd number of characters
// expect true
isComposedOfSubstrings("bbbbb");

// test 2 words equal, even number of characters
// expect true
isComposedOfSubstrings("blahblah");

// test 3 words equal, even number of characters
// expect true
isComposedOfSubstrings("blahblahblah");

// test 3 words equal, odd number of characters
// expect true
isComposedOfSubstrings("boobooboo");

// test first 2 words equal, third word not equal, even number of characters
// expect false
isComposedOfSubstrings("blahblahbooo");

// test first 2 words equal, third word not equal, odd number of characters
// expect false
isComposedOfSubstrings("booboogoo");