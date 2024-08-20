import { BrowserRouter } from "react-router-dom";
import { Home } from './pages'
import { AppThemeProvider } from './contexts'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
