import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from './pulseui/Container';

export function NavBar() {
    return (
        <nav className='h-16 w-full bg-background/60 fixed top-0 border-b px-a backdrop-blur shadow-xl z-50'>
            <Container className='h-full flex items-center justify-between my-0'>
                <div className='font-bold text-xl'>
                    <Link href="/">
                        BenjaminHaag.IT
                    </Link>
                </div>
                <ul className='hidden md:flex space-x-4 items-center'>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
                <ModeToggle />
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
