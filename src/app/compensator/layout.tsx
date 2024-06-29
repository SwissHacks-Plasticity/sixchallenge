export default function CompensatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen background-gradient-green justify-center">{children}</main>
  );
}
