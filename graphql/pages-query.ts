import { gql } from '@apollo/client'

export const HOME_PAGE_QUERY = gql`
  query HomePage($locale: I18NLocaleCode) {
    homePage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            keywords
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            canonicalURL
          }
          title
          subtitle
          popup {
            active
            link
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          gifs {
            id
            link
            gif {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`

export const CASINOS_PAGE_QUERY = gql`
  query CasinosPage($locale: I18NLocaleCode) {
    casinosPage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            keywords
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            canonicalURL
          }
          heading {
            title
            subtitle
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const BONUSES_PAGE_QUERY = gql`
  query BonusesPage($locale: I18NLocaleCode) {
    bonusesPage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            keywords
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            canonicalURL
          }
          heading {
            title
            subtitle
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
      }
    }
  }
`

export const COUPONS_PAGE_QUERY = gql`
  query CouponsPage($locale: I18NLocaleCode) {
    couponsPage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            keywords
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            canonicalURL
          }
          heading {
            title
            subtitle
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
      }
    }
  }
`

export const CMS_THEME_QUERY = gql`
  query cmsTheme {
    theme {
      data {
        attributes {
          logoTitle
          icon {
            data {
              attributes {
                url
              }
            }
          }
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          liveTvSiteLink
          socialNetworks {
            id
            link
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`
