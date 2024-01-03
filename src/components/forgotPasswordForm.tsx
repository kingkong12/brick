'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EyeOutline from 'mdi-material-ui/EyeOutline';
import { styled, useTheme } from '@mui/material/styles';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Button from '@mui/material/Button';

import { useFormState } from 'react-dom';
import { loginFormValidator } from '@/utils/formhelprs';
import useToggle from '@/hooks/toggle';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import FormHelperText from '@mui/material/FormHelperText';

const initialState = {
  message: '',
  error: undefined,
  fieldValue: {
    email: '',
    password: '',
  },
};

export default function LoginForms() {
  const theme = useTheme();
  const [formState, formAction] = useFormState(loginFormValidator, initialState);

  const [visible, toggleVisiblity] = useToggle(false);

  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
          Forgot password
        </Typography>
        <Typography variant="body2">PleaseEnter your new password</Typography>
      </Box>
      <form autoComplete="off" action={formAction}>
        <TextField
          name="email"
          autoFocus
          fullWidth
          id="email"
          label="Email"
          sx={{ marginBottom: 4 }}
          error={Boolean(formState?.error?.email)}
          helperText={formState?.error?.email}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="auth-login-password"> New Password</InputLabel>
          <OutlinedInput
            name="password"
            label="Password"
            id="auth-login-password"
            type={visible ? 'text' : 'password'}
            error={Boolean(formState?.error?.password)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  // onClick={(handleClickShowPassword)}
                  // onMouseDown={handleMouseDownPassword}
                  onClick={toggleVisiblity}
                  onMouseDown={() => {}}
                  aria-label="toggle password visibility"
                >
                  {visible ? <EyeOutline /> : <EyeOffOutline />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formState?.error?.password && (
            <FormHelperText error>{formState?.error?.password}</FormHelperText>
          )}
        </FormControl>

        <Button
          fullWidth
          size="large"
          variant="contained"
          type="submit"
          sx={{ marginBottom: 3, mt: 2 }}
          // onClick={() => {}}
          // onClick={() => router.push('/')}
        >
          Reset Password
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        ></Box>
      </form>
      <TextWrapper>
        <Typography variant="body2">
          <LinkStyled href="/auth/login">Login</LinkStyled>
        </Typography>
      </TextWrapper>
    </>
  );
}

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
}));

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const TextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));
