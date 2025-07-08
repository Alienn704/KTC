import { useState } from 'react';

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

export default function SearchFilter() {
  const [query, setQuery] = useState('');

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
