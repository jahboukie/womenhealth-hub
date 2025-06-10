# 🚀 Deployment Guide - WomenHealth.Health

## Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jahboukie/womenhealth-hub)

### Option 2: Manual Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy from Repository**
   ```bash
   vercel --prod
   ```

3. **Configure Domain**
   - Go to Vercel Dashboard
   - Add custom domain: `womenhealth.health`
   - Configure DNS settings

## Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://womenhealth.health
NEXT_PUBLIC_DRALEXAI_URL=https://dralexai.com
```

## Build Commands

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Domain Configuration

### Primary Domain: womenhealth.health
1. Add domain in Vercel dashboard
2. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Embedded Domain: dralexai.com
- Configure as subdomain or separate deployment
- Ensure CORS settings allow embedding

## Performance Optimization

### Automatic Optimizations
- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ Static generation for better performance
- ✅ CDN distribution via Vercel Edge Network

### Manual Optimizations
- Compress images before upload
- Use WebP format for images
- Implement proper caching headers

## SSL Certificate
- Automatically provided by Vercel
- Supports custom domains
- HTTPS enforced by default

## Monitoring & Analytics

### Built-in Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics 4
Add to environment variables:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Security Headers

Already configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## HIPAA Compliance Considerations

### Data Handling
- No PHI stored in frontend
- All sensitive data handled server-side
- Secure API endpoints only

### Compliance Features
- SSL/TLS encryption
- Secure headers
- No client-side data persistence
- Audit logging (server-side)

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Environment Variables**
   - Ensure all required env vars are set
   - Restart deployment after changes

3. **Domain Issues**
   - Check DNS propagation
   - Verify SSL certificate status

### Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/jahboukie/womenhealth-hub/issues

## Post-Deployment Checklist

- [ ] Domain configured and accessible
- [ ] SSL certificate active
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics checked
- [ ] Analytics tracking active
- [ ] SEO meta tags verified
- [ ] HIPAA compliance reviewed

---

🌟 **Your WomenHealth.Health flagship website is ready for the world!**
