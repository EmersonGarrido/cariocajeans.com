import "styles/globals.css";
export const metadata = {
  title: "Carioca Jeans MS",
  description:
    "As melhores roupas de campo grande ms, calças jeans, camisetas, roupas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
