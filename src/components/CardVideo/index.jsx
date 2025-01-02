import './cardVideo.css';

const Index = ({ video: { title, url_image, url_video, id, description }, removeVideo, updateVideo, color }) => {
  return (
    <div className='card_video' style={{ '--cl-card-primary': `var(${color})` }}>
      <img src={url_image} alt={`imagen del video ${title}`} />
      <div className='card_video-content'>
        <h3>{title}</h3>

        <details className='card_video-description'>
          <summary>Descripción</summary>
          <pre>{description}</pre>
        </details>

        <div className='card_video-actions'>
          <a className='card_video-actions-link' href={url_video} target='_blank'>
            Ir a ver el video
          </a>
          <button onClick={updateVideo(id)}>Editar</button>
          <button onClick={removeVideo(id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
