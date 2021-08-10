import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'attributes'}}
})
export class Attributes extends Entity {
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
    length: 100,
    postgresql: {columnName: 'name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Attributes>) {
    super(data);
  }
}

export interface AttributesRelations {
  // describe navigational properties here
}

export type AttributesWithRelations = Attributes & AttributesRelations;
