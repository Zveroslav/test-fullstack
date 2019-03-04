import React from 'react'

export const Row = ({device}) => (
  <tr>
    <td>{device.title}</td>
    <td>{device.model}</td>
    <td>{device.connected ? '+' : '-'}</td>
    <td>{device.storages.map( storage => (<p key={storage.id}>{storage.type} : {storage.state}</p>))}</td>
    <td>{device.alarmZoneId}</td>
  </tr>
)

