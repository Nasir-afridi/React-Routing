import {Link, NavLink, Outlet} from 'react-router'

function College() {
  return (
    <>
      <center>
        <h1>College Page</h1>
        <NavLink to="student" className="Links">Student</NavLink>
        <NavLink to="details" className="Links">Details</NavLink>
        <NavLink to="department" className="Links">Department</NavLink>
        <Outlet></Outlet>
      </center>
    </>
  );
}

export default College;
