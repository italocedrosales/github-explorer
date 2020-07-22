import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome/repositório..." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34383685?s=460&u=0d72910ae984424603e77bdfb7e82cd01c2c965c&v=4"
            alt="Italo Cedro"
          />

          <div>
            <strong>italocedrosales/github-explorer</strong>
            <p>Github explorer</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34383685?s=460&u=0d72910ae984424603e77bdfb7e82cd01c2c965c&v=4"
            alt="Italo Cedro"
          />

          <div>
            <strong>italocedrosales/github-explorer</strong>
            <p>Github explorer</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34383685?s=460&u=0d72910ae984424603e77bdfb7e82cd01c2c965c&v=4"
            alt="Italo Cedro"
          />

          <div>
            <strong>italocedrosales/github-explorer</strong>
            <p>Github explorer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
