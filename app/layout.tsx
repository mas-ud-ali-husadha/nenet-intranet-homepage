import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/Sidebar/app-sidebar';
import Header from '@/components/layout/Header/header';

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
});

const jakartaMono = Plus_Jakarta_Sans({
  variable: '--font-jakarta-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nenet Intranet - Homepage',
  description:
    'Nenet is the central intranet platform for employees to access internal tools, updates, and resources efficiently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${jakartaMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col w-full md:flex-row">
              <SidebarInset>
                <Header />
                {children}
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
