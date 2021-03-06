import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ModalConfirm } from './components/ModalConfirm';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { GlobalStyles } from './styles/global';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {theme.title === 'light' ? (
        <Toaster />
      ) : (
        <Toaster
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      )}
      <BrowserRouter>
        <ModalConfirm />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
