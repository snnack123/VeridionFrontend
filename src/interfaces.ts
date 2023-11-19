export interface ILoginReqDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string | null;
}

export interface RegisterFormData extends ILoginReqDto {
  name: string;
}

export interface RegisterResponse {
  message: string;
  status: boolean;
}

export interface CheckToken {
  success: boolean;
  message: string;
}

export interface IRegisterDto {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface InvoiceDto {
  id: number;
  createdAt: string;
  updatedAt: string;
  amount: number;
  dueDate: string;
  details: string;
  userId: number;
  checked?: boolean;
}

export interface ICompanySearchDto {
  commercial_names: string[] | string;
  phone_number?: string;
  website?: string;
  address_txt?: string;
}

export interface IReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export interface IReviewsDto {
  message: string;
  success: boolean;
  reviews: IReview[];
  rating: number;
}

export interface ICompanyResponseDto {
  soleadify_id: string
  match_score: number
  match_method: string
  additional_match_details: AdditionalMatchDetails
  company_name: string
  company_legal_names: string[]
  company_commercial_names: string[]
  main_country_code: string
  main_country: string
  main_region: string
  main_city: string
  main_street: string
  main_street_number: string
  main_postcode: string
  main_latitude: number
  main_longitude: number
  locations: Location2[]
  num_locations: number
  company_type: string
  year_founded: number
  employee_count: number
  estimated_revenue: any
  short_description: string
  long_description: string
  business_tags: string[]
  main_business_category: string
  main_industry: string
  main_sector: any
  primary_phone: string
  phone_numbers: string[]
  primary_email: string
  emails: string[]
  other_emails: string[]
  website_url: string
  website_domain: string
  website_tld: string
  website_language_code: string
  facebook_url: string
  twitter_url: string
  instagram_url: string
  linkedin_url: string
  ios_app_url: any
  android_app_url: any
  youtube_url: string
  cms: string
  alexa_rank: any
  technologies: string[]
  naics_2022: Naics2022
  nace_rev2: NaceRev2[]
  ncci_codes_28_1: string[]
  sic: Sic[]
  isic_v4: IsicV4[]
  sics_industry: SicsIndustry
  sics_sector: SicsSector
  sics_subsector: SicsSubsector
  ibc_insurance: IbcInsurance[]
  created_at: string
  last_updated_at: string
}

export interface AdditionalMatchDetails {
  location: Location
}

export interface Location {
  country_code: string
  country: string
  region: string
  city: string
  postcode: string
  street: string
  street_number: string
  latitude: number
  longitude: number
}

export interface Location2 {
  country_code: string
  country: string
  region: string
  city: string
  postcode: string
  street?: string
  street_number?: string
  latitude?: number
  longitude?: number
}

export interface Naics2022 {
  primary: Primary
  secondary: Secondary[]
}

export interface Primary {
  code: string
  label: string
}

export interface Secondary {
  code: string
  label: string
}

export interface NaceRev2 {
  code: string
  label: string
}

export interface Sic {
  code: string
  label: string
}

export interface IsicV4 {
  code: string
  label: string
}

export interface SicsIndustry {
  code: string
  label: string
}

export interface SicsSector {
  code: string
  label: string
}

export interface SicsSubsector {
  code: string
  label: string
}

export interface IbcInsurance {
  code: string
  label: string
}