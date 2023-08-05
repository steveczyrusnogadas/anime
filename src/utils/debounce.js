/**
 * Put the debounce function in a separate file so that it can be reused as a utility class
 * Originally used lodash's debounce function, but it was too big for this project
 */
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    return new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        resolve(func.apply(this, args));
      }, delay);
    });
  };
};

export default debounce;
