import {
  Bot, PhoneCall, Layout, Database,
  MessageSquare, Globe, Users, Zap, Clock, BarChart3,
  Phone, CalendarCheck, FileText, Search, RefreshCw, Shield,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceFeature {
  icon: LucideIcon;
  text: string;
}

export interface PASContent {
  problem: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  agitation: {
    headline: string;
    description: string;
    consequences: { stat: string; label: string; detail: string }[];
  };
  solution: {
    headline: string;
    description: string;
    outcomes: { title: string; description: string }[];
  };
}

export interface ServiceData {
  slug: string;
  path: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  color: string;
  features: ServiceFeature[];
  benefits: string[];
  pas: PASContent;
}

export const services: ServiceData[] = [
  {
    slug: 'ai-chat-assistants',
    path: '/services/ai-chat-assistants',
    icon: Bot,
    title: 'AI Chat Assistants',
    subtitle: 'Your 24/7 digital team member',
    description: 'Handle FAQs, showcase listings, and capture leads 24/7 in real-time. Your AI assistant never sleeps, never takes a break, and always knows your inventory.',
    heroDescription: 'Deploy intelligent chat assistants that handle lead inquiries, showcase property listings, and qualify prospects in real-time. Built specifically for real estate conversations, our AI understands property terminology, local market context, and buyer intent.',
    color: 'gold',
    features: [
      { icon: MessageSquare, text: 'Natural language conversations that feel human' },
      { icon: Globe, text: 'Multi-language support for diverse markets' },
      { icon: Users, text: 'Instant lead qualification and scoring' },
      { icon: Zap, text: 'Automated listing recommendations based on buyer criteria' },
      { icon: Clock, text: 'After-hours coverage that never misses a lead' },
      { icon: BarChart3, text: 'Conversation analytics and conversion tracking' },
    ],
    benefits: ['Instant lead qualification', 'Listing recommendations', 'Multi-language support'],
    pas: {
      problem: {
        headline: 'Your website visitors are leaving without a trace',
        description: 'Every day, dozens of potential buyers and sellers land on your website outside of office hours. They have questions about listings, want to schedule viewings, or need a quick valuation. But there is nobody there to answer. By the time your team checks in the next morning, those leads have already contacted your competitor.',
        painPoints: [
          'Website visitors bounce within 30 seconds without engagement',
          'After-hours inquiries go unanswered until the next business day',
          'Manual lead qualification wastes your top agents\' selling time',
          'No consistent follow-up process for initial website inquiries',
        ],
      },
      agitation: {
        headline: 'Every unanswered inquiry is money walking out the door',
        description: 'The cost of silence is not just one lost lead. It is the compound effect of hundreds of missed opportunities every single month. Your competitors who respond instantly are winning the listings you worked hard to attract. Meanwhile, your team is buried in repetitive FAQ responses instead of closing deals.',
        consequences: [
          { stat: '78%', label: 'of buyers go with the first responder', detail: 'Speed-to-lead is the number one predictor of conversion in real estate.' },
          { stat: '5 min', label: 'is the maximum response window', detail: 'After 5 minutes, your odds of qualifying a lead drop by 80%.' },
          { stat: '67%', label: 'of leads never get a follow-up', detail: 'Without automation, most inquiries fall through the cracks entirely.' },
        ],
      },
      solution: {
        headline: 'An AI assistant that converts visitors into viewings while you sleep',
        description: 'VirtueNex AI Chat Assistants respond to every single website visitor in under 3 seconds, 24 hours a day, 7 days a week. Trained on thousands of real estate conversations, our AI understands property jargon, buyer intent, and local market nuances. It qualifies leads, recommends listings, and books viewings directly into your calendar.',
        outcomes: [
          { title: 'Instant 24/7 engagement', description: 'Every visitor gets a knowledgeable response in under 3 seconds, day or night.' },
          { title: 'Smart lead qualification', description: 'AI scores and segments leads by budget, timeline, and intent before your agents touch them.' },
          { title: 'Automated viewing bookings', description: 'Prospects book viewings directly from the chat, synced to your team\'s calendar.' },
          { title: 'Reclaim 2+ hours daily', description: 'Eliminate repetitive FAQ responses so your agents focus exclusively on closing.' },
        ],
      },
    },
  },
  {
    slug: 'inbound-phone-agents',
    path: '/services/inbound-phone-agents',
    icon: PhoneCall,
    title: 'Inbound Phone Agents',
    subtitle: 'Never miss a call again',
    description: 'AI voice agents that book viewings and answer listing queries instantly. Never miss a call, even during showings.',
    heroDescription: 'AI voice agents that answer calls, respond to listing inquiries, and book viewings with natural-sounding conversation. Your callers get immediate, knowledgeable responses while your agents focus on high-value activities.',
    color: 'emerald',
    features: [
      { icon: Phone, text: 'Natural voice AI with real-time conversation handling' },
      { icon: CalendarCheck, text: 'Automated viewing scheduling with calendar sync' },
      { icon: FileText, text: 'Full call transcripts sent to your CRM instantly' },
      { icon: Users, text: 'Warm transfer to agents for hot leads' },
      { icon: Clock, text: '24/7 availability including weekends and holidays' },
      { icon: BarChart3, text: 'Call analytics with sentiment and intent tracking' },
    ],
    benefits: ['Natural conversation', 'Calendar integration', 'Call transcripts'],
    pas: {
      problem: {
        headline: 'Missed calls are killing your pipeline',
        description: 'Your phone rings while your agents are on viewings, in negotiations, or simply at lunch. Every missed call is a potential six-figure commission walking away. Voicemail is not a strategy. Buyers and sellers who cannot reach a human immediately move on to the next agency on their list.',
        painPoints: [
          'Agents miss 40% of inbound calls during showings and meetings',
          'Voicemail return rates are below 5% in the real estate industry',
          'Peak call times overlap with your team\'s highest-value activities',
          'No after-hours coverage means losing weekend and evening leads',
        ],
      },
      agitation: {
        headline: 'While your phone rings out, your competitor picks up',
        description: 'A single missed call from a motivated seller could represent a $15,000+ commission. Multiply that across every unanswered call each week, and you are looking at hundreds of thousands in lost annual revenue. Your agents are not ignoring calls on purpose. They are stretched too thin. The problem is structural, and no amount of "try harder" will fix it.',
        consequences: [
          { stat: '$15K+', label: 'average lost commission per missed seller call', detail: 'One missed listing appointment can cost more than most monthly marketing budgets.' },
          { stat: '40%', label: 'of calls go unanswered during business hours', detail: 'Your team physically cannot answer every call while doing their actual job.' },
          { stat: '<5%', label: 'voicemail callback success rate', detail: 'Once a caller hangs up, you have almost certainly lost them to a competitor.' },
        ],
      },
      solution: {
        headline: 'An AI voice agent that sounds human and books viewings instantly',
        description: 'VirtueNex Inbound Phone Agents answer every call within 2 rings using natural-sounding voice AI trained specifically for real estate conversations. Our agents handle listing inquiries, book viewings into your calendar, capture caller details into your CRM, and warm-transfer hot leads to available team members.',
        outcomes: [
          { title: 'Zero missed calls', description: 'Every inbound call is answered within 2 rings, 24 hours a day, 365 days a year.' },
          { title: 'Natural voice conversations', description: 'Callers consistently rate our AI as natural and helpful. No robotic menus.' },
          { title: 'Real-time calendar sync', description: 'Viewings are booked directly into your agents\' calendars with zero manual input.' },
          { title: 'Reclaim 2+ hours daily', description: 'Your team stops playing phone tag and starts closing deals.' },
        ],
      },
    },
  },
  {
    slug: 'real-estate-websites',
    path: '/services/real-estate-websites',
    icon: Layout,
    title: 'Real Estate Websites',
    subtitle: 'High-conversion digital hubs',
    description: 'High-conversion, mobile-responsive hubs designed specifically for real estate workflows.',
    heroDescription: 'Modern, mobile-first websites designed specifically for real estate workflows. Every page, form, and interaction is optimized to capture leads and convert visitors into clients, with built-in IDX integration and AI-powered property search.',
    color: 'amber',
    features: [
      { icon: Search, text: 'AI-powered property search and recommendations' },
      { icon: Users, text: 'Lead capture forms with smart qualification' },
      { icon: Globe, text: 'SEO-optimized pages for local market dominance' },
      { icon: Phone, text: 'Mobile-first responsive design for agents on the go' },
      { icon: Zap, text: 'Lightning-fast load times for better conversion' },
      { icon: BarChart3, text: 'Built-in analytics dashboard for tracking performance' },
    ],
    benefits: ['IDX integration ready', 'Lead capture forms', 'SEO optimized'],
    pas: {
      problem: {
        headline: 'Your website is a digital brochure, not a lead machine',
        description: 'Most real estate websites are built by generic web agencies who do not understand your business. The result is a pretty page that does nothing. No intelligent search, no lead capture strategy, no conversion optimization. Visitors browse, admire the photos, and leave without ever giving you their contact details.',
        painPoints: [
          'Generic template websites with no real estate-specific functionality',
          'No IDX integration means visitors leave to search on Zillow and Rightmove',
          'Slow loading speeds on mobile drive away 53% of visitors',
          'No analytics means you have no idea which pages or listings convert',
        ],
      },
      agitation: {
        headline: 'You are paying for traffic that your website cannot convert',
        description: 'You spend thousands on Google Ads, social media, and portal listings to drive traffic to your website. But your website leaks leads like a sieve. Every visitor who leaves without engaging is wasted ad spend. Your competitors with optimized, AI-powered websites are capturing those same leads and converting them into clients.',
        consequences: [
          { stat: '97%', label: 'of visitors leave without converting', detail: 'The average real estate website converts less than 3% of its traffic.' },
          { stat: '53%', label: 'bounce rate on slow mobile sites', detail: 'If your site takes more than 3 seconds to load, half your visitors are gone.' },
          { stat: '$0', label: 'ROI from a website with no lead capture', detail: 'A website without conversion optimization is just an expensive business card.' },
        ],
      },
      solution: {
        headline: 'A website engineered to turn every visitor into a lead',
        description: 'VirtueNex Real Estate Websites are not templates. They are conversion machines built from the ground up for your specific market. AI-powered property search keeps visitors on your site instead of sending them to portals. Smart lead capture forms adapt to visitor behavior.',
        outcomes: [
          { title: 'AI-powered property search', description: 'Visitors find their dream property on your site, not Zillow. Keep the lead, keep the commission.' },
          { title: 'Smart lead capture', description: 'Forms that adapt to visitor intent, capturing contact details at the perfect moment.' },
          { title: 'Local SEO dominance', description: 'Rank #1 for your target neighborhoods and property types.' },
          { title: 'Reclaim 2+ hours daily', description: 'Automated follow-ups and lead routing eliminate manual website management.' },
        ],
      },
    },
  },
  {
    slug: 'intelligent-data-sync',
    path: '/services/intelligent-data-sync',
    icon: Database,
    title: 'Intelligent Data Sync',
    subtitle: 'Zero manual data entry',
    description: 'Eliminate manual grunt work with automated CRM entry and document processing. Our systems instantly sync lead data from portals directly into your workflow, ensuring no valuation or viewing detail ever slips through the cracks.',
    heroDescription: 'Eliminate manual grunt work with automated CRM entry and document processing. Our systems instantly sync lead data from portals directly into your workflow, ensuring no valuation or viewing detail ever slips through the cracks.',
    color: 'rose',
    features: [
      { icon: RefreshCw, text: 'Real-time bi-directional CRM synchronization' },
      { icon: FileText, text: 'Automated document processing and data extraction' },
      { icon: Database, text: 'Cross-platform sync across your entire tech stack' },
      { icon: Shield, text: 'Enterprise-grade encryption for all data transfers' },
      { icon: Zap, text: 'Instant contact enrichment from public data sources' },
      { icon: BarChart3, text: 'Data quality monitoring and anomaly detection' },
    ],
    benefits: ['Auto CRM updates', 'Document processing', 'Cross-platform sync'],
    pas: {
      problem: {
        headline: 'Your team is drowning in manual data entry',
        description: 'Every new lead from Rightmove, Zoopla, or your website needs to be manually copied into your CRM. Every viewing confirmation needs to be logged. Every valuation report needs to be filed. Your agents spend more time on admin than on selling, and critical details slip through the cracks daily.',
        painPoints: [
          'Leads from portals are manually copied into CRM, one field at a time',
          'Viewing notes and follow-ups live in notebooks and sticky notes',
          'Document processing takes hours of manual data extraction',
          'No single source of truth means conflicting data across systems',
        ],
      },
      agitation: {
        headline: 'Every typo and missed entry is a deal at risk',
        description: 'Manual data entry is not just slow. It is dangerous. A mistyped phone number means a lost follow-up. A forgotten viewing note means an embarrassing client call. A delayed CRM update means two agents chasing the same lead. Your team is burning out on work a machine should be doing, and the errors are costing you real money.',
        consequences: [
          { stat: '23%', label: 'of CRM data contains errors from manual entry', detail: 'Nearly a quarter of your database is unreliable because humans make mistakes.' },
          { stat: '5.5 hrs', label: 'per week spent on data entry per agent', detail: 'That is 5.5 hours your top performers are not spending on revenue-generating activities.' },
          { stat: '1 in 5', label: 'follow-ups are missed due to incomplete data', detail: 'Leads fall through the cracks because the information never made it into the system.' },
        ],
      },
      solution: {
        headline: 'Automated data flow that never misses a detail',
        description: 'VirtueNex Intelligent Data Sync eliminates manual data entry entirely. Our system pulls lead data from every portal, email, and web form and injects it directly into your CRM in real time. Documents are scanned, parsed, and filed automatically. Your team gets a single source of truth with zero manual input required.',
        outcomes: [
          { title: 'Zero manual entry', description: 'Leads from every source flow directly into your CRM without anyone touching a keyboard.' },
          { title: 'Automated document processing', description: 'Contracts, valuations, and reports are scanned, parsed, and filed instantly.' },
          { title: 'Single source of truth', description: 'Every system stays perfectly synced so your team always has accurate, up-to-date data.' },
          { title: 'Reclaim 2+ hours daily', description: 'Eliminate admin grunt work so your agents can focus on what they do best: closing deals.' },
        ],
      },
    },
  },
];

export const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  gold: { bg: 'bg-gold-500/10', border: 'border-gold-500/20', text: 'text-gold-400', dot: 'bg-gold-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', dot: 'bg-rose-400' },
};
