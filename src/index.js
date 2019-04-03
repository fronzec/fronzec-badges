import React from 'react';// Siempre que usemos JSX debemos importar React
import ReactDOM from 'react-dom';// ReactDOM lo usaremos para renderizar componentes de React
import Badge from './components/Badge';// Asi podemos importar un componente custom
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');
ReactDOM.render(<Badge firstName={"Eduardo"}
                       lastName={"Flores"}
                       jobTitle={"Software Engineer"}
                       twitterId={"fronzec"}
                       email={"efloresambrosio@gmail.com"}
                       hashtag={"backend"}/>,
    container);
