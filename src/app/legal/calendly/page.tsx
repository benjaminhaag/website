import { Heading1 } from '@/components/Headings'
import React from 'react'
import Link from '@/components/Link';
import NextLink from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <Heading1>Book a Call - Your Privacy Matters</Heading1>
      <p className='pb-6'>
        We use <b>Calendly</b> to streamline the scheduling process,
        and once you book a meeting, it will be added to our <b>Google&nbsp;Calendar</b>.
        To ensure a smooth experience, we use <b>Google&nbsp;Meet</b> for video calls.
        As part of this process, some of your personal information 
        (such as your name and email) will be processed by these 
        services. If you don&apos;t consent to this no problem. You can
        also call <Link className='text-primary' href="tel:+4915202164001">+49&nbsp;152&nbsp;02164001</Link>,
        or write an email to <Link className='text-primary' href="mailto:info@benjaminhaag.it">info@benjaminhaag.it</Link>.
      </p>
            <Button disabled className='p-4 pt-5 text-xl font-normal' variant="secondary" asChild>
              <NextLink target='_blank' href="https://calendly.com/benjaminhaagit/meetngreet">
                I Agree & Proceed 
              </NextLink>
            </Button>
    </div>
  )
}

