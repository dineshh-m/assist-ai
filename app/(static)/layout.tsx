import Navbar from "../ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>{children}</div>
    </>
  );
}
