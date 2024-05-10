import '@/app/ui/global.css'
import {jetbrainsMono} from "@/app/ui/fonts";
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} Cumulative Layout Shift (CLS)`}>{children}</body>
    </html>
  );
}
