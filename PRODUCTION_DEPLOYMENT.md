# 🚀 Production Deployment Guide - WomenHealth.Health

**Vercel + Supabase Marketplace Integration**

## 🎯 Quick Deployment Steps

### 1. **Prepare Repository**
```bash
# Ensure all changes are committed
git add .
git commit -m "Production deployment preparation"
git push origin main
```

### 2. **Deploy to Vercel**
Since you have Supabase managed through Vercel Marketplace, deployment is streamlined:

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set project name: womenhealth-flagship-website
# - Set framework: Next.js
# - Set root directory: ./
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub repository
4. Configure project settings

### 3. **Environment Variables (Auto-configured)**
Your Vercel-managed Supabase will automatically provide:
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE_KEY`

**Additional variables to add in Vercel Dashboard:**

#### Required for Dr. Alex AI:
```env
ANTHROPIC_API_KEY=your_anthropic_api_key
```

#### Security (Generate secure random strings):
```env
JWT_SECRET=your_secure_jwt_secret_minimum_32_characters
ENCRYPTION_KEY=your_secure_encryption_key_minimum_32_characters
```

#### Application URLs:
```env
NEXT_PUBLIC_APP_URL=https://womenhealth.health
NEXT_PUBLIC_DRALEXAI_DEMO_URL=https://demo.womenhealth.health
```

### 4. **Domain Configuration**
1. In Vercel Dashboard → Project Settings → Domains
2. Add custom domain: `womenhealth.health`
3. Add www redirect: `www.womenhealth.health` → `womenhealth.health`
4. Vercel will provide DNS instructions

### 5. **Supabase Database Setup**
Since your Supabase is managed through Vercel:

1. **Access Supabase Dashboard** through Vercel integrations
2. **Run database migrations** (if any)
3. **Set up authentication** providers if needed
4. **Configure RLS policies** for security

## 🎭 Demo Platform Deployment

### Deploy Demo Platform (Required)
```bash
# Deploy demo platform as separate Vercel project
cd demo-platform
./deploy-demo.ps1
# OR manually:
vercel --prod
```

### Configure Demo Domain
1. **In Vercel Dashboard** → Demo Project → Settings → Domains
2. **Add domain**: `demo.womenhealth.health`
3. **Configure DNS** as instructed by Vercel
4. **Verify SSL** certificate is active

### Update Main Platform
After demo platform is live, update main platform environment:
```env
NEXT_PUBLIC_DRALEXAI_DEMO_URL=https://demo.womenhealth.health
```

## 🔒 Security Checklist

### Environment Variables:
- ✅ All sensitive keys in Vercel environment variables
- ✅ No secrets in code repository
- ✅ Production URLs configured
- ✅ JWT secrets are secure random strings

### Supabase Security:
- ✅ Row Level Security (RLS) enabled
- ✅ API keys properly scoped
- ✅ Database access restricted
- ✅ Authentication configured

### Application Security:
- ✅ HTTPS enforced (automatic with Vercel)
- ✅ Security headers configured (in vercel.json)
- ✅ CORS properly configured
- ✅ Input validation on all endpoints

## 📊 Post-Deployment Testing

### 1. **Functionality Tests:**
```bash
# Test main site
curl -I https://womenhealth.health

# Test API endpoints
curl https://womenhealth.health/api/health

# Test demo redirect
curl -I https://womenhealth.health/demo-dralexai
```

### 2. **Performance Tests:**
- ✅ Lighthouse score > 90
- ✅ Core Web Vitals passing
- ✅ Mobile responsiveness
- ✅ Load time < 3 seconds

### 3. **Security Tests:**
- ✅ SSL certificate valid
- ✅ Security headers present
- ✅ No sensitive data exposed
- ✅ Authentication working

## 🚀 Go-Live Checklist

### Pre-Launch:
- [ ] All environment variables configured
- [ ] Database migrations completed
- [ ] Demo platform deployed
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Performance optimized

### Launch:
- [ ] Deploy to production
- [ ] Verify all functionality
- [ ] Test user journeys
- [ ] Monitor error logs
- [ ] Confirm analytics tracking

### Post-Launch:
- [ ] Monitor performance metrics
- [ ] Check error rates
- [ ] Verify demo conversions
- [ ] Update documentation
- [ ] Notify stakeholders

## 🎯 Expected Results

After deployment, you'll have:

✅ **Production website** at `https://womenhealth.health`  
✅ **Demo platform** at `https://demo.womenhealth.health`  
✅ **Full backend integration** with Supabase  
✅ **AI-powered features** with Anthropic  
✅ **Enterprise-ready** security and performance  
✅ **Scalable architecture** for millions of users  

## 🆘 Troubleshooting

### Common Issues:
1. **Build failures** → Check TypeScript errors
2. **Environment variables** → Verify in Vercel dashboard
3. **Database connection** → Check Supabase integration
4. **Domain issues** → Verify DNS configuration

### Support Resources:
- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**🎉 Ready to revolutionize healthcare? Let's deploy!** 🚀
