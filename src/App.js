import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TopBar from './components/top-bar/TopBar';
import React from 'react';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <CssBaseline />
      <TopBar />

      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Articles" />
        <Tab label="Videos" />
      </Tabs>

      {value === 0 && (
        <>Articles</>
      )}

      {value === 1 && (
        <>
          <iframe id="ytplayer" type="text/html" width="640" height="360" title='teset'
            src="https://www.youtube.com/embed/KXZZrolKsD0?autoplay=0"
            frameborder="0" allowfullscreen></iframe>
        </>
      )}
    </div>
  );
}

export default App;
