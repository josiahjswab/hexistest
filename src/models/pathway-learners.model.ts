import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'pathway_learners'}}
})
export class PathwayLearners extends Entity {
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
    postgresql: {columnName: 'learner_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  learnerId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PathwayLearners>) {
    super(data);
  }
}

export interface PathwayLearnersRelations {
  // describe navigational properties here
}

export type PathwayLearnersWithRelations = PathwayLearners & PathwayLearnersRelations;
