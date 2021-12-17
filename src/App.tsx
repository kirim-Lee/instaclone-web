import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { darkModeVar, isLoggedInVar } from './local-state';
import { useReactiveVar } from '@apollo/client';
import './index.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';

const Button = styled.button.attrs({
  className: 'rounded-md border-solid border-2 border-blue-600 text-gray-500',
})`
  color: ${(props) => props.theme.color};
`;

function App() {
  const isLogged = useReactiveVar<boolean>(isLoggedInVar);
  const isDark = useReactiveVar<boolean>(darkModeVar);

  const click = () => {
    isLoggedInVar(true);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <button onClick={() => darkModeVar(true)}>dark</button>
                <button onClick={() => darkModeVar(false)}>light</button>
                {isLogged ? (
                  <div className="border-2 border-black">로그인중</div>
                ) : (
                  <Button onClick={click}>감자의 비스킷 싹이나서</Button>
                )}
              </>
            }
          />
          <Route path="/same" element={<>something</>} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
