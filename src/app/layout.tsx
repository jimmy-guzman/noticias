import { NavBar } from "@/components/molecules";
import "@/styles/globals.css";

export const metadata = {
  title: "noticias",
  description: "news(noticias) aggregator for developers",
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
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
