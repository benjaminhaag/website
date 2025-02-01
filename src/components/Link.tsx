import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cn } from '@/lib/utils';

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>;


export default function Link({ children, className, ...props }: LinkProps) {
    return (
        <NextLink className={cn('pb-0 hover:pb-1 hover:border-b border-primary transition-all duration-75', className)} {...props}>{children}</NextLink >
    )
}
