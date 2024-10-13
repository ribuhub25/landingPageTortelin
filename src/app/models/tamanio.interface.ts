import {ITorta} from '../models/torta.interface';

export interface ITamanio{
  id: number,
  description: string
}

export interface ITamanioTorta {
  tortaId: ITorta["id"];
  tamanioId: ITamanio["id"];
}
