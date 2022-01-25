# Note-Taker-Homework

## Assignment

For this week's homework, you'll create an application using Express.js and persistent storage that will allow users to take notes via a web interface. You'll create POST and GET routes to add and retrieve notes from persistent storage. The application will feature a sleek interface and demonstrate your knowledge of Express.js and routing. You'll also deploy the Note Taker application to Heroku using the Heroku CLI. Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Pseudocode from Jung 
# Homework 11 Notetaker Pseudocode

1. I can tell that I have the package.json, public folder & db folder.
2. I need to set up = a server! server.js file and then connect my server.js file with the express library
3. I need to UNDERSTAND how the front end is set up.
4. => Let's see if I can get the page to render via an HTML route.
5. Let's take some time to look over the FETCH requests.
   5a) What's the API route called?
   5b) WHAT is the API routes expecting?
6. Well...we learned about creating a routes folder that would hold all of the routes.
7. You CREATE the api routes themselves.
8. WHAT are you REFERENCING when doing a GET request & a POST request?
   8a) Aren't you referencing the db folder's db.json file?
   8b) WHAT IS SOMETHING WE LEARNED (fs) that allows us to read/write to a file?

BONUS 9) WRITING A DELETE ROUTE (look at documentation!);