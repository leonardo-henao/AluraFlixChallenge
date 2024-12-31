import axios from 'axios';
import { URLAPI } from '../helpers/ApiConnect';

const defaultHeaders = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const GetAllVideosService = async () => await axios.get(URLAPI).then((res) => res.data);

export const AddVideoService = async (data) => await axios.post(URLAPI, data, defaultHeaders).then((res) => res.data);
