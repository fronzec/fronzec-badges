import React from 'react';
// Podemos importar una archivo de esta manera, webpack permite esto, al final se traduce a una URL
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component {

    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img src="https://www.gravatar.com/avatar/?d=identicon" alt="Avatar"/>
                    <h1>Eduardo <br/> Flores</h1>
                </div>
                <div className="badge_section-info">
                    <h3>Software Engineer</h3>
                    <div>@fronzec</div>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

// Debemos exportar el componente para poder usarlo en otros lados
export default Badge;
