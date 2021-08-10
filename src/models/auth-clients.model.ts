import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'hexis', table: 'auth_clients'}}
})
export class AuthClients extends Entity {
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
    length: 50,
    postgresql: {columnName: 'client_id', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  clientId: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'client_secret', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  clientSecret: string;

  @property({
    type: 'string',
    length: 200,
    postgresql: {columnName: 'redirect_url', dataType: 'character varying', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  redirectUrl?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'access_token_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  accessTokenExpiration: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'refresh_token_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  refreshTokenExpiration: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'auth_code_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  authCodeExpiration: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'secret', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  secret: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'created_on', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  createdOn: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'modified_on', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  modifiedOn: string;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'deleted', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  deleted: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'deleted_on', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  deletedOn?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'deleted_by', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  deletedBy?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_ids', dataType: 'ARRAY', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  userIds?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AuthClients>) {
    super(data);
  }
}

export interface AuthClientsRelations {
  // describe navigational properties here
}

export type AuthClientsWithRelations = AuthClients & AuthClientsRelations;
