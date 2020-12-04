//Get data.json into index.html

//Assign info from data.json a variable. Copy/paste data.json
const userProfiles =
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


// let userProfileList = document.getElementsByClassName("template-hook");
