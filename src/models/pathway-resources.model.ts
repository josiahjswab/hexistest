import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'pathway_resources'}}
})
export class PathwayResources extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'pathway_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  pathwayId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'resource_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  resourceId: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'sort', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  sort?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PathwayResources>) {
    super(data);
  }
}

export interface PathwayResourcesRelations {
  // describe navigational properties here
}

export type PathwayResourcesWithRelations = PathwayResources & PathwayResourcesRelations;
