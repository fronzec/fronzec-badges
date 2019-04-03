import React from 'react';
// Podemos importar una archivo de esta manera, webpack permite esto, al final se traduce a una URL
import confLogo from '../images/badge-header.svg';
import customConfLogo from '../images/pattern_header.svg';
import "./styles/Badge.css";
import md5 from 'md5';

class Badge extends React.Component {

    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar"
                         src={`https://www.gravatar.com/avatar/${md5(this.props.email)}?s=120`}/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitterId}</div>
                </div>
                <div className="badge_footer">
                    #{this.props.hashtag}
                </div>
            </div>
        );
    }
}

// Debemos exportar el componente para poder usarlo en otros lados
export default Badge;
