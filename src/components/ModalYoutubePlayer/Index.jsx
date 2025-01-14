import { IoCloseCircle } from 'react-icons/io5';
import YouTube from 'react-youtube';
import './modalYoutubePlayer.css';

const Index = ({ close, idVideo }) => {
  return (
    <div className='modal' aria-label='Modal de reproduccion de video'>
      <div className='modal_body'>
        <button className='modal_body-btn-close' onClick={close} aria-label='Cerrar modal de reproduccion de video'>
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
