import { getActorPictureList, getActors } from "./tmdb";

const gameStates = {
  INITIAL: "initial",
  RUNNING: "running",
  OVER: "over",
};

const createNewGame = () => {
  const levels = [4, 8, 16, 20, 24];

  const gameObject = {
    level: 1,
    score: 0,
    highScore: 0,
    itemsToDisplay: [],
    clickedGameItems: [],
    currentState: gameStates.INITIAL,
    subscriptions: [],
  };

  const getLevel = () => gameObject.level;
  const getScore = () => gameObject.score;
  const getHighScore = () => gameObject.highScore;
  const getGameState = () => gameObject.currentState;
  const getItemsToDisplay = () => gameObject.itemsToDisplay;

  const initGame = async () => {
    const initialLevel = 1;
    gameObject.level = initialLevel;
    gameObject.score = 0;
    gameObject.clickedGameItems = [];
    gameObject.itemsToDisplay = await populateItemsToDisplay(
      initialLevel,
      levels[initialLevel - 1]
    );
    gameObject.currentState = gameStates.RUNNING;
    runSubscriptions();
  };

  const gameAction = async (clickedItem) => {
    if (gameObject.currentState !== gameStates.RUNNING) {
      return;
    }
    handleItemClicked(clickedItem);

    await updateGameStatus();
    runSubscriptions();
  };

  const handleItemClicked = (clickedItem) => {
    if (wasItemClicked(clickedItem)) {
      if (gameObject.score > gameObject.highScore) {
        gameObject.highScore = gameObject.score;
      }
      gameObject.currentState = gameStates.OVER;
    } else {
      gameObject.score++;
      gameObject.clickedGameItems.push(clickedItem);
    }
  };

  const updateGameStatus = async () => {
    if (allItemsClickedOnce()) {
      await increaseLevelAndUpdateGameData();
    } else {
      randomizeItemsToDisplay();
    }
  };

  const increaseLevelAndUpdateGameData = async () => {
    if (gameObject.level < 5) {
      gameObject.level++;
    }
    gameObject.clickedGameItems = [];
    const numberOfItems = levels[gameObject.level - 1];
    gameObject.itemsToDisplay = await populateItemsToDisplay(
      gameObject.level,
      numberOfItems
    );
  };

  const randomizeItemsToDisplay = () => {
    const numberOfItems = gameObject.itemsToDisplay.length;
    const indices = generateRandomIndices(numberOfItems);
    const oldOrder = gameObject.itemsToDisplay;
    gameObject.itemsToDisplay = [];
    indices.forEach((index) => {
      gameObject.itemsToDisplay.push(oldOrder[index]);
    });
  };

  const runSubscriptions = () => {
    gameObject.subscriptions.forEach((subscribedFunction) => {
      if (typeof subscribedFunction === "function") {
        subscribedFunction({
          level: gameObject.level,
          score: gameObject.score,
          highScore: gameObject.highScore,
          itemsToDisplay: gameObject.itemsToDisplay,
          gameState: gameObject.currentState,
        });
      }
    });
  };

  const wasItemClicked = (clickedItem) => {
    return (
      gameObject.clickedGameItems.filter((item) => item === clickedItem)
        .length > 0
    );
  };

  const subscribe = (functionToSubscribe) => {
    if (typeof functionToSubscribe === "function") {
      gameObject.subscriptions.push(functionToSubscribe);
    } else {
      throw new Error("Argument passed to subscribe is not a function!");
    }
  };

  const allItemsClickedOnce = () => {
    return (
      gameObject.clickedGameItems.length === gameObject.itemsToDisplay.length
    );
  };

  return {
    getLevel,
    getScore,
    getHighScore,
    getGameState,
    getItemsToDisplay,
    initGame,
    gameAction,
    subscribe,
  };
};

//helper functions
const generateRandomIndices = (numIndexes, maxIndex) => {
  if (numIndexes === 0) {
    return [];
  }

  if (!maxIndex) {
    maxIndex = numIndexes;
  }

  if (maxIndex < numIndexes) {
    throw new Error("Invalid maxIndex in function generateRandomIndices!");
  }
  const indices = [];
  while (indices.length < numIndexes) {
    const index = Math.floor(Math.random() * maxIndex);
    if (indices.filter((currIdx) => currIdx === index).length === 0) {
      indices.push(index);
    }
  }
  return indices;
};

const populateItemsToDisplay = async (level, numberOfItems) => {
  if (numberOfItems > 20) {
    numberOfItems = 20;
  }
  const items = await getActorPictureList(level);
  const randomIndices = generateRandomIndices(numberOfItems, 20);
  const randomItems = [];
  randomIndices.forEach((index) => {
    randomItems.push(items[index]);
  });
  return randomItems;
};

export { createNewGame, generateRandomIndices, populateItemsToDisplay };
