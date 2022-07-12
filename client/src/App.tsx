import React from 'react';
import { Button, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Button 
                variant="contained"
                href="https://github.com/devilzcore"
                sx={{
                    backgroundColor: "#FFBA08",
                    width: "80px",
                    color: "#000",
                    fontWeight: '500',
                    borderRadius: "5",
                    boxShadow: 0,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: "#FAA307",
                      boxShadow: 0
                    },
                  }}>
                Github
                </Button>
              </li>
        </ul>
      </header>
      <div className="container">
        <div className="apresent">
          <h1>Get an attractive and small link</h1>
          <h3>with just one click.</h3>
        </div>
        <div className="content">
          <div className="text-field">
            <TextField
              fullWidth
              placeholder="Paste your link here..."
              variant="outlined"
              sx={{
                bgcolor: 'white',
                borderRadius: '15px',
                '& fieldset': {
                  paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: '15px',
                }
              }}
              InputProps={{
                endAdornment: (
                  <Button 
                    variant="contained" 
                    sx={{
                      backgroundColor: "#FFBA08",
                      height: 'auto',
                      color: "#000",
                      fontWeight: '500',
                      borderRadius: "0 10% 10% 0",
                      boxShadow: 0,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: "#FAA307",
                        boxShadow: 0
                      },
                    }}>
                    Create
                  </Button>
                ),
              }}
            />
          </div>
          <div className="show-url">
            <OutlinedInput className="bores"
              defaultValue="link"
              sx={{
                bgcolor: '#FFBA08',
                width: 'auto',
                borderRadius: '30px',
                  '& root': {
                    color: '#0000',
                  },
                  '& fieldset': {
                    paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: '30px',
                  }
              }}
              disabled
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <ContentCopy />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </div>
        </div>
      </div>
      <footer>
        <p>Project by</p>
        <a href="https://imalduos.dev">Aldo S.</a>
      </footer>
    </div>
  );
}

export default App;
