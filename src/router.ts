//IMPORTACIONES DE LAS FUNCIONES DE LOS BOTONES PARA PASAR DE PAG 

import { botonEmpezar } from './pages/pag-inicio/boton_empezar';
import { botonJugar } from './pages/pag-empezar/boton_jugar';
import { IniciaElJuego } from './pages/pag-jugar/jugar';
import { ResultadoDelJuego } from './pages/pag-resultado/resultado'; //PAGE DONDE ESTAN LOS PAGES DE "GANASTES" "PERDISTE"

//EMPIEZA EL ROUTER
const routes = [
  {
  path: /\//, //PAGINA DE INICIO
  component: botonEmpezar, 
  },
  {
  path: /\/empezar/,//HACIA DONDE VA A IR CUANDO APRETE EL BOTON 
  component: botonJugar,
  }, 
  {
    path: /\/jugar/,
    component: IniciaElJuego, 
  },
  {
    path: /\/resultado/,
    component: ResultadoDelJuego, 
  }
]

export function initRouter(container: Element) {
  function goTo(path:any) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route:any) {
    console.log("el handle route recibio")

    for (const r of routes) {
    if(r.path.test(route)) {
      const el = r.component({ goTo: goTo});

      if (container.firstChild) {
        container.firstChild.remove();
      }
      container.appendChild(el);
    }
  }
} 
handleRoute(location.pathname)
}
