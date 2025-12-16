let e={data:{currentGame:{miJugada:null,pcJugada:null,resultado:""},history:[],score:{player:0,pc:0}},getState(){return this.data},setState(e){this.data=e},setPlayerMove(e){let t=this.getState();t.currentGame.miJugada=e,this.setState(t)},setComputerMove(){let e=["piedra","papel","tijera"][Math.floor(3*Math.random())],t=this.getState();t.currentGame.pcJugada=e,this.setState(t)},computeResult(e,t){let i,n="papel"==e&&"piedra"==t,o="tijera"==e&&"papel"==t,r="piedra"==e&&"tijera"==t,a="papel"==e&&"tijera"==t,s="tijera"==e&&"piedra"==t,l="piedra"==e&&"papel"==t;i=n||o||r?"ganaste":a||s||l?"perdiste":"empate";let c=this.getState();c.currentGame.miJugada=e,c.currentGame.pcJugada=t,c.currentGame.resultado=i,"ganaste"===i&&c.score.player++,"perdiste"===i&&c.score.pc++,this.setState(c)},resetGame(){let e=this.getState();e.currentGame={miJugada:null,pcJugada:null,resultado:""},this.setState(e)}},t=[{path:/\//,component:function({goTo:e}){let t=document.createElement("section");t.innerHTML=`
    <div> 
    <h1 id="titulo">Piedra Papel o Tijera </h1> 
    <button id="empezar">Empezar</button>
    </div>

    <style>
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
    #titulo {
    width: 308px;
    height: 300px;
    color: #009048 !important; 
    font-size: 85px; 
    font-weight: 700;
    font-family: "Odibee Sans", sans-serif;
    text-align: left;
    margin-bottom: 30px;
    padding: 10px; 
    /*background-color: red;*/
    }
    #empezar { 
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
    #empezar:hover {
    cursor: pointer; 
    }
    </style>
    `;let i=t.querySelector("#empezar");return i?.addEventListener("click",()=>{e("/empezar")}),t}},{path:/\/empezar/,component:function({goTo:e}){let t=document.createElement("section_dos");t.innerHTML=`
    <div> 
    <p id="texto">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos. </p>
    <button id="botonJugar">\xa1Jugar!</button>
    </div>

    <style> 
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
    #texto { 
    width: 308px;
    height: 240px;
    color: #000000; 
    font-size: 40px; 
    font-weight: lighter;
    font-family: "Odibee Sans", sans-serif;
    text-align: center;
    margin-bottom: 30px;
    padding: 10px; 
/* background-color: red;*/
    }
    #botonJugar {
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

    #botonJugar:hover {
    cursor: pointer; 
    }
    </style>
    `;let i=t.querySelector("#botonJugar");return i?.addEventListener("click",()=>{e("/jugar")}),t}},{path:/\/jugar/,component:function({goTo:t}){let i=document.createElement("section_tres");i.innerHTML=`
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
    `;let n=i.querySelector("h1"),o=3,r=setInterval(()=>{o--,n&&(n.textContent=String(o)),0===o&&(clearInterval(r),t("/resultado"))},1e3);return document.querySelectorAll("[data-img_manos]").forEach(i=>{i.addEventListener("click",i=>{let n=i.currentTarget.dataset.img_manos;if(n){clearInterval(r),e.setPlayerMove(n),e.setComputerMove();let i=e.getState().currentGame;e.computeResult(i.miJugada,i.pcJugada),t("/resultado")}})}),i}},{path:/\/resultado/,component:function({goTo:t}){let i,n,o,r=e.getState(),a=r.currentGame,s=a.resultado,l=r.score.player,c=r.score.pc;return"ganaste"===s?((i=document.createElement("section")).innerHTML=`
        <div class="caja_grande "> 
        <h1>\xa1GANASTE!</h1>
        <!-- 
        <p>Vos elegiste: ${a.miJugada}</p>
        <p>La PC eligi\xf3: ${a.pcJugada}</p>
        -->

        <div class="caja_puntaje"> 
            <h3>Score</h3> 
            <p>Vos: ${l}</p> 
            <p>Maquina: ${c}</p> 
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
        `,i.querySelector("#volver")?.addEventListener("click",()=>{t("/jugar")}),i):"perdiste"===s?((n=document.createElement("section")).innerHTML=`
        <h1>PERDISTE</h1>

        <!-- 
        <p>Vos elegiste: ${a.miJugada}</p>
        <p>La PC eligi\xf3: ${a.pcJugada}</p>
        -->

        <div class="caja_puntaje"> 
            <h3>Score</h3>
            <p>Vos: ${l}</p> 
            <p>Maquina: ${c}</p>
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
        `,n.querySelector("#volver")?.addEventListener("click",()=>{t("/jugar")}),n):((o=document.createElement("section")).innerHTML=`
        <h1>EMPATE</h1>

        <!-- 
        <p>Vos elegiste: ${a.miJugada}</p>
        <p>La PC eligi\xf3: ${a.pcJugada}</p>
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
        `,o.querySelector("#volver")?.addEventListener("click",()=>{t("/jugar")}),o)}}];var i=document.querySelector("#root");function n(e){history.pushState({},"",e),o(e)}function o(e){for(let o of(console.log("el handle route recibio"),t))if(o.path.test(e)){let e=o.component({goTo:n});i.firstChild&&i.firstChild.remove(),i.appendChild(e)}}o(location.pathname);
//# sourceMappingURL=desafio-juego.97c966de.js.map
