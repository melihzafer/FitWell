import axios from 'axios';

const fetchWorkoutById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/workoutbyid/get?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchWorkoutById;
