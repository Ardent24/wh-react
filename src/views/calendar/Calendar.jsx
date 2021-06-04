import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CalendarHeader from "./components/header/CalendarHeader";
import CalendarMain from "./components/main/CalendarMain";
import { getCalendarApi, getMothApi } from "../../api/authorizationAPI";
import { getCalendarDays } from "../../store/reducers/calendarReducer";

import "./styles/Calendar.scss";

const Calendar = () => {
  const dataDays = useSelector((state) => state.calendar.dataCalendar);
  const dispatch = useDispatch();
  const { year, month } = useParams();
  const [date, setDate] = React.useState(dataDays);

  React.useEffect(() => {
    getCalendarApi().then((res) => {
      const days = res.data.data.days;

      setDate(days);
      // dispatch(getCalendarDays(days));
    });
  }, []);

  React.useEffect(() => {
    if (year && month) {
      getMothApi(year, month).then((res) => {
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
