import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'assessment_items'}}
})
export class AssessmentItems extends Entity {
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
    postgresql: {columnName: 'assessment_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  assessmentId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'sort', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  sort: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'link', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  link: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AssessmentItems>) {
    super(data);
  }
}

export interface AssessmentItemsRelations {
  // describe navigational properties here
}

export type AssessmentItemsWithRelations = AssessmentItems & AssessmentItemsRelations;
