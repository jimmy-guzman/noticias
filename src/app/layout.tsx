import Layout from "@/components/layout";
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
