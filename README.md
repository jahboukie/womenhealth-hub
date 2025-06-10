# WomenHealth.Health Flagship Website

Revolutionary women's healthcare platform showcasing Dr. Alex AI and the complete healthcare ecosystem with full-stack backend integration.

## 🌟 Project Overview

This is the flagship website for WomenHealth.Health, featuring:

- **Primary Domain**: womenhealth.health
- **Embedded Domain**: dralexai.com
- **Design Inspiration**: Stripe.com (infinite scroll, professional, generous white space)
- **Core Theme**: Reactive Healthcare → Proactive Healthcare Revolution
- **Backend Integration**: Full-stack Next.js with Supabase and AI integration

## 🚀 Technology Stack

### Frontend
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel

### Backend
- **Database**: Supabase (PostgreSQL with real-time features)
- **Authentication**: Supabase Auth with Row Level Security
- **AI Integration**: Anthropic Claude API for Dr. Alex AI
- **API Routes**: Next.js API routes for backend logic
- **Type Safety**: Zod for runtime validation
- **HIPAA Compliance**: Encrypted data storage and audit logging

## 🏗️ Architecture

### Frontend Architecture
- **Component-based**: Modular React components
- **Custom Hooks**: Reusable logic for auth, AI chat, and health tracking
- **State Management**: React hooks with local state
- **Real-time Updates**: Supabase real-time subscriptions

### Backend Architecture
- **Database Schema**: Comprehensive healthcare data models
- **API Endpoints**: RESTful APIs for all major features
- **Authentication Flow**: Secure user registration and login
- **AI Integration**: Claude API for intelligent health conversations
- **Data Security**: HIPAA-compliant data handling

## 🔧 Backend Features

### 🔐 Authentication & User Management
- **User Registration**: Secure signup with HIPAA consent
- **Role-based Access**: Patient and Provider roles
- **Profile Management**: Comprehensive user profiles with health data
- **Session Management**: Secure authentication with Supabase

### 🤖 Dr. Alex AI Integration
- **Intelligent Conversations**: Claude-powered healthcare AI assistant
- **Context-Aware Responses**: Personalized based on user health profile
- **Symptom Analysis**: Automatic urgency detection and provider alerts
- **Conversation History**: Persistent chat history with search and filtering

### 📊 MenoWellness App Backend
- **Symptom Tracking**: Comprehensive menopause symptom logging
- **Pattern Recognition**: AI-powered trend analysis
- **Analytics Dashboard**: Visual insights and recommendations
- **Alert System**: Automated notifications for concerning patterns

### 🏥 Healthcare Data Management
- **HIPAA Compliance**: Encrypted storage and audit logging
- **Medical History**: Secure storage of health records
- **Provider Integration**: Future-ready for EHR integration
- **Data Export**: Patient-controlled data portability

### 📈 Analytics & Insights
- **Health Insights**: AI-generated personalized recommendations
- **Usage Analytics**: App engagement and health tracking metrics
- **Trend Analysis**: Long-term health pattern recognition
- **Risk Assessment**: Early warning systems for health concerns

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Anthropic API key (for Dr. Alex AI)

### Environment Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd womenhealth-flagship-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Fill in your environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
- `ANTHROPIC_API_KEY`: Your Anthropic API key for Dr. Alex AI

4. **Set up Supabase database**
```bash
# Run the schema.sql file in your Supabase SQL editor
# This creates all necessary tables, policies, and functions
```

5. **Start the development server**
```bash
npm run dev
```

### Database Schema

The application uses a comprehensive PostgreSQL schema with:

- **Users & Profiles**: User authentication and detailed health profiles
- **Dr. Alex Conversations**: AI chat history and metadata
- **Symptom Tracking**: MenoWellness symptom logs and analytics
- **Notifications**: User notification system
- **Audit Logs**: HIPAA-compliant activity tracking
- **Provider Relations**: Healthcare provider connections

### API Endpoints

#### Authentication
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login
- `GET /api/auth/callback` - OAuth callback handler

#### Dr. Alex AI
- `POST /api/dr-alex/chat` - Send message to AI
- `GET /api/dr-alex/conversations` - Get user conversations
- `GET /api/dr-alex/conversations/[id]` - Get specific conversation

#### MenoWellness
- `POST /api/apps/menowellness/symptoms` - Log symptoms
- `GET /api/apps/menowellness/symptoms` - Get symptom history
- `GET /api/apps/menowellness/insights` - Get health insights

#### User Dashboard
- `GET /api/user/dashboard` - Get dashboard data
- `PATCH /api/user/profile` - Update user profile

### Main Sections

1. **Main Hero** - Healthcare paradigm shift visualization
2. **Dr. Alex AI Platform** - Human-Claude collaboration showcase
3. **Ecosystem Apps** - 8 specialized healthcare applications

### Ecosystem Apps

#### Active Apps
- 🌸 **MenoWellness** - Menopause management
- 🤝 **SupportPartner** - Partner education & support

#### Building Apps
- 🏆 **SoberPal** - Addiction recovery support
- 💬 **MyConfidant** - Relationship counseling
- 🧘‍♀️ **Inner Architect** - Mental wellness
- 🌱 **FertilityTracker** - Fertility tracking
- 🤰 **PregnancyCompanion** - Pregnancy tracking
- 👶 **PostpartumSupport** - Postpartum care

## 🎨 Design System

### Colors
- **Primary**: Healthcare blues (#3b82f6 to #1e3a8a)
- **Success**: Trust greens (#22c55e to #15803d)
- **Error**: Medical alert reds (#ef4444 to #b91c1c)
- **Purple**: Innovation purple (#a855f7 to #7c3aed)

### Typography
- **Font**: Inter (Google Fonts)
- **Hero**: 4rem (64px) - Bold
- **Section**: 3rem (48px) - Bold
- **Subtitle**: 1.25rem (20px) - Medium

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd womenhealth-flagship-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏥 Healthcare Compliance

### Security Features
- HIPAA-Compliant data handling
- SOC 2 Type II certified
- FHIR R4 compatible
- HL7 standards compliant

### Performance Requirements
- Page Load Speed: < 2 seconds
- Core Web Vitals: All green scores
- Mobile Responsiveness: 100%
- SEO Optimization: Complete meta tags
- Accessibility: WCAG 2.1 AA compliance

## 📊 Key Features

- **Infinite Scroll**: Smooth section transitions
- **Domain Integration**: Seamless dralexai.com embedding
- **Animation System**: Scroll-triggered animations
- **Mobile-First**: Responsive across all devices
- **Performance Optimized**: Lazy loading and image optimization
- **Healthcare Compliance**: HIPAA badges and security certifications

## 🚀 Deployment

### Vercel Deployment
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy with automatic SSL and CDN

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://womenhealth.health
NEXT_PUBLIC_DRALEXAI_URL=https://dralexai.com
```

## 📈 Success Metrics

### Primary KPIs
- Page Load Speed: < 2 seconds
- Bounce Rate: < 40%
- Time on Site: > 3 minutes
- Conversion Rate: > 5% for CTAs
- Mobile Traffic: > 60%

### Healthcare-Specific Metrics
- Provider Demo Requests: 50+ per month
- HIPAA Compliance Inquiries
- Clinical Integration Interest
- Patient App Downloads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to WomenHealth.Health.

## 📞 Support

For technical support or questions:
- Email: support@womenhealth.health
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]

---

Built with ❤️ for revolutionizing women's healthcare through Human-AI collaboration.
