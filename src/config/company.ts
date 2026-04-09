export const company = {
  name: 'JA Electric',
  legalName: 'JA Electric',
  shortName: 'JA',
  siteUrl: 'https://jaelectricinc.ca',
  phoneDisplay: '(204) 392-4768',
  phoneHref: '+12043924768',
  faxDisplay: '',
  email: 'info@jaelectricinc.ca',
  addressLine1: '31 E Gate Dr',
  city: 'Steinbach',
  region: 'MB',
  postalCode: 'R0A 0N0',
  country: 'CA',
  addressText: '31 E Gate Dr, Steinbach, MB R0A 0N0, Canada',
  serviceAreaShort: 'Steinbach & 300 km Surrounding Area',
  serviceAreaLong:
    'Steinbach, Winnipeg, Brandon, Portage la Prairie, Selkirk, Morden, Winkler, and communities within roughly 300 kilometres',
  yearsExperience: 'Established in 2010',
  masterElectricians: 'Licensed Electricians',
  warranty: 'Quality & Safety Focused',
  logo: '/ja-electric-logo.png',
  aboutImage: '/20161006_175048jpg.jpg',
  ogImage: '/ja-electric-logo.png',
  founded: '2010',
  award: 'Super Service Award',
} as const;

export const companyLinks = {
  phone: `tel:${company.phoneHref}`,
  email: `mailto:${company.email}`,
  maps: 'https://maps.google.com/?q=31+E+Gate+Dr+Steinbach+MB+R0A+0N0+Canada',
  website: company.siteUrl,
} as const;

export const serviceAreas = [
  'Steinbach',
  'Winnipeg',
  'Brandon',
  'Portage la Prairie',
  'Selkirk',
  'Morden',
  'Winkler',
  'Southeastern Manitoba',
] as const;
