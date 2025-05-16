import React from 'react';

interface InfoSectionsProps {
  title: string;
  addresses: string[];
  phones: string[];
  website: string;
}

function InfoSections({ 
  title, 
  addresses, 
  phones, 
  website 
}: InfoSectionsProps) {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-3 gap-6 font-semibold text-[#8a8a8a]">
  <section className="md:flex-2 rounded">
    <p className="text-[#397e25] text-xl">{title}</p>
    {addresses.map((address, i) => (
      <p key={i}>{address}</p>
    ))}
  </section>

  <section className="md:flex-1 flex flex-col items-start md:items-center justify-center rounded">
    {phones.map((phone, i) => (
      <p key={i}>{phone}</p>
    ))}
  </section>

  <section className="md:flex-1 flex flex-col justify-center rounded">
    <p className="break-all">{website}</p>
  </section>
</div>
  );
}

export default InfoSections;