import axios from 'axios';
import { environment } from '../environments/environment';

export default axios.create({
  baseURL: environment.api,
  timeout: 1000 * 60 * 1, //1 minute
});
