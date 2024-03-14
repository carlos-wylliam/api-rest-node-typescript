import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pessoa, (table) => {
      table.bigIncrements('id').primary().index();
      table.string('nomeCompleto').index().notNullable();
      table.string('email').unique().notNullable();

      table
        .bigInteger('cidadeId')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETableNames.pessoa)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      table.comment('Table usada para armazenar pessoas do sistema.');
    })
    .then(() => {
      console.log(`# Create table ${ETableNames.cidade}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pessoa).then(() => {
    console.log(`# Drop table ${ETableNames.pessoa}`);
  });
}
