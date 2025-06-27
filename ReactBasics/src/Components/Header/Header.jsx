import { useState } from 'react';
import './Header.css';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import { Link } from 'react-router-dom';

const Header = () => {
  const [changePage, setChangePage] = useState('Home');
  return (
    <div>
      <h1>Website Title</h1>
      <nav>
        <ul className='buttons'>
          <li>
            <Link to='/'>Home</Link>
            {/* <button onClick={() => setChangePage('Home')}>Home</button> */}
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h2>{changePage}</h2>
        {changePage === 'Home' && <Home />}
        {changePage === 'About' && <About />}
        {changePage === 'Contact' && <Contact />}
      </main>
    </div>
  );
};

export default Header;
