import './App.css'

import { ThemeProvider } from './ThemeContext.jsx';
import { AuthProvider } from './AuthContext.jsx';

import Form from './Form.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Form />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
