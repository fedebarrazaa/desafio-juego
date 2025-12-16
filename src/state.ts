// DEFINO LOS VALORES CON type
type Jugada = "piedra" | "papel" | "tijera";
type Resultado = "ganaste" | "perdiste" | "empate";

// ESTRUCTURA DE UNA PARTIDA
type Game = {
    miJugada: Jugada,
    pcJugada: Jugada,
    resultado: Resultado,
}

// EMPIEZA EL state
const state = {
    data: {
        currentGame: {
            miJugada: null as Jugada | null,
            pcJugada: null as Jugada | null,
            resultado: "" as Resultado | "",
        },
        history: [] as Game[],
        score: {
            player: 0,
            pc: 0,
        }
    },

    getState() { //ESTO VA SIEMPRE
        return this.data;
    },

    setState(newState: any) { //ESTO VA SIEMPRE
        this.data = newState;
    },

    setPlayerMove(move: Jugada) { //SE GUARDA LA JUGADA
        const currentState = this.getState();
        currentState.currentGame.miJugada = move;
        this.setState(currentState);
    },

    setComputerMove() { //LA JUGADA RANDOM DE LA PC 
        const opciones: Jugada[] = ["piedra", "papel", "tijera"];
        const random = opciones[Math.floor(Math.random() * 3)];

        const currentState = this.getState();
        currentState.currentGame.pcJugada = random;
        this.setState(currentState);
    },

    computeResult(miJugada: Jugada, pcJugada: Jugada) { //POSIBLES JUGADAS QUE EXISTEN 

        const ganoConPapel = miJugada == "papel" && pcJugada == "piedra";
        const ganoConTijera = miJugada == "tijera" && pcJugada == "papel";
        const ganoconPiedra = miJugada == "piedra" && pcJugada == "tijera";

        const perdiConPapel = miJugada == "papel" && pcJugada == "tijera";
        const perdiConTijera = miJugada == "tijera" && pcJugada == "piedra";
        const perdiConPiedra = miJugada == "piedra" && pcJugada == "papel";

        //DEVUELVE x cosa SI GANASTE o PERDISTE 
        let resultado: Resultado;

        if (ganoConPapel || ganoConTijera || ganoconPiedra) {
            resultado = "ganaste";
        } else if (perdiConPapel || perdiConTijera || perdiConPiedra) {
            resultado = "perdiste";
        } else {
            resultado = "empate";
        }

        const currentState = this.getState(); //SE GUARDA 

        // GUARDO JUGADAS
        currentState.currentGame.miJugada = miJugada;
        currentState.currentGame.pcJugada = pcJugada;
        currentState.currentGame.resultado = resultado;

        //SE SUMA EL PUNTAJE
        if (resultado === "ganaste") {
            currentState.score.player++;
        }

        if (resultado === "perdiste") {
            currentState.score.pc++;
        }

        this.setState(currentState);
        
    },

    //RESET SOLO DE LA PARTIDA (NO TOCA SCORE)
    resetGame() {
        const currentState = this.getState();
        currentState.currentGame = {
            miJugada: null,
            pcJugada: null,
            resultado: "",
        };
        this.setState(currentState);
    },
};

export { state };
