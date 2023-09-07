import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {

  const [searchBar, setSearchBar] = useState('');

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
  }

  return (
    <AppContext.Provider value={{
      searchBar,
      setSearchBar,
      handleSearchBar,
    }}>
      {children}
    </AppContext.Provider>
  );
}