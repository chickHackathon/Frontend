export interface StudyItemProps {
  id: number;
  title: string;
  category: string;
  img: string;
  content: string;
  finish: boolean;
  deadLine: string;
  studyTime: string;
  location: string | null;
}

const dummyStudies: StudyItemProps[] = Array.from(
  { length: 50 },
  (_, index) => ({
    id: index + 1,
    title: `스터디 ${index + 1} - 제목`,
    category: `text${(index % 5) + 1}`,
    img: 'https://via.placeholder.com/80',
    content: `스터디 ${index + 1} 내용`,
    finish: false,
    deadLine: `2025-01-${(index % 30) + 1}T23:59:59`,
    studyTime: `2025-01-${(index % 30) + 2}T10:00:00`,
    location: ['서울', '부산', '대구', '광주', '대전'][index % 5],
  })
);

export default dummyStudies;
