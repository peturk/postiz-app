import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../global.scss';

export const metadata: Metadata = {
  title: {
    default: 'OutOfCow Postiz',
    template: '%s | OutOfCow Postiz',
  },
  description: 'Legal information for the OutOfCow Postiz service.',
  icons: {
    icon: '/outofcow-postiz-meta-icon.png',
  },
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark min-h-screen bg-[#0e0e0e] font-sans text-white">
        {children}
      </body>
    </html>
  );
}
