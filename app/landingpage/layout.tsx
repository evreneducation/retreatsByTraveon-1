import type { Metadata } from 'next';
// import './landing-styles.css'; // Your landing page CSS

export const metadata: Metadata = {
  title: 'Retreats by Traveon',
  description: 'Discover amazing retreat experiences with Traveon',
  icons: [{ rel: "icon", url: "/fl.avif" }],
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}