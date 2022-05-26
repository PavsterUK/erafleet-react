import React from 'react';
import "./DeviceCell.css";

const DeviceCell = (props) => {
  return (
    <div id="device-cell">
        <span>{props.id}</span>
    </div>
  )
}

export default DeviceCell