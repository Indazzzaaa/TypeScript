// some time we want to limit the number of values we can assign to variable

// Litral (exact,specific)
let quantity: 50 | 100;
quantity = 50; // works
quantity = 100 // works
// quantity = 101 // !error

//* other way to define literals

type Metric = 'cm' | 'inch';
let metricUsed: Metric;
metricUsed = "cm";