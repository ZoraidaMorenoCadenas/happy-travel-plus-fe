/* import React, { useState } from 'react';
import SearchIcon from '../../assets/Glass-icon.svg';


const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Llama a la función de búsqueda pasada como prop
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar por título o ubicación..."
          value={searchTerm}
          onChange={handleSearchChange}
          
        />
        <button type="submit">
        <img src={SearchIcon} alt="Usuario" className='icon' />
         
        </button>
      </form>
    </div>
  );
};

export default Search;
 */
import React, { useState } from 'react';
import SearchIcon from '../../assets/Glass-icon.svg';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Llama a la función de búsqueda pasada como prop
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar por título o ubicación..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <img src={SearchIcon} alt="Icono de búsqueda" className='icon' />
        </button>
      </form>
    </div>
  );
};

export default Search;
