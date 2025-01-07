import { useEffect, useState } from 'react';
import CardVideo from '../components/CardVideo';
import ModalYoutubePlayer from '../components/ModalYoutubePlayer/Index';
import { Categories } from '../data/Categories';
import { GetAllVideosService } from '../services/Controller';
import './home.css';
import { formToJSON } from 'axios';

const getCategoryFromId = (id) => Categories.filter((x) => x.id == id);

const getCategoryName = (id) => getCategoryFromId(id)[0].name;

const getCategoryColor = (id) => getCategoryFromId(id)[0].color;

const Home = () => {
  const [listVideos, setListVideos] = useState([]);

  const [lastSelection, setLastSelection] = useState();

  const [showModalYoutubeLastSelection, setShowModalYoutubeLastSelection] = useState(false);

  const loadVideos = async () => {
    const allVideos = await GetAllVideosService();
    setListVideos(allVideos);
    setLastSelection(allVideos[allVideos.length - 1]);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const editVideo = (form, data) => () => {
    form.preventDefault();
    console.log(formToJSON(form));
    console.log(data);

    //setLastSelection(listVideos.find((x) => x.id == id));
  };

  const deleteVideo = (id) => () => {};

  return (
    <>
      <main>
        <div className='main_header'>
          {lastSelection && (
            <>
              <img
                className='main_header-background'
                src={lastSelection.url_image}
                alt={`Imagen del video ${lastSelection.title}`}
              />
              <img
                className='main_header-image'
                src={lastSelection.url_image}
                alt={`Imagen del video ${lastSelection.title}`}
              />

              <div className='main_header-info'>
                <h2>{lastSelection.title}</h2>
                <pre>{lastSelection.description}</pre>
                <h3 style={{ backgroundColor: `var(${getCategoryColor(lastSelection.category)})` }}>
                  {getCategoryName(lastSelection.category)}
                </h3>
              </div>

              <div className='main_header-actions'>
                <button className='card_link' onClick={() => setShowModalYoutubeLastSelection(true)}>
                  Ver el video
                </button>
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            </>
          )}
        </div>
        {showModalYoutubeLastSelection && (
          <ModalYoutubePlayer
            idVideo={lastSelection.url_video.split('=')[1]}
            close={() => setShowModalYoutubeLastSelection(false)}
          />
        )}
      </main>
      <div>
        {Categories.map((category) => (
          <section key={category.id}>
            <h2 className='list_videos-title' style={{ '--cl-card-primary': `var(${category.color})` }}>
              {category.name}
            </h2>
            <div className='list_videos'>
              {listVideos
                .filter((x) => x.category == category.id.toString())
                .map((y) => (
                  <CardVideo
                    key={y.id}
                    video={y}
                    color={category.color}
                    removeVideo={deleteVideo}
                    updateVideo={editVideo}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
