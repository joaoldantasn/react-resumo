import React from 'react';
import Checkbox from './Form/Checkbox';
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
  const [frutas, setFrutas] = React.useState('');
  //checkbox
  const [linguagens, setLinguagens] = React.useState([]);

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
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={frutas}
        setValue={setFrutas}
      />
      <br></br>
      <h2>Linguagens de Programação</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <br></br>
      <button>Enviar</button>
    </div>
  );
};

export default App;
