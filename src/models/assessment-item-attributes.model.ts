import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'hexis', table: 'assessment_item_attributes'}
  }
})
export class AssessmentItemAttributes extends Entity {
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
    postgresql: {columnName: 'assessment_item_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  assessmentItemId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'attribute_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  attributeId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AssessmentItemAttributes>) {
    super(data);
  }
}

export interface AssessmentItemAttributesRelations {
  // describe navigational properties here
}

export type AssessmentItemAttributesWithRelations = AssessmentItemAttributes & AssessmentItemAttributesRelations;
