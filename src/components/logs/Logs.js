import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import PreLoader from "../../components/layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setloading(true);

    const res = await fetch("/logs");

    const data = await res.json();

    setLogs(data);
    setloading(false);
  };

  if (loading) {
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

export default Logs;
