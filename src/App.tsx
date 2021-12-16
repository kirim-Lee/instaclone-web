import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { isLoggedInVar } from './local-state';
import { useReactiveVar } from '@apollo/client';
import './index.css';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'rounded-md border-solid border-2 border-blue-600 text-gray-500',
})``;

function App() {
  const isLogged = useReactiveVar<boolean>(isLoggedInVar);

  const click = () => {
    isLoggedInVar(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLogged ? (
                <div className="border-2 border-black">로그인중</div>
              ) : (
                <Button onClick={click}>감자의 비스킷 싹이나서</Button>
              )
            }
          />
          <Route path="/same" element={<>something</>} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
