import { Project, ServiceOffering, JournalArticle } from '../types';
import spatialMonolithImg from '../assets/images/spatial_monolith_1789538766429.jpg';
import minimalChairImg from '../assets/images/minimal_chair_1789538777777.jpg';

export const STUDIO_INFO = {
  name: 'ATELIER VÉRICOURT',
  tagline: 'Spatial, digital, and structural design bureau founded on restraint and enduring material truth.',
  location: 'Paris & Kyoto',
  established: '2019',
  availability: 'Accepting select commissions for Autumn 2026',
  email: 'commissions@vericourt-studio.com',
  coordinates: '48.8566° N, 2.3522° E / 35.0116° N, 135.7681° E',
};

export const PROJECTS: Project[] = [
  {
    id: 'kyoto-pavilion',
    title: 'Kyoto Moss Pavilion',
    subtitle: 'A contemplative sanctuary embedded within a 300-year-old preserved cedar forest',
    category: 'architecture',
    client: 'Yamashiro Cultural Trust',
    year: '2025',
    location: 'Kyoto, Japan',
    duration: '18 Months',
    heroImage: spatialMonolithImg,
    gallery: [
      spatialMonolithImg,
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'A site-specific retreat constructed from board-formed river concrete and reclaimed hinoki cypress. The structure captures seasonal light through a series of angled clerestory slits, balancing mineral mass with vegetative tranquility.',
    challenge: 'Preserving the centuries-old root network of surrounding moss carpets while engineering seismic stability and strict zero-runoff environmental requirements.',
    solution: 'Elevating the primary platform upon four micro-pile limestone piers, allowing continuous subterranean water migration and uninterrupted moss propagation.',
    deliverables: ['Architectural Schematics', 'Material Research & Sourcing', 'Structural Integration', 'Landscape Co-Direction'],
    materials: ['Board-formed River Concrete', 'Reclaimed Hinoki Timber', 'Hon-Kawara Clay Tiles', 'Blackened Bronze Hardware'],
    metrics: [
      { label: 'Carbon Offset', value: '-38%' },
      { label: 'Preserved Flora', value: '100%' },
      { label: 'Floor Area', value: '320 m²' }
    ],
    testimonial: {
      quote: 'The pavilion does not impose itself upon the landscape; rather, the landscape breathes through the concrete.',
      author: 'Kenji Takahashi',
      role: 'Trustee, Yamashiro Foundation'
    }
  },
  {
    id: 'chronos-archive',
    title: 'Chronos Digital Archive',
    subtitle: 'An archival repository interface for rare horological manuscripts and blueprints',
    category: 'digital',
    client: 'Fondation d’Horlogerie Ancienne',
    year: '2026',
    location: 'Geneva, Switzerland',
    duration: '6 Months',
    heroImage: 'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'A tactile, high-density digital interface engineered for conservators and collectors. Features continuous vector zooming on micro-engravings and deep-linked bibliographic annotations.',
    challenge: 'Transforming over 40,000 fragile scans into a fluid, sub-second exploratory interface without sacrificing provenance data or scholarly citation fidelity.',
    solution: 'Crafted a custom tile-rendering canvas paired with typographic hierarchy based on 18th-century French punchcutters, creating a digital experience that honors historical paper craft.',
    deliverables: ['Information Architecture', 'Bespoke UI Design System', 'High-Resolution Vector Viewer', 'Curator Dashboard'],
    metrics: [
      { label: 'Manuscripts Indexed', value: '42,000+' },
      { label: 'Query Latency', value: '45ms' },
      { label: 'Research Adoption', value: '18 Institutes' }
    ],
    testimonial: {
      quote: 'Navigating seventeenth-century movement blueprints on this interface feels as precise and deliberate as handling the mechanical artifacts themselves.',
      author: 'Dr. Éléonore Mercier',
      role: 'Head Conservator'
    }
  },
  {
    id: 'fumed-oak-monolith',
    title: 'Armature 04 Lounge Chair',
    subtitle: 'Limited-edition seating study in hand-sculpted fumed European oak and titanium',
    category: 'furniture',
    client: 'Galerie Perrotin Editions',
    year: '2025',
    location: 'Milan / Paris',
    duration: '9 Months',
    heroImage: minimalChairImg,
    gallery: [
      minimalChairImg,
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'A disciplined exploration of cantilevered equilibrium. The chair features solid fumed oak components joined without mechanical fasteners, braced by a single brushed titanium tension rod.',
    challenge: 'Achieving ergonomic lumbar relaxation while maintaining razor-thin tapered profiles in naturally shifting solid timber.',
    solution: 'Developed a dual-density internal mortise-and-tenon system that tolerates relative humidity expansion without compromising tension stability.',
    deliverables: ['Concept Ergonomics', 'Full-Scale Prototyping', 'Artisanal Production Run (12 Pieces)', 'Collector Monograph'],
    materials: ['Fumed French Oak', 'Grade 5 Brushed Titanium', 'Vegetable-Tanned Saddle Leather', 'Beeswax Polish'],
    metrics: [
      { label: 'Edition Count', value: '12 Pieces' },
      { label: 'Weight', value: '14.2 kg' },
      { label: 'Artisanal Guilds', value: '3 Masters' }
    ]
  },
  {
    id: 'sol-energetics',
    title: 'Sol System Identity',
    subtitle: 'Visual typography and brand architecture for an off-grid geothermal infrastructure',
    category: 'brand',
    client: 'Sol Geothermal Alliance',
    year: '2026',
    location: 'Reykjavik, Iceland',
    duration: '5 Months',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'A visual language drawn from volcanic basalt strata and geological core samples. Anchored by a bespoke variable typeface cut specifically for high-contrast environmental signage and digital telemetry.',
    challenge: 'Unifying disparate audiences: industrial sub-surface engineers, municipal regulators, and institutional capital partners under one coherent identity.',
    solution: 'Constructed an identity framework focused on geological precision: mono-spaced coordinate scales, unbleached heavy stock print items, and understated digital dashboards.',
    deliverables: ['Proprietary Variable Typeface', 'Signage Guidelines', 'Corporate Stationery System', 'Field Telemetry UI'],
    metrics: [
      { label: 'Custom Glyphs', value: '840' },
      { label: 'Field Deployments', value: '7 Plants' }
    ]
  },
  {
    id: 'le-marais-gallery',
    title: 'Galerie No. 11 Renovation',
    subtitle: 'Adaptive reuse of a 19th-century limestone carriage house into a private salon',
    category: 'architecture',
    client: 'Private Foundation',
    year: '2024',
    location: 'Paris, France',
    duration: '14 Months',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'Stripping back decades of artificial drywall to celebrate historic Parisian Lutetian limestone, complemented by micro-textured lime plaster and recessed daylight tracks.',
    challenge: 'Integrating modern climate control and archival lighting standards without puncturing historic ceiling vaults.',
    solution: 'Floated all conduits and HVAC registers through an elevated perimeter bronze reveal in the poured terrazzo floor.',
    deliverables: ['Interior Architecture', 'Spatial Lighting Program', 'Custom Furniture Fabrication', 'Permit Dossier'],
    materials: ['Original Lutetian Limestone', 'Natural Hydraulic Lime Plaster', 'Cast Bronze Skirting', 'Pale Terrazzo']
  },
  {
    id: 'aethel-digital-core',
    title: 'Aethel Sound Platform',
    subtitle: 'A quiet acoustic streaming platform dedicated to spatial and drone audio compositions',
    category: 'digital',
    client: 'Aethel Records',
    year: '2025',
    location: 'Berlin, Germany',
    duration: '4 Months',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80'
    ],
    summary: 'An interface designed intentionally without algorithmic recommendations or autoplay feeds. Designed to facilitate sustained listening sessions with waveform typography and tactile volume damping.',
    challenge: 'Eliminating engagement-driven dark patterns in favor of calm user agency and deep musical presence.',
    solution: 'Restricted the canvas to single active releases at a time, rendering acoustic frequency maps as delicate line-etched graphs.',
    deliverables: ['Product Strategy', 'Interactive Web Architecture', 'Waveform Visualization', 'Sound Design Library'],
    metrics: [
      { label: 'Average Session', value: '48 Mins' },
      { label: 'Listening Retention', value: '89%' }
    ]
  }
];

export const SERVICES: ServiceOffering[] = [
  {
    id: 'spatial-design',
    name: 'Spatial Architecture & Pavilions',
    category: 'architecture',
    description: 'Bespoke residential sanctuaries, cultural pavilions, and gallery transformations rooted in honest materials and daylight articulation.',
    deliverables: ['Site Feasibility & Topographical Study', 'Material Research & Sourcing Strategy', 'Full Architectural Blueprint Suite', 'Artisan Supervision & Construction Oversight'],
    typicalDuration: '8 - 18 Months',
    estimatedBudget: 45000
  },
  {
    id: 'digital-systems',
    name: 'Digital Systems & Archival Platforms',
    category: 'digital',
    description: 'High-performance bespoke web applications, archival repositories, and digital interfaces built with meticulous typographic precision.',
    deliverables: ['Information Architecture', 'Custom Interactive Prototypes', 'Production Web Application', 'Modular Component Documentation'],
    typicalDuration: '2 - 5 Months',
    estimatedBudget: 22000
  },
  {
    id: 'brand-identity',
    name: 'Editorial Identity & Type Design',
    category: 'brand',
    description: 'Holistic brand identities, custom typography, physical publication design, and signage systems for cultural institutions and conscious enterprises.',
    deliverables: ['Visual Strategy & Narrative', 'Custom Typeface or Glyph Customization', 'Printed Collateral Specifications', 'Digital & Spatial Brand Guidelines'],
    typicalDuration: '6 - 12 Weeks',
    estimatedBudget: 16000
  },
  {
    id: 'bespoke-furniture',
    name: 'Tactile Objects & Seating Commissions',
    category: 'furniture',
    description: 'Limited-edition furniture pieces and architectural hardware executed in collaboration with master joiners, bronze casters, and stonemasons.',
    deliverables: ['Ergonomic & Structural Study', 'Material Prototype Validation', 'Artisanal Small-Batch Production', 'Numbered Certificate of Provenance'],
    typicalDuration: '3 - 6 Months',
    estimatedBudget: 12000
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: 'principle-1',
    number: '01',
    title: 'Restraint as Conviction',
    statement: 'We eliminate every superfluous gesture until only structural necessity and light remain.',
    description: 'Architecture and interfaces do not need decoration to command attention. By paring away decorative noise, the inherent texture of stone, the weight of timber, or the clarity of letterforms emerges with clarity.'
  },
  {
    id: 'principle-2',
    number: '02',
    title: 'Material Honesty',
    statement: 'A material must never pretend to be something it is not.',
    description: 'Concrete should show its formwork grain. Wood must breathe, contract, and age gracefully under natural oils. In the digital realm, screens should behave as illuminated light surfaces rather than simulating plastic skeuomorphism.'
  },
  {
    id: 'principle-3',
    number: '03',
    title: 'Typographic Rigor',
    statement: 'The spatial cadence of words dictates the tempo of human comprehension.',
    description: 'We treat typography as a spatial discipline. Whether on physical building facades or dense archival software, proportion, rhythm, and baseline alignment dictate how easily people can orient themselves.'
  },
  {
    id: 'principle-4',
    number: '04',
    title: 'Enduring Longevity',
    statement: 'Designing for the decade ahead rather than the trend cycle of next month.',
    description: 'Ephemeral trends pass quickly. By choosing enduring geometries, durable joinery, and accessible standards, our work remains relevant and dignified through decades of daily use.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'on-shadow-and-concrete',
    title: 'The Weight of Quietude: In Praise of Cast Shadows in Contemporary Sanctuaries',
    category: 'Architecture',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt: 'Examining how deliberate darkness and recessed apertures can restore a sense of calm in dense urban environments.',
    content: [
      'In our rush toward floor-to-ceiling glass and ubiquitous ambient lighting, we have banished shadow from contemporary living spaces. Yet, as Jun’ichirō Tanizaki observed nearly a century ago, the true beauty of an object resides not in the object itself, but in the variety of shadows, the light and darkness, that one object creates against another.',
      'When designing the Kyoto Pavilion, we deliberately constrained direct daylight to four calibrated slits. Sunlight does not enter indiscriminately; it moves across board-formed river concrete as a living pendulum throughout the day.',
      'In an age of relentless visual illumination, the greatest luxury an architect can offer is quiet darkness.'
    ]
  },
  {
    id: 'digital-craftsmanship',
    title: 'Digital Materials: Treating Pixels with the Respect of Joinery',
    category: 'Technology & Form',
    date: 'January 2026',
    readTime: '5 min read',
    excerpt: 'Why modern digital software feels disposable, and how we can apply the discipline of cabinet-making to digital interfaces.',
    content: [
      'A fine mortise-and-tenon joint requires neither glue nor nails to hold fast; it relies upon friction, balance, and exact tolerances. Software interfaces, by contrast, frequently compensate for clumsy architecture by layering ephemeral animations, badges, and alerts.',
      'To build enduring digital work, we must establish a code of digital honesty. Responsive transitions should feel like the natural inertia of oiled brass, not floaty elasticity. Letterforms must align to strict baseline grids.',
      'Software can outlast quarterly product roadmaps when built with the integrity of a well-balanced mechanical timepiece.'
    ]
  },
  {
    id: 'patina-over-perfection',
    title: 'Patina Over Perfection: Why We Refuse Lacquered Finishes',
    category: 'Materiality',
    date: 'November 2025',
    readTime: '4 min read',
    excerpt: 'The beauty of materials that absorb the touch of human hands and record time without deteriorating.',
    content: [
      'A polyurethane lacquer protects wood by suffocating it. It creates a sterile plastic barrier that looks immaculate on day one, only to peel and degrade unsightly on day three hundred.',
      'We finish all solid timber in cold-pressed natural linseed oils and organic beeswax. When touched, it warms to the hand. Over years, areas of frequent touch develop a burnished luster known as patina.',
      'We build objects not to resist time, but to celebrate its passage.'
    ]
  }
];
