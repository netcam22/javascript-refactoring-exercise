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
- Reduce... 
- Map... 
- Spread... 
- Sort... We've used .sort() to order the array firstly by quantity (decreasing), then alphabetically. 
-         It makes the code more condensed as well as more readable, and gets rid of the seperate sort function.
- Join... Finally, we've used .join() to correctly format the output from the map we used earlier
*/
