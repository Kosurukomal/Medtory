import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header className='w-100 bg-dark header'>
       <div className='logo'>
        <img src="med.jpeg" alt="" width={"23%"} />
</div>
<div className='loggerUser'>
  <div className='loggedPic'></div>
<div></div>
</div>

<br/>


      </header>
      <nav className='navbar '>
        <ul className='nav-item'>
          <NavLink to="/">
          <li className='navbar-item mx-5 '  >AddItem</li>
          </NavLink>
<NavLink to="/displaydata">

          <li className='navbar-item '>View Item</li>
</NavLink>
<NavLink to="/reorder">
  <li>Notification</li>
</NavLink>


        </ul>
      </nav>
    </div>
  )
}

export default Header;
    // <div>
    
    //    <header className="w-100 bg-dark header" >
    //     <div className="logo ">
    //     <img src="med.jpeg"alt="" width={"80%"} height={"100px"} /></div>
    //     <div className="loggedUser">
    //       <div className="loggedPic">
           
    //       </div>
    //       <div className="loggedName"></div>
    //     </div>
    //     <br />
    //   </header>
    //   <nav className="navber1 bg-primary">
    //     <ul className="navber-item">
    //       <li className="nav-item" >Add item</li>
    //     </ul>
    //   </nav>
    // </div>

    // -----
    // <header className="w-100  header">
    //     <div className="logo ">
    //     <img src="images/Logo-02-1x1.png" alt="" width={"80%"}/></div>
    //     <div className="loggedUser">
    //       <div className="loggedPic">
           
    //       </div>
    //       <div className="loggedName"></div>
    //     </div>
    //     <br />
    //   </header>
    //   <nav className="navber1">
    //     <ul className="navber-item">
    //       <li className="nav-item">Add item</li>
    //     </ul>
    //   </nav>
    

