import { Heading1 } from '@/components/Headings'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Heading1>Site Notice</Heading1>
      <div className='prose prose-invert max-w-full'>
        
        <p>Benjamin Haag<br />
        Pestalozzistra&szlig;e, 26<br />
        90429 N&uuml;rnberg</p>
        
        <h2>Contact</h2>
        <p>Phone: 015202164001<br />
        E-mail: info@benjaminhaag.it</p>
        
        <h2>VAT ID</h2>
        <p>Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
        DE420028328</p>
        
        <h2>Person responsible for editorial</h2>
        <p>Benjamin Haag<br />
        Pestalozzistra&szlig;e 26<br />
        90429 N&uuml;rnberg<br />
        Germany</p>
        
        <h2>EU dispute resolution</h2>
        <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Our e-mail address can be found above in the site notice.</p>
        
        <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2>
        <p>We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>
        
        <h2>Central contact point according to the Digital Services Act - DSA (Regulation (EU) 2022/265)</h2>
        <p>You can reach our central contact point for users and authorities in accordance with Art. 11, 12 DSA as follows:</p>
        <p>E-mail: info@benjaminhaag.it<br />
        Phone: 015202164001
        </p>
        <p>The languages available for contact are: German, English.</p>
      </div>
    </div>
  )
}

