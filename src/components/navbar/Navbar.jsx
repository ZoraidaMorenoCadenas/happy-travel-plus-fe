/* 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormRegisterUser from '../form/formUser/FormRegisterUser';
import IconHome from '../../assets/Home-icon.svg';
import UserIcon from '../../assets/Avatar-icon.svg';
import './Navbar.css';
import Search from '../search/Search';

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
    
  return (
    <nav className="navbar">
      <div className="search-bar">
  <Search onSearch={handleSearch} /> {Search}
</div>


      <div className="home-icon">
      <Link to='/'><img  src={IconHome} alt='Icono para regresar a la pagina principal' className='icon'/></Link>
      </div>

      <div className="user-icon" onClick={() => setShowForm(!showForm)}>
        <img src={UserIcon} alt="Usuario" className='icon' />
      </div>

      {showForm && <FormRegisterUser />}
    </nav>
  );
};

export default Navbar;
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormRegisterUser from '../form/formUser/FormRegisterUser';
import IconHome from '../../assets/Home-icon.svg';
import UserIcon from '../../assets/Avatar-icon.svg';
import Search from '../search/Search';
import './Navbar.css';

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSearch = (searchTerm) => {
    // Aquí puedes implementar la lógica de búsqueda usando searchTerm
    console.log('Buscando:', searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="search-bar">
        <Search onSearch={handleSearch} />
      </div>

      <div className="home-icon">
        <Link to='/'><img  src={IconHome} alt='Icono para regresar a la página principal' className='icon'/></Link>
      </div>

      <div className="user-icon" onClick={() => setShowForm(!showForm)}>
        <img src={UserIcon} alt="Usuario" className='icon' />
      </div>

      {showForm && <FormRegisterUser />}
    </nav>
  );
};

export default Navbar;
