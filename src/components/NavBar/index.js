/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import logo from '~/assets/Imgs/Logo_checkok.png';
import Person from '~/assets/Imgs/Pessoa.png';

import { signOut } from '~/store/modules/auth/actions';

export default function NavBar() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const person = user.foto === null ? Person : user.foto === null;

  const deslok = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <img className="nav-title" src={logo} alt="logo" />
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <a href="#a" target="_blank">
            Home
          </a>
          <a href="#a" target="_blank">
            Quem Somos
          </a>
          <a href="#a" target="_blank">
            Produtos
          </a>
          <a href="#a" target="_blank">
            Parceiros
          </a>
          <a href="#a" target="_blank">
            Contato
          </a>
          <a
            href="http://webapp166995.ip-45-79-13-131.cloudezapp.io/portal/"
            target="_blank"
          >
            Portal
          </a>
          <button className="back" type="button" onClick={() => deslok()}>
            Sair
          </button>
          <div>
            <img src={person} alt="person" />
            <span>Texto</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
