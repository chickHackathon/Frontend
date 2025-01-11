import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const FetchStudies = async (params: {
  sort: string;
  page: number;
  category: string;
}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/study/list`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching studies:', error);
    throw error;
  }
};
