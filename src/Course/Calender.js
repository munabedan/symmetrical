import React, { useState } from 'react';

import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  

}));

export default function Calender() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (


    <MuiPickersUtilsProvider utils={MomentUtils}>

      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        size="small"
        variant="static"
        orientation="landscape"
        disableToolbar
      />


    </MuiPickersUtilsProvider>
  );
}
