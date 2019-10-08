import React from 'react';
import { Navbar, CardProfile, Tab, Profile, EmployementHistory } from '../components';

class HomepageView extends React.Component { 
  state = {
    isActiveTab: 0,
  }
  render() {
    const { isActiveTab } = this.state;
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-4 pt-5">
            <CardProfile />
          </div>
          <div className="col-8 py-5">
            <Tab onChangeTab={value => this.setState({ isActiveTab: value })} isActiveTab={isActiveTab}/>
            <div className="py-4" style={{ fontSize: '18px'}}>
              {isActiveTab === 0 && (
                <Profile />
              )}
              {isActiveTab === 1 && (
                <EmployementHistory />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageView;