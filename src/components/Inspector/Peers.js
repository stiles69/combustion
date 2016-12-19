import React from 'react';
import CSSModules from 'react-css-modules';

import { speed } from 'util/formatters';

import styles from './styles/index.css';

function Peers({ info }) {
  const peers = info.torrents[0].peers;

  return (
    <div>
      <h2>Peers</h2>
      <table styleName='peers'>
        <thead>
          <tr>
            <th>Up</th>
            <th>Down</th>
            <th>%</th>
            <th>Status</th>
            <th>Address</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {peers.map((peer, index) => {
            let className = '';

            if (index % 2 === 1) { // Zero indexed. lololo
              className = styles.peerRowEven;
            }

            return (
            <tr
              key={index}
              className={className}
            >
              <td>{!peer.isDownloadingFrom && speed(peer.rateToClient)}</td>
              <td>{peer.isDownloadingFrom && speed(peer.rateToClient)}</td>
              <td>{peer.progress}</td>
              <td>{peer.flagStr}</td>
              <td>{peer.address}</td>
              <td>{peer.clientName}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CSSModules(styles)(Peers);
