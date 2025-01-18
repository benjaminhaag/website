import Hero from '@/components/Hero';
import { LoremIpsum } from '@/components/LoremIpsum'
import { Container } from '@/components/pulseui/Container';
import Lightbox from '@/components/pulseui/Lightbox';

export default function HomePage() {

  return (
    <main>
      <Hero />
      <section>
        <div className='mt-16'>
        </div>
        <Container>
          <LoremIpsum />
          <LoremIpsum />
        </Container>
      </section> 
    </main>
  );
}
