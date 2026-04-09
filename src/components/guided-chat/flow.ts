export type ServiceId =
  | 'residential'
  | 'commercial'
  | 'agricultural'
  | 'maintenance'
  | 'specialty';

export interface ChatSelections {
  serviceId?: ServiceId;
  serviceLabel?: string;
  need?: string;
  urgency?: string;
  propertyType?: string;
  area?: string;
  source?: 'guided-chat';
}

export interface ChatOption {
  id: string;
  label: string;
  next?: string;
  action?: 'quote' | 'call' | 'route' | 'restart';
  route?: string;
  patch?: Partial<ChatSelections>;
}

export interface ChatNode {
  id: string;
  message: string;
  options: ChatOption[];
}

export const SERVICE_META: Record<
  ServiceId,
  {
    label: string;
    route: string;
    quoteNeeds: string[];
    summary: string;
    faqTopic: string;
  }
> = {
  residential: {
    label: 'Residential',
    route: '/residential-electrical',
    quoteNeeds: ['Repairs', 'Upgrades', 'Renovation', 'Smart / Generator'],
    summary:
      'Residential work covers service calls, upgrades, renovations, smart home support, generators, surge protection, and practical home electrical improvements.',
    faqTopic: 'faq-residential',
  },
  commercial: {
    label: 'Commercial',
    route: '/commercial-electrical',
    quoteNeeds: ['New Install', 'Maintenance', 'Lighting / Power', 'Project Support'],
    summary:
      'Commercial work includes installations, maintenance, lighting, power distribution, and project support for business properties and commercial spaces.',
    faqTopic: 'faq-commercial',
  },
  agricultural: {
    label: 'Agricultural',
    route: '/agricultural-electrical',
    quoteNeeds: ['Barn / Shop', 'Farm Power', 'Expansion', 'Site Review'],
    summary:
      'Agricultural support covers barns, shops, acreages, seed plants, feed mills, and farm electrical systems that need dependable long-term support.',
    faqTopic: 'faq-agricultural',
  },
  maintenance: {
    label: 'Maintenance / Repair',
    route: '/maintenance-repair',
    quoteNeeds: ['Emergency Repair', 'Inspection', 'Infra-Red Scan', 'Cable Locate'],
    summary:
      'Maintenance and repair services include urgent troubleshooting, inspections, infra-red scanning, underground cable locating, and preventative support.',
    faqTopic: 'faq-emergency',
  },
  specialty: {
    label: 'Specialty',
    route: '/specialty-electrical',
    quoteNeeds: ['Design-Build', 'Communications', 'Directional Boring', 'Project Management'],
    summary:
      'Specialty work covers design-build scopes, communications, audio, directional boring, project budgeting, and project management support.',
    faqTopic: 'faq-specialty',
  },
};

const FAQ_ANSWERS: Record<
  string,
  {
    answer: string;
    relatedService?: ServiceId;
  }
> = {
  'faq-area': {
    answer:
      'JA Electric is based in Steinbach and serves a broad regional area of roughly 300 kilometres. If you are outside town, the team can confirm the best next step quickly.',
  },
  'faq-emergency': {
    answer:
      'Yes. JA Electric promotes 24-hour phone service and quick response for urgent electrical issues, breakdowns, safety concerns, and repair needs.',
    relatedService: 'maintenance',
  },
  'faq-residential': {
    answer:
      'Residential support includes service calls, repairs, upgrades, renovations, generators, surge protection, smart home work, garages, and acreage-related home electrical projects.',
    relatedService: 'residential',
  },
  'faq-commercial': {
    answer:
      'Commercial work includes installations, maintenance, lighting, power distribution, and practical project support built around operations, deadlines, and long-term reliability.',
    relatedService: 'commercial',
  },
  'faq-agricultural': {
    answer:
      'Agricultural work includes barns, shops, farm power, seed plants, feed mills, and electrical support for growing operations that cannot afford unreliable systems.',
    relatedService: 'agricultural',
  },
  'faq-specialty': {
    answer:
      'Specialty support includes design-build work, communications, directional boring, audio, project budgeting, and project management for more custom scopes.',
    relatedService: 'specialty',
  },
  'faq-quotes': {
    answer:
      'Quotes are prepared with practical planning in mind. A senior team member reviews the scope so the next step, timing, and service fit are clear before work moves forward.',
  },
};

