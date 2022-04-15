function sumOfDifferences(arr) {
}

// Set elements in descending order
sumOfDifferences.sort((a,b) => b - a).map
// Group consecutive pairs together and subtract
what the fuck 
// Add pairs together 
what the fuck

here 

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);