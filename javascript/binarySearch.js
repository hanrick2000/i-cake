function binarySearch(target, arr) {
  let min = -1;
  let max = arr.length;

  while (min + 1 < max) {
    let guessIndex = Math.floor((max - min) / 2) + min;
    let guess = arr[guessIndex];

    if (guess === target) {
      return true;
    }

    if (guess > target) {
      max = guessIndex;
    } else {
      min = guessIndex;
    }
  }
  return false;
}
