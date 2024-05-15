import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import { Box, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



function App() {
  return (
    <>
      <Container>
        <Box sx={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}><span class="material-icons-outlined">
            <LockClockOutlined />
          </span></Avatar>

          <Typography variant="h5" component="h2">
            Sign in
          </Typography>
          <Box>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" required margin='normal' fullWidth />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required margin='normal' fullWidth />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>SIGN IN</Button>
            <Link href="#">Forget Password?</Link>
          </Box>
        </Box>

      </Container >
    </>
  );
}

export default App;
