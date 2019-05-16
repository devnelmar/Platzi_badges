import React from 'react';

import '../styles/Badge.css'
import confLogo from '../images/platziconf-logo.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Gravatar from './Gravatar';

class Badge extends React.Component{
    render(){
        return (
          <div className="Badge">
            <div className="Badge__header">
              <img src={confLogo} alt="logo" />
            </div>

            <div className="Badge__section-name">
              <Gravatar
                className="Badge__avatar"
                email={this.props.email}
                alt="Avatar"
              />
              <h1>
                {this.props.firstName} <br /> {this.props.lastName}
              </h1>
            </div>

            <div className="Badge__section-info">
              <h3>{this.props.jobTitle}</h3>
              <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
              #platziconf
            </div>
          </div>
        );
    }
}

export default Badge

