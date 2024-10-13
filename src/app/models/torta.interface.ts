import {ICategoria} from '../models/categoria.interface';

export interface ITorta {
  id: number;
  name: string;
  img: string;
  price: number;
  status: TortaStatus;
  categoryId: ICategoria["id"];
  description: string;
}

enum TortaStatus {
  Activa = 1,
  Deprecada = 0
}

