import React from 'react';
import Button from '@material-ui/core/Button';

export default function CheckButton(props) {
	return <Button onClick={props.handleClick} style={{height: "55px"}} size="large" variant="contained" color="primary" disableElevation>
		CHECK
	</Button>
}