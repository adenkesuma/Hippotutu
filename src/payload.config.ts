import { buildConfig } from 'payload/config'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [],
  routes: { 
    admin: '/sell'
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Hippotutu',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg'
    }
  },
  rateLimit: {
    max: 2000
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
})