import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import * as actions from "../../actions/auth";

const DashboardPage = ({isConfirmed, logout}) => (
  <div>
    {!isConfirmed &&
      <ConfirmEmailMessage/> &&
      <button onClick={() => logout() }>Logout</button>
    }
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(DashboardPage);
