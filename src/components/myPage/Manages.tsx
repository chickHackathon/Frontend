import Acceptance from './Acceptance';
import Manage from './Manage';

const Manages = () => {
  const manageMockDataList = [
    {
      title: '[스터디명 A]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 A',
    },
    {
      title: '[스터디명 B]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 B',
    },
    {
      title: '[스터디명 C]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 C',
    },
    {
      title: '[스터디명 D]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 D',
    },
    {
      title: '[스터디명 E]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 E',
    },
    {
      title: '[스터디명 F]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 F',
    },
    {
      title: '[스터디명 G]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 G',
    },
    {
      title: '[스터디명 H]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 H',
    },
    {
      title: '[스터디명 I]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 I',
    },
    {
      title: '[스터디명 J]',
      profileImage: 'assets/Ellipse 20.svg',
      name: '어쩌구 J',
    },
  ];

  const acceptanceMockDataList = [
    {
      image: 'assets/acceptance-image1.jpg',
      title: '스터디 신청 A',
      location: '서울, 강남',
      date: '2025-01-20',
      userIsAccepted: true,
    },
    {
      image: 'assets/acceptance-image2.jpg',
      title: '스터디 신청 B',
      location: '서울, 홍대',
      date: '2025-01-22',
      userIsAccepted: false,
    },
    {
      image: 'assets/acceptance-image3.jpg',
      title: '스터디 신청 C',
      location: '서울, 이태원',
      date: '2025-01-23',
      userIsAccepted: true,
    },
    {
      image: 'assets/acceptance-image4.jpg',
      title: '스터디 신청 D',
      location: '부산, 해운대',
      date: '2025-01-25',
      userIsAccepted: false,
    },
    {
      image: 'assets/acceptance-image5.jpg',
      title: '스터디 신청 E',
      location: '대구, 동성로',
      date: '2025-02-01',
      userIsAccepted: true,
    },
    {
      image: 'assets/acceptance-image6.jpg',
      title: '스터디 신청 F',
      location: '서울, 명동',
      date: '2025-02-05',
      userIsAccepted: false,
    },
    {
      image: 'assets/acceptance-image7.jpg',
      title: '스터디 신청 G',
      location: '서울, 강남',
      date: '2025-02-10',
      userIsAccepted: true,
    },
    {
      image: 'assets/acceptance-image8.jpg',
      title: '스터디 신청 H',
      location: '서울, 신촌',
      date: '2025-02-12',
      userIsAccepted: null,
    },
    {
      image: 'assets/acceptance-image9.jpg',
      title: '스터디 신청 I',
      location: '인천, 송도',
      date: '2025-02-15',
      userIsAccepted: true,
    },
    {
      image: 'assets/acceptance-image10.jpg',
      title: '스터디 신청 J',
      location: '서울, 왕십리',
      date: '2025-02-20',
      userIsAccepted: false,
    },
  ];

  return (
    <>
      {manageMockDataList.map((data, index) => (
        <Manage
          key={index}
          title={data.title}
          profileImage={data.profileImage}
          name={data.name}
        />
      ))}

      {acceptanceMockDataList.map((data, index) => (
        <Acceptance
          key={index}
          image={data.image}
          title={data.title}
          location={data.location}
          date={data.date}
          userIsAccepted={data.userIsAccepted}
        />
      ))}
    </>
  );
};

export default Manages;
