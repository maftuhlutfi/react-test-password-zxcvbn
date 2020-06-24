import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function PasswordInput(props) {
	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Input
			id="standard-adornment-password"
			type={values.showPassword ? 'text' : 'password'}
			value={values.password}
			onChange={handleChange('password')}
			endAdornment={
			  <InputAdornment position="end">
			    <IconButton
			      aria-label="toggle password visibility"
			      onClick={handleClickShowPassword}
			      onMouseDown={handleMouseDownPassword}
			    >
			      {values.showPassword ? <Visibility /> : <VisibilityOff />}
			    </IconButton>
			  </InputAdornment>
			}
		/>
	)

}

export default PasswordInput;