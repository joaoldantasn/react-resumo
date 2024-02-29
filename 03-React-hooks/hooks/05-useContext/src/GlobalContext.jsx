import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <GlobalContext.Provider value={{ produtos }}>
      {children}
    </GlobalContext.Provider>
  );
};
