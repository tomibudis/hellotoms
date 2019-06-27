import PhotoProfile from '#components/photoProfile';
import WorkExperience from '#components/workExperience';
import Profile from '#components/profile';
import mockWork from '../../mock/work';
import { basicInfo, aboutInfo } from '../../mock/about';

const HomepageView = () => { 
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="p-4">
            <PhotoProfile />
          </div>
          <div className="px-4">
            <WorkExperience data={mockWork} />
          </div>
        </div>
        <div className="col-8">
          <div className="py-4">
            <Profile basicInfo={basicInfo} aboutInfo={aboutInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageView;