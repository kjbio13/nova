import React, { useState } from "react";
import "./App.css";

interface AppProps {
  sendSearchQuery(): void;
}

const App: React.FC<AppProps> = (sendSearchQuery) => {
  const [searchValue, setSearchValue] = useState<string>();

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const search = () => {};

  return (
    <div>
      <input
        value={searchValue}
        onChange={onSearchInput}
        name="search"
        type="text"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default App;
