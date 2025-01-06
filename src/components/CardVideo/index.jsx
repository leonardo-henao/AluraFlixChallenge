import { useState } from 'react';
import ModalEditVideo from '../ModalEditVideo/Index';
import './cardVideo.css';

const Index = ({ video: { title, url_image, url_video, id, description }, video, removeVideo, updateVideo, color }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <>
      <div
        className='card_video'
        style={{ '--cl-card-primary': `var(${color})` }}
        onClick={() => setShowModalEdit(true)}
      >
        <img src={url_image} alt={`imagen del video ${title}`} />
        <div className='card_video-content'>
          <h3>{title}</h3>

          <span className='card_video-description'>
            <pre>{description}</pre>
          </span>

          <div className='card_video-actions'>
            <a className='card_video-actions-link' href={url_video} target='_blank'>
              Ir al video
            </a>
            <button onClick={updateVideo(id)}>Editar</button>
            <button onClick={removeVideo(id)}>Eliminar</button>
          </div>
        </div>
      </div>
      {showModalEdit && <ModalEditVideo close={() => setShowModalEdit(false)} video={video} />}
    </>
  );
};

export default Index;
