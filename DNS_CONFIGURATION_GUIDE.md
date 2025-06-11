# 🌐 DNS Configuration Guide for WomenHealth.Health

**Complete setup guide for demo.womenhealth.health subdomain**

---

## 🎯 **OBJECTIVE**

Configure `demo.womenhealth.health` to redirect directly to the Dr. Alex AI demo platform for a professional, seamless user experience.

---

## 📋 **CURRENT STATUS**

### **✅ WORKING:**
- **Main Site**: `https://womenhealth.health` → Live and functional
- **Demo Redirect**: `https://womenhealth.health/demo-dralexai` → Working redirect
- **Demo Platform**: `https://dralexai-demo-platform-enfmm4bmh.vercel.app` → Live

### **🔧 NEEDS CONFIGURATION:**
- **Demo Subdomain**: `https://demo.womenhealth.health` → Currently redirects to main site (incorrect)

---

## 🚀 **STEP 1: VERCEL DASHBOARD CONFIGURATION**

### **1.1 Access Demo Project**
1. **Go to**: https://vercel.com/jeremy-browns-projects-378fb2e7/dralexai-demo-platform
2. **Navigate to**: Settings → Domains
3. **Current domains**: Should show the Vercel-generated URL

### **1.2 Add Custom Domain**
1. **Click**: "Add Domain"
2. **Enter**: `demo.womenhealth.health`
3. **Click**: "Add"
4. **Vercel will show**: DNS configuration instructions

### **1.3 Expected Vercel Response**
```
✅ Domain added: demo.womenhealth.health
📋 DNS Configuration Required:

Type: CNAME
Name: demo
Value: cname.vercel-dns.com
TTL: Auto
```

---

## 🌐 **STEP 2: NAMECHEAP DNS CONFIGURATION**

### **2.1 Access Namecheap Dashboard**
1. **Login to**: Namecheap account
2. **Go to**: Domain List
3. **Find**: womenhealth.health
4. **Click**: "Manage"

### **2.2 Navigate to Advanced DNS**
1. **Click**: "Advanced DNS" tab
2. **View**: Current DNS records
3. **Prepare to**: Add new CNAME record

### **2.3 Add Demo Subdomain Record**

**Add this DNS record:**
```
Type: CNAME
Host: demo
Value: cname.vercel-dns.com
TTL: Automatic (or 300 seconds)
```

### **2.4 Complete DNS Configuration**

**Your final DNS records should include:**
```dns
# Root domain
Type: A
Host: @
Value: 76.76.19.19
TTL: Automatic

# WWW subdomain  
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic

# Demo subdomain (NEW)
Type: CNAME
Host: demo
Value: cname.vercel-dns.com
TTL: Automatic
```

---

## ⏱️ **STEP 3: DNS PROPAGATION & VERIFICATION**

### **3.1 Wait for Propagation**
- **Time Required**: 5-15 minutes (can take up to 48 hours)
- **Check Status**: Use online DNS checker tools

### **3.2 Verification Methods**

**Method 1: Browser Test**
```
https://demo.womenhealth.health
Should redirect to demo platform
```

**Method 2: Command Line (Windows)**
```powershell
nslookup demo.womenhealth.health
# Should return Vercel IP addresses
```

**Method 3: Online DNS Checker**
- Use: whatsmydns.net
- Enter: demo.womenhealth.health
- Check: Global propagation status

---

## 🔧 **STEP 4: VERCEL SSL CERTIFICATE**

### **4.1 Automatic SSL**
- **Vercel automatically**: Generates SSL certificates
- **Wait for**: "SSL Certificate Issued" status
- **Verify**: https://demo.womenhealth.health shows secure connection

### **4.2 Troubleshooting SSL**
If SSL doesn't auto-generate:
1. **Go to**: Vercel Dashboard → Settings → Domains
2. **Find**: demo.womenhealth.health
3. **Click**: "Refresh" or "Renew Certificate"

---

## 🎯 **STEP 5: FINAL TESTING**

### **5.1 Complete User Journey Test**
1. **Visit**: https://womenhealth.health
2. **Click**: "Launch Dr. Alex AI Demo"
3. **Should redirect to**: https://demo.womenhealth.health
4. **Verify**: Demo platform loads correctly

### **5.2 Direct Access Test**
1. **Visit**: https://demo.womenhealth.health directly
2. **Should load**: Dr. Alex AI demo platform
3. **Verify**: All demo features work
4. **Check**: Mobile responsiveness

---

## 🚨 **TROUBLESHOOTING**

### **Common Issues & Solutions**

**Issue**: demo.womenhealth.health still redirects to main site
**Solution**: 
- Check DNS propagation (may take time)
- Verify CNAME record is correct
- Clear browser cache

**Issue**: SSL certificate not working
**Solution**:
- Wait 10-15 minutes after DNS propagation
- Refresh SSL in Vercel dashboard
- Check domain verification status

**Issue**: 404 error on demo subdomain
**Solution**:
- Verify domain is added to correct Vercel project
- Check DNS record points to cname.vercel-dns.com
- Ensure no conflicting DNS records

---

## ✅ **SUCCESS CHECKLIST**

### **DNS Configuration:**
- [ ] CNAME record added to Namecheap
- [ ] DNS propagation completed
- [ ] Domain resolves to Vercel servers

### **Vercel Configuration:**
- [ ] Domain added to demo project
- [ ] SSL certificate issued
- [ ] Domain shows as "Active"

### **Functionality Testing:**
- [ ] https://demo.womenhealth.health loads demo platform
- [ ] Main site demo button redirects correctly
- [ ] SSL certificate working (https://)
- [ ] Mobile responsiveness verified

---

## 🎉 **EXPECTED FINAL RESULT**

### **Professional Domain Structure:**
```
https://womenhealth.health          → Main healthcare platform
https://demo.womenhealth.health     → Dr. Alex AI demo platform
https://womenhealth.health/about    → About page
```

### **Seamless User Experience:**
1. **Healthcare providers** visit main site
2. **See compelling demo CTA** with ROI metrics
3. **Click demo button** → Professional loading screen
4. **Redirected to** → https://demo.womenhealth.health
5. **Experience full demo** → Enterprise-grade presentation
6. **Convert to sales lead** → Professional credibility established

---

## 📞 **SUPPORT**

If you encounter issues:
1. **Check**: This guide step-by-step
2. **Verify**: DNS propagation status
3. **Wait**: Up to 48 hours for full propagation
4. **Test**: From different devices/networks

**Your professional healthcare platform will be complete once demo.womenhealth.health is configured!** 🚀
