import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Form />
      <Titulo cor="red" texto="Meu Titulo 1">
        Isso é o children
      </Titulo>
      <Titulo cor="blue" texto="Meu Titulo 2" />
      <Titulo cor="green" texto="Meu Titulo 3" />
      <Footer />
    </div>
  );
};

export default App;
