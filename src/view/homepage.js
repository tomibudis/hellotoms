import styles from './styles.scss';

const HomepageView = () => { 
  return (
    <div>
      <div className="container">
        <div className={styles.title}>Title Page</div>
        <div className="row">
          <div className="col-4">Col 4</div>
          <div className="col-4">Col 6</div>
        </div>
      </div>
    </div>
  )
}

export default HomepageView;