import React, { Component } from 'react';
import cx from 'classnames';
import { func, number } from 'prop-types';

class Tab extends Component {

  handleActiveTab = value => {
    const { onChangeTab } = this.props;
    onChangeTab(value);
  };

  render() { 
    const { isActiveTab } = this.props;
    return (
      <div>
        <ul className="nav text-masbul-medium">
          <li className="nav-item">
            <a className={cx('nav-link px-4 cursor-pointer', isActiveTab === 0 && 'active text-primary')} onClick={() => this.handleActiveTab(0)}>Profile</a>
          </li>
          <li className="nav-item">
            <a className={cx('nav-link px-4 cursor-pointer', isActiveTab === 2 && 'active')} onClick={() => this.handleActiveTab(2)}>Employement history</a>
          </li>
          <li className="nav-item">
            <a className={cx('nav-link px-4 cursor-pointer', isActiveTab === 1 && 'active')} onClick={() => this.handleActiveTab(1)}>Portofolio</a>
          </li>
         
        </ul>
      </div>
    );
  }
}

Tab.propTypes = {
  onChangeTab: func.isRequired,
  isActiveTab: number.isRequired,
}
 
export default Tab;