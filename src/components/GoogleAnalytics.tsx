"use client";

import { useEffect } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XGC7YLGFXE";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;

    const loader = document.createElement("script");
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    loader.dataset.gaId = measurementId;

    const configuration = document.createElement("script");
    configuration.dataset.gaId = measurementId;
    configuration.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `;

    document.head.append(loader, configuration);

    return () => {
      loader.remove();
      configuration.remove();
    };
  }, []);

  return null;
}
