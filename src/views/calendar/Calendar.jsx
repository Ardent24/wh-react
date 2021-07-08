import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { stateDateCalendar } from "../../store/reducers/calendarReducer";
import { getCalendarApi, getMonthApi } from "../../api/API";
import CalendarHeader from "./components/header/CalendarHeader";
import CalendarMain from "./components/main/CalendarMain";

import "./styles/Calendar.scss";

const Calendar = () => {
  const dataDays = useSelector(stateDateCalendar);
  const { year, month } = useParams();
  const [date, setDate] = React.useState(dataDays);

  React.useEffect(() => {
    getCalendarApi().then((res) => {
      const days = res.data.data.days;

      setDate(days);
    });
  }, []);

  React.useEffect(() => {
    if (year && month) {
      getMonthApi(year, month).then((res) => {
        const days = res.data.data.days;

        setDate(days);
      });
    }
  }, [year, month]);

  return (
    <section className="calendar">
      <div className="calendar-wrap">
        <CalendarHeader />
        <CalendarMain dataDays={date} />
      </div>
    </section>
  );
};

export default Calendar;
