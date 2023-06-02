import React from 'react';
import PropTypes from 'prop-types';
import {StyledDados} from './styles'

const Data = ({ cepData }) => {
  return (
    <StyledDados>
      <h4>Dados</h4>
      <p>CEP: {cepData.cep}</p>
      <p>Logradouro: {cepData.logradouro}</p>
      <p>Bairro: {cepData.bairro}</p>
      <p>Cidade: {cepData.cidade}</p>
      <p>Estado: {cepData.estado}</p>
    </StyledDados>
  );
};

Data.propTypes = {
  cepData: PropTypes.shape({
    cep: PropTypes.string,
    logradouro: PropTypes.string,
    bairro: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
  }).isRequired,
};

export default Data;