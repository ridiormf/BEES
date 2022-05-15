/**
 * Function that checks if the full name is valid.
 * It will check:
 * 1. if the string has, at least, two names, and if all names has 2 letters or more;
 * 2. If the string not start or end with blank space;
 * 3. If it doesn't contain numbers; and
 * 4. If it doesn't contain two or more blank spaces between words
 *
 * @param {string} fullName String to be checked.
 * @returns {boolean} Return true if is a valid name, otherwise returns false.
 */
export const checkFullName = (fullName?: string): boolean => {
  if (!fullName) return false;

  const splittedNames = fullName.split(' ');

  return (
    splittedNames.length > 1 &&
    splittedNames.every((name) => name.length > 1 && !/\d/g.test(name))
  );
};
