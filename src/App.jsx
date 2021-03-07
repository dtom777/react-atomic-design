import SearchInput from './components/molecules/SearchInput';
import PrimaryButton from './components/atoms/button/PrimaryButton';
import SecondaryButton from './components/atoms/button/SecondaryButton';
import UserCard from './components/organisms/user/UserCard';
import './styles.css';
import HeaderOnly from './components/templates/HeaderOnly';
import DefaultLayout from './components/templates/DefaultLayout';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { UserProvider } from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router />;
    </UserProvider>
  );
}

export default App;
