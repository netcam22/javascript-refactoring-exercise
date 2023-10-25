function processTransactions(transactions) {
  if (!Array.isArray(transactions)) {
    throw new Error("Undefined collection of transactions");
  }
  const itemSummary = transactions.reduce(
    (summary, item) =>
      summary.set(item, summary.has(item) ? summary.get(item) + 1 : 1),
    new Map()
  );
  return [...itemSummary]
    .sort(([nameA, qtyA], [nameB, qtyB]) =>
      qtyA < qtyB ? 1 : qtyA === qtyB && nameA > nameB ? 1 : -1
    )
    .map((pair) => pair.join(" "));
}

module.exports = processTransactions;

/*
- Globals    Removing the assignment of an empty array to the global, txr, made the function pure.
- Parameter  Renaming the parameter "transactions" describes the parameter's contents more accurately.
- Validation Replacing the call to a validation function with a local IF statement gives fellow coders less to
-            think about, and checking for an array prevents reduce() throwing an unknown function error at 
-            runtime.
- Reduce...  Implementing the transaction summary logic with a reduce() method clarified the code's intent.
- Map...     Having a Map object as the reduce function's accumulator is cleaner than dynamically adding
-            properties to an object.
- Spread... A Map object is also iterable, providing a suitable input for the final two steps.
- Sort... We've used .sort() to order the array firstly by quantity (decreasing), then alphabetically. 
-         It makes the code more condensed as well as more readable, and gets rid of the seperate sort function.
- Join... Finally, we've used .join() to correctly format the output from the map we used earlier
*/
