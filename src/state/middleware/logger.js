const logger = store => next => action => {
  console.group(action.type);
  console.log("OLD STATE: ", store.getState());
  console.log("ACTION: ", action);
  const returnValue = next(action);
  console.log("NEW STATE: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
