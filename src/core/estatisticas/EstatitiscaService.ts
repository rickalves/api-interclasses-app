import { Cartoes, Gols, Estatisticas } from "./Estatisticas"

export default class EstatisticaService {
    
    static gols(estatisticas:Estatisticas) {
        const golsOrdenado = estatisticas.gols.sort((a:Gols, b:Gols) => {
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

    static cartoesAmarelos(estatisticas:Estatisticas) {
        const cartoesOrdenado = estatisticas.cartoes_amarelos.sort((a:Cartoes, b:Cartoes) => {
            if (a.cartoes < b.cartoes) {
                return 1;
            }
            if (a.cartoes > b.cartoes) {
                return -1;
            }
            return 0;
        })

        return cartoesOrdenado;
    }

    static cartoesVermelhos(estatisticas:Estatisticas) {
        const cartoesOrdenado = estatisticas.cartoes_vermelhos.sort((a:Cartoes, b:Cartoes) => {
            if (a.cartoes < b.cartoes) {
                return 1;
            }
            if (a.cartoes > b.cartoes) {
                return -1;
            }
            return 0;
        })

        return cartoesOrdenado;
    }
}