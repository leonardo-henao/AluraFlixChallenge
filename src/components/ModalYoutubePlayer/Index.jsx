import { IoCloseCircle } from 'react-icons/io5';
import YouTube from 'react-youtube';
import './modalYoutubePlayer.css';

const Index = ({ close, idVideo }) => {
  return (
    <div className='modal'>
      <div className='modal_body'>
        <button className='modal_body-btn-close' onClick={close}>
          <IoCloseCircle />
        </button>
        <div className='modal_body-content'>
          <YouTube videoId={idVideo} />
        </div>
      </div>
    </div>
  );
};

export default Index;
