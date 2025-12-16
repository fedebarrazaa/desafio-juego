//ACA VAMOS A IMPORTART TODO: pages, router.ts SERA LA CLAVE PARA ENVIARLO AL index.html

import './pages/pag-empezar/boton_jugar';
import './pages/pag-inicio/boton_empezar';
import './pages/pag-jugar/jugar';
import './pages/pag-resultado/resultado';
import { state } from './state';

//FUNCION DEL router.ts
import { initRouter } from './router';
(function() {
    const root = document.querySelector("#root")!; // Aseguramos que no es null
    initRouter(root); // Llamamos sin chequeo
})();