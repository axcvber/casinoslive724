import { gql } from '@apollo/client'

export const TOP_CASINOS_QUERY = gql`
  query topCasinos($start: Int, $limit: Int, $locale: I18NLocaleCode) {
    casinos(
      pagination: { start: $start, limit: $limit }
      filters: { showOnHomepage: { eq: true } }
      sort: "homePagePriority:desc"
      locale: $locale
    ) {
      data {
        id
        attributes {
          name
          slug
          rating
          referralLink
          logo {
            data {
              attributes {
                alternativeText
                url
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

export const CASINOS_QUERY = gql`
  query Casinos($start: Int, $limit: Int, $locale: I18NLocaleCode) {
    casinos(pagination: { start: $start, limit: $limit }, sort: "casinoPagePriority:desc", locale: $locale) {
      data {
        id
        attributes {
          name
          slug
          rating
          referralLink
          logo {
            data {
              attributes {
                alternativeText
                url
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

export const CASINO_ITEM_PROPS_QUERY = gql`
  query CasinoItemProps($casinoSlug: String!, $locale: I18NLocaleCode) {
    casinos(filters: { slug: { eq: $casinoSlug } }, locale: $locale) {
      data {
        attributes {
          name
          slug
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          bonuses {
            data {
              id
            }
          }
          casinoHeading {
            id
            title
            desc
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          referralLink
          rating
          sections {
            id
            title
            content
          }
        }
      }
    }
  }
`

export const CASINO_ITEM_PATH_QUERY = gql`
  query CasinoItemPath {
    casinos(locale: "all") {
      data {
        attributes {
          slug
          locale
        }
      }
    }
  }
`
