// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Bonus = {
  __typename?: 'Bonus';
  bonusReferralLink: Scalars['String'];
  casino?: Maybe<CasinoEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BonusRelationResponseCollection>;
  sections: Array<Maybe<ComponentSectionsSections>>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BonusLocalizationsArgs = {
  filters?: InputMaybe<BonusFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BonusSectionsArgs = {
  filters?: InputMaybe<ComponentSectionsSectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BonusEntity = {
  __typename?: 'BonusEntity';
  attributes?: Maybe<Bonus>;
  id?: Maybe<Scalars['ID']>;
};

export type BonusEntityResponse = {
  __typename?: 'BonusEntityResponse';
  data?: Maybe<BonusEntity>;
};

export type BonusEntityResponseCollection = {
  __typename?: 'BonusEntityResponseCollection';
  data: Array<BonusEntity>;
  meta: ResponseCollectionMeta;
};

export type BonusFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BonusFiltersInput>>>;
  bonusReferralLink?: InputMaybe<StringFilterInput>;
  casino?: InputMaybe<CasinoFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BonusFiltersInput>;
  not?: InputMaybe<BonusFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BonusFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BonusInput = {
  bonusReferralLink?: InputMaybe<Scalars['String']>;
  casino?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentSectionsSectionsInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BonusRelationResponseCollection = {
  __typename?: 'BonusRelationResponseCollection';
  data: Array<BonusEntity>;
};

export type BonusesPage = {
  __typename?: 'BonusesPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  heading: ComponentHeadingPage;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BonusesPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BonusesPageEntity = {
  __typename?: 'BonusesPageEntity';
  attributes?: Maybe<BonusesPage>;
  id?: Maybe<Scalars['ID']>;
};

export type BonusesPageEntityResponse = {
  __typename?: 'BonusesPageEntityResponse';
  data?: Maybe<BonusesPageEntity>;
};

export type BonusesPageInput = {
  heading?: InputMaybe<ComponentHeadingPageInput>;
};

export type BonusesPageRelationResponseCollection = {
  __typename?: 'BonusesPageRelationResponseCollection';
  data: Array<BonusesPageEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Casino = {
  __typename?: 'Casino';
  bonuses?: Maybe<BonusRelationResponseCollection>;
  casinoHeading: Array<Maybe<ComponentCasinoHeadingCasinoHeading>>;
  casinoPagePriority: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  homePagePriority: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CasinoRelationResponseCollection>;
  logo: UploadFileEntityResponse;
  name: Scalars['String'];
  rating: Scalars['Float'];
  referralLink: Scalars['String'];
  sections: Array<Maybe<ComponentSectionsSections>>;
  showOnHomepage?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CasinoBonusesArgs = {
  filters?: InputMaybe<BonusFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CasinoCasinoHeadingArgs = {
  filters?: InputMaybe<ComponentCasinoHeadingCasinoHeadingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CasinoLocalizationsArgs = {
  filters?: InputMaybe<CasinoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CasinoSectionsArgs = {
  filters?: InputMaybe<ComponentSectionsSectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CasinoEntity = {
  __typename?: 'CasinoEntity';
  attributes?: Maybe<Casino>;
  id?: Maybe<Scalars['ID']>;
};

export type CasinoEntityResponse = {
  __typename?: 'CasinoEntityResponse';
  data?: Maybe<CasinoEntity>;
};

export type CasinoEntityResponseCollection = {
  __typename?: 'CasinoEntityResponseCollection';
  data: Array<CasinoEntity>;
  meta: ResponseCollectionMeta;
};

export type CasinoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CasinoFiltersInput>>>;
  bonuses?: InputMaybe<BonusFiltersInput>;
  casinoPagePriority?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  homePagePriority?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CasinoFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CasinoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CasinoFiltersInput>>>;
  rating?: InputMaybe<FloatFilterInput>;
  referralLink?: InputMaybe<StringFilterInput>;
  showOnHomepage?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CasinoInput = {
  bonuses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  casinoHeading?: InputMaybe<Array<InputMaybe<ComponentCasinoHeadingCasinoHeadingInput>>>;
  casinoPagePriority?: InputMaybe<Scalars['Int']>;
  homePagePriority?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  referralLink?: InputMaybe<Scalars['String']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentSectionsSectionsInput>>>;
  showOnHomepage?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CasinoRelationResponseCollection = {
  __typename?: 'CasinoRelationResponseCollection';
  data: Array<CasinoEntity>;
};

export type CasinosPage = {
  __typename?: 'CasinosPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  heading: ComponentHeadingPage;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CasinosPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CasinosPageEntity = {
  __typename?: 'CasinosPageEntity';
  attributes?: Maybe<CasinosPage>;
  id?: Maybe<Scalars['ID']>;
};

export type CasinosPageEntityResponse = {
  __typename?: 'CasinosPageEntityResponse';
  data?: Maybe<CasinosPageEntity>;
};

export type CasinosPageInput = {
  heading?: InputMaybe<ComponentHeadingPageInput>;
};

export type CasinosPageRelationResponseCollection = {
  __typename?: 'CasinosPageRelationResponseCollection';
  data: Array<CasinosPageEntity>;
};

export type ComponentBannerGifsBannerGifs = {
  __typename?: 'ComponentBannerGifsBannerGifs';
  gif: UploadFileEntityResponse;
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type ComponentBannerGifsBannerGifsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBannerGifsBannerGifsFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBannerGifsBannerGifsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBannerGifsBannerGifsFiltersInput>>>;
};

export type ComponentBannerGifsBannerGifsInput = {
  gif?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
};

export type ComponentCasinoHeadingCasinoHeading = {
  __typename?: 'ComponentCasinoHeadingCasinoHeading';
  desc: Scalars['String'];
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentCasinoHeadingCasinoHeadingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCasinoHeadingCasinoHeadingFiltersInput>>>;
  desc?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCasinoHeadingCasinoHeadingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCasinoHeadingCasinoHeadingFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCasinoHeadingCasinoHeadingInput = {
  desc?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHeadingPage = {
  __typename?: 'ComponentHeadingPage';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentHeadingPageInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPopupPopup = {
  __typename?: 'ComponentPopupPopup';
  active?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  link: Scalars['String'];
};

export type ComponentPopupPopupInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSections = {
  __typename?: 'ComponentSectionsSections';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSectionsSectionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSectionsFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsSectionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSectionsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsSectionsInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSocialNetworksSocialNetworks = {
  __typename?: 'ComponentSocialNetworksSocialNetworks';
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type ComponentSocialNetworksSocialNetworksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSocialNetworksSocialNetworksFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSocialNetworksSocialNetworksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSocialNetworksSocialNetworksFiltersInput>>>;
};

export type ComponentSocialNetworksSocialNetworksInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileEntityResponse;
  link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CouponRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CouponLocalizationsArgs = {
  filters?: InputMaybe<CouponFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CouponEntity = {
  __typename?: 'CouponEntity';
  attributes?: Maybe<Coupon>;
  id?: Maybe<Scalars['ID']>;
};

export type CouponEntityResponse = {
  __typename?: 'CouponEntityResponse';
  data?: Maybe<CouponEntity>;
};

export type CouponEntityResponseCollection = {
  __typename?: 'CouponEntityResponseCollection';
  data: Array<CouponEntity>;
  meta: ResponseCollectionMeta;
};

export type CouponFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CouponFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CouponFiltersInput>;
  not?: InputMaybe<CouponFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CouponFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CouponInput = {
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CouponRelationResponseCollection = {
  __typename?: 'CouponRelationResponseCollection';
  data: Array<CouponEntity>;
};

export type CouponsPage = {
  __typename?: 'CouponsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  heading: ComponentHeadingPage;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CouponsPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CouponsPageEntity = {
  __typename?: 'CouponsPageEntity';
  attributes?: Maybe<CouponsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type CouponsPageEntityResponse = {
  __typename?: 'CouponsPageEntityResponse';
  data?: Maybe<CouponsPageEntity>;
};

export type CouponsPageInput = {
  heading?: InputMaybe<ComponentHeadingPageInput>;
};

export type CouponsPageRelationResponseCollection = {
  __typename?: 'CouponsPageRelationResponseCollection';
  data: Array<CouponsPageEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Telegram = 'Telegram',
  Twitter = 'Twitter'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Bonus | BonusesPage | Casino | CasinosPage | ComponentBannerGifsBannerGifs | ComponentCasinoHeadingCasinoHeading | ComponentHeadingPage | ComponentPopupPopup | ComponentSectionsSections | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentSocialNetworksSocialNetworks | Coupon | CouponsPage | HomePage | I18NLocale | Theme | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  gifs: Array<Maybe<ComponentBannerGifsBannerGifs>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  popup: ComponentPopupPopup;
  seo: ComponentSharedSeo;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageGifsArgs = {
  filters?: InputMaybe<ComponentBannerGifsBannerGifsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  gifs?: InputMaybe<Array<InputMaybe<ComponentBannerGifsBannerGifsInput>>>;
  popup?: InputMaybe<ComponentPopupPopupInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBonus?: Maybe<BonusEntityResponse>;
  createBonusLocalization?: Maybe<BonusEntityResponse>;
  createBonusesPageLocalization?: Maybe<BonusesPageEntityResponse>;
  createCasino?: Maybe<CasinoEntityResponse>;
  createCasinoLocalization?: Maybe<CasinoEntityResponse>;
  createCasinosPageLocalization?: Maybe<CasinosPageEntityResponse>;
  createCoupon?: Maybe<CouponEntityResponse>;
  createCouponLocalization?: Maybe<CouponEntityResponse>;
  createCouponsPageLocalization?: Maybe<CouponsPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBonus?: Maybe<BonusEntityResponse>;
  deleteBonusesPage?: Maybe<BonusesPageEntityResponse>;
  deleteCasino?: Maybe<CasinoEntityResponse>;
  deleteCasinosPage?: Maybe<CasinosPageEntityResponse>;
  deleteCoupon?: Maybe<CouponEntityResponse>;
  deleteCouponsPage?: Maybe<CouponsPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteTheme?: Maybe<ThemeEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBonus?: Maybe<BonusEntityResponse>;
  updateBonusesPage?: Maybe<BonusesPageEntityResponse>;
  updateCasino?: Maybe<CasinoEntityResponse>;
  updateCasinosPage?: Maybe<CasinosPageEntityResponse>;
  updateCoupon?: Maybe<CouponEntityResponse>;
  updateCouponsPage?: Maybe<CouponsPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateTheme?: Maybe<ThemeEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBonusArgs = {
  data: BonusInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBonusLocalizationArgs = {
  data?: InputMaybe<BonusInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBonusesPageLocalizationArgs = {
  data?: InputMaybe<BonusesPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCasinoArgs = {
  data: CasinoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCasinoLocalizationArgs = {
  data?: InputMaybe<CasinoInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCasinosPageLocalizationArgs = {
  data?: InputMaybe<CasinosPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCouponArgs = {
  data: CouponInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCouponLocalizationArgs = {
  data?: InputMaybe<CouponInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCouponsPageLocalizationArgs = {
  data?: InputMaybe<CouponsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBonusArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBonusesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCasinoArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCasinosPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCouponArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCouponsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBonusArgs = {
  data: BonusInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBonusesPageArgs = {
  data: BonusesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCasinoArgs = {
  data: CasinoInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCasinosPageArgs = {
  data: CasinosPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCouponArgs = {
  data: CouponInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCouponsPageArgs = {
  data: CouponsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateThemeArgs = {
  data: ThemeInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  bonus?: Maybe<BonusEntityResponse>;
  bonuses?: Maybe<BonusEntityResponseCollection>;
  bonusesPage?: Maybe<BonusesPageEntityResponse>;
  casino?: Maybe<CasinoEntityResponse>;
  casinos?: Maybe<CasinoEntityResponseCollection>;
  casinosPage?: Maybe<CasinosPageEntityResponse>;
  coupon?: Maybe<CouponEntityResponse>;
  coupons?: Maybe<CouponEntityResponseCollection>;
  couponsPage?: Maybe<CouponsPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  theme?: Maybe<ThemeEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBonusArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBonusesArgs = {
  filters?: InputMaybe<BonusFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBonusesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCasinoArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCasinosArgs = {
  filters?: InputMaybe<CasinoFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCasinosPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCouponArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCouponsArgs = {
  filters?: InputMaybe<CouponFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCouponsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Theme = {
  __typename?: 'Theme';
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: UploadFileEntityResponse;
  liveTvSiteLink: Scalars['String'];
  logo: UploadFileEntityResponse;
  logoTitle?: Maybe<Scalars['String']>;
  socialNetworks: Array<Maybe<ComponentSocialNetworksSocialNetworks>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ThemeSocialNetworksArgs = {
  filters?: InputMaybe<ComponentSocialNetworksSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  attributes?: Maybe<Theme>;
  id?: Maybe<Scalars['ID']>;
};

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse';
  data?: Maybe<ThemeEntity>;
};

export type ThemeInput = {
  icon?: InputMaybe<Scalars['ID']>;
  liveTvSiteLink?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  logoTitle?: InputMaybe<Scalars['String']>;
  socialNetworks?: InputMaybe<Array<InputMaybe<ComponentSocialNetworksSocialNetworksInput>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type BonusesQueryVariables = Exact<{
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type BonusesQuery = { __typename?: 'Query', bonuses?: { __typename?: 'BonusEntityResponseCollection', data: Array<{ __typename?: 'BonusEntity', id?: string | null, attributes?: { __typename?: 'Bonus', title: string, slug?: string | null, bonusReferralLink: string, casino?: { __typename?: 'CasinoEntityResponse', data?: { __typename?: 'CasinoEntity', attributes?: { __typename?: 'Casino', name: string } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type BonusItemPropsQueryVariables = Exact<{
  bonusSlug: Scalars['String'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type BonusItemPropsQuery = { __typename?: 'Query', bonuses?: { __typename?: 'BonusEntityResponseCollection', data: Array<{ __typename?: 'BonusEntity', attributes?: { __typename?: 'Bonus', title: string, bonusReferralLink: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, sections: Array<{ __typename?: 'ComponentSectionsSections', id: string, title: string, content?: string | null } | null>, casino?: { __typename?: 'CasinoEntityResponse', data?: { __typename?: 'CasinoEntity', attributes?: { __typename?: 'Casino', name: string, slug?: string | null, rating: number } | null } | null } | null } | null }> } | null };

export type BonusItemPathQueryVariables = Exact<{ [key: string]: never; }>;


export type BonusItemPathQuery = { __typename?: 'Query', bonuses?: { __typename?: 'BonusEntityResponseCollection', data: Array<{ __typename?: 'BonusEntity', attributes?: { __typename?: 'Bonus', slug?: string | null, locale?: string | null, casino?: { __typename?: 'CasinoEntityResponse', data?: { __typename?: 'CasinoEntity', attributes?: { __typename?: 'Casino', name: string } | null } | null } | null } | null }> } | null };

export type AvailableBonusesQueryVariables = Exact<{
  casinoSlug: Scalars['String'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type AvailableBonusesQuery = { __typename?: 'Query', bonuses?: { __typename?: 'BonusEntityResponseCollection', data: Array<{ __typename?: 'BonusEntity', id?: string | null, attributes?: { __typename?: 'Bonus', slug?: string | null, title: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type TopCasinosQueryVariables = Exact<{
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type TopCasinosQuery = { __typename?: 'Query', casinos?: { __typename?: 'CasinoEntityResponseCollection', data: Array<{ __typename?: 'CasinoEntity', id?: string | null, attributes?: { __typename?: 'Casino', name: string, slug?: string | null, rating: number, referralLink: string, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type CasinosQueryVariables = Exact<{
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CasinosQuery = { __typename?: 'Query', casinos?: { __typename?: 'CasinoEntityResponseCollection', data: Array<{ __typename?: 'CasinoEntity', id?: string | null, attributes?: { __typename?: 'Casino', name: string, slug?: string | null, rating: number, referralLink: string, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type CasinoItemPropsQueryVariables = Exact<{
  casinoSlug: Scalars['String'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CasinoItemPropsQuery = { __typename?: 'Query', casinos?: { __typename?: 'CasinoEntityResponseCollection', data: Array<{ __typename?: 'CasinoEntity', attributes?: { __typename?: 'Casino', name: string, slug?: string | null, referralLink: string, rating: number, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null }, bonuses?: { __typename?: 'BonusRelationResponseCollection', data: Array<{ __typename?: 'BonusEntity', id?: string | null }> } | null, casinoHeading: Array<{ __typename?: 'ComponentCasinoHeadingCasinoHeading', id: string, title: string, desc: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, sections: Array<{ __typename?: 'ComponentSectionsSections', id: string, title: string, content?: string | null } | null> } | null }> } | null };

export type CasinoItemPathQueryVariables = Exact<{ [key: string]: never; }>;


export type CasinoItemPathQuery = { __typename?: 'Query', casinos?: { __typename?: 'CasinoEntityResponseCollection', data: Array<{ __typename?: 'CasinoEntity', attributes?: { __typename?: 'Casino', slug?: string | null, locale?: string | null } | null }> } | null };

export type CouponsQueryVariables = Exact<{
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CouponsQuery = { __typename?: 'Query', coupons?: { __typename?: 'CouponEntityResponseCollection', data: Array<{ __typename?: 'CouponEntity', id?: string | null, attributes?: { __typename?: 'Coupon', title: string, link: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type HomePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', title: string, subtitle: string, popup: { __typename?: 'ComponentPopupPopup', active?: boolean | null, link: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, gifs: Array<{ __typename?: 'ComponentBannerGifsBannerGifs', id: string, link: string, gif: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> } | null } | null } | null };

export type CasinosPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CasinosPageQuery = { __typename?: 'Query', casinosPage?: { __typename?: 'CasinosPageEntityResponse', data?: { __typename?: 'CasinosPageEntity', attributes?: { __typename?: 'CasinosPage', heading: { __typename?: 'ComponentHeadingPage', title: string, subtitle: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } } } | null } | null } | null };

export type BonusesPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type BonusesPageQuery = { __typename?: 'Query', bonusesPage?: { __typename?: 'BonusesPageEntityResponse', data?: { __typename?: 'BonusesPageEntity', attributes?: { __typename?: 'BonusesPage', heading: { __typename?: 'ComponentHeadingPage', title: string, subtitle: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type CouponsPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CouponsPageQuery = { __typename?: 'Query', couponsPage?: { __typename?: 'CouponsPageEntityResponse', data?: { __typename?: 'CouponsPageEntity', attributes?: { __typename?: 'CouponsPage', heading: { __typename?: 'ComponentHeadingPage', title: string, subtitle: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type CmsThemeQueryVariables = Exact<{ [key: string]: never; }>;


export type CmsThemeQuery = { __typename?: 'Query', theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', attributes?: { __typename?: 'Theme', logoTitle?: string | null, liveTvSiteLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialNetworks: Array<{ __typename?: 'ComponentSocialNetworksSocialNetworks', id: string, link: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> } | null } | null } | null };


export const BonusesDocument = gql`
    query Bonuses($start: Int, $limit: Int, $locale: I18NLocaleCode) {
  bonuses(
    pagination: {start: $start, limit: $limit}
    filters: {casino: {name: {ne: "null"}}}
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
    `;

/**
 * __useBonusesQuery__
 *
 * To run a query within a React component, call `useBonusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonusesQuery({
 *   variables: {
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useBonusesQuery(baseOptions?: Apollo.QueryHookOptions<BonusesQuery, BonusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonusesQuery, BonusesQueryVariables>(BonusesDocument, options);
      }
export function useBonusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonusesQuery, BonusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonusesQuery, BonusesQueryVariables>(BonusesDocument, options);
        }
export type BonusesQueryHookResult = ReturnType<typeof useBonusesQuery>;
export type BonusesLazyQueryHookResult = ReturnType<typeof useBonusesLazyQuery>;
export type BonusesQueryResult = Apollo.QueryResult<BonusesQuery, BonusesQueryVariables>;
export const BonusItemPropsDocument = gql`
    query BonusItemProps($bonusSlug: String!, $locale: I18NLocaleCode) {
  bonuses(filters: {slug: {eq: $bonusSlug}}, locale: $locale) {
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
    `;

/**
 * __useBonusItemPropsQuery__
 *
 * To run a query within a React component, call `useBonusItemPropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonusItemPropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonusItemPropsQuery({
 *   variables: {
 *      bonusSlug: // value for 'bonusSlug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useBonusItemPropsQuery(baseOptions: Apollo.QueryHookOptions<BonusItemPropsQuery, BonusItemPropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonusItemPropsQuery, BonusItemPropsQueryVariables>(BonusItemPropsDocument, options);
      }
export function useBonusItemPropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonusItemPropsQuery, BonusItemPropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonusItemPropsQuery, BonusItemPropsQueryVariables>(BonusItemPropsDocument, options);
        }
export type BonusItemPropsQueryHookResult = ReturnType<typeof useBonusItemPropsQuery>;
export type BonusItemPropsLazyQueryHookResult = ReturnType<typeof useBonusItemPropsLazyQuery>;
export type BonusItemPropsQueryResult = Apollo.QueryResult<BonusItemPropsQuery, BonusItemPropsQueryVariables>;
export const BonusItemPathDocument = gql`
    query BonusItemPath {
  bonuses(filters: {casino: {name: {ne: "null"}}}, locale: "all") {
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
    `;

/**
 * __useBonusItemPathQuery__
 *
 * To run a query within a React component, call `useBonusItemPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonusItemPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonusItemPathQuery({
 *   variables: {
 *   },
 * });
 */
export function useBonusItemPathQuery(baseOptions?: Apollo.QueryHookOptions<BonusItemPathQuery, BonusItemPathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonusItemPathQuery, BonusItemPathQueryVariables>(BonusItemPathDocument, options);
      }
export function useBonusItemPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonusItemPathQuery, BonusItemPathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonusItemPathQuery, BonusItemPathQueryVariables>(BonusItemPathDocument, options);
        }
export type BonusItemPathQueryHookResult = ReturnType<typeof useBonusItemPathQuery>;
export type BonusItemPathLazyQueryHookResult = ReturnType<typeof useBonusItemPathLazyQuery>;
export type BonusItemPathQueryResult = Apollo.QueryResult<BonusItemPathQuery, BonusItemPathQueryVariables>;
export const AvailableBonusesDocument = gql`
    query AvailableBonuses($casinoSlug: String!, $locale: I18NLocaleCode) {
  bonuses(filters: {casino: {slug: {eq: $casinoSlug}}}, locale: $locale) {
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
    `;

/**
 * __useAvailableBonusesQuery__
 *
 * To run a query within a React component, call `useAvailableBonusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableBonusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableBonusesQuery({
 *   variables: {
 *      casinoSlug: // value for 'casinoSlug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useAvailableBonusesQuery(baseOptions: Apollo.QueryHookOptions<AvailableBonusesQuery, AvailableBonusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableBonusesQuery, AvailableBonusesQueryVariables>(AvailableBonusesDocument, options);
      }
export function useAvailableBonusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableBonusesQuery, AvailableBonusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableBonusesQuery, AvailableBonusesQueryVariables>(AvailableBonusesDocument, options);
        }
export type AvailableBonusesQueryHookResult = ReturnType<typeof useAvailableBonusesQuery>;
export type AvailableBonusesLazyQueryHookResult = ReturnType<typeof useAvailableBonusesLazyQuery>;
export type AvailableBonusesQueryResult = Apollo.QueryResult<AvailableBonusesQuery, AvailableBonusesQueryVariables>;
export const TopCasinosDocument = gql`
    query topCasinos($start: Int, $limit: Int, $locale: I18NLocaleCode) {
  casinos(
    pagination: {start: $start, limit: $limit}
    filters: {showOnHomepage: {eq: true}}
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
    `;

/**
 * __useTopCasinosQuery__
 *
 * To run a query within a React component, call `useTopCasinosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopCasinosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopCasinosQuery({
 *   variables: {
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useTopCasinosQuery(baseOptions?: Apollo.QueryHookOptions<TopCasinosQuery, TopCasinosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopCasinosQuery, TopCasinosQueryVariables>(TopCasinosDocument, options);
      }
export function useTopCasinosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopCasinosQuery, TopCasinosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopCasinosQuery, TopCasinosQueryVariables>(TopCasinosDocument, options);
        }
export type TopCasinosQueryHookResult = ReturnType<typeof useTopCasinosQuery>;
export type TopCasinosLazyQueryHookResult = ReturnType<typeof useTopCasinosLazyQuery>;
export type TopCasinosQueryResult = Apollo.QueryResult<TopCasinosQuery, TopCasinosQueryVariables>;
export const CasinosDocument = gql`
    query Casinos($start: Int, $limit: Int, $locale: I18NLocaleCode) {
  casinos(
    pagination: {start: $start, limit: $limit}
    sort: "casinoPagePriority:desc"
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
    `;

/**
 * __useCasinosQuery__
 *
 * To run a query within a React component, call `useCasinosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasinosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasinosQuery({
 *   variables: {
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCasinosQuery(baseOptions?: Apollo.QueryHookOptions<CasinosQuery, CasinosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CasinosQuery, CasinosQueryVariables>(CasinosDocument, options);
      }
export function useCasinosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CasinosQuery, CasinosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CasinosQuery, CasinosQueryVariables>(CasinosDocument, options);
        }
export type CasinosQueryHookResult = ReturnType<typeof useCasinosQuery>;
export type CasinosLazyQueryHookResult = ReturnType<typeof useCasinosLazyQuery>;
export type CasinosQueryResult = Apollo.QueryResult<CasinosQuery, CasinosQueryVariables>;
export const CasinoItemPropsDocument = gql`
    query CasinoItemProps($casinoSlug: String!, $locale: I18NLocaleCode) {
  casinos(filters: {slug: {eq: $casinoSlug}}, locale: $locale) {
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
    `;

/**
 * __useCasinoItemPropsQuery__
 *
 * To run a query within a React component, call `useCasinoItemPropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasinoItemPropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasinoItemPropsQuery({
 *   variables: {
 *      casinoSlug: // value for 'casinoSlug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCasinoItemPropsQuery(baseOptions: Apollo.QueryHookOptions<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>(CasinoItemPropsDocument, options);
      }
export function useCasinoItemPropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>(CasinoItemPropsDocument, options);
        }
export type CasinoItemPropsQueryHookResult = ReturnType<typeof useCasinoItemPropsQuery>;
export type CasinoItemPropsLazyQueryHookResult = ReturnType<typeof useCasinoItemPropsLazyQuery>;
export type CasinoItemPropsQueryResult = Apollo.QueryResult<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>;
export const CasinoItemPathDocument = gql`
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
    `;

/**
 * __useCasinoItemPathQuery__
 *
 * To run a query within a React component, call `useCasinoItemPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasinoItemPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasinoItemPathQuery({
 *   variables: {
 *   },
 * });
 */
export function useCasinoItemPathQuery(baseOptions?: Apollo.QueryHookOptions<CasinoItemPathQuery, CasinoItemPathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CasinoItemPathQuery, CasinoItemPathQueryVariables>(CasinoItemPathDocument, options);
      }
export function useCasinoItemPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CasinoItemPathQuery, CasinoItemPathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CasinoItemPathQuery, CasinoItemPathQueryVariables>(CasinoItemPathDocument, options);
        }
export type CasinoItemPathQueryHookResult = ReturnType<typeof useCasinoItemPathQuery>;
export type CasinoItemPathLazyQueryHookResult = ReturnType<typeof useCasinoItemPathLazyQuery>;
export type CasinoItemPathQueryResult = Apollo.QueryResult<CasinoItemPathQuery, CasinoItemPathQueryVariables>;
export const CouponsDocument = gql`
    query Coupons($start: Int, $limit: Int, $locale: I18NLocaleCode) {
  coupons(
    pagination: {start: $start, limit: $limit}
    sort: "id:desc"
    locale: $locale
  ) {
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
    `;

/**
 * __useCouponsQuery__
 *
 * To run a query within a React component, call `useCouponsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponsQuery({
 *   variables: {
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCouponsQuery(baseOptions?: Apollo.QueryHookOptions<CouponsQuery, CouponsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CouponsQuery, CouponsQueryVariables>(CouponsDocument, options);
      }
export function useCouponsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CouponsQuery, CouponsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CouponsQuery, CouponsQueryVariables>(CouponsDocument, options);
        }
export type CouponsQueryHookResult = ReturnType<typeof useCouponsQuery>;
export type CouponsLazyQueryHookResult = ReturnType<typeof useCouponsLazyQuery>;
export type CouponsQueryResult = Apollo.QueryResult<CouponsQuery, CouponsQueryVariables>;
export const HomePageDocument = gql`
    query HomePage($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    data {
      attributes {
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
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const CasinosPageDocument = gql`
    query CasinosPage($locale: I18NLocaleCode) {
  casinosPage(locale: $locale) {
    data {
      attributes {
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
    `;

/**
 * __useCasinosPageQuery__
 *
 * To run a query within a React component, call `useCasinosPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasinosPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasinosPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCasinosPageQuery(baseOptions?: Apollo.QueryHookOptions<CasinosPageQuery, CasinosPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CasinosPageQuery, CasinosPageQueryVariables>(CasinosPageDocument, options);
      }
export function useCasinosPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CasinosPageQuery, CasinosPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CasinosPageQuery, CasinosPageQueryVariables>(CasinosPageDocument, options);
        }
export type CasinosPageQueryHookResult = ReturnType<typeof useCasinosPageQuery>;
export type CasinosPageLazyQueryHookResult = ReturnType<typeof useCasinosPageLazyQuery>;
export type CasinosPageQueryResult = Apollo.QueryResult<CasinosPageQuery, CasinosPageQueryVariables>;
export const BonusesPageDocument = gql`
    query BonusesPage($locale: I18NLocaleCode) {
  bonusesPage(locale: $locale) {
    data {
      attributes {
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
    `;

/**
 * __useBonusesPageQuery__
 *
 * To run a query within a React component, call `useBonusesPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonusesPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonusesPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useBonusesPageQuery(baseOptions?: Apollo.QueryHookOptions<BonusesPageQuery, BonusesPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonusesPageQuery, BonusesPageQueryVariables>(BonusesPageDocument, options);
      }
export function useBonusesPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonusesPageQuery, BonusesPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonusesPageQuery, BonusesPageQueryVariables>(BonusesPageDocument, options);
        }
export type BonusesPageQueryHookResult = ReturnType<typeof useBonusesPageQuery>;
export type BonusesPageLazyQueryHookResult = ReturnType<typeof useBonusesPageLazyQuery>;
export type BonusesPageQueryResult = Apollo.QueryResult<BonusesPageQuery, BonusesPageQueryVariables>;
export const CouponsPageDocument = gql`
    query CouponsPage($locale: I18NLocaleCode) {
  couponsPage(locale: $locale) {
    data {
      attributes {
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
    `;

/**
 * __useCouponsPageQuery__
 *
 * To run a query within a React component, call `useCouponsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCouponsPageQuery(baseOptions?: Apollo.QueryHookOptions<CouponsPageQuery, CouponsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CouponsPageQuery, CouponsPageQueryVariables>(CouponsPageDocument, options);
      }
export function useCouponsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CouponsPageQuery, CouponsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CouponsPageQuery, CouponsPageQueryVariables>(CouponsPageDocument, options);
        }
export type CouponsPageQueryHookResult = ReturnType<typeof useCouponsPageQuery>;
export type CouponsPageLazyQueryHookResult = ReturnType<typeof useCouponsPageLazyQuery>;
export type CouponsPageQueryResult = Apollo.QueryResult<CouponsPageQuery, CouponsPageQueryVariables>;
export const CmsThemeDocument = gql`
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
    `;

/**
 * __useCmsThemeQuery__
 *
 * To run a query within a React component, call `useCmsThemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsThemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCmsThemeQuery({
 *   variables: {
 *   },
 * });
 */
export function useCmsThemeQuery(baseOptions?: Apollo.QueryHookOptions<CmsThemeQuery, CmsThemeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CmsThemeQuery, CmsThemeQueryVariables>(CmsThemeDocument, options);
      }
export function useCmsThemeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CmsThemeQuery, CmsThemeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CmsThemeQuery, CmsThemeQueryVariables>(CmsThemeDocument, options);
        }
export type CmsThemeQueryHookResult = ReturnType<typeof useCmsThemeQuery>;
export type CmsThemeLazyQueryHookResult = ReturnType<typeof useCmsThemeLazyQuery>;
export type CmsThemeQueryResult = Apollo.QueryResult<CmsThemeQuery, CmsThemeQueryVariables>;