// Usando solo el potencial de JS
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// Usando el potencial de React
import React from 'react';// Siempre que usemos JSX debemos importar React
import ReactDOM from 'react-dom';// React lo usaremos para renderizar componentes de React
const element1 = <h1>Hola !!!</h1>;
    // React.createElement(tipo de elemento, props, children)
const linkToPage = React.createElement('a', {href: 'https://eflores.me'}, 'Ir a eflores.me!!!');
const container = document.getElementById('app');

// ReactDOM.render(<qué se va a renderizar>, <dónde se va a renderizar>);
//ReactDOM.render(element, container);


/*
 * Tambien podemos usar expresiones de JSX
 *
 */
//const name = "Eduardo";
//const element2 = <h1>Hola soy {name}</h1>;

    // Podemos hacer operaciones dentro de las llaves
//const element2 = <h1>Hola soy {2+2}...</h1>;

    //Podemos llamar a una funcion
//const sum = () => 3+3;
//const element2 = <h1>{sum()}</h1>;

    // En general entre las llaves podemos poner cualquier expresion
//const element2 = <h1>{__expresion__}</h1>;

    // Si la expresion que se evalua da como resultado 0, false, null,'', undefined,
    // la expresion no va a mostrarse
//const element2 = <h1>{null}</h1>;

// Al hacer uso de JSX en vez de React.createElement podemos hacer un codigo más claro
// y mas compacto para interfaces con muchos elementos
const jsx = (
    <div>
        <h1>Hola, soy Eduardo</h1>
        <p>Soy ingeniero!</p>
    </div>
);

ReactDOM.render(jsx, container);
