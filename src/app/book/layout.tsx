import Header from '@/components/Header';

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="internal" />
      {children}
    </>
  );
}