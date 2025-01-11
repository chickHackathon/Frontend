import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const PostStudies = async (studyData: {
  title: string;
  content: string;
  memberId: number;
  category: string;
  deadline: string;
  studyTime: string;
  region: string;
  img: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/study`, studyData);
    return response.data;
  } catch (error) {
    console.error('Error creating study:', error);
    throw error;
  }
};
