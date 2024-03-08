import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato conosco</h1>
        <ul className={styles.dados}>
          <li>joaoldantasn@gmail.com</li>
          <li>(83) 99999-9999</li>
          <li>Rua da caixa de água</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
