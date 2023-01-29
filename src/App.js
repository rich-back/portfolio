import './App.css';
import { createContext, useState } from 'react';
import MainContainer from './containers/MainContainer';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
    <div className="App" id={theme}>
      <h1>Welcome to my Portfolio!</h1>
      <div className='switch'>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
      </div>
      <MainContainer theme={theme}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
