import styles from './styles.scss';
import { GitHub, Linkedin, Instagram } from 'react-feather';

const CardProfile = () => {
  return (
    <>
      <div className={styles.decoration}></div>
      <div className="pt-5 d-flex justify-content-center position-relative">
        <div>
          <div className={styles.profilePicture} style={{
            backgroundImage: 'url("https://tomibudis.github.io/hellotoms/static/img/profpic.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '50% 20%',
          }}>
          </div>
          <div className="text-center">
            <h5 className="text-masbul-bold mt-4">Tomi Budi Susilo</h5>
            <span>Front-end Developer</span>
            <div className="py-3">
              <button className="btn btn-link">
                <GitHub size={16} className="text-secondary" />
              </button>
              <button className="btn btn-link">
                <Linkedin size={16} className="text-secondary"/>
              </button>
              <button className="btn btn-link">
                <Instagram size={16} className="text-secondary"/>
              </button>
            </div>
            <button className="btn btn-primary-custom px-4">Hire Me</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProfile;
