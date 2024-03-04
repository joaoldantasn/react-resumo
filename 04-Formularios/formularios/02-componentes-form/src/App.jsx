import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  //input
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  //select
  const [produto, setProduto] = React.useState('');
  //radio
  const [cor, setCor] = React.useState('');

  return (
    <div>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <Select
        options={['Smarphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <br></br>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <br></br>
      <button>Enviar</button>
    </div>
  );
};

export default App;
