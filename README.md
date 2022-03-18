# Memory Game

An app created for The Odin Project using [React](https://reactjs.org/), [Tailwind](https://tailwindcss.com/) and [TMDB](https://www.themoviedb.org).

Live webpage [here](https://edy-gavrila.github.io/TOP-Memory-Game).

## How to Play

Simply click the START button to start the game.

You begin at level 1 and you will see some cards showing some famous actors. The objective of the game is to train your memory by clicking a card only once, thus remembering which card you clicked. The game becomes harder and harder with first level showing 4 cards, second level 8 cards, 3rd level 12 cards, and so on.

Completing level 5 will make you a LIVING GOD of memory games, so all to look for!

If you click a card twice on a level, then it's game over and you have to start again.

Your high score will show you the maximum streak you were on during the current session.

## Geek Corner

If you want do build the game yourself, just clone this repo and run "npm install" on the directory. For the app to work, you will need to create a API key for the [TMDB](https://www.themoviedb.org) website and save in the local environment (.env) with the name REACT_APP_TMDB_KEY.

The game is built with React and it uses a few components defined in the component folder. Nothing too complicated as this is a small game. The game engine is the game object supplied by a factory function in the ./APIs/game.js It exposes a few functions like getLevel, getScore getHighScore, getGameState, getItemsToDisplay, initGame, gameAction, subscribe. The key part is to subscribe a function that will be run by the game logic, when the game state or game data changes. The function will receive an object as an argument which you can use to update the app state accordingly.

I use a react context to store the game object and the app state. I then pass a function to game.subscribe that basically updates the context data. You can subscribe more than one function. Just pass each function to game.subscribe.
