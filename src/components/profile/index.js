import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styles from './styles.scss';
import cn from 'classnames';
import About from '#components/about';

const Profile = props => {
  const { aboutInfo, basicInfo } = props;
  return (
    <React.Fragment>
      <div className="mb-4">
        <h4><b>Tomi Budi Susilo</b></h4>
        <h6>As an Front-end developer</h6>
        <p className={cn('mt-3', styles.descriptionProfile)}>
          Hello! I’m Front-end developer. Focus on React and Web Developer with over 4 years of experience. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          Having an in-depth knowledge including advanced Reactjs, React native, Nodejs, Php.
          Strong background in management and leadership.
        </p>
      </div>
      <ul className={cn('nav nav-pills mb-3', styles.tabs)} id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
            Skill
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
            Portofolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-education" role="tab" aria-controls="pills-contact" aria-selected="false">
            Education
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <About aboutInfo={aboutInfo} basicInfo={basicInfo} />
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">...</div>
      </div>
    </React.Fragment>
  )
}

Profile.propTypes = {
  aboutInfo: arrayOf(shape({
    label: string,
    value: string,
  })),
  basicInfo: arrayOf(shape({
    label: string,
    value: string,
  }))
}

export default Profile;