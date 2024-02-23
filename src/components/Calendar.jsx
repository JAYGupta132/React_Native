import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const Calendars = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      // Customize the appearance of the calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 400,
      }}
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Mark specific dates as marked
      markedDates={{
        '2024-01-01': {selected: true, selectedColor: 'orange'},
        '2024-01-02': {marked: true, selected: true, selectedColor: 'orange'},
        '2024-01-03': {selected: true, marked: true, selectedColor: 'orange'},
      }}
    />
  );
};

export default Calendars;
