import React, { useState } from 'react';

import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
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
    height:'100%',
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

export default function Calender() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  

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
  return (


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
  );
}
