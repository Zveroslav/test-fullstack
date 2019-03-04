import React from 'react'
import {devicesLoader} from "./utils";
import {Row} from "./row";


export class Devices extends React.Component {
  async componentWillMount (props) {
    const {siteId} = this.props.match.params;
    this.setState({deviceList: await devicesLoader(siteId)});
  }
  render() {
    if (this.state) {
      const {deviceList} = this.state;
      console.log(deviceList);
      return (
        <div>
          <table id='device-border'>
            <tbody>
            <tr>
              <th>Device name</th>
              <th>Model</th>
              <th>Connected</th>
              <th>Storages</th>
              <th>Alarm zone</th>
            </tr>
            {deviceList.map(
              device => (
                <Row key={device.id} device={device} />
              )
            )}
            </tbody>
          </table>
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
}
