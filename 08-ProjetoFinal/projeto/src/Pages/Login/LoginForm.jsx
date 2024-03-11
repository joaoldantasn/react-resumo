import React from 'react';
import { Link } from 'react-router-dom';

//componentes
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST } from '../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    //Um fetch por padrao faz um GET, para fazer um POST tem que passar as opções
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
