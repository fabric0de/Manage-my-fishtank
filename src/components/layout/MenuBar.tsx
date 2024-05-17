import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-4">
      <ul>
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/menu1">내 어항</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/menu2">커뮤니티</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/menu3">내 정보</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/menu4">로그아웃</Link>
        </li>
      </ul>
    </div>
  );
}
