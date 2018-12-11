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
  { id: 0, img: img1, name: "1", message: "오늘도 열심히 일했다." },
  { id: 1, img: img2, name: "2", message: "2번 메시지" },
  { id: 2, img: img3, name: "3", message: "퇴근합시다." },
  { id: 3, img: img4, name: "4", message: "4번 메시지" },
  { id: 4, img: img5, name: "5", message: "5번 메시지" },
  { id: 5, img: img6, name: "6", message: "6번 메시지" },
  { id: 6, img: img7, name: "7", message: "7번 메시지" },
  { id: 7, img: img8, name: "8", message: "8번 메시지" },
  { id: 8, img: img9, name: "9", message: "9번 메시지" },
  { id: 9, img: img10, name: "10", message: "10번 메시지" },
  { id: 10, img: img11, name: "11", message: "11번 메시지 " }
];
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default shuffle(members);
