# fuzzy-parakeet
This assignment uses React to break up the application's UI into components, manage component state, and respond to user events. These functions combine to create a memory game, increasing a player's score every time they click a unique image and shuffling the order of the cards. If the player clicks a card they've already clicked, their score will drop to 0 while the top score remains at that users highscore.

# File Infrastructure

* My-app: This folder holds the react app created for this assignment, and all files for the app act withing this folder.

## Src
* App.js: holds game functions and sends props to components used in the creation and use of game. 
* bestiary.json: JSON array holds the 12 images and names used for the game
* index.js: Renders the reactDOM for app.

### Components
* BeastCard: Component used for each object in the bestiary.json
* Title: Holds scoreboard and website header
* Wrapper: Gives background color and container to the nested beastcard components
