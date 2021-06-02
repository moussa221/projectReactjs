import * as React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./demo-data/appointments";
import Footer from "../../administration/admin/Footer";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: new Date(),
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <>
        <nav className="navbar fixed-top shadow navbar-expand-sm navbar-dark bg-dark">
          <div>
            <Link to="/welcome" className="navbar-brand text-uppercase">
              Dashboard Apprenant
            </Link>
          </div>
          <div>
            <Link to="/cours" className="btn btn-dark ml-auto">
              Mes Cours
            </Link>
          </div>
          <div>
            <Link to="/calendriers" className="btn btn-dark ml-auto">
              Calendrier
            </Link>
          </div>
          <div>
            <button
              className="navbar-brand btn btn-dark bt_Position"
              type="submit"
            >
              Deconnexion
            </button>
          </div>
        </nav>
        <div className="container calendrier p-5">
          <h1 className="text-center">Emploi du temps</h1>
          <div className="card">
            <Paper>
              <Scheduler data={data} height={660}>
                <ViewState
                  currentDate={currentDate}
                  onCurrentDateChange={this.currentDateChange}
                />
                <WeekView startDayHour={9} endDayHour={19} />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
              </Scheduler>
            </Paper>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
