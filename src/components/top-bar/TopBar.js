import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TypeAnimation } from 'react-type-animation';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            disableRipple
          >
            <img src="assets/bhagwa-jhanda-logo.png" alt='Bhagwa Zenda' width={50} height={50} />
          </IconButton>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              // wait 1s before replacing "Mice" with "Hamsters"
              'भारतीय संस्कृतिः',
              1000,
              'ભારતીય સંસ્કૃતિ',
              1000,
              'भारतीय संस्कृती',
              1000,
              'ਭਾਰਤੀ ਸੰਸਕ੍ਰਿਤੀ',
              1000,
              'பாரதிய சமஸ்கிருதி',
              1000,
              'ಭಾರತೀಯ ಸಂಸ್ಕೃತಿ',
              1000,
              'భారతీయ సంస్కృతి',
              1000,
              'ଭାରତୀ ସଂସ୍କୃତ',
              1000,
              'ভারতীয় সংস্কৃতি',
              1000,
              'Bharatiya Sanskruti',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: '2em', display: 'block',
              width: '400px',
            }}
            repeat={Infinity}
          />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: '2em', display: 'block' }}
          >
            Archive
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
