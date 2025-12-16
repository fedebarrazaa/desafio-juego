import { state } from "../../state"; //IMPORTO EL STATE 

export function IniciaElJuego({ goTo }: { goTo: (path: string) => void }) {
    const sectionTres = document.createElement("section_tres");
    sectionTres.innerHTML = `
        <h1 class="h1">3</h1>

        <style> 
        .h1 {
            font-size: 100px;
            font-weight: 400;
            font-family: "Odibee Sans", sans-serif;
            color: #000000ff;
            text-align: center;
            display: flex; 
            justify-content: center;
            align-items: center;
        }
        </style>
    `;

    // CONTADOR 
    const contadorEl = sectionTres.querySelector("h1");
    let tiempo = 3; //EL TIEMPO 

    const intervalo = setInterval(() => { //SE EJECUTA CADA 1 SEGUNDO
        tiempo--; //RESTA 1 SEGUNDO ES DECIR: 3, 2, 1

        if (contadorEl) {
            contadorEl.textContent = String(tiempo);
        }
        //CUANDO LLEGUE A 0 
        if (tiempo === 0) {
            clearInterval(intervalo); //FRENA EL CONTADOR 
            goTo("/resultado"); //CAMBIA DE PANTALLA AUTOMATICAMENTE
        }
    }, 1000); //INTERVALO CADA 1 SEGUNDO 

    //MANOS
    const manos = document.querySelectorAll("[data-img_manos]"); //BUSCAN EN EL DOM DONDE ESTAN LA IMAGENES 

    manos.forEach((mano) => { //CON forEach() VA A RECORRER CADA MANO 
        mano.addEventListener("click", (e) => { //EVENTO CLICK 
            const el = e.currentTarget as HTMLElement; //OBTIENE EL ELEMENTO CLICKEADO 
            const jugada = el.dataset.img_manos as "piedra" | "papel" | "tijera"; //OBTENGO LA JUGADA (lee el valor de la img y luego revisa que solo puede tener esos tres valores) 

            //SI HAY JUGADA VALIDA
            if (jugada) {
                clearInterval(intervalo); //FRENA EL CONTADOR 

                state.setPlayerMove(jugada); //GUARDA MIA JUGADA  
                state.setComputerMove(); //GUARDA LA JUGADA DE LA PC (la pc elige al azar) 

                const game = state.getState().currentGame; //OBTIENE EL JUEGO ACTUAL 

                //CALCULA EL RESULTADO
                state.computeResult(
                    game.miJugada!,
                    game.pcJugada!
                );

                goTo("/resultado");
            }
        });
    });

    return sectionTres;
}
