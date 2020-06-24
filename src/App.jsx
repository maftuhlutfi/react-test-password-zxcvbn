import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './components/CheckButton';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/PasswordInput';
import Typography from '@material-ui/core/Typography';
import CheckTime from './components/CheckTime';
import zxcvbn from 'zxcvbn';

const useStyles = makeStyles((theme) => ({
  container: {
  	margin: "0",
    width: '100%',
    height: '100vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
  	width: "40%",
  	textAlign: "center",
  	padding: "40px 5%"
  }
}));

function App() {
	const classes = useStyles();
	const [password, setPassword] = useState("");
	const [crackTime, setCrackTime] = useState("");
	const [score, setScore] = useState(null);

	const timeToCrack = () => zxcvbn(password);

	const handleClick = e => {
		e.preventDefault();
		setCrackTime(() => timeToCrack().crack_times_display.offline_fast_hashing_1e10_per_second);
		setScore(() => timeToCrack().score);
	}

	return (
		<div className={classes.container} >
			<Paper className={classes.paper} >
				<Typography variant="h3">
					Password Test
				</Typography>
				<Typography variant="body1" style={{marginBottom: 30}} >
					How long to crack your password
				</Typography>
				<Grid container spacing={1} direction="row" justify="center" alignItems="center">
			        <Grid item md={10}>
						<Input password={password} setPassword={setPassword} />
			        </Grid>
			        <Grid item md={2}>
						<Button handleClick={handleClick} />
			        </Grid>
				</Grid>
				{score !== null && <CheckTime score={score} crackTime={crackTime} />}
			</Paper>
		</div>
	);
}

export default App;
