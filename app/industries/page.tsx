import Header from '@/components/Header';
import WhoWeAre from '@/components/WhoWeAre';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Industriesanimations from '@/components/Industriesanimations';

export default function IndustriesPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '70px' }}><WhoWeAre /></div>
        <Industries />
      <Industriesanimations />
      
      <FAQ />
      <Footer />
    </main>
  );
}
