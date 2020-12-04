//Get data.json into index.html

//Assign info from data.json a variable. Copy/paste data.json
const userProfileList =
  [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    }
  ]

//******** STEP BELOW NOT NEEDED. DOM THROWS ERROR, Unexpected token o in JSON
//Parse info in data.json to JS
// var userProfiles = JSON.parse(userProfilesJSON);

// Select HTML element and assign it a variable
const userProfileContainer = document.getElementsByClassName("template-hook");


//run a forEach on userProfileList
userProfileList.forEach(function(el) {
  // console.log(el); <=====test forEach function <=======
  //Create a HTML element
  let userProfile = document.createElement('p')
  userProfile.innerHTML = 'TEST'
  // add code block w/ string interpolation to backticks


  //Append profile to selected HTML element, userProfileContainer
  // userProfileContainer.append(userProfile)
})


//^^ABOVE APPEND NEEDS TO BE IN THE forEach FUNCTION.
// index.js:36 Uncaught TypeError: userProfileContainer.append is not a function
