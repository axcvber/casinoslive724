import { gql } from '@apollo/client'

export const COUPONS_QUERY = gql`
  query Coupons($start: Int, $limit: Int, $locale: I18NLocaleCode) {
    coupons(pagination: { start: $start, limit: $limit }, sort: "id:desc", locale: $locale) {
      data {
        id
        attributes {
          title
          link
          image {
            data {
              attributes {
                url
                alternativeText
                height
                width
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
    }
  }
`
