import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Products } from '../models/Products';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Products, datasource);
  }
}
