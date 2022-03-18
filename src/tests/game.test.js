import {
  createNewGame,
  generateRandomIndices,
  populateItemsToDisplay,
} from "../APIs/game";

describe("Object 'game' tests", () => {
  let gameObject;

  beforeEach(() => {
    gameObject = createNewGame();
  });

  describe("Encapsulation", () => {
    test("Game variables should be encapsulated", () => {
      //encapsulation tests
    });
  });

  describe("Initialisation", () => {
    test("Initially, game level should be 1", () => {
      expect(gameObject.getLevel()).toBe(1);
    });

    test("Initially, score should be 0", () => {
      expect(gameObject.getScore()).toBe(0);
    });

    test("Initially, high score should be 0", () => {
      expect(gameObject.getHighScore()).toBe(0);
    });

    test("Initialy, game state should be 'initial'", () => {
      expect(gameObject.getGameState()).toBe("initial");
    });

    test("Method 'initGame' is defined, it's a function", () => {
      expect(gameObject.initGame).toBeDefined();
      expect(typeof gameObject.initGame).toBe("function");
    });

    test("Method 'gameAction' is defined, it's a function", () => {
      expect(gameObject.gameAction).toBeDefined();
      expect(typeof gameObject.gameAction).toBe("function");
    });

    test("Method 'subscribe' is defined, it's a function", () => {
      expect(gameObject.subscribe).toBeDefined();
      expect(typeof gameObject.subscribe).toBe("function");
    });
  });

  describe("Object 'game' methods", () => {
    let gameObject;
    beforeAll(() => {
      gameObject = createNewGame();
    });

    test("Method 'initGame' should initialise the game correctly", async () => {
      await gameObject.initGame();
      expect(gameObject.getLevel()).toBe(1);
      expect(gameObject.getScore()).toBe(0);
      expect(gameObject.getGameState()).toBe("running");
    });
  });
});

describe("Helper functions", () => {
  test("Function 'generateRandomIndices' should return an empty array when first argument is zero", () => {
    const indices = generateRandomIndices(0, 8);
    expect(indices.length).toBe(0);
  });

  test("Function 'generateRandomIndices' should return an array of length specified by the first argument", () => {
    let indices = generateRandomIndices(4, 20);
    expect(indices.length).toBe(4);
    indices = generateRandomIndices(6, 20);
    expect(indices.length).toBe(6);
    indices = generateRandomIndices(20, 20);
    expect(indices.length).toBe(20);
  });

  test("Function 'generateRandomIndices' should return a maximum index no grater than the second argument", () => {
    let indices = generateRandomIndices(6, 6);
    expect(Math.max(...indices)).toBe(5);
    indices = generateRandomIndices(8, 8);
    expect(Math.max(...indices)).toBe(7);
  });

  test("Function 'generateRandomIndices' should throw an error if second argument is smaller than first argument.", () => {
    expect(() => generateRandomIndices(6, 5)).toThrow();
    expect(() => generateRandomIndices(6, 5)).toThrowError(
      "Invalid maxIndex in function generateRandomIndices!"
    );
  });

  test("Function 'generateRandomIndices' should return an array of unique values", () => {
    let indices = generateRandomIndices(4, 20);
    expect([...new Set(indices)].length).toBe(4);
    indices = generateRandomIndices(8, 20);
    expect([...new Set(indices)].length).toBe(8);
    indices = generateRandomIndices(20, 20);
    expect([...new Set(indices)].length).toBe(20);
  });

  test("Function 'generateRandomIndices' should return an array of correct indices when second argument is omitted", () => {
    let indices = generateRandomIndices(10);
    expect(indices.length).toBe(10);
    expect(Math.max(...indices)).toBe(9);
  });

  test("Function 'populateItemsToDisplay' should return an array of length specified by the second argument", async () => {
    const length = 15;
    const data = await populateItemsToDisplay(1, length);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(length);
  });

  test("Function 'populateItemsToDisplay' should return an array of length 20 even if the second argument is greater than 20", async () => {
    let length = 20;
    let data = await populateItemsToDisplay(2, length);
    expect(data.length).toBe(20);

    length = 30;
    data = await populateItemsToDisplay(2, length);
    expect(data.length).toBe(20);
  });
});
