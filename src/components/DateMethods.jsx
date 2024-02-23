import React, { useEffect, useState } from 'react'

export default function DateMethods() {
  const [today, setToday] = useState(new Date())
  const year = today.getFullYear()
  const date = today.getDate()
  const month = today.getMonth()
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = days[today.getDay()]
  const hours = today.getHours()
  const Milliseconds = today.getMilliseconds()
  const Minutes = today.getMinutes()
  const Seconds = today.getSeconds()
  const Time = today.getTime()
  const TimezoneOffset = today.getTimezoneOffset()
  const UTCDate = today.getUTCDate()
  const UTCDay = today.getUTCDay()
  const UTCFullYear = today.getUTCFullYear()
  const UTCHours = today.getUTCHours()
  const UTCMilliseconds = today.getUTCMilliseconds()
  const UTCMinutes = today.getUTCMinutes()
  const UTCMonth = today.getUTCMonth()
  const UTCSeconds = today.getUTCSeconds()
  const LocaleDateString = today.toLocaleDateString(undefined, {weekday: 'long', year : 'numeric', month: 'numeric', day: '2-digit' })
  const DateString = today.toDateString()
  const ISOString = today.toISOString()
  const JSON = today.toJSON()
  const LocaleString = today.toLocaleString()
  const LocaleTimeString = today.toLocaleTimeString('en')
  // const String = today.toString()
  const newDate = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738))
  const String = (new Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'full'}).format(newDate))
  // console.log(new Intl.DateTimeFormat().format(String))
  const TimeString = today.toTimeString()
  const UTCString = today.toUTCString()
  
  useEffect(()=>{
   console.log("hello .........")
  },[])
  
  // setInterval(() => {
  //   setToday(new Date());
  // }, 1000);
  
  return (
    <div>
      <h1>DateMethods</h1>
      <div>
        <h2>Date function</h2>

        <h3>Date: {Date()}</h3>                         {/*Date: Thu Jan 04 2024 13:52:55 GMT+0530 (India Standard Time)*/}
        <h3>Year: {year}</h3>                           {/* Year: 2024 */}
        <h3>Date: {date}</h3>                               {/* Date: 4*/}
        <h3>month: {month+1}</h3>                                 {/* month: 1*/}
        <h3>day: {day}</h3>                                     {/* day: 4 */}
        <h3>hours: {hours}</h3>                               {/* hours: 13 */}
        {/*<h3>Milliseconds: {Milliseconds}</h3> */}        {/* Milliseconds: 38 */}
        <h3>Minutes: {Minutes}</h3>                           {/* Minutes: 0 */}
        <h3>Seconds: {Seconds}</h3>                             {/* Seconds: 41 */}
       {/* <h3>Time: {Time}</h3> */}                          {/* Time: 1704357441828 */}
        <h3>TimezoneOffset: {TimezoneOffset}</h3>               {/* TimezoneOffset: -330 */}
        <h3>UTCDate: {UTCDate}</h3>                              {/* UTCDate: 4 */}
        <h3>UTCDay: {UTCDay}</h3>                                  {/* UTCDay: 4 */}
        <h3>UTCFullYear: {UTCFullYear}</h3>                          {/* UTCFullYear: 2024 */}
        <h3>UTCHours: {UTCHours}</h3>                                {/* UTCHours: 8 */}
       {/* <h3>UTCMilliseconds: {UTCMilliseconds}</h3>*/}          {/* UTCMilliseconds: 916 */}
        <h3>UTCMinutes: {UTCMinutes}</h3>                              {/* UTCMinutes: 32 */}
        <h3>UTCMonth: {UTCMonth+1}</h3>                                  {/* UTCMonth: 1*/}
        <h3>UTCSeconds: {UTCSeconds}</h3>                                  {/* UTCSeconds: 59 */}
        <p>LocaleDateString: {LocaleDateString}</p>                      {/* LocaleDateString: 04/01/2024 */}
        <h3>DateString: {DateString}</h3>                                  {/* DateString: Thu Jan 04 2024 */}
        {/* <h3>ISOString: {ISOString}</h3> */}                         {/* ISOString: 2024-01-04T08:38:45.349Z */}
       {/* <h3>JSON: {JSON}</h3> */}                                     {/* JSON: 2024-01-04T08:39:49.982Z */}
        <h3>LocaleString: {LocaleString}</h3>                                {/* LocaleString: 04/01/2024, 14:03:59 */}
        <h3>LocaleTimeString: {LocaleTimeString}</h3>                          {/* LocaleTimeString: 14:04:14 */}
        <p>String: {String}</p>                                        {/* String: Thu Jan 04 2024 14:04:32 GMT+0530 (India Standard Time) */}
        <h3>TimeString: {TimeString}</h3>                                  {/* TimeString: 14:05:15 GMT+0530 (India Standard Time)  */}
        <h3>UTCString: {UTCString}</h3>                                    {/* UTCString: Thu, 04 Jan 2024 08:35:25 GMT */}
      </div>                                      
    </div>
  )
}
