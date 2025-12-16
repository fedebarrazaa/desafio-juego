//SERA LA PAGINA DE BIENVENIDAD

export function botonEmpezar({ goTo }: { goTo: (path: string) => void }) {
    const sectionEl = document.createElement("section"); 
    sectionEl.innerHTML = `
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
    `
    //EVENTO CLICK EN BOTON 
    const boton = sectionEl.querySelector("#empezar"); 
    boton?.addEventListener('click', () =>{
        goTo("/empezar") //CUANDO HAGA CLICK ME VA A DIRIGIR A LA PAGINA DE EMPEZAR (TENGO QUE PONER A LA PAGINA A DONDE VA A IR CUANDO APRETE EL BOTON)
    })
    return sectionEl
}
