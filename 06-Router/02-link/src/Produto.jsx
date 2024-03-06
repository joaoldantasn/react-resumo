import React from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';
const Produto = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);
  const search = new URLSearchParams(location.search);
  console.log(search.get('q'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
