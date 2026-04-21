export const resultReducer = (currentState, action) => {
  console.log(currentState, action);
  const { firstNum, secondNum } = action.payload;
  switch (action.type) {
    case "add":
      return firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    case "divide":
      return (firstNum / secondNum).toFixed(2);
    default:
      return currentState;
  }
};
