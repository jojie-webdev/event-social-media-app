// import { createContex } from "react";
import React from 'react';

// const EventDetailContext = React.createContex({
//   eventName: '',
//   hostName: '',
//   startTime: '',
//   endTime: '',
//   location: '',
// })

// export default EventDetailContext;

export const detail = {
  eventName: '',
  hostName: '',
  startTime: '',
  endTime: '',
  location: '',
};

export const EventDetailContext = React.createContext(
  detail// default value
);