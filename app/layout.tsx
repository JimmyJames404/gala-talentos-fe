import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gala de Talentos y Fe — Control en Vivo",
  description: "Sistema gráfico de producción en vivo para el Decimotercer Sábado.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
