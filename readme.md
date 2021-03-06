# Getting Started
- npm install to install the dependencies
- open two tabs in terminal
  - In one tab run `npm start` (this runs live-server)
  - In the other tab run `npm run react-dev` (transpiles your React code and creates an output bundle)
---
## Level 0:
* Display a list of movies from hardcoded data. [COMPLETE]

## Level 1
* Add a search bar so that a user may see if a movie is in the list. [COMPLETE]
* After a user submits the search, display all matches (or partial matches) to that title. [COMPLETE]
* Bonus: Update list based off search [COMPLETE]
* Bonus: Handle the case of "no movie by that name found" gracefully. [COMPLETE]

## Level 2
* Add an input field for users to add movies. [COMPLETE]
* Display only user added movies, not the hardcoded data. [COMPLETE]

## Level 3 
* Add a button to each list item that allows the user to toggle a 'watched' property. [COMPLETE]
* Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'. [COMPLETE]

## Level 4
*  Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information) [NOT_STARTED]
* Refactor the watch toggle to be part of the movie information panel [NOT_STARTED]
* Get movie information from the The Movie Database API (https://www.themoviedb.org/documentation/api) [NOT_STARTED]

## Bonus Level
*  Think about when it makes sense to request this information from the api - when the user clicks on the title? When the movie gets added? Refactor your code as necessary. [NOT_STARTED]
* Add a way for the user to add their own rating [NOT_STARTED]
* Add a sorting mechanism so the user can sort on rating or other properties [NOT_STARTED]
* Refactor search to allow users to search for movies with a specific director or actor/actress [NOT_STARTED]