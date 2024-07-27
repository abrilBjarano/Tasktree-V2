export const useRoutesInfo = () => {

   const routes = [
      { name: 'Home', path: '/' },
      { name: 'Completed', path: '/completed' }
   ]


   const getNavLinkClass = ({ isActive }) => {
      return `nav-link ${ isActive ? 'active' : '' }`
   };


   return {
      routes,
      getNavLinkClass,

   }
}
