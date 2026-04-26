function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// явне зазначення типу
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false, true]);

console.log(getFirstElement<number>([1, 2, 3]));         // 1
console.log(getFirstElement<string>(["a", "b", "c"]));   // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true