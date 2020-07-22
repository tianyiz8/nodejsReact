import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
// import StripeCheckout from 'react-stripe-checkout';

const Header = props => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">login with google</a></li>
        );
      default:
        return (
          <Fragment>
            <li><Payments /></li>
            <li><a href="/api/logout">Logout</a></li>
          </Fragment>
          )
        ;
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);