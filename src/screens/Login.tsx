import styled from 'styled-components';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexBox, WhiteBox } from '../styles/common';

const Wrapper = styled(FlexBox)`
  height: 100vh;
`;

const Separater = styled.div.attrs({
  className:
    'flex justify-center items-center flex-col border-b border-solid border-gray-400 relative mb-6',
})`
  height: 1.5rem;
  span {
    position: absolute;
    top: 0.5rem;
    height: 2rem;
    background: white;
    padding: 0.5rem;
  }
`;

const FacebookParagraph = styled.p.attrs({ className: 'text-center' })`
  color: #385185;
`;

const Logo = styled.h1.attrs({
  className:
    'bg-clip-content bg-contain bg-left w-full h-9 bg-no-repeat truncate -indent-20 my-5',
})`
  background-image: url('${process.env.PUBLIC_URL}/logo.png');
`;

const CenterBox = styled(WhiteBox)`
  text-align: center;
`;

const Login = () => {
  return (
    <Wrapper>
      <WhiteBox>
        <Logo>인스타그램</Logo>

        <form>
          <input className="input" type="text" placeholder="아이디" />
          <input className="input" type="password" placeholder="비밀번호" />
          <button className="submit" type="submit">
            로그인
          </button>
        </form>
        <Separater>
          <span>또는</span>
        </Separater>
        <FacebookParagraph>
          <button>
            <FontAwesomeIcon icon={faFacebookSquare} color="#385185" />{' '}
            Facebook으로 로그인
          </button>
        </FacebookParagraph>
        <p className="text-center">
          <button className="text-xs text-sky-800">
            비밀번호를 잊으셨나요?
          </button>
        </p>
      </WhiteBox>
      <CenterBox>
        <span>계정이 없으신가요?</span>{' '}
        <button className="text-sky-500 font-bold">가입하기</button>
      </CenterBox>
    </Wrapper>
  );
};

export default Login;
