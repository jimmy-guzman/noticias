import { NavBar } from "@/components/molecules";
import "@/styles/globals.css";

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
        <main className="md:container md:mx-auto">{children}</main>
      </body>
    </html>
  );
}
