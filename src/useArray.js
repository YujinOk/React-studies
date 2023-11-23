import { useState } from "react";

export const useArray = (initalValue) => {
  const [array, set] = useState(initalValue);
  const push = (arg) => {
    // return set((prev) => [...prev].push(arg));
    set((prev) => {
      const copyArr = [...prev];
      copyArr.push(arg);
      return copyArr;
    });
  };

  const replace = (index, replaceWith) => {
    // return set((prev) => [...prev].splice(index, 1, replaceWith));
    set((prev) => {
      const copyArr = [...prev];
      copyArr.splice(index, 1, replaceWith);
      return copyArr;
    });
  };

  const filter = (arg) => {
    return set((prev) => prev.filter((cur) => arg(cur)));
  };
  const remove = (index) => {
    set((cur) => {
      const copyArr = [...cur];
      copyArr.splice(index, 1);
      return copyArr;
    });
  };

  const clear = () => {
    return set([]);
  };

  const reset = () => {
    return set(initalValue);
  };
  return { array, set, push, replace, filter, remove, clear, reset };
};
