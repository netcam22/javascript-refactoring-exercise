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
    .map(pair => pair.join(" "));
}

module.exports = processTransactions;
