import Authguard from "@/components/auth/authguard";
import "./globals.scss";

import { Providers } from "@/redux/provider";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>
            <Authguard>{children}</Authguard>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
