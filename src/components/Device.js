import React from 'react';
import "./Device.css";

const DeviceCell = (props) => {
  return (
    <div id="device-cell">
        <span>{props.id}</span>
    </div>
  )
}

export default DeviceCell