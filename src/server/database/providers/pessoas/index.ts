import * as create from './Create';
import * as deleteById from './DeleteById';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as getAll from './GetAll';
import * as count from './Count';

export const PessoasProvider = {
  ...deleteById,
  ...create,
  ...getById,
  ...updateById,
  ...getAll,
  ...count
};
