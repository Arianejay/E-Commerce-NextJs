import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = SanityClient({
  projectId: 'ohecwmjj',
  dataset: 'production',
  apiVersion: '2022-09-08',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)