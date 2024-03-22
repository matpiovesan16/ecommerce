import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataContext } from './DataProvider';
import { useContext, useRef } from 'react';


const defaultTheme = createTheme();

export default function SignIn() {

    const value = useContext(DataContext);
    const [session, setSession] = value.session;
    const api = "http://localhost:8083/api/login";
  
    const showSessions = session ? "singins show" : "singins";
    const showSession = session ? "singin show" : "singin";
  
    
    const togglefalse = () => {
      setSession(false);
    };


const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  console.log({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  try {
      const response = await fetch(api, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: formData.get('email'),
              password: formData.get('password')
          })
      });

      const data = await response.text();
      if (data != "Fail") {
         
          alert("Iinicion de sesion correcto! ");
      } else {
          
          alert("Credenciales incorrectas, ingrese nuevamente");
      }
  } catch (error) {
      console.error('Error al iniciar sesión:', error);
  }
};












  return (
    <div className={showSessions}>
      <div className={showSession}>
      <box-icon name="x" onClick={togglefalse}></box-icon>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
        
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Iniciar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  ¿Olvidaste la contraseña?
                </Link>
                <br />
                <Link href="/ecommerce/signup" variant="body2">
                  Crear cuenta
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
}