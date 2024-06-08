import React from 'react';

import MyComponent from './components/MyComponent';

const generateText = () => {
  const alpha = Math.floor(Math.random() * 26) + 97;
  const iterator = Math.floor(Math.random() * 10);
  const value = Array(iterator)
    .fill(0)
    .map((_, i) => String.fromCharCode((alpha + i) % 123))
    .join('');

  return `Data ${value}`;
};

const generateData = (count = 5) =>
  Array(count)
    .fill(0)
    .map((_, id) => ({name: generateText(), id}));

function App(): React.JSX.Element {
  return (
    <MyComponent data={generateData(Math.floor(Math.random() * 10 + 7))} />
  );
}

export default App;
