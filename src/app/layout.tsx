import { GeistSans } from "geist/font/sans";
// styles
import "@/styles/globals.css";

// context providers
import { SandBoxContextProvider, ThemeContextProvider } from "@/contexts";

// components
import { Navbar } from "./components/molecules";

export const metadata = {
  title: "DryRun",
  description: "dryrun your code snippet in on the go",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <SandBoxContextProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body className="h-screen ">
            <Navbar />
            {children}
          </body>
        </html>
      </SandBoxContextProvider>
    </ThemeContextProvider>
  );
}
