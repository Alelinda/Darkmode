import React, { useEffect, useState } from 'react';
import './App.css';

import face from'./img/facebook.png';
import insta from'./img/instagram.png';
import whats from'./img/whatsapp.png';
import git from'./img/github.png';

const App = () => {
    const [darkMode, setDarkMode] = useState(false)

    // toggle que muda o css
    const toggleTheme= () => {
        setDarkMode(!darkMode)
    };

    return (
        <main id="container">
            {/* if e else na classe no form, dependendo do valor de darkmode, caso estaja ativado o nome da classe sera 'dark' , se não não tera nome*/ }
        <form id="login_form" className={darkMode ? 'dark' : ''}>
            <div id="form_header">
                <h1>Login</h1>
                {/* este 'i'* não é itálico, é de biblioteca de icones que vamos importar no html daqui a pouco, nele possuí um if e else ternário para variara se o icone vai aparecer da lua ou do sol dependendo do valor de darkmode, ou seja, se ele estiver ativado ou não*/}
                <i id="mode_icon" className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`} onClick={toggleTheme}></i>
            </div>

            <div id="social_media">
                <a href="#">
                    <img src={face} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={insta} alt="Instagram" />
                </a>
                <a href="#">
                    <img src={whats} alt="Whatsapp" />
                </a>
                <a href="#">
                    <img src={git} alt="GitHub" />
                </a>
            </div>

            <div id='inputs'>
                <div className='input-box'>
                    <label htmlFor='name'>
                        Name 
                        <div className='input-field'>
                            <i className='fa-solid fa-user'></i>
                            <input type='text' name='name' id='name'/>
                        </div>
                    </label>
                </div>

                <div className='input-box'>
                    <label htmlFor='email'>
                        Email
                        <div className='input-field'>
                            <i className='fa-solid fa-envelope'></i>
                            <input type='email' name='email' id='email'/>
                        </div>
                    </label>
                </div>

                <div className='input-box'>
                    <label htmlFor='password'>
                        Password
                        <div className='input-field'>
                            <i className='fa-solid fa-key'></i>
                            <input type='password' name='password' id='password'/>
                        </div>
                    </label>

                    <div id='forgot-password'>
                        <a href='#'>Forgot your password?</a>
                    </div>
                </div>
            </div>
            <button type='submit' id='login_button'>Login</button>
        </form>
    </main>
    )
}

export default App;
