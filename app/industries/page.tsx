import Header from '@/components/Header';
import WhoWeAre from '@/components/WhoWeAre';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Industriesanimations from '@/components/Industriesanimations';

export default function IndustriesPage() {
  return (
    <main className='bg-[#F6F1EB]'>
      <Header />
      <div style={{ paddingTop: '70px' }} className='bg-[#F6F1EB]'><WhoWeAre /></div>
        <Industries />
      <Industriesanimations />
      
      <FAQ />
      <Footer />
    </main>
  );
}
