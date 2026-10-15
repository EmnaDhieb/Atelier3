import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PanneauAccueil from './panneauAccueil';
import SuiviCommende from './SuiviCommende';
import CommandeVirtuelle from './CommandeVirtuelle';


function App() {
  return(
    <div>
  <PanneauAccueil />
  <SuiviCommende />
  <CommandeVirtuelle numero="CMD-1042" />
  <CommandeVirtuelle numero="CMD-1043" />
  <CommandeVirtuelle numero="CMD-1044" />
  </div>
  );
}

export default App
