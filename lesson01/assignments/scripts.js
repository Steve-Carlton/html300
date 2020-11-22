// jQuery Doc Ready
//This additional comment line added for new Test-Branch
//METHOD 1 .reduce
$(function() { // <--?
  // Set up some data and variables
  const data = [1, 2, 3, 4],
    input = $('.input'),
    submit = $('.submit'),
    resultSum = $('.sum');

  // METHOD 1 click event
  submit.on('click', function() {
    // Grab the input value and parse it into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Add our new number to the data array
      data.push(num);
      // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
      const sum = data.reduce((acc, curr) => acc + curr);
      // Add our new total to the page
      resultSum.text(sum);
      // Reset the input value to an empty string
      input.val('');
    }
  });

});

//METHOD 2 .some
$(function() {
  let someArray = [0], //Add something to the array. .some method does not run on empty arrays.
    someInput = $('.someInput'),
    someSubmit = $('.someSubmit'),
    someResult = $('.someResult');

  // Method 2 click event
  someSubmit.on('click', function() {
    const val = someInput.val();
    const num = parseInt(val);
    //Validate user entry for someInput
    if (!isNaN(num)) {
      // Add our new number to the someArray
      someArray.push(num);
      //Evaluate user entry
      const overFive = someArray.some(function(x) {
        return x > 5;
      })
      //Output evaulation to HTML
      if (overFive === true) {
        someResult.text(`Yep! ${num} is greater than 5.`);
        someArray = [0]; //reset someArray

      } else {
        someResult.text(`${num} is not greater than 5`)
        someArray = [0]; //reset someArray
      }
    }
  });
});

//METHOD 3 .includes
// Riddle. Capture user text input, puts it into an array, evaluates the array for the matching string value (the answer to the riddle), logs result to the console, and updates HTML of result.
$(function() {
  let includesArray = [''],
    userEntry = $('.userEntry'),
    includesSubmit = $('.includesSubmit'),
    includesResult = $('.includesResult');

  //BEGIN FUNCTION -- button event listener
  includesSubmit.on('click', function() {

    //make userEntry lowercase
    let userAnswer = userEntry.val().toLowerCase();

    //set answer
    const correctAnswer = 'world';

    //Add userEntry to myArray
    includesArray.push(userAnswer);

    //Evaluate myArray for correctAnswer
    if (includesArray.includes(correctAnswer)) {
      includesResult.text(''); //clear previous result from html
      console.log('Correct!');
      includesArray.pop(correctAnswer); //reset myArray
      includesResult.text(' Correct!');
    } else {
      includesResult.text(''); //clear previous result from html
      console.log('Sad trombone. Try again.')
      includesResult.text(' Sad trombone. Try again.'); //updated text in html.
    }
  });
});

//METHOD 4 .every
//Put everyUserEntry value into everyArray. Evaluate everyArray with modulo condition. Output result.
$(function() {
  let everyArray = [2, 10, 22, 8],
    everyUserEntry = $('.everyUserEntry'),
    everySubmit = $('.everySubmit'),
    everyResult = $('.everyResult');

  //BEGIN FUNCTION -- button event listener
  everySubmit.on('click', function() {
    //Reset everyArray
    let everyArray = [2, 10, 22, 8];

    //Parse everyUserEntry to data type number. Assign variable to userInput
    const userValue = everyUserEntry.val();
    const userInput = parseInt(userValue);

    //Add userInput to everyArray
    everyArray.push(userInput);

    console.log(everyArray);

    //Evaluate array with .every method. If array contains only even numbers, function evenNumbersOnly returns boolean 'true'. Otherwise, 'false'.
    let evenNumbersOnly = everyArray.every(function(x) {
      return (x % 2 === 0);
    });

    //Output displays to html
    if (evenNumbersOnly === true) {
      everyResult.text(' Well done!');
    } else {
      everyResult.text(' D\'oh! Try again... :\(');
    }
  });
});
