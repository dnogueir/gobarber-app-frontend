import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin/index';
import SignUp from './pages/SignUp/index';
import {AuthProvider} from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <SignIn/>
        </AuthProvider>

        <ToastContainer />

        <GlobalStyle />
    </>
)

export default App;
