import React from 'react'
import {alarmZonesLoader} from "./utils";


export class AlarmZones extends React.Component {
  async componentWillMount (props) {
    const {siteId} = this.props.match.params;
    this.setState({alarmZoneList: await alarmZonesLoader(siteId)});
  }
  render() {
    if (this.state) {
      const {alarmZoneList} = this.state;
      return (
        <div>
          {alarmZoneList.map( zone => (
            <div key={zone.id}>
              <h3>{zone.name}</h3>
              <p>{zone.armed ? 'armed' : 'no armed'}</p>
            </div>)
          )}
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
}
