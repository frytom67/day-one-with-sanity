import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

const config = defineConfig

({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: '8ogsechc',
  dataset: 'production',

  plugins:
  [
    structureTool({structure, defaultDocumentNode}), 
    visionTool(),
  ],

  schema: 
  {
    types: schemaTypes,
  },
})

export default config