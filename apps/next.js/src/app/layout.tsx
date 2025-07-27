import "@/styles/globals.css";

import { NavBar } from "@/components/nav-bar";

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
      <body className="md:container md:mx-auto">
        <NavBar />
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
