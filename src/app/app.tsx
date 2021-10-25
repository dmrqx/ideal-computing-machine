import { ApolloProvider } from '@apollo/client'

import { apiClient } from '../api'
import { AppRoot } from '../components'

export default function App () {
  return (
    <ApolloProvider client={apiClient}>
      <AppRoot />
    </ApolloProvider>
  )
}
