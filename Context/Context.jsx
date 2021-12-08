import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const handleStore = (ele) => {
    setWatchlist([...watchlist, ele]);
  };
  const removeStocks = (ele) => {
    let newList = watchlist.filter((el) => el !== ele);
    setWatchlist(newList);
    console.log("hii");
  };

  const value = { watchlist, setWatchlist, handleStore, removeStocks };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContextProvider, StoreContext };
