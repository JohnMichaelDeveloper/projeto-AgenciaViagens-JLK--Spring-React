import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css';
const Footer: React.FC = () =>{
  return(
    <footer className=' Footer container-fluid text-center mt-5'>
        <div className="">        
      <Link to='/' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </Link>
      
      <p>Site criado por John Michael - <a href='https://github.com/JohnMichaelDeveloper' title='GitHub'>GitHub - 2022.</a></p>
      <p>JLK Viagens <a href="/" title="Visit w3schools">www.jlk.comVocê</a></p>
      </div>
    </footer>

  )

  
}
export default Footer;