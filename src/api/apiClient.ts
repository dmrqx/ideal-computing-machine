import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const apiRestLink = new RestLink({ uri: process.env.API_URI })

const inMemoryCache = new InMemoryCache()

export const apiClient = new ApolloClient({
  cache: inMemoryCache,
  link: apiRestLink
})
