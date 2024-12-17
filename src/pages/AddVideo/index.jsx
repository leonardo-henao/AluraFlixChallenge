import { Categories } from '../../data/Categories';
import './AddVideo.css';

const addNewVideo = (form) => {
  form.preventDefault();
};

const AddVideo = () => {
  return (
    <main>
      <h2>Agrega nuevo video</h2>
      <section>
        <form onSubmit={addNewVideo} className='form__new-video'>
          <div>
            <label htmlFor='title'>Titulo</label>
            <input type='text' name='title' placeholder='Título' />
          </div>

          <div>
            <label htmlFor='category'>Categoria</label>
            <select name='category' id='category'>
              <option value='-1'>Selecciona una categoria</option>
              {Categories.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='imagen'>Imagen</label>
            <input type='text' name='imagen' placeholder='URl de la imagen' />
          </div>

          <div>
            <label htmlFor='video'>Video</label>
            <input type='text' name='video' placeholder='URL del video' />
          </div>

          <div className='form__description'>
            <alabel htmlFor='description'>Descripción</alabel>
            <textarea name='description' placeholder='Descripción del video'></textarea>
          </div>

          <div className='form__buttons'>
            <input type='submit' value='Enviar' />
            <input type='reset' value='Limpiar' />
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddVideo;
