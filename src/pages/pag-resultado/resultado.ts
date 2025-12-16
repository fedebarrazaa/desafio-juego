import { state } from "../../state"; //IMPORTACION DEL STATE 

export function ResultadoDelJuego({ goTo }: { goTo: (path: string) => void }) {

    const gameState = state.getState(); //OBTENGO EL ESTADO GLOBAL DEL JUEGO 
    const game = gameState.currentGame; //OBTENGO INFO DEL JUEGO ACTUAL 

    const resultadoTotal = game.resultado; //GUARDO EL RESULTADO DEL JUEGO 
    const playerScore = gameState.score.player; //OBTENGO LOS PUNTOS MIOS 
    const pcScore = gameState.score.pc; //OBTENGO LOS PUNTOS DE LA PC 

    //DECIDO QUE PANTALLA MOSTRAR 
    if (resultadoTotal === "ganaste") {
        return ganaste();
    } else if (resultadoTotal === "perdiste") {
        return perdiste();
    } else {
        return empate();
    }

    function ganaste() {
        const section = document.createElement("section");
        section.innerHTML = `
        <div class="caja_grande "> 
        <h1>¡GANASTE!</h1>
        <!-- 
        <p>Vos elegiste: ${game.miJugada}</p>
        <p>La PC eligió: ${game.pcJugada}</p>
        -->

        <div class="caja_puntaje"> 
            <h3>Score</h3> 
            <p>Vos: ${playerScore}</p> 
            <p>Maquina: ${pcScore}</p> 
        </div>  
        
        <button id="volver">Volver a Jugar</button>
        </div>
        
        <style> 
        .caja_grande {
        width: 100%;
        height: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #894949E5;
        opacity: 90%;
        }
        
        .caja_puntaje {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 259px;
        height: 217px;
        border-radius: 10px;
        border: 10px solid black;
        background-color: rgb(255, 255, 255);   
        }
        h3 {
        text-align: center;
        font-size: 55px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        }
        p {
        text-align: right;
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        } 
        h1 {
        font-size: 100px;
        font-weight: 400; 
        font-family: "Odibee Sans", sans-serif;
        color: #000000ff;
        text-align: center;
        display: flex; 
        justify-content: center;
        align-items: center;
        }
        
        #volver{
        width: 322px;
        height: 87px; 
        border-radius: 10px;
        border: 10px solid #001997;
        background-color:#006CFC;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        margin-top: 30px;   
        }
        #volver:hover {
        cursor: pointer; 
        </style> 
        `;
        //EVENTO CLICK EN BOTON 
        section.querySelector("#volver")?.addEventListener("click", () => {
            goTo("/jugar");
        });
        return section;
    }

    function perdiste() {
        const section = document.createElement("section");
        section.innerHTML = `
        <h1>PERDISTE</h1>

        <!-- 
        <p>Vos elegiste: ${game.miJugada}</p>
        <p>La PC eligió: ${game.pcJugada}</p>
        -->

        <div class="caja_puntaje"> 
            <h3>Score</h3>
            <p>Vos: ${playerScore}</p> 
            <p>Maquina: ${pcScore}</p>
        </div>

        <button id="volver">Volver a Jugar</button>

        <style> 
        section {
        width: 100%;
        height: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #888949E5;
        opacity: 90%;
        }
        
        .caja_puntaje {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 259px;
        height: 217px;
        border-radius: 10px;
        border: 10px solid black;
        background-color: rgb(255, 255, 255); 
        }
        h3 {
        text-align: center;
        font-size: 55px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        }
        p {
        text-align: right;
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        } 
        h1 {
        font-size: 100px;
        font-weight: 400; 
        font-family: "Odibee Sans", sans-serif;
        color: #000000ff;
        text-align: center;
        display: flex; 
        justify-content: center;
        align-items: center;
        }
        
        #volver{
        width: 322px;
        height: 87px; 
        border-radius: 10px;
        border: 10px solid #001997;
        background-color:#006CFC;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        margin-top: 30px;   
        }
        #volver:hover {
        cursor: pointer; 
        </style> 
        `;
        //EVENTO CLICK EN BOTON 
        section.querySelector("#volver")?.addEventListener("click", () => {
            goTo("/jugar");
        });
        return section;
    }
    
    function empate() {
        const section = document.createElement("section");
        section.innerHTML = `
        <h1>EMPATE</h1>

        <!-- 
        <p>Vos elegiste: ${game.miJugada}</p>
        <p>La PC eligió: ${game.pcJugada}</p>
        -->

        <button id="volver">Volver a Jugar</button>

        <style>
        section {
        width: 100%;
        height: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #496389e5;
        opacity: 90%;
        }
        
        .caja_puntaje {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: right;
        width: 259px;
        height: 217px;
        border-radius: 10px;
        border: 10px solid black;
        background-color: rgb(255, 255, 255);   
        }
        h3 {
        font-size: 55px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        }
        p {
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        } 
        h1 {
        font-size: 100px;
        font-weight: 400; 
        font-family: "Odibee Sans", sans-serif;
        color: #000000ff;
        text-align: center;
        display: flex; 
        justify-content: center;
        align-items: center;
        }
        
        #volver{
        width: 322px;
        height: 87px; 
        border-radius: 10px;
        border: 10px solid #001997;
        background-color:#006CFC;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: "Odibee Sans", sans-serif;
        margin-top: 30px;   
        }
        #volver:hover {
        cursor: pointer; 
        </style> 
        </style>
        `;
        //EVENTO CLICK EN BOTON 
        section.querySelector("#volver")?.addEventListener("click", () => {
            goTo("/jugar");
        });
        return section;
    }
}
