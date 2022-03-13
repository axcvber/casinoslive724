import { gql } from '@apollo/client'

export const BONUSES_QUERY = gql`
  query Bonuses($start: Int, $limit: Int, $locale: I18NLocaleCode) {
    bonuses(
      pagination: { start: $start, limit: $limit }
      filters: { casino: { name: { ne: "null" } } }
      locale: $locale
    ) {
      data {
        id
        attributes {
          title
          slug
          bonusReferralLink
          casino {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
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

export const BONUS_ITEM_PROPS_QUERY = gql`
  query BonusItemProps($bonusSlug: String!, $locale: I18NLocaleCode) {
    bonuses(filters: { slug: { eq: $bonusSlug } }, sort: "id:desc", locale: $locale) {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          bonusReferralLink
          sections {
            id
            title
            content
          }
          casino {
            data {
              attributes {
                name
                slug
                rating
              }
            }
          }
        }
      }
    }
  }
`

export const BONUS_ITEM_PATH_QUERY = gql`
  query BonusItemPath {
    bonuses(filters: { casino: { name: { ne: "null" } } }, locale: "all") {
      data {
        attributes {
          slug
          locale
          casino {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const AVAILABLE_BONUSES = gql`
  query AvailableBonuses($casinoSlug: String!, $locale: I18NLocaleCode) {
    bonuses(filters: { casino: { slug: { eq: $casinoSlug } } }, locale: $locale) {
      data {
        id
        attributes {
          slug
          image {
            data {
              attributes {
                formats
                alternativeText
              }
            }
          }
          title
        }
      }
    }
  }
`
