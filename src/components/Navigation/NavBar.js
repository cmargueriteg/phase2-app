import {NavLink} from 'react-router-dom'


function NavBar() {

const style ={
  width: "60%"
}


  return (
    <div>
      <NavLink
      to="/"
      style={style}>
          Home
      </NavLink>

      <NavLink
      to="/dogs">
        Dogs
      </NavLink>

      <NavLink 
      to="/build">
        Team Build
      </NavLink>
    </div>
  )
}

export {NavBar}
