import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'resources'}}
})
export class Resources extends Entity {
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

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  description?: string;

  @property({
    type: 'string',
    length: 100,
    postgresql: {columnName: 'link', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  link?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'group_type', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  groupType?: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'resource_type', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  resourceType: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Resources>) {
    super(data);
  }
}

export interface ResourcesRelations {
  // describe navigational properties here
}

export type ResourcesWithRelations = Resources & ResourcesRelations;
