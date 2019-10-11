import React, { useEffect } from "react";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import PreLoader from "../../components/layout/Preloader";
import { connect } from "react-redux";
import { getLogs } from "../../action/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Log</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center"> No Logs To Show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
