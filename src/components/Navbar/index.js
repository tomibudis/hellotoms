import styles from './styles.scss';
import cx from 'classnames';

const Navbar = () => {
  return (
    <div className={cx('my-4 d-flex justify-content-between align-items-center', styles.navbar)}>
      <h4>HelloToms</h4>
      <span className={styles.rightNavbar}>Want to talk? +6285877266079<span className="mx-3">|</span>tomibudis@gmail.com</span>
    </div>
  )
}

export default Navbar;