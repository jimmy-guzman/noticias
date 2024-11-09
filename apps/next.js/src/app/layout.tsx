import "@/styles/globals.css";
import "@noticias/ui/styles.css";

import { NavBar } from "@/components/nav-bar";
import { Tabs } from "@/components/tabs";

export const metadata = {
  description: "news(noticias) aggregator for developers",
  title: "noticias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="md:container md:mx-auto">
          <Tabs />
          <div className="mt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
