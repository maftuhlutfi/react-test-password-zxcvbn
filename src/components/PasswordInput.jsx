import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function PasswordInput(props) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(() => !showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl fullWidth >
			<OutlinedInput
				id="password"
				type={showPassword ? 'text' : 'password'}
				value={props.password}
				onChange={e => props.setPassword(e.target.value)}
				endAdornment={
				  <InputAdornment position="end">
				    <IconButton
				      aria-label="toggle password visibility"
				      onClick={handleClickShowPassword}
				      onMouseDown={handleMouseDownPassword}
				    >
				      {showPassword ? <Visibility /> : <VisibilityOff />}
				    </IconButton>
				  </InputAdornment>
				}
				required
			/>
		</FormControl>
	)

}

export default PasswordInput;