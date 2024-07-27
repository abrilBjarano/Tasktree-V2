import { NavLink } from 'react-router-dom';
import tree from '../assets/tree.png';
import { useRoutesInfo } from '../hooks/useRoutesInfo';


export const Navbar = () => {

   const { routes, getNavLinkClass } = useRoutesInfo();

   
   return (
      <nav className="navbar navbar-expand navbar-dark bg-dark rounded-bottom mb-4">
         <div className="d-flex justify-content-center">

            <a className="navbar-brand d-flex align-items-center mx-4">
               <img className="me-2" src={ tree } width="30" height="30" />
               Tasktree
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNav">
               <div className="navbar-nav">
                  
                  { routes.map( route => (
                     
                     <NavLink
                        key={ route.name }
                        to={ route.path }
                        className={ getNavLinkClass }
                     >
                           { route.name }
                     </NavLink>

                  ))}

               </div>
            </div>

         </div>
      </nav>
   )
}
