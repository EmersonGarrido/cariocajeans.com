import "styles/globals.css";
export const metadata = {
  title: "Carioca Jeans MS",
  description:
    "Rede Carioca Jeans | Campo Grande - MS 🏝️ Desfrute à Melhor experiência em Jeans 🏝️ Veja qual Loja fica mais perto de Você",
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
