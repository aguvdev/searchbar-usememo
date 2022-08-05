import { useState, useMemo } from "react";

export default function Results({
  items,
  inItemSelected,
  query,
  onResultCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), []);

  function findMatch(items, query) {
    console.log("hola");
  }

  return <div>Hola</div>;
}
