import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'hexis',
  connector: 'postgresql',
  url: 'postgres://postgres:postgres@localhost/hexis',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'hexis',
  schema: 'hexis'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HexisDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'hexis';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.hexis', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
