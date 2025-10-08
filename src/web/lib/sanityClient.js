import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lzd8ynvi',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    '',
  useCdn: false,
})
