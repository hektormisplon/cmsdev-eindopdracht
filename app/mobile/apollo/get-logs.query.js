import gql from 'graphql-tag'

export default gql`
query Logs($filter: JSON!, $sort: String!) { 
  logs(where: $filter, sort: $sort ) {
    id
    client_id {
      id
      name
    }
    startTime
    billingRate
    updated_at
  }
}
`
