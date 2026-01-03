import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TutorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="internal" />
      {children}
      <Footer />
    </>
  );
}