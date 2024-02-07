// Assuming you have an axios instance or you can use axios directly
import axios from 'axios';

const fetchSupplements = async (page) => {
  try {
    const response = await axios.get(`http://localhost:5000/supplements/get?page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchSupplements;
