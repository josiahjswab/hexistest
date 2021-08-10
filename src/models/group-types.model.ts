import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'group_types'}}
})
export class GroupTypes extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GroupTypes>) {
    super(data);
  }
}

export interface GroupTypesRelations {
  // describe navigational properties here
}

export type GroupTypesWithRelations = GroupTypes & GroupTypesRelations;
