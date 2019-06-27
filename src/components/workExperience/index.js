import styles from './styles.scss';
import { arrayOf, shape, string } from 'prop-types';
import cn from 'classnames';

const WorkExperience = props => {
  const { data = [] } = props;
  return (
    <div>
      <h6>Work</h6>
      <ul className="list-group list-group-flush pt-2">
        {data.length > 0 && data.map((row, index) => (
          <li key={index} className="list-group-item pl-0 pb-0 pt-3 d-flex align-items-start">
            <img 
              src={row.logo}
              alt="logo-company"
              className={cn('img-fluid rounded', styles.logoCompany)}
            />
            <div className="pl-3">
              <h5 className={cn('mb-0', styles.titleCompany)}>{row.company && row.company}</h5>
              <p className={styles.descriptionCompany}>{row.as && row.as}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

WorkExperience.propTypes = {
  data: arrayOf(
    shape({
      logo: string,
      company: string,
      as: string
    })
  )
}

export default WorkExperience;