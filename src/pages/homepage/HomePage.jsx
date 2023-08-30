import './HomePage.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import FormRegisterUser from '../../components/form/formUser/FormRegisterUser';

function HomePage() {
	return (
		<>
			<Header />
			<Navbar/>
			<FormRegisterUser/>
			
		</>
	)
}

export default HomePage