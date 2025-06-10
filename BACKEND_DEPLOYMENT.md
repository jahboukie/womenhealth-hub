# 🚀 Backend Deployment Guide - WomenHealth.Health

This comprehensive guide covers deploying the full-stack WomenHealth.Health platform with backend integration.

## 🏗️ Architecture Overview

- **Frontend**: Next.js 15 deployed on Vercel
- **Database**: Supabase (PostgreSQL with real-time features)
- **AI Integration**: Anthropic Claude API
- **Authentication**: Supabase Auth with HIPAA compliance
- **File Storage**: Supabase Storage (future)

## 📋 Prerequisites

- Node.js 18+
- Supabase account
- Anthropic API account
- Vercel account (recommended)
- Domain access (womenhealth.health)

## 🔧 Step 1: Supabase Setup

### 1.1 Create Supabase Project
```bash
# Visit https://supabase.com
# Create new project
# Note: Project URL and API keys
```

### 1.2 Database Schema Setup
```sql
-- Run the contents of supabase/schema.sql in Supabase SQL Editor
-- This creates all tables, policies, and functions
-- Verify Row Level Security is enabled on all tables
```

### 1.3 Authentication Configuration
```bash
# In Supabase Dashboard > Authentication > Settings
# Enable Email authentication
# Set Site URL: https://womenhealth.health
# Add Redirect URLs:
#   - https://womenhealth.health/auth/callback
#   - http://localhost:3000/auth/callback (for development)
```

## 🤖 Step 2: Anthropic API Setup

### 2.1 Get API Key
```bash
# Visit https://console.anthropic.com
# Create API key
# Note: Keep this secure - it's for Dr. Alex AI
```

### 2.2 Test API Access
```bash
# Test the API key works
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: YOUR_API_KEY" \
  -H "content-type: application/json" \
  -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":100,"messages":[{"role":"user","content":"Hello"}]}'
```

## 🌐 Step 3: Vercel Deployment

### 3.1 Environment Variables
Set these in Vercel Dashboard > Settings > Environment Variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Anthropic AI Configuration
ANTHROPIC_API_KEY=your_anthropic_api_key

# Application Configuration
NEXT_PUBLIC_APP_URL=https://womenhealth.health
NEXT_PUBLIC_DRALEXAI_URL=https://dralexai.com

# Security
JWT_SECRET=your_jwt_secret_key_min_32_chars
ENCRYPTION_KEY=your_encryption_key_for_hipaa_data_32_chars

# Optional: Email Configuration
RESEND_API_KEY=your_resend_api_key
SMTP_FROM=noreply@womenhealth.health
```

### 3.2 Deploy to Vercel
```bash
# Option 1: GitHub Integration (Recommended)
# Connect your GitHub repo to Vercel
# Auto-deploy on push to main branch

# Option 2: Manual Deploy
npm install -g vercel
vercel login
vercel --prod
```

### 3.3 Domain Configuration
```bash
# In Vercel Dashboard:
# 1. Go to Domains
# 2. Add womenhealth.health
# 3. Configure DNS records as shown
# 4. Add dralexai.com as alias (optional)
```

## 🔒 Step 4: Security & HIPAA Compliance

### 4.1 Database Security
```sql
-- Verify RLS is enabled (already in schema.sql)
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' AND rowsecurity = true;

-- Check policies exist
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public';
```

### 4.2 API Security
- All API routes require authentication
- Sensitive data is encrypted
- Audit logging is enabled
- Rate limiting implemented

### 4.3 HIPAA Compliance Checklist
- [ ] Data encryption at rest (Supabase default)
- [ ] Data encryption in transit (HTTPS)
- [ ] Access controls (RLS policies)
- [ ] Audit logging (implemented)
- [ ] User consent management (signup flow)
- [ ] Data retention policies (configured)

## 🧪 Step 5: Testing Deployment

### 5.1 Frontend Testing
```bash
# Test main pages load
curl -I https://womenhealth.health
curl -I https://womenhealth.health/dashboard

# Test authentication
# Visit site and try signup/signin
```

### 5.2 API Testing
```bash
# Test authentication API
curl -X POST https://womenhealth.health/api/auth/sign-up \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpass123","fullName":"Test User"}'

# Test Dr. Alex AI (requires auth token)
curl -X POST https://womenhealth.health/api/dr-alex/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"message":"Hello Dr. Alex"}'
```

### 5.3 Database Testing
```sql
-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Test user creation
SELECT count(*) FROM public.users;

-- Test RLS policies
SELECT * FROM public.users; -- Should return only your data
```

## 📊 Step 6: Monitoring & Analytics

### 6.1 Vercel Analytics
```bash
# Enable in Vercel Dashboard
# Monitor performance, errors, and usage
```

### 6.2 Supabase Monitoring
```bash
# Monitor in Supabase Dashboard:
# - Database performance
# - API usage
# - Authentication metrics
# - Storage usage
```

### 6.3 Error Monitoring (Optional)
```bash
# Add Sentry for error tracking
npm install @sentry/nextjs
# Configure in next.config.js
```

## 🚨 Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   ```bash
   # Check environment variables
   echo $NEXT_PUBLIC_SUPABASE_URL
   echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
   
   # Verify project is active in Supabase dashboard
   ```

2. **Authentication Issues**
   ```bash
   # Check redirect URLs in Supabase Auth settings
   # Verify site URL matches deployment URL
   ```

3. **Dr. Alex AI Not Responding**
   ```bash
   # Check Anthropic API key
   # Monitor API usage in Anthropic console
   # Check rate limits
   ```

4. **Database Permission Errors**
   ```sql
   -- Check RLS policies
   SELECT * FROM pg_policies WHERE schemaname = 'public';
   
   -- Test user permissions
   SELECT current_user, session_user;
   ```

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Scaling Considerations

### Database Scaling
- Monitor Supabase metrics
- Consider read replicas for high traffic
- Implement connection pooling
- Optimize queries with indexes

### API Scaling
- Monitor Anthropic API usage and costs
- Implement response caching
- Consider request queuing for high volume
- Set up failover mechanisms

### Frontend Scaling
- Leverage Vercel's global CDN
- Implement proper caching strategies
- Optimize bundle sizes
- Monitor Core Web Vitals

## ✅ Post-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database schema deployed successfully
- [ ] Authentication flow working
- [ ] Dr. Alex AI responding correctly
- [ ] Symptom tracking functional
- [ ] Dashboard loading user data
- [ ] SSL certificates active
- [ ] Domain pointing correctly
- [ ] Monitoring and alerts configured
- [ ] HIPAA compliance verified
- [ ] Performance optimized
- [ ] Error handling tested

## 🆘 Support & Maintenance

### Regular Tasks
- Monitor API usage and costs
- Update dependencies monthly
- Review security logs
- Backup database regularly
- Test disaster recovery procedures

### Emergency Contacts
- Supabase Support: support@supabase.io
- Vercel Support: support@vercel.com
- Anthropic Support: support@anthropic.com

---

🎉 **Congratulations!** Your WomenHealth.Health platform with full backend integration is now live and ready to revolutionize women's healthcare!
