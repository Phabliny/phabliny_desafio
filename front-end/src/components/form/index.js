import React, { useState } from 'react';
import {
	StyledForm,
	StyledTitle,
	StyledContainer,
	StyledErrorText,
	StyledInput,
	StyledButton
} from './styles';
import { buscarCEP } from '../../services/endpoints';
import * as Yup from 'yup';

import Data from '../data/index';

const validationSchema = Yup.object().shape({
	cep: Yup.string().required('O CEP é obrigatório *'),
});

const Form = () => {
	const [cep, setCEP] = useState('');
	const [cepData, setCEPData] = useState(null);
	const [errors, setErrors] = useState({});
	const [isSearching, setIsSearching] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await validationSchema.validate({ cep }, { abortEarly: false });
			setIsSearching(true);
			setErrors({});
			const formattedCep = cep.replace('-', '');
			const data = await buscarCEP(formattedCep);
			setCEPData(data);
			setIsSearching(false);
			setFormSubmitted(true);
		} catch (error) {
			console.error(error.message);
			const validationErrors = {};
			if (error.inner) {
				error.inner.forEach((err) => {
					validationErrors[err.path] = err.message;
				});
			}
			setErrors(validationErrors);
			setIsSearching(false);
			setFormSubmitted(true);
		}
	};

	const validateNumberInput = (event) => {
		const keyCode = event.keyCode || event.which;
		const keyValue = String.fromCharCode(keyCode);
		const regex = /^[0-9]*$/;
		if (!regex.test(keyValue)) {
			event.preventDefault();
		}
	};

	const clearCEPData = () => {
		setCEPData(null);
	};

	const handleChangeCEP = (e) => {
		setCEP(e.target.value);
		if (errors.cep) {
			setErrors({});
		}
		clearCEPData();
		setFormSubmitted(false);
	};

	return (
		<StyledContainer>
			<StyledTitle>Página React</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInput
					mask="99999-999"
					maskChar=""
					placeholder="CEP"
					onKeyPress={validateNumberInput}
					type="text"
					id="cep"
					value={cep}
					onChange={handleChangeCEP}
					className={errors.cep ? 'input-error' : ''}
				/>
				{formSubmitted && !isSearching && errors.cep && (
					<StyledErrorText>{errors.cep}</StyledErrorText>
				)}

				<StyledButton type="submit">Buscar</StyledButton>
			</StyledForm>

			{isSearching && <p>Buscando CEP...</p>}

			{!isSearching && cepData && <Data cepData={cepData} />}

			{!isSearching && formSubmitted && !errors.cep && !cepData && (
				<p>CEP não encontrado</p>
			)}
		</StyledContainer>
	);
};

export default Form;
