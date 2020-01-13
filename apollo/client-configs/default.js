import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = process.env.GRAPHCMS_API
console.log(GRAPHCMS_API)

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
  defaultHttpLink: false,
  httpEndpoint: GRAPHCMS_API
})
