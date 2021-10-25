import { gql } from '@apollo/client'

export const getAuthedYukerInfo = gql`
  query GetAuthedYukerInfo {
    yuker @rest(type: "Yuker", path: "/me") {
      apartment
      services @type(name: [Service])
      user
    }
  }
`

export const getProvidedServices = gql`
  query GetProvidedServices {
    providedServices @rest(type: "[Service]", path: "/services") {
      id
      name
      price
    }
  }
`
