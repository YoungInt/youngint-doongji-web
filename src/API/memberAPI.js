import img1 from "../images/ourteam_1";
import img2 from "../images/ourteam_2";
import img3 from "../images/ourteam_3";
import img4 from "../images/ourteam_4";
import img5 from "../images/ourteam_5";
import img6 from "../images/ourteam_6";
import img7 from "../images/ourteam_7";
import img8 from "../images/ourteam_8";
import img9 from "../images/ourteam_9";
import img10 from "../images/ourteam_10";
import img11 from "../images/ourteam_11";

const members = [
  {
    id: 0,
    img: img1,
    name: "YoungEun, 대표",
    message: "큰 꿈을 꿉시다. 그대로 됩니다."
  },
  { id: 1, img: img2, name: "김영광", message: "2번 메시지" },
  {
    id: 2,
    img: img3,
    name: "JiHee, 경영지원",
    message: "나는야 영인터의 살림꾼"
  },
  { id: 3, img: img4, name: "박규빈", message: "4번 메시지" },
  { id: 4, img: img5, name: "김윤배", message: "5번 메시지" },
  {
    id: 5,
    img: img6,
    name: " EZ,Designer",
    message: "세상뿌듯! 오늘도 귀여운 걸 만들어냈다"
  },
  {
    id: 6,
    img: img7,
    name: "Jini Kim, 영업지원",
    message: "친절하게 C/S문의 처리중"
  },
  { id: 7, img: img8, name: "효원님", message: "8번 메시지" },
  { id: 8, img: img9, name: "문규님", message: "9번 메시지" },
  { id: 9, img: img10, name: "나", message: "10번 메시지" },
  { id: 10, img: img11, name: "승식님", message: "11번 메시지 " }
];
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default shuffle(members);
