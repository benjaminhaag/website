import React from 'react'
import { Container } from './pulseui/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faWhatsapp, faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from './Link'

export default function Footer() {
  return (
      <section className="flex bg-gradient-to-l bg-[#161B24]">
        <div className='bg-slate-900/40 w-full'>
          <Container className='flex justify-between my-2 items-center'>
            <div>
             Copyright&copy;2025 - <Link href="https://benjaminhaag.it/">Benjamin Haag</Link>
            </div>
            <ul className='flex gap-1'>
              <li><FontAwesomeIcon icon={faLinkedinIn} className="p-2 rounded hover:text-[#0a66c2]" /></li>
              <li><FontAwesomeIcon icon={faYoutube} className="p-2 rounded hover:text-[#ff0000]" /></li>
              <li><FontAwesomeIcon icon={faInstagram} className="p-2 rounded hover:text-[#e1306c]" /></li>
              <li><FontAwesomeIcon icon={faWhatsapp} className="p-2 rounded hover:text-[#128c7e]" /></li>
              <li><FontAwesomeIcon icon={faGithub} className="p-2 rounded hover:text-[#f5f5f5]" /></li>
            </ul>
          </Container>
        </div>
      </section>
  )
}

