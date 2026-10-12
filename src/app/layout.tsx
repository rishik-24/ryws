import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { DotPattern } from "@/components/shadcnui/dot-pattern";
import { geistMono, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body className="relative min-h-screen scrollbar-none">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "fixed inset-0 text-neutral-400/40 dark:text-neutral-500/25",
            "mask-[linear-gradient(to_bottom,white,transparent_85%)]",
          )}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <NavBar />
          <main className="relative mx-auto max-w-7xl px-6 pt-19 pb-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
