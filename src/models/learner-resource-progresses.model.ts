import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'hexis', table: 'learner_resource_progresses'}
  }
})
export class LearnerResourceProgresses extends Entity {
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
    postgresql: {columnName: 'learner_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  learnerId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'resource_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  resourceId: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'progress', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  progress?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LearnerResourceProgresses>) {
    super(data);
  }
}

export interface LearnerResourceProgressesRelations {
  // describe navigational properties here
}

export type LearnerResourceProgressesWithRelations = LearnerResourceProgresses & LearnerResourceProgressesRelations;
