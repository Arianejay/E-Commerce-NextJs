import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import featured from './featured'
import dropped from './dropped'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, featured, dropped]),
})
