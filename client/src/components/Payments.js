import React, { Component, Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../actions';




class Payments extends Component {
  render() {
    return (
      <Fragment>
        <StripeCheckout 
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
          <button className="btn">add credit</button>  
        </StripeCheckout>
      </Fragment>
    );
  }
}

export default connect(undefined, { handleToken })(Payments);