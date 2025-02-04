import { Container } from '@/components/pulseui/Container';
import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      { children }
    </Container>
  )
}

