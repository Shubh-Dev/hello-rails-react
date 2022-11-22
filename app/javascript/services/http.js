import axios from 'axios';

export default axios.create({
  baseURL: '.../controllers/api/v1/greetings',
  headers: {
    'Content-Type': 'application/json',
  },
});