export function buildQuoteSummary(selections: ChatSelections) {
  const lines = [
    selections.serviceLabel ? `Service: ${selections.serviceLabel}` : null,
    selections.need ? `Need: ${selections.need}` : null,
    selections.urgency ? `Urgency / Timeline: ${selections.urgency}` : null,
    selections.propertyType ? `Property Type: ${selections.propertyType}` : null,
    selections.area ? `Location: ${selections.area}` : null,
    'Source: Guided chat widget',
  ].filter(Boolean);

  return lines.join('\n');
}

export function getChatNode(nodeId: string, selections: ChatSelections): ChatNode {
  if (nodeId.startsWith('quote-needs-')) {
    const serviceId = nodeId.replace('quote-needs-', '') as ServiceId;
    const service = SERVICE_META[serviceId];

    return {
      id: nodeId,
      message: `What best matches your ${service.label.toLowerCase()} need?`,
      options: service.quoteNeeds.map((need) => ({
        id: `${serviceId}-${need}`,
        label: need,
        next: 'quote-urgency',
        patch: { serviceId, serviceLabel: service.label, need, source: 'guided-chat' },
      })),
    };
  }

  if (nodeId.startsWith('service-detail-')) {
    const serviceId = nodeId.replace('service-detail-', '') as ServiceId;
    const service = SERVICE_META[serviceId];

    return {
      id: nodeId,
      message: service.summary,
      options: [
        {
          id: `${serviceId}-quote`,
          label: 'Get Quote',
          next: `quote-needs-${serviceId}`,
          patch: { serviceId, serviceLabel: service.label, source: 'guided-chat' },
        },
        {
          id: `${serviceId}-faq`,
          label: 'Common Questions',
          next: service.faqTopic,
          patch: { serviceId, serviceLabel: service.label },
        },
        {
          id: `${serviceId}-page`,
          label: 'View Service Page',
          action: 'route',
          route: service.route,
        },
      ],
    };
  }

  if (nodeId.startsWith('faq-') && FAQ_ANSWERS[nodeId]) {
    const faq = FAQ_ANSWERS[nodeId];
    const options: ChatOption[] = [
      { id: `${nodeId}-quote`, label: 'Get Quote', next: 'quote-service' },
      { id: `${nodeId}-more`, label: 'More FAQs', next: 'faq-menu' },
    ];

    if (faq.relatedService) {
      options.push({
        id: `${nodeId}-related`,
        label: 'View Related Service',
        action: 'route',
        route: SERVICE_META[faq.relatedService].route,
      });
    }

    return {
      id: nodeId,
      message: faq.answer,
      options,
    };
  }

  switch (nodeId) {
    case 'home':
      return {
        id: nodeId,
        message:
          'Hi, I can help you get a quote, answer common questions, explain services, or connect you with the JA Electric team.',
        options: [
          { id: 'home-quote', label: 'Get a Quote', next: 'quote-service' },
          { id: 'home-services', label: 'Services', next: 'services-menu' },
          { id: 'home-faq', label: 'FAQs', next: 'faq-menu' },
          { id: 'home-human', label: 'Talk to a Human', action: 'call' },
        ],
      };
    case 'quote-service':
      return {
        id: nodeId,
        message: 'What type of electrical work do you need help with?',
        options: (Object.entries(SERVICE_META) as [ServiceId, (typeof SERVICE_META)[ServiceId]][]).map(
          ([serviceId, service]) => ({
            id: `quote-${serviceId}`,
            label: service.label,
            next: `quote-needs-${serviceId}`,
            patch: { serviceId, serviceLabel: service.label, source: 'guided-chat' },
          })
        ),
      };
    case 'quote-urgency':
      return {
        id: nodeId,
        message: 'How soon do you need help?',
        options: [
          { id: 'urgency-urgent', label: 'Urgent', next: 'quote-property', patch: { urgency: 'Urgent' } },
          { id: 'urgency-week', label: 'This Week', next: 'quote-property', patch: { urgency: 'This Week' } },
          { id: 'urgency-plan', label: 'Planning Ahead', next: 'quote-property', patch: { urgency: 'Planning Ahead' } },
        ],
      };
    case 'quote-property':
      return {
        id: nodeId,
        message: 'What type of property or site is this for?',
        options: [
          { id: 'property-home', label: 'Home', next: 'quote-area', patch: { propertyType: 'Home' } },
          { id: 'property-business', label: 'Business', next: 'quote-area', patch: { propertyType: 'Business' } },
          { id: 'property-farm', label: 'Farm / Acreage', next: 'quote-area', patch: { propertyType: 'Farm / Acreage' } },
          { id: 'property-facility', label: 'Facility / Other', next: 'quote-area', patch: { propertyType: 'Facility / Other' } },
        ],
      };
    case 'quote-area':
      return {
        id: nodeId,
        message: 'Where is the project located?',
        options: [
          { id: 'area-steinbach', label: 'In Steinbach', next: 'quote-handoff', patch: { area: 'In Steinbach' } },
          { id: 'area-region', label: 'Within 300 km', next: 'quote-handoff', patch: { area: 'Within 300 km' } },
          { id: 'area-unsure', label: 'Not Sure', next: 'quote-handoff', patch: { area: 'Service area not confirmed' } },
        ],
      };
    case 'quote-handoff':
      return {
        id: nodeId,
        message:
          `You’re ready for the next step. I can open the quote form with your ${selections.serviceLabel?.toLowerCase() ?? 'service'} details prefilled, or you can call the team directly.`,
        options: [
          { id: 'handoff-quote', label: 'Open Quote Form', action: 'quote' },
          { id: 'handoff-human', label: 'Talk to a Human', action: 'call' },
        ],
      };
    case 'services-menu':
      return {
        id: nodeId,
        message: 'Which service area would you like to explore?',
        options: (Object.entries(SERVICE_META) as [ServiceId, (typeof SERVICE_META)[ServiceId]][]).map(
          ([serviceId, service]) => ({
            id: `service-${serviceId}`,
            label: service.label,
            next: `service-detail-${serviceId}`,
            patch: { serviceId, serviceLabel: service.label },
          })
        ),
      };
    case 'faq-menu':
      return {
        id: nodeId,
        message: 'I can help with the questions people ask most often.',
        options: [
          { id: 'faq-area', label: 'Service Area', next: 'faq-area' },
          { id: 'faq-emergency', label: '24-Hour Help', next: 'faq-emergency' },
          { id: 'faq-residential', label: 'Residential Work', next: 'faq-residential' },
          { id: 'faq-commercial', label: 'Commercial Work', next: 'faq-commercial' },
          { id: 'faq-agricultural', label: 'Agricultural Work', next: 'faq-agricultural' },
          { id: 'faq-specialty', label: 'Specialty Work', next: 'faq-specialty' },
          { id: 'faq-quotes', label: 'Quotes & Scheduling', next: 'faq-quotes' },
        ],
      };
    default:
      return {
        id: 'home',
        message: 'I can help you get to the right next step.',
        options: [
          { id: 'fallback-quote', label: 'Get a Quote', next: 'quote-service' },
          { id: 'fallback-faq', label: 'FAQs', next: 'faq-menu' },
          { id: 'fallback-call', label: 'Talk to a Human', action: 'call' },
        ],
      };
  }
}
