// Analytics service - Google Analytics, Microsoft Clarity

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

// Track page view
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

// Track custom event
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track lead form submission
export function trackLeadSubmission(serviceType: string) {
  trackEvent({
    action: "submit_lead",
    category: "Lead",
    label: serviceType,
  });
}

// Track CTA click
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    action: "click_cta",
    category: "CTA",
    label: `${ctaName} - ${location}`,
  });
}

// Track service view
export function trackServiceView(serviceType: string) {
  trackEvent({
    action: "view_service",
    category: "Service",
    label: serviceType,
  });
}

// Google Analytics script
export function getGAScript() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
}

// Microsoft Clarity script
export function getClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  if (!clarityId) return null;

  return `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `;
}
