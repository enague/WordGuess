# WordGuess

> A Word Guessing Game Using LinkedIn REACH API

>Game Rules

- The goal is to guess the word
- You have 6 chances
- You can either guess a letter or a word if you figured it out
- If you guess a letter or word and it is incorrect, your guesses will decrease by 1

>How To Play

- You can ask for a hint that will give you the definition of the unknown word
- All submitted letters and incorrect guesses will be on display, so try to avoid entering the same letter
- Difficulty ranges from 1-10. Default difficulty is 5. You can change level of difficulty if you want.

## Table of Contents

1.  [Usage](#Usage)
1.  [Requirements](#requirements)
1.  [Development](#development)

## Usage

> Install dependencies from root directory

    "npm install"

> Run the following command in your terminal to start server for API requests

    "npm run server"

> Run the following comman in your terminal to start client on http://localhost:3000

    "npm start"

## Thought Process 

Tech Stack: React, Node/Express

The App component is the overarching parent component. It manages most of the state and passes down state to other child components. It includes most of the functions like getWords() which gets words from the LinkedIn API based on a difficulty which is held in the state.

I wanted to modularize my components on names that were intuitive. 

- HowToPlay 

Describes the gameplay and the rules.

- Display

Shows the unknown word, the submitted letters, the incorrect letters, and the guesses remaining

-Letter

A child of display. As I map through the unknown word, this handles logic if the letter is shown or not and contains specific stylings.

-Board

Describes the interactive portion that the user can play with. This component includes guessing a letter or word, need a hint button, change word button, and change difficulty buttons.

-Congrats/ Lost

An alert banner to signal end of a game through loss or win

-Landing

A fun component to include react-particlesjs in the background of the main game. It acts as a sort of call to action and draws attention of the user.


## Creative Extensions Implemented

>Support for Guessing Full Words

Players can guess full words. If they guess it right, they automatically win the game. However, if they guess it wrong, it reduces their guess count by 1.

>Changing of Emoji Face With Guess Count

I created a function to change the face of the emoji shown as the guess count goes down. It goes from a happy face to a worried face to a really sad face if they lose.

>Configure Difficulty Level

In the initial API request to get the words for the LinkedIn API, I set the default difficulty to be 5. However, the player can change the difficulty by pressing the up or down arrow. This level of difficulty will send another request to the API with the specified difficulty level.

>Need a Hint

I wanted the user to be able to get some help if they needed it. I integreated an Oxford Dictionary API to get the definition of the unkown word. However, sometimes the API cannot get the definition of the word. I handle the error case by telling the user that we had trouble getting the hint of that word.

>Choose Another Word

I wanted the user to be able to choose another word after finishing the game for continuous gameplay. The button chooses another random word in the dictionary array stored in my app state and resets necessary fields.


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

-   Node 6.13.0
-   npm 5.6.0

## 

### Installing Dependencies

From within the root directory:

```sh
npm install
```