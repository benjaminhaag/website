'use client'
import React from 'react'
import { usePostHog } from 'posthog-js/react'
import { Button } from './ui/button';

export default function OptOut() {
  
  const posthog = usePostHog()
  
  if (posthog.has_opted_out_capturing()) {
    return (
      <Button onClick={() => {console.log("opt in"); posthog.opt_in_capturing();console.log(posthog.has_opted_out_capturing())}}>
        Enable Tracking
      </Button>
    );
  }

  return (
    <Button onClick={() => {console.log("opt out"); posthog.opt_out_capturing(); console.log(posthog.has_opted_out_capturing());}}>
      Disable Tracking
    </Button>
  )
}

