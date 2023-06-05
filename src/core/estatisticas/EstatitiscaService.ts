export default class EstatisticaService {
    
    static async gols() {
        const golsOrdenado = estatistica.gols.sort((a, b) => {
            if (a.gols < b.gols) {
                return 1;
            }
            if (a.gols > b.gols) {
                return -1;
            }
            return 0;
        })

        return golsOrdenado;
    }
}