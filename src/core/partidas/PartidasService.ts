import Partidas from "./Partidas";
import Rodada from "./Rodada";
export default class PartidaService {
    
    static carregaPartidasGrupos(partidas:Partidas) {
        const partidasOrdenadas = partidas.rodadas.grupos.map(rodada => rodada.sort((a:Rodada, b:Rodada) => {
            if (a.data > b.data) {
                return 1;
            }
            if (a.data < b.data) {
                return -1;
            }
            return 0;
        }))

        return partidasOrdenadas;
    }
}