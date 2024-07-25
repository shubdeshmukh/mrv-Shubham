import logo from './logo.svg';
import './App.css';
import overview from './overview';
import JSXBasics from './JSXBasics';
import ClassComponentDemo from './ClassComponentDemo';
import PropsFunDemo from './PropsFunDemo';
import PropsClassDemo from './PropsClassDemo';
import SetStateParent from './components/setStateParent';
import UseStateChild from './components/useStateChild';
import LoginForm from './components/LoginPage';
import { useState } from 'react';

import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">

    {isLoggedIn ? (
      <DashboardPage></DashboardPage>
    ):(
      <LoginPage onLogin={setIsLoggedIn}></LoginPage>
    )}

    </div>
  );
}

export default App;
