import img1 from "../images/ourteam_1";
import img2 from "../images/ourteam_2";
import img3 from "../images/ourteam_3";
import img4 from "../images/ourteam_4";
import img5 from "../images/ourteam_5";
import img6 from "../images/ourteam_6";
import img7 from "../images/ourteam_7";
import img8 from "../images/ourteam_8";
import img9 from "../images/ourteam_9";
import img11 from "../images/ourteam_11";

const members = [
  {
    id: 0,
    img: img1,
    name: "YoungEun, 대표",
    message: "큰 꿈을 꿉시다. 그대로 됩니다."
  },
  { id: 1, img: img2, name: "Y.K.Kim", message: "즐거워" },
  {
    id: 2,
    img: img3,
    name: "JiHee, 경영지원",
    message: "나는야 영인터의 살림꾼"
  },
  { id: 3, img: img4, name: "qbin", message: "어라? 왜? 그런거지?" },
  {
    id: 4,
    img: img5,
    name: "YB, Developer",
    message: "음..특별히 할 말은 없습니다."
  },
  {
    id: 5,
    img: img6,
    name: " EZ,Designer",
    message: "세상뿌듯! 오늘도 귀여운 걸 만들어냈다."
  },
  {
    id: 6,
    img: img7,
    name: "Jini Kim, 영업지원",
    message: "친절하게 C/S문의 처리중"
  },
  {
    id: 7,
    img: img8,
    name: "Eagle Eye, Sales",
    message: "믿음 소망 사랑 그중에 제일은 고객이라..."
  },
  {
    id: 8,
    img: img9,
    name: "Idol Master P, Sales",
    message: "국경의 긴 터널을 빠져나오니 설국이었다."
  },
  {
    id: 9,
    img: img11,
    name: "Ssum Ssum, Sales",
    message: "기계가 안정화되는 그 날 까지..."
  }
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default shuffle(members);
