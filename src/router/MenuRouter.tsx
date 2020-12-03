import Canal    from '../components/View/MantenedorMensajesBus/Canal/CanalView'
import Aplicacion  from  '../components/View/MantenedorMensajesBus/Aplicacion/AplicacionView'
import Graficos from '../components/View/charPrueba'
import Graficos2 from '../components/View/charPrueba2'

import Content from '../components/page/Content'

const MenuRoutes = [
    {
      path: "/Canal",
      sidebarName: "Canal",
      navbarName: "Canal",
      icon: "VerifiedUser",
      component: Canal
    },
    {
      path: "/Aplicacion",
      sidebarName: "Aplicacion",
      navbarName: "Aplicacion",
      icon: "Phonelink",
      component: Aplicacion
    },
    {
      path: "/Graficos",
      sidebarName: "Graficos",
      navbarName: "Graficos",
      icon: "Phonelink",
      component: Graficos
    },
    {
      path: "/Graficos2",
      sidebarName: "Graficos2",
      navbarName: "Graficos2",
      icon: "Phonelink",
      component: Graficos2
    }
    // { redirect: true, path: "/", to: "/Con", navbarName: "Redirect" }
  ];
  
  export default MenuRoutes