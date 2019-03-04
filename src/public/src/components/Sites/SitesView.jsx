import React from 'react'
import {getSitesRequest} from "./utils";
import {Link} from "react-router-dom";

export class SitesView extends React.Component {
   componentWillMount (props) {
     getSitesRequest().then(siteList => this.setState({siteList}));
   }
  render() {
    if (this.state) {
      const {siteList} = this.state;
        return (
        <div>
            {siteList.map( site => (
            <div key={site.id}>
              <h3>{site.title}</h3>
              <p><Link to={'/sites/'+site.id+'/alarmZones'}>alarmZones</Link></p>
              <p><Link to={'/sites/'+site.id+'/devices'}>devices</Link></p>
            </div>)
          )}
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
}
