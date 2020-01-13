import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_ENDPOINT = process.env.GRAPHCMS_ENDPOINT

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_ENDPOINT }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
