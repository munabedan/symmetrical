import React, { useState, useEffect } from 'react';

import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Actioncard from './Actioncard';
import getIndexData from '../Db/getIndexFromDb';

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
  
console.log(props)
    let dateObj = new moment();
    let dayOfWeek = moment.tz(dateObj, 'UTC').tz('Africa/Nairobi').format('ddd').toLowerCase()
    //let time = moment.tz(dateObj, 'UTC').tz('Africa/Nairobi')
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
        console.log(actionCard)
        setActionCard(true)
      }

    }

  }

  function renderDay(day) {


    return (
      <div>
        { attendanceData.includes(day.date()) ?
          <div className={classes.day}>
            <span className={classes.content}>
              <p className={classes.dateAttended}>
                {day.date()}
              </p>
            </span>
          </div>

          :
          <div className={classes.day}>
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
    getIndexData('test', 'coursesstore',props.courseCode).then(function(result) {
      let dateArray=[];
      let datesAttended=[];
      dateArray=result.courseAttendance;
      console.log(dateArray)
      dateArray.forEach(d => {
        let dateObj=moment(d.date)
        let date=moment.tz(dateObj, 'UTC').tz('Africa/Nairobi')

        console.log(date.date())
        datesAttended.push(date.date())
      });

      setAttendanceData(datesAttended)

      // here you can use the result of promiseB
  });
    
    console.log("componetWIllmount")
    showActionCard()
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
    <Actioncard 
    courseCode={props.courseCode}
    roomNumber={props.roomNumber}
    courseTime={readerbleTime}
    ></Actioncard>
    :
    ''
    }
    
     </div>
  );
}
