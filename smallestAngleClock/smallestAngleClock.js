'use strict'

/*
 * Given:  Write a function to find the smallest angle between the
 * hour and minute hands on an analog clock. The angle can be in
 * any direction (clockwise or counter-clockwise)
 * 
 * Provide them with the method signature.
 * 
 * function calculateAngle(hour, minute){
 * }
 * 
 * When finished:
 * 1. What unit test cases would you write?
 */ 


/*
 * A less experienced person may answer like this.  When they
 * answer like this, ask questions like
 * 
 * 1. What if the minute hand is behind the hour hand?
 * 2. What if we want to find the angle between 50 minutes and 1 hour?
 * 3. What about validating inputs?
 * 
 * Finds the angle between the hour and minute hands on a clock.
 * 
 * @hour {number} the hour hand on the clock
 * @minute {number} the minute hand on the clock
 * @return {number} the angle between the hour and minute hands
 */ 
function calculateAngle(hour, minute){
    
    var returnAngle = 0;

    var hourAngle = 360 / 12 * hour;
    var minuteAngle = 360 / 60 * minute;

    if (hourAngle >= minuteAngle) {
        returnAngle = hourAngle - minuteAngle;
    }
    else {
        returnAngle = minuteAngle - hourAngle;
    }

    console.log('Angle between hour and minute hands = ' + returnAngle);
           
}

/*
 * This is a more complete answer.
 * 
 * Finds the shortest angle between the hour and minute hands on a clock.
 * 
 * @hour {number} the hour hand on the clock
 * @minute {number} the minute hand on the clock
 * @return {number} the angle between the hour and minute hands
 */ 
function calculateShortestAngle(hour, minute) {
    
    var returnAngle = 0;
    
    // validate the inputs
    if (hour > 12 || hour < 0 || minute > 60 || minute < 0) {
        console.log('ERROR: invalid input parameters');

        return 0;
    }
    
    // there are 360 degrees in a circle
    var hourAngle = 360 / 12 * hour;
    var minuteAngle = 360 / 60 * minute;
    
    // angle with respect to 12,0 on the clock
    // means a negative angle with respect to 12,0
    if (hourAngle > 180) {
        hourAngle = hourAngle - 360;
    }
    
    // angle with respect to 60,0 on the clock
    // means a negative angle with respect to 60,0
    if (minuteAngle > 180) {
        minuteAngle = minuteAngle - 360;
    }
    
    // handle the absolute value
    if (hourAngle >= minuteAngle) {
        returnAngle = hourAngle - minuteAngle;
    }
    else {
        returnAngle = minuteAngle - hourAngle;
    }
    
    console.log('Angle between hour and minute hands = ' + returnAngle);
           
}


// Unit test cases

//calculateAngle(5, 32);
//calculateAngle(1, 58);


// test hour and minute hand at the same angle
// expect 0
calculateShortestAngle(3, 15);
calculateShortestAngle(6, 30);
calculateShortestAngle(9, 45);
calculateShortestAngle(12, 0);

// test forward (hour hand before minute hand)
// expect 5x6 = 30
calculateShortestAngle(3, 20);

// test backward (hour hand after minute hand)
// expect 5x6 = 30
calculateShortestAngle(3, 10);

// test going all the way around past 12,0
// expect 15x6 = 90
calculateShortestAngle(1, 50);

// test going all the way around past 12,0
// expect 20x6 = 120
calculateShortestAngle(2, 50);

// test some 90 degree angles
// expect 15x6 = 90
calculateShortestAngle(9, 60);
calculateShortestAngle(3, 30);