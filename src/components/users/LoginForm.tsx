import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div>
      <form>
        <h1 className="form__title">로그인</h1>
        <div className="form__block">
          <label htmlFor="email">아이디</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="form__block">
          계정이 없으신가요?
          <Link to="/signuppage" className="form__link">
            회원가입
          </Link>
        </div>
        <div className="form__block">
          <button type="submit" className="form__btn--submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
