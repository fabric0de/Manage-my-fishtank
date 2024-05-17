import MenuBar from "./MenuBar";

export default function Main() {
  return (
    <div className="flex min-h-screen">
      <MenuBar />
      <div className="w-3/4 bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">메인</h2>
        <p>여기에 페이지 내용이 표시됩니다.</p>
      </div>
    </div>
  );
}
