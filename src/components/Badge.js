import React from 'react';
// Podemos importar una archivo de esta manera, webpack permite esto, al final se traduce a una URL
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar/?d=identicon" alt="Avatar"/>
                    <h1>Eduardo <br/> Flores</h1>
                </div>
                <div>
                    <p>Software Engineer</p>
                    <p>@fronzec</p>
                </div>
                <div>
                    #platziconf
                </div>
            </div>
        );
    }
}

// Debemos exportar el componente para poder usarlo en otros lados
export default Badge;
