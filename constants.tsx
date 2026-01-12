
import React from 'react';
import { 
  Cloud, 
  Code, 
  Youtube, 
  Music, 
  ShieldCheck, 
  Search, 
  Database, 
  BarChart3, 
  Cpu, 
  Globe, 
  Lock, 
  Zap,
  Play,
  Share2,
  FileText
} from 'lucide-react';
import { ServiceItem, SubCompany, Partner } from './types';
import AmazonMusic from './assets/partners/amazonmusictext.png';
import Anghami from './assets/partners/anghamitext.png';
import AppleMusic from './assets/partners/applemusictext.png';
import BoomPlay from './assets/partners/boomplaytext.png';
import JioSaavn from './assets/partners/jiosaven.png';
import Meta from './assets/partners/metatext.png';
import Spotify from './assets/partners/spotifytext.png';
import TikTok from './assets/partners/tiktoktext.png';
import YouTube from './assets/partners/youtubetext.png';
import VEVO from './assets/partners/vevo_white.png';
import Google from './assets/partners/google.png';

export const SERVICES: ServiceItem[] = [
  {
    id: 'music-saas',
    title: 'White-Label Music SaaS',
    description: 'Enterprise-grade music distribution platforms with custom branding.',
    icon: 'Music',
    details: [
      'End-to-end distribution workflows',
      'Integrated royalty reporting systems',
      'Multi-tenant user management',
      'Automated ingestion pipelines'
    ]
  },
  {
    id: 'api-tools',
    title: 'API & Integration Tools',
    description: 'Powerful endpoints for media management and distribution.',
    icon: 'Code',
    details: [
      'RESTful Media Management APIs',
      'Real-time metadata validation',
      'Scalable content delivery hooks',
      'Webhooks for status updates'
    ]
  },
  {
    id: 'vevo-channels',
    title: 'VEVO Channel Management',
    description: 'Official VEVO channel creation and high-tier content curation.',
    icon: 'Play',
    details: [
      'Rapid channel provisioning',
      'Premium video distribution',
      'VEVO certification support',
      'Strategic release planning'
    ]
  },
  {
    id: 'yt-management',
    title: 'YouTube Channel Management',
    description: 'Advanced MCN solutions and growth strategies for creators.',
    icon: 'Youtube',
    details: [
      'CMS / Content ID integration',
      'Cross-promotion networks',
      'Audience growth analytics',
      'Brand safety auditing'
    ]
  },
  {
    id: 'copyright-protection',
    title: 'Copyright Protection',
    description: 'Digital fingerprinting and automated rights enforcement.',
    icon: 'ShieldCheck',
    details: [
      'Global fingerprinting scans',
      'Automated DMCA processing',
      'Asset claim management',
      'Rights ownership conflict resolution'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Digital Presence',
    description: 'Optimizing digital footprint for artists and media labels.',
    icon: 'Search',
    details: [
      'Artist profile optimization',
      'Search engine ranking boost',
      'Cross-platform brand consistency',
      'Keyword strategy for media'
    ]
  },
  {
    id: 'distribution-infra',
    title: 'Distribution Infrastructure',
    description: 'Scalable cloud infrastructure for global media assets.',
    icon: 'Database',
    details: [
      'Low-latency asset storage',
      'Global CDN nodes',
      'Smart transcoding engines',
      'Dynamic bitrate delivery'
    ]
  },
  {
    id: 'analytics-dash',
    title: 'Media Analytics Dashboards',
    description: 'Real-time data visualization for streams and sales.',
    icon: 'BarChart3',
    details: [
      'Unified revenue dashboards',
      'Heatmaps of consumption',
      'Predictive earning models',
      'Granular fan demographic data'
    ]
  }
];

export const SUB_COMPANIES: SubCompany[] = [
  {
    name: 'ANS Music',
    description: 'Direct-to-consumer digital distribution for independent artists and labels worldwide.',
    url: 'https://ansmusiclimited.com/',
    logo: 'ANS'
  },
  {
    name: 'Tune Via',
    description: 'Next-generation music tech platform focusing on sync rights and creative licensing.',
    url: 'https://tunevia.com/',
    logo: 'TV'
  },
  {
    name: 'ANS Enterprise LLC',
    description: 'USA-based strategic holding company managing intellectual property and media tech assets.',
    url: '#',
    logo: 'AE'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Spotify', logo: Spotify },
  { name: 'Apple Music', logo: AppleMusic },
  { name: 'Amazon Music', logo: AmazonMusic },
  { name: 'Meta', logo: Meta },
  { name: 'TikTok', logo: TikTok },
  { name: 'YouTube', logo: YouTube },
  { name: 'BoomPlay', logo: BoomPlay },
  { name: 'JioSaavn', logo: JioSaavn },
  { name: 'Anghami', logo: Anghami },
  { name: 'Google', logo: Google },
  { name: 'VEVO', logo: VEVO },
];



export const ICON_MAP: Record<string, React.ReactNode> = {
  Music: <Music size={32} />,
  Code: <Code size={32} />,
  Play: <Play size={32} />,
  Youtube: <Youtube size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Search: <Search size={32} />,
  Database: <Database size={32} />,
  BarChart3: <BarChart3 size={32} />
};
