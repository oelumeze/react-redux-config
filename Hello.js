import React from 'react';
import CoursePage from './CoursePage'

export default ({ name }) => { 
    return (
      <React.Fragment>
      <h1>Hello {name}!</h1>
      <CoursePage />
      </React.Fragment>
    ); 
  }
