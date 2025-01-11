import apiClient from './axiosInstance';

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
    const response = await apiClient.post('/study', studyData);
    return response.data;
  } catch (error) {
    console.error('Error creating study:', error);
    throw error;
  }
};
