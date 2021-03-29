/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from "@syncfusion/ej2-react-schedule";
import {DataManager, WebApiAdaptor} from "@syncfusion/ej2-data";
function App() {

  {/*var localdata = EventSettingsModel = {
    dataSource : [{
      EndTime: new Date(2020, 0, 11, 6, 30),
      StartTime: new Date(2021, 4, 11, 4, 0)
    }]
  };*/}

  var remoteData = new DataManager ({
    url: 'https://js.syncfusion.com/demos/ejservices/api/schedule/LoadData',
    adaptor : new WebApiAdaptor(),
    crossDomain: true
  }); 
  return (
    <div className="App">
        <ScheduleComponent currentView='Month' selectedDate={new Date(2021, 2, 18)}
        /*eventSettings = {this.localdata}*/>
          <Inject services = {[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
    </div>
  );
}

export default App;
