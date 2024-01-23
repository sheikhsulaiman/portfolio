import { type SchemaTypeDefinition } from 'sanity'
import author from './schemas/author'
import category from './schemas/category'
import post from './schemas/post'
import tags from './schemas/tags'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,category,post,tags,blockContent],
}
