import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LightMode from './LightMode';
import './Navbar.css';

const Navbar = (props) => {
  const [ toggle, setToggle ] = useState(false);  
  const [ isLight, setIsLight ] = useState(false);

  const handleScroll = (targetRef) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
      if( isLight ){
          setIsLight(false);
      }else{
          setIsLight(true);
      }
  }


  return (
    <>
    {/* ///////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////          Button Smartphone       ///////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div style={{zIndex: '499'}} className='btnPc position-fixed top-0 start-0 end-0'>
      <div style={{zIndex: '499'}} className='w-100 h-100 d-flex align-items-center position-relative'>
        <div className='ms-4 text-black position-absolute start-0'>
            <h4 className='fs-1 p-0 m-0' style={{color: 'var(--title-color)', fontWeight: 'bold'}}>Khoirurrozkn</h4>
        </div>
        <div className='fs-4 me-4 position-absolute end-0' onClick={() => setToggle(true)}>
            <FontAwesomeIcon className='fontAwesome fs-1' icon={faBars} />
        </div>
      </div>
    </div>


    {/* ///////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////          Navbar       //////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div style={{zIndex: '500'}} id='navbar' className={`position-fixed d-flex justify-content-center ${toggle && 'active'}`}>
      <div className='container-fluid'>
        <div className='w-100 h-100 wrapNavbar position-relative m-0 p-0'>
            <div className='closeSp me-2 position-absolute fs-3' onClick={() => setToggle(false)}>
                <FontAwesomeIcon className='fontAwesome fs-1' icon={faXmark}/>
            </div>
          <div className='fs-2 text-light position-absolute start-0 hideSp'>
            <h4 className='m-0' style={{color: 'var(--title-color)', fontWeight: 'bold'}}>Khoirurrozkn</h4>
          </div>
          <div className='w-100 h-100 d-flex justify-content-end align-items-center'>
            <div className='boxNavbar w-100 h-100 d-flex justify-content-end align-items-center'>
              <ul type='none' className='m-0 p-0'>
                <li><div className={`link ${props.navActive === 'beranda' && 'active'}`} onClick={() => {handleScroll(props.beranda);  setToggle(false);}}>Beranda</div></li>
                <li><div className={`link ${props.navActive === 'saya' && 'active'}`} onClick={() => {handleScroll(props.saya);  setToggle(false);}}>Tentang saya</div></li>
                <li><div className={`link ${props.navActive === 'portofolio' && 'active'}`} onClick={() => {handleScroll(props.portofolio);  setToggle(false);}}>Portofolio</div></li>
                <li><div className={`link ${props.navActive === 'skill' && 'active'}`} onClick={() => {handleScroll(props.skill);  setToggle(false);}}>Skill</div></li>
                <li><div className={`link ${props.navActive === 'kontak' && 'active'}`} onClick={() => {handleScroll(props.kontak);  setToggle(false);}}>Kontak</div></li>
                <li><div className={`link ${props.navActive === 'blog' && 'active'}`} onClick={() => {handleScroll(props.blog);  setToggle(false);}}>Blog pribadi</div></li>
                <li><a href='/' className='link'>Ganti tema</a></li>
                <li className='centerSp'>
                  <div className='wrapThemeNavbar position-relative d-flex align-items-center shadow rounded-5' style={isLight? {backgroundColor: 'rgb(131, 168, 190)'} : {backgroundColor: 'aqua'}}>
                    <div onClick={() => toggleTheme()} className={`position-absolute ${isLight? 'light' : null} `}>
                      <LightMode />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Navbar;