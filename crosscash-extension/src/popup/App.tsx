import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';
import { useAuth } from './pages/auth/AuthProvider';
import { useAppSelector } from './store';

function App(): JSX.Element {
    const auth = useAuth();
    const { walletInstance } = useAppSelector((state) => state.wallet);

    let initialPath = '/';

    if (walletInstance?.address && auth.user) {
        initialPath = '/wallet';
    } else if (walletInstance?.address && !auth.user) {
        initialPath = '/login';
    } else {
        initialPath = '/import_wallet';
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to Crosscash
                </p>
                <Link to={initialPath}>
                    {initialPath === '/login' ? 'Login' : 'Get Started'}
                </Link>
            </header>
        </div>
    );
}

export default App;
