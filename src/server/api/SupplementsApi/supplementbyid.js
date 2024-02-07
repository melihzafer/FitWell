import axios from 'axios';

const fetchSupplementById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/supplementbyid/get?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchSupplementById;
