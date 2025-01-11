import apiClient from './axiosInstance';

export const FetchStudies = async (params: {
  sort: string;
  page: number;
  category: string;
}) => {
  try {
    const response = await apiClient.get('/study/list', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching studies:', error);
    throw error;
  }
};
