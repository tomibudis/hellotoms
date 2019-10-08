import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class SectionContent extends Component {
  render() { 
    const { title, children } = this.props;
    return (
      <div>
        <div className="d-flex">
          <h5 className={styles.title}>{title}</h5>
        </div>
        {children}
      </div>
    );
  }
}
 
SectionContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default SectionContent;