import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
};

export function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn('mx-auto max-w-screen-xl w-full my-12', className)}>
            {children} 
        </div>
    );
}
