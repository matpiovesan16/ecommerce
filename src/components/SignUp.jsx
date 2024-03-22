import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataContext } from './DataProvider';
import { useContext } from 'react';


const defaultTheme = createTheme();

export default function SignUp() {
  function registrar(){
  let datos = {}
  datos.nombre = document.getElementById('txtNombre').value;
  datos.pass= document.getElementById('txtPass').value;

  (async ()=>{
    const request = await fetch("api/usuarios",{
        method: 'POST',
        headers:{
            'Accept': 'application/Json',
            'Content-type': 'application/Json'
        },
        body: JSON.stringify(datos)
    });

    alert('Cuenta creada con Exito!');
    window.location.href='http://localhost:3000/ecommerce';



})();


}
  // if(passwordRepeat != datos.password){
  //     alert('La contraseñas no coinciden');
  //     return

  // }









  const value = useContext(DataContext);
  const [session, setSession] = value.session;


  const showSessions = session ? "singups show" : "singups";
  const showSession = session ? "singup show" : "singup";

  
  const togglefalse = () => {
    setSession(false);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
   
   <div className="singups">



    <form action="POST">
      <input type="text"  name='nombre' id='txtNombre'/>
      <input type="contraseña"  id='txtPass'/>
      <input type="submit" />
    </form>
  
    </div>

  // <div className="singup">
  //   <ThemeProvider theme={defaultTheme}>
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           marginTop: 8,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Typography component="h1" variant="h5">
  //           Registrarse
  //         </Typography>
  //         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
  //           <Grid container spacing={2}>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 autoComplete="given-name"
  //                 name="firstName"
  //                 required
  //                 fullWidth
  //                 id="firstName"
  //                 label="Nombre"
  //                 autoFocus
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="lastName"
  //                 label="Apellido"
  //                 name="lastName"
  //                 autoComplete="family-name"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="dni"
  //                 label="DNI"
  //                 name="dni"
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="provincia"
  //                 label="Provincia"
  //                 name="provincia"
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="calle"
  //                 label="Calle"
  //                 name="calle"
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="numeroCalle"
  //                 label="Número de calle"
  //                 name="numeroCalle"
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 fullWidth
  //                 id="departamento"
  //                 label="Departamento"
  //                 name="departamento"
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 fullWidth
  //                 id="observaciones"
  //                 label="Observaciones"
  //                 name="observaciones"
  //                 multiline
  //                 rows={4}
  //                 autoComplete="off"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 name="email"
  //                 label="Email"
  //                 id="email"
  //                 autoComplete="email"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 name="password"
  //                 label="Contraseña"
  //                 type="password"
  //                 id="password"
  //                 autoComplete="new-password"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 name="confirmar_contraseña"
  //                 label="Confirmar contraseña"
  //                 type="password"
  //                 id="confirmar_contraseña"
  //                 autoComplete="new-password"
  //               />
  //             </Grid>
  //           </Grid>
  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2 }}
  //           >
  //             Crear cuenta
  //           </Button>
           
  //           <Grid container justifyContent="flex-end">
  //           </Grid>
  //         </Box>
  //       </Box>
        
  //     </Container>
  //   </ThemeProvider>
  // </div>}
  );
}