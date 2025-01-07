import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import ModalEditVideo from '../ModalEditVideo/Index';
import ModalYoutubePlayer from '../ModalYoutubePlayer/Index';
import './cardVideo.css';

const Index = ({ video: { title, url_image, url_video, id, description }, video, removeVideo, updateVideo, color }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [showModalYTPlayer, setShowModalYTPlayer] = useState(false);

  return (
    <>
      <div className='card_video' style={{ '--cl-card-primary': `var(${color})` }}>
        <button className='card_video-button-youtube' onClick={() => setShowModalYTPlayer(true)}>
          <span className='card_video-icon-youtube' title='Reproducir video'>
            <FaYoutube />
          </span>
          <img src={url_image} alt={`imagen del video ${title}`} />
        </button>
        <div className='card_video-content'>
          <h3>{title}</h3>
          <span className='card_video-description'>
            <pre>{description}</pre>
          </span>
          <div className='card_video-actions'>
            <button onClick={() => setShowModalEdit(true)}>Editar</button>
            <button onClick={removeVideo(id)}>Eliminar</button>
          </div>
        </div>
      </div>
      {showModalEdit && <ModalEditVideo close={() => setShowModalEdit(false)} video={video} editVideo={updateVideo} />}
      {showModalYTPlayer && (
        <ModalYoutubePlayer close={() => setShowModalYTPlayer(false)} idVideo={url_video.split('=')[1]} />
      )}
    </>
  );
};

export default Index;
