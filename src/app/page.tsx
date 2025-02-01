import Hero from '@/components/Hero';
import { Container } from '@/components/pulseui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faWhatsapp, faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import Heading2 from '@/components/Heading2';
import { faHeadset, faLightbulb, faCode, faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Profile from '@media/profile.png';
import Link from '@/components/Link';

export default function HomePage() {

  return (
    <main>
      <Hero />
      <section>
        <div className='mt-16'>
        </div>
        <Container>
          <Heading2>Tailored IT Solutions</Heading2>
          <p>
            We provide tailored IT consulting, cloud solutions, custom development, and digital presence services 
            to help businesses scale, optimize, and stay secure. Whether you need a website, a robust IT 
            infrastructure, or specialized software, we deliver solutions that fit your needs.
          </p>
          <div className='grid grid-cols-2 gap-4 py-10'>
            <div className="p-[1px] rounded bg-[#595959aa] hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary transition duration-300">
              <div className='bg-slate-900 rounded p-4 hover:bg-slate-800 transition duration-300 h-full'>
                <h3 className='text-2xl py-3 font-bold'><FontAwesomeIcon icon={faHeadset} className='pr-3' /> Consulting & Support</h3>
                <p className='pb-3'>
                  We help businesses navigate complex IT landscapes with expert consulting. From IT strategy and 
                  security to cloud optimization and compliance, we provide tailored guidance to ensure your technology 
                  supports your business goals.
                </p>
                <Link href="#" className='text-primary'>Read More <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="p-[1px] rounded bg-[#595959aa] hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary transition duration-300">
              <div className='bg-slate-900 rounded p-4 hover:bg-slate-800 transition duration-300 h-full'>
                <h3 className='text-2xl py-3 font-bold'><FontAwesomeIcon icon={faGlobe} className='pr-3' /> Website & Digital Presence</h3>
                <p className='pb-3'>
                  Your online presence matters. We design and develop high-performance websites, e-commerce platforms,
                  and SEO-optimized digital solutions that enhance visibility, drive engagement, and support business 
                  growth.
                </p>
                <Link href="#" className='text-primary'>Read More <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="p-[1px] rounded bg-[#595959aa] hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary transition duration-300">
              <div className='bg-slate-900 rounded p-4 hover:bg-slate-800 transition duration-300 h-full'>
                <h3 className='text-2xl py-3 font-bold'><FontAwesomeIcon icon={faLightbulb} className='pr-3' /> IT & Cloud Solutions</h3>
                <p className='pb-3'>
                  Scalable, secure, and efficient IT infrastructure is the backbone of modern business. We offer cloud 
                  hosting, IT automation, security solutions, and system integrations to keep your operations running 
                  smoothly and securely.
                </p>
                <Link href="#" className='text-primary'>Read More <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="p-[1px] rounded bg-[#595959aa] hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary transition duration-300">
              <div className='bg-slate-900 rounded p-4 hover:bg-slate-800 transition duration-300 h-full'>
                <h3 className='text-2xl py-3 font-bold'><FontAwesomeIcon icon={faCode} className='pr-3' /> Custom Development</h3>
                <h3>Custom Development</h3>
                <p className='pb-3'>
                  We build tailored software, applications, and backend systems to fit your specific needs. Whether 
                  it's web or app development, secure messaging, or scalable APIs, our custom solutions bring your 
                  ideas to life with reliability and performance in mind.
                </p>
                <Link href="#" className='text-primary'>Read More <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
          </div>
        </Container>
      </section> 
      <section className="flex bg-gradient-to-l from-[#161B24] via-primary to-secondary">
        <div className='bg-slate-900/40 w-full'>
          <Container className='text-3xl font-black flex justify-between my-6 items-center'>
            <div>
              Follow Me
            </div>
            <ul className='flex gap-2'>
              <li><FontAwesomeIcon icon={faLinkedinIn} className="p-2 rounded hover:text-[#0a66c2]" /></li>
              <li><FontAwesomeIcon icon={faYoutube} className="p-2 rounded hover:text-[#ff0000]" /></li>
              <li><FontAwesomeIcon icon={faInstagram} className="p-2 rounded hover:text-[#e1306c]" /></li>
              <li><FontAwesomeIcon icon={faWhatsapp} className="p-2 rounded hover:text-[#128c7e]" /></li>
              <li><FontAwesomeIcon icon={faGithub} className="p-2 rounded hover:text-[#333]" /></li>
            </ul>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <Heading2>Benjamin Haag</Heading2>
          <div className='flex gap-6'>
            <div>
              <div className='relative w-[200px] h-[200px]'>
                <Image alt="Benjamin Haag" className='rounded-full' src={Profile} layout="fill" objectFit='cover' objectPosition='center' />
              </div>
            </div>
            <div>
              <p className='pb-4'>
                I’m an expert in IT solutions, cloud infrastructure, and secure software development, helping businesses 
                leverage cutting-edge technologies to scale efficiently. Through benjaminhaag.it, I provide consulting, 
                development, and IT services tailored to startups and growing companies. My expertise spans cloud solutions, 
                web and app development, IT security, and digital infrastructure, ensuring businesses get the right tools 
                to succeed.
              </p>
              <p>
                Beyond consulting and development, I’m passionate about teaching and mentoring. I help individuals and 
                teams understand modern IT practices, cloud technologies, and software development, bridging the gap between 
                theory and real-world application. Whether through hands-on guidance or strategic advice, I empower others 
                to build, scale, and secure their own technology-driven projects.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
