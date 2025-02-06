import React from 'react'
import { Container } from './pulseui/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from './Link'
import NextLink from 'next/link';

export default function Footer() {
  return (
      <section className="flex bg-gradient-to-l bg-[#161B24]">
        <div className='bg-slate-900/40 w-full'>
          <Container className='flex flex-col gap-4 md:flex-row justify-between my-2 items-center'>
            <div>
             Copyright&copy;2025 - <Link href="https://benjaminhaag.it/">Benjamin Haag</Link>
            </div>
            <ul className='flex gap-4 flex-col md:flex-row items-center'>
              <li><Link href="/legal/imprint">Imprint</Link></li>
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            </ul>
            <ul className='flex gap-1'>
              <li><NextLink href="https://www.linkedin.com/in/haagbenjamin" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className="p-2 rounded hover:text-[#0a66c2]" /></NextLink></li>
              {/*<li><FontAwesomeIcon icon={faYoutube} className="p-2 rounded hover:text-[#ff0000]" /></li>
              <li><FontAwesomeIcon icon={faInstagram} className="p-2 rounded hover:text-[#e1306c]" /></li>
              <li><FontAwesomeIcon icon={faWhatsapp} className="p-2 rounded hover:text-[#128c7e]" /></li>*/}
              <li><NextLink href="https://github.com/benjaminhaag" target='_blank'><FontAwesomeIcon icon={faGithub} className="p-2 rounded hover:text-[#333]" /></NextLink></li>
            </ul>
          </Container>
        </div>
      </section>
  )
}

