import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (reducer, defaultVal, key) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      const data = JSON.parse(window.localStorage.getItem(key));
      if (data) {
        val = data;
      } else {
        val = defaultVal;
      }
    } catch {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export { useLocalStorageReducer };
