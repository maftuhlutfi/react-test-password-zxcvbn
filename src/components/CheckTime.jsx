import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function(props) {
	return (
		<Typography variant="body1" style={{marginTop: 30}} >
			Time required: <b style={{color: "#3F51B5"}} >{props.crackTime}</b>  Score: <b style={{color: "#3F51B5"}} >{props.score}/4</b>
		</Typography>
	)
}