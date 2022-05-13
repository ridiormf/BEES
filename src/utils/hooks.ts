import React from 'react';

/**
 * Function that simulates the behavior of a class component constructor,
 * adapted to hooks, for functional components.
 *
 * @param {function} callback Callback which will be called as soon as the component is instantiated.
 */
export const useConstructor = (callback: () => void): void => {
  const componentWasBuilt = React.useRef<boolean>(false);
  if (!componentWasBuilt.current) {
    componentWasBuilt.current = true;
    callback();
  }
};

/**
 * Function that simulates the behavior of a class component method "componentDidMount",
 * adapted to hooks, for functional components.
 *
 * @param {function} callback Callback which will be called as soon as the component mount.
 */
export const useDidMount = (callback: () => void): void => {
  React.useEffect(callback, []);
};

/**
 * Function that simulates the behavior of a class component method "componentWillUnmount",
 * adapted to hooks, for functional components.
 *
 * @param {function} callback Callback which will be called as soon as the component will unmount.
 */
export const useWillUnmount = (callback: () => void): void => {
  React.useEffect(() => {
    return callback;
  }, []);
};

/**
 * Function that simulates the behavior of a class component method "componentDidUpdate",
 * adapted to hooks, for functional components.
 *
 * @param {function} callback Callback which will be called on each value change of variables declared as dependencies,
 * excluding the first render of the component.
 * @param {React.DependencyList} deps Dependency list to be listened.
 */
export const useDidUpdate = (
  callback: () => void,
  deps: React.DependencyList,
): void => {
  const firstRender = React.useRef<boolean>(true);
  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, deps);
};
