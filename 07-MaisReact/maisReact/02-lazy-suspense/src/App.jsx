import React from 'react';
import Header from './Header';
//import Contato from './Contato';

const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense>
    </div>
  );
};

export default App;
