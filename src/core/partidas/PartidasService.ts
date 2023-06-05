import Partidas from "./Partidas";
import Rodada from "./Rodada";
export default class PartidaService {
    
    static carregaPartidas(partidas:Partidas) {
        const partidasOrdenadas = partidas.rodadas.map(rodada => rodada.sort((a:Rodada, b:Rodada) => {
            if (!a.finalizado) {
                return 1;
            }
            if (a.finalizado) {
                return -1;
            }
            return 0;
        }))

        return partidasOrdenadas;
    }
}