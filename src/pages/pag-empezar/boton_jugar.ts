//SERA LA SIGUIENTE PAGINA ANTES DE EMPEZAR EL JUEGO 
//ACA DEBE HABER UN BOTON QUE TE MANDE A LA pag-inicio

export function botonJugar({ goTo }: { goTo: (path: string) => void }) {
    const sectionDos = document.createElement("section_dos");
    sectionDos.innerHTML= `
    <div> 
    <p id="texto">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. </p>
    <button id="botonJugar">¡Jugar!</button>
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
    `
    //EVENTO CLICK EN BOTON 
    const boton = sectionDos.querySelector("#botonJugar"); 
    boton?.addEventListener('click', () => {
        goTo("/jugar"); //ME VA A DIRIGIR A LA PAG DE JUGA
    })
    return sectionDos
}