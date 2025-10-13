import "./globals.css";
import Script from "next/script";
import GlobalInitializer from "../components/GlobalInitializer";

export const metadata = {
  title: "Voltcoreenergypvtltd",
  description: "Voltcoreenergypvtltd",
  icons: {
    icon: '/images/icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="author" />

        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/plugins.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/swiper.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/colors/scheme-1.css" />
        <style>{`
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}</style>
      </head>
      <body>
        {children}
        <GlobalInitializer />

        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/swiper.js" strategy="beforeInteractive" />
        <Script src="/js/designesia.js" strategy="lazyOnload" />
        <Script src="/js/custom-swiper-1.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
        
        {/* Service worker cleanup script */}
        <Script
          id="service-worker-cleanup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                // Unregister any existing service workers to prevent caching issues
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                }).catch(function(error) {
                  console.log('Error getting service worker registrations:', error);
                });
                
                // Clear any existing caches
                if ('caches' in window) {
                  caches.keys().then(function(cacheNames) {
                    cacheNames.forEach(function(cacheName) {
                      caches.delete(cacheName);
                    });
                  }).catch(function(error) {
                    console.log('Error clearing caches:', error);
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}