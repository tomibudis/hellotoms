import styles from './styles.scss';
import cn from 'classnames';
import { arrayOf, shape, string } from 'prop-types';

const About = props => {
  const { basicInfo = [], aboutInfo = []} = props;
  return (
    <div>
      <h6 className={styles.summaryInformation}>Contact Information</h6>
      {aboutInfo.length > 0 && aboutInfo.map(row => (
        <div className="d-flex py-2">
          <div className={styles.labelInformation}>{row.label && row.label}</div>
          <div className={cn('flex-fill', styles.valueInformation)}>{row.value && row.value}</div>
        </div>
      ))}
      <div className="mt-3">
        <h6 className={styles.summaryInformation}>Basic Information</h6>
        {basicInfo.length > 0 && basicInfo.map(row => (
          <div className="d-flex py-2">
            <div className={styles.labelInformation}>{row.label && row.label}</div>
            <div className="flex-fill">{row.value && row.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

About.propTypes = {
  aboutInfo: arrayOf(shape({
    label: string,
    value: string,
  })),
  basicInfo: arrayOf(shape({
    label: string,
    value: string,
  }))
}

export default About;