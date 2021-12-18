import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { darkModeVar, isLoggedInVar } from './local-state';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles/styles';
import Login from './screens/Login';
import './index.css';

function App() {
  const isLogged = useReactiveVar<boolean>(isLoggedInVar);
  const isDark = useReactiveVar<boolean>(darkModeVar);

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
                  <Login />
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
