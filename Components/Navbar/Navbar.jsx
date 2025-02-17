import React, {useState , useRef}   from 'react' 

import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = () => {
     
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu= () =>{
    menuRef.current.style.right="0"
  }
  const closeMenu= () =>{
    menuRef.current.style.right="-350px"
  }


   

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/>
        <ul   ref={menuRef}  onClick={closeMenu} className="nav-menu">
          <img src={menu_close} alt=""  className='nav-mob-close'/>
           <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt='' />:<></>}</AnchorLink></li>
           <li><AnchorLink className='anchor-link'  href='#about'><p onClick={()=>setMenu("about")}>About me</p>{menu==="about"?<img src={underline} alt='' />:<></>}</AnchorLink></li>
           <li><AnchorLink className='anchor-link'  href='#services'><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt='' />:<></>}</AnchorLink></li>
           <li><AnchorLink className='anchor-link'  href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt='' />:<></>}</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link'  href='#contact'>Connect with me</AnchorLink>
         </div>
    </div>
  )
}

export default Navbar