import React, { useState, useEffect } from 'react';

import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Actioncard from './Actioncard';

import moment from 'moment-timezone';


const useStyles = makeStyles((theme) => ({

  //normal days
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit",
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontFamily: 'serif',
    fontWeight: 400,
    lineHeight: 1.43,
    color: 'inherit',
  },
  //attended days
  dateAttended: {
    fontFamily: 'serif',
    fontWeight: 400,
    lineHeight: 1.43,
    color: '#74CEF6',
  },
  //missed days
  dateMissed: {
    width: 36,
    height: 36,
    margin: "0 2px",

    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',
    color: 'white',
    borderRadius: '50%',
    transform: 'scale(0.75)',

  },
}));

export default function Calender(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState('');
  const [actionCard,setActionCard]=useState(false);

  const classes = useStyles();

  let readerbleTime=moment().tz('Africa/Nairobi').format("hh:mm A");

  function showActionCard() {
    /* logic:
    -get dayofweek/timenow
    -get courseDay/courseTime data from db
    -compare if(dayofweek included in courseDay[] ) && if(timeNow is between coursetime to coursetime + 1hr)

     */
    setAttendanceData(props.attendanceData)
    //console.log(attendanceData)
    let dateObj = new moment();
    let dayOfWeek = moment.tz(dateObj, 'UTC').tz('Africa/Nairobi').format('ddd').toLowerCase()
    let time = moment.tz(dateObj, 'UTC').tz('Africa/Nairobi')
    let dateToday = dateObj.format("YYYY-MM-DD")
    

    //var date = moment().tz('Africa/Nairobi').startOf('day');

    let 
      setClassTime = moment(dateToday),
      timeStr = moment(props.courseTime, 'HH:mm');

    setClassTime.set({
      hour: timeStr.get('hour'),
      minute: timeStr.get('minute'),
      second: timeStr.get('second')
    });
    let maxTime = moment.tz(setClassTime, 'UTC').tz('Africa/Nairobi').add(30, 'm')

    //console.log(classTime)
    if (props.courseDay.includes(dayOfWeek)) {
      console.log("day is today")
      if (dateObj.isBetween(setClassTime, maxTime)) {
        console.log("time is now")
        setActionCard(true)
      }

    }

  }

  function renderDay(day) {
    return (
      <div>
        { day.date() === 15 ?
          <div className={classes.day}>
            <span className={classes.content}>
              <p className={classes.dateAttended}>
                {day.date()}
              </p>
            </span>
          </div>

          :
          <div className={classes.dateMissed}>
            <span className={classes.content}>
              <p className={classes.date}>
                {day.date()}
              </p>
            </span>
          </div>
        }
      </div>
    );
  }
  useEffect(() => {
    // Anything in here is fired on component mount.

    console.log("componetWIllmount")
    showActionCard(props)
  }, []);
  return (

<div>

    <MuiPickersUtilsProvider utils={MomentUtils}>

      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        renderDay={renderDay}
        size="small"
        variant="static"
        orientation="landscape"
        disableToolbar
      />


    </MuiPickersUtilsProvider>
    {
    actionCard
    ?
    <Actioncard roomNumber={props.roomNumber}
    courseTime={readerbleTime}
    ></Actioncard>
    :
    ''
    }
    
     </div>
  );
}
