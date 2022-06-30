import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const login = () =>{
    localStorage.setItem('login' ,true)
    navigate('/')
  }
  const navigate = useNavigate();

  React.useEffect(()=>{
      let Login =localStorage.getItem('Login');
      if (Login){
              navigate('/')
      }
  });

  return (
    <Box
      component="form"
      sx={{
        marginTop: '70px',
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Frist Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
      <Button variant="contained" color="success" onClick={login}>
        Submit
      </Button>

    </Box>
  );
}


export default Login