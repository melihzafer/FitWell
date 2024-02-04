import axios from 'axios';

const fetchWorkouts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/workout/get');
    const workoutsData = response.data;
    console.log('Fetched workouts:', workoutsData);
    return workoutsData;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error; // You can handle the error further or rethrow it as needed.
  }
};

export default fetchWorkouts;
