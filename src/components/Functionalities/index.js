import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import fatura from '~/assets/Imgs/icon_fatura 1.png';
import extrato from '~/assets/Imgs/icon_extrato 1.png';
import surface from '~/assets/Imgs/surface1.png';
import xml from '~/assets/Imgs/XMLID 329.png';
import caixaentrada from '~/assets/Imgs/icon_caixaentrada 1.png';

export default function Functionalities() {
  return (
    <Container>
      <hr />
      <h2>Funcionalidades</h2>
      <ul>
        <li>
          <Link to="/functionalities/fatura">
            <div>
              <img src={fatura} alt="fatura" />
            </div>
            <div>
              <span>Minha fatura</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/functionalities/extrato">
            <div>
              <img src={extrato} alt="extrato" />
            </div>
            <div>
              <span>Extrato</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/functionalities/surface">
            <div>
              <img src={surface} alt="surface" />
            </div>
            <div>
              <span>Alterar senha</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/functionalities/contrato">
            <div>
              <img src={xml} alt="fatura" />
            </div>
            <div>
              <span>Visualizar contrato </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/functionalities/caixaentrada">
            <div>
              <img src={caixaentrada} alt="fatura" />
            </div>
            <div>
              <span>Caixa de entrada</span>
            </div>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
