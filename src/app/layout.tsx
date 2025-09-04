import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import {
  DOCUMENTATION_DESCRIPTION,
  ORG_NAME,
  DOCUMENTATION_GITHUB_REPO_URL,
} from "@/constants/application";

export const metadata: Metadata = {
  title: ORG_NAME,
  description: DOCUMENTATION_DESCRIPTION,
};

const banner = (
  <Banner storageKey="some-key">{ORG_NAME} documentation is released 🎉</Banner>
);
const navbar = <Navbar logo={<b>{ORG_NAME}</b>} />;
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © {ORG_NAME}.
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          sidebar={{ autoCollapse: true }}
          navigation={{
            prev: true,
            next: true,
          }}
          pageMap={await getPageMap()}
          docsRepositoryBase={DOCUMENTATION_GITHUB_REPO_URL}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
