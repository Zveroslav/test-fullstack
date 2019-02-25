import connection from "./data";
import {Service} from "./services";
import express = require("express");
import * as path from "path";
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));


async function router () {
  const service = new Service(await connection());

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.get('/users', async (req, res) => {
    res.send(await service.getUserList());
  });

  app.get('/sites', async (req, res) => {
    res.send(await service.getSiteList());
  });

  app.get('/sites/:siteId/alarmZones', async (req, res) => {
    res.send(await service.getAlarmZonesBySiteId(req.params.siteId));
  });

  app.get('/sites/:siteId/devices', async (req, res) => {
    res.send(await service.getDevicesBySiteId(req.params.siteId));
  });

  app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
  });
}

export default router;
