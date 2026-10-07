import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";
import { LightRays } from "@/components/shadcnui/light-rays";
import { DotPattern } from "@/components/shadcnui/dot-pattern";
import { cn } from "@/lib/utils";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body className="scrollbar-none">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <NavBar />
          <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
