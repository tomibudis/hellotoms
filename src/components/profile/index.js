import React, { Component } from 'react';
import SectionContent from '../SectionContent';

class Profile extends Component {
  state = {  }
  render() { 
    return (
      <>
        <div>
          Hello! I’m Front-end developer. Focus on React and Web Developer with over 4 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced Reactjs, React native, Nodejs, Php. Strong background in management and leadership.
        </div>
        <div className="pt-5">
          <SectionContent title="Basic Information">
            Hello world
          </SectionContent>
        </div>
      </>
    );
  }
}
 
export default Profile;