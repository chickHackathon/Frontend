export const avatarList = [
  {
    id: 1,
    src: () => import('../assets/logo.png'),
  },
];

export function setAvatar(id: number) {
  const resolvedId = id === null ? Math.floor(Math.random() * 10) + 1 : id;
  const matchedAvatar =
    avatarList.find((avatar) => avatar.id === resolvedId) ||
    avatarList.find((avatar) => avatar.id === 1)!;

  return matchedAvatar.src().then((module) => module.default);
}

export const calculateDDay = (deadline: string): string => {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();
  const diffTime = deadlineDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0
    ? `D-${diffDays}`
    : diffDays === 0
      ? 'D-Day'
      : `D+${Math.abs(diffDays)}`;
};

export const formatStudyTime = (studyTime: string): string => {
  const date = new Date(studyTime);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${month}.${day}(${dayOfWeek}) ${hours > 12 ? '오후' : '오전'} ${
    hours > 12 ? hours - 12 : hours
  }:${minutes.toString().padStart(2, '0')}`;

  return formattedTime;
};
