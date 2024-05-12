import { Link } from "react-router-dom";

export default function SignUpForm() {
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
          <label htmlFor="password__confirm">비밀번호 확인</label>
          <input
            type="password"
            id="password__confirm"
            name="password__confirm"
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="form__block">
          계정이 있으신가요?
          <Link to="/loginpage" className="form__link">
            로그인
          </Link>
        </div>
        <div className="form__block">
          <button type="submit" className="form__btn--submit">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
