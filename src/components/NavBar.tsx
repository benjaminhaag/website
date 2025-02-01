import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import NextLink from 'next/link';


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from './pulseui/Container';
import { Button } from './ui/button';
import Link from './Link';

export function NavBar() {
    return (
        <nav className='h-16 w-full bg-background/30 fixed top-0 border-b px-a backdrop-blur shadow-xl z-50'>
            <Container className='h-full flex items-center justify-between my-0'>
                <div className='font-bold text-xl w-2/12'>
                    <NextLink href="/">
                        BenjaminHaag<span className='text-secondary'>.</span><span className='text-primary'>IT</span>
                    </NextLink>
                </div>
                <ul className='hidden md:flex space-x-4 items-center justify-center w-8/12 gap-12'>
                <li><Link href="tel:+4915202164001"><FontAwesomeIcon className='pr-1' icon={faPhone} size='xs'/> +49 152 02164001</Link></li>
                    <li><Link href="mailto:info@benjaminhaag.it"><FontAwesomeIcon icon={faEnvelope} className='pr-1' size='xs'/> info@benjaminhaag.it</Link></li>
                </ul>
                <div className='w-2/12 flex justify-end'>
                <Button className='p-1 px-4 pt-2 border-secondary' variant="outline" asChild>
                  <NextLink href="/#contact">
                    Book a Call
                  </NextLink>
                </Button>
                </div>
                <ul className='md:hidden flex w-full justify-end space-x-4 items-center'>

                    <Sheet>
                        <SheetTrigger>
                            <HamburgerMenuIcon className='size-7' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </ul>
            </Container>
        </nav>
    );
}
