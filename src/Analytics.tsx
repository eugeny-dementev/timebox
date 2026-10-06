import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type AnalyticsWindow = Window & {
  umami?: {
    track: (payload: (properties: Record<string, unknown>) => Record<string, unknown>) => Promise<unknown>;
  };
};

export default function Analytics() {
  const { pathname, search, hash } = useLocation();
  const previousUrl = useRef<string | null>(null);

  useEffect(() => {
    const trackPageview = () => {
      const tracker = (window as AnalyticsWindow).umami;
      const url = window.location.href;
      if (typeof tracker?.track !== 'function' || previousUrl.current === url) return;

      const referrer = previousUrl.current?.slice(window.location.origin.length);
      // Deduplicate Strict Mode effects and the tracker load callback.
      previousUrl.current = url;
      try {
        tracker.track(properties => ({
          ...properties,
          url,
          referrer: referrer ?? properties.referrer,
        })).catch(() => {});
      } catch {
        // Navigation keeps working when analytics is unavailable.
      }
    };

    const script = document.getElementById('umami-tracker');
    script?.addEventListener('load', trackPageview);
    trackPageview();
    return () => script?.removeEventListener('load', trackPageview);
  }, [pathname, search, hash]);

  return null;
}
