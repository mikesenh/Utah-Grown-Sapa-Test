'use client';
import FAQToggle from "@/components/FAQToggle";
import InfoCard from "@/components/InfoCard";
import InfoSections from "@/components/InfoSections";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
<ResponsiveHeader />
    <div className="mx-5">
      <h3 className="text-center mb-10 mt-3 text-2xl text-[#084502] font-proximanova">Utah&#39;s Cannabis Community</h3>
      <h1 className="text-center text-4xl text-[#084502] font-bold font-proximanova">Upcoming Utah Medical Card Events</h1>
      
<InfoCard
  location="Downtown SLC"
  date="Tuesday, October 3rd 2023"
  timeInfo={"9:00 am - 2:00pm\nNew Patients and Renewals"}
  buttonLabel="Book Time"
  onButtonClick={() => {}}
/>

<InfoCard
  location="Price UT"
  date="Thursday, October 19th 2023"
  timeInfo={"9:00 am - 4:00pm\nRenewals Only"}
  buttonLabel="Book Time"
  onButtonClick={() => {}}
/>

<InfoCard
  location="<Other Location>"
  date="Friday, November 10th 2023"
  timeInfo={"10:00 am - 2:00pm\nSpecial Event for Veterns"}
  buttonLabel="Book Time"
  onButtonClick={() => {}}
/>

<h1 className="text-center text-3xl text-[#084502] font-bold mt-12 font-proximanova">Things to know before your appointment</h1>

 <div className="mx-auto mt-10 max-w-4xl">
  
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
<div className="bg-[#397e25] text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
  1.
</div>
          <h2 className="text-xl font-semibold text-[#397e25]">You&#39;re going to register with the state of Utah. You can start this before you arrive</h2>
        
        </div>


    </div>

<div className="flex flex-col items-start gap-4 ml-20 mt-5">
  <div className="flex items-center gap-x-4">
    <button
      className="cursor-pointer bg-[#ead0b7] text-normal flex-shrink-0 basis-[160px] text-[#397e25] py-2 rounded-full hover:bg-[#397e25] hover:text-white transition"
    >
      UtahID.org
    </button>
    <span className="text-[#397e25] font-bold">Obtain access to your Utah Digital ID</span>
  </div>
  <div className="flex items-center gap-x-4">
    <button
      className="cursor-pointer bg-[#ead0b7] text-normal flex-shrink-0 basis-[160px] text-[#397e25] py-2 rounded-full hover:bg-[#397e25] hover:text-white transition"
    >
      EVS.Utah.gov
    </button>
    <span className="text-[#397e25] font-bold">Fill out all the fields until you get to “Awaiting Certification” status</span>
  </div>

  <Image
    src="/base/awaitingcert_image.webp"
    alt="Awaiting Certificate utah grown"
    width={256}
    height={108}
    className="mt-4 ml-20 med:ml-30 xl:ml-40"
  />
</div>
</div>

<div className="mx-auto mt-10 max-w-4xl">
  <div className="flex space-x-6">
    {/* Left side: Circle and heading */}
    <div className="flex items-start space-x-4">
      <div className="bg-[#397e25] text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
        2.
      </div>
      <h2 className="text-xl font-semibold text-[#397e25] mt-3">
        Check in with your QMP
      </h2>
    </div>

    {/* Right side: List content */}
    <div className="text-[#397e25] font-semibold text-normal ml-2 mt-1">
      <ol className="list-decimal list-inside space-y-2 pl-4">
        <li>QMP Registration</li>
        <li>Medical Evaluation/Consultation</li>
        <li>Payment</li>
      </ol>
    </div>
  </div>
</div>

<div className="mx-auto mt-10 max-w-4xl">
  <div className="flex space-x-4">
    <div className="flex items-start space-x-4">
  <div className="bg-[#397e25] text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
    3.
  </div>
  <h2 className="text-xl font-semibold text-[#397e25] mt-3">
    Renewal or New Patient?
  </h2>
</div>
    <ol className="list-decimal list-inside space-y-2 text-[#397e25] font-semibold text-normal ml-7">
       <p className="mb-4 text-normal">
    If this is a renewal, <span className="font-bold">congratulations you are ready to shop...</span>
  </p>
  <p className="mb-4 text-normal">
    If you are a new patient, here are some helps to get you started...
  </p>
  <ol className="list-decimal list-inside space-y-2 mb-4 ml-20">
    <li>Meet with Pharmacist</li>
    <li>Set up your Portal Account</li>
    <li>Start Shopping</li>
  </ol>
  <p className="text-[#397e25] text-normal">
    **Don&#39;t forget to take advantage of new patient deals
  </p>
    </ol>
  </div>
</div>

 <Image
        src="/base/mockbannerad.webp"
        alt="Banner advertisement utah grown"
        width={1181}
        height={286}
        className="rounded-lg w-full h-auto max-w-6xl mx-auto my-10"
      />

   <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/base/consultation.webp"
            alt="Banner Advertisement utah grown"
            width={800}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#084502] font-proximanova">Utah Medical Cards</h2>
            <p className="mb-4 text-lg text-[#8a8a8a]">
              A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows
              qualified patients to legally purchase and use medical cannabis for the treatment of specific medical conditions.
              In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries.
              Having a medical card does not allow you to possess any cannabis product but only the products you purchased
              under your PAT (Medical Card ID number).
            </p>
          </div>
        </div>
      </div>
    </div>


<div className="hidden lg:block relative w-full max-w-6xl mx-auto my-10">
  {/* Image */}
  <Image
    src="/base/review_banner_2x.webp"
    alt="Banner advertisement utah grown"
    width={1182}
    height={180}
    className="rounded-lg w-full h-auto"
  />

  {/* Overlay Text + Button */}
  <div className="absolute inset-0 flex items-center pl-6 sm:pl-10 ml-5">
    <div className="text-white max-w-md">
      <h2 className="text-3xl font-bold mb-4">
        We’d love to hear from you!
      </h2>
      <button
        className="cursor-pointer bg-[#ead0b7] text-xl text-[#084502] px-8 py-3 rounded-full hover:bg-[#397e25] hover:text-white transition"
      >
        Review us here!
      </button>
    </div>
  </div>
</div>
    
<div className="mx-auto max-w-6xl px-4 py-8">
 <FAQToggle />
</div>

<div className="mx-auto max-w-6xl px-4 py-8">
  <h1 className="text-4xl font-bold mb-4 text-[#084502] font-proximanova">
    Utah Medical Cannabis Pharmacies
  </h1>
 <InfoSections
  title="Dragonfly Wellness"
  addresses={[
    "711 South State Street, Salt Lake City UT 84111",
    "20 Main Street, Price UT 84501"
  ]}
  phones={["801-413-6945", "435-637-3770"]}
  website="https://dragonflywellness.com/"
/>
<button
      className="bg-[#ead0b7] px-7 text-normal text-[#397e25] py-2 rounded-full transition"
    >
      New Patient Specials
    </button>
<InfoSections
  title="Bloc Pharmacy"
  addresses={[
    "10392 South Jordan Gateway South Jordan UT 84095",
    "1624 S Convention Center Dr. St. George UT 84790 "
  ]}
  phones={["385-249-9400", "435-216-3400"]}
  website="https://www.blocdispensary.com/"
/>
<InfoSections
  title="Beehive Farmacy"
  addresses={[
    "1991 S 3600 W Salt Lake City UT 84004",
    "870 W 1150 S Suite C Brigham City UT 84032"
  ]}
  phones={["385-212-0088", "435-919-0966"]}
  website="https://beehivefarmacy.com/"
/>
<InfoSections
  title="Cannabist"
  addresses={[
    "484 South 1750 West Springville UT 84663",
  ]}
  phones={["385-327-0922"]}
  website="https://www.gocannabist.com/"
/>
<InfoSections
  title="Curaleaf"
  addresses={[
    "3633 N Thanksgiving Way, Lehi UT 84043",
    "1351 Kearns Blvd Suite 110-B Park City UT 84060","222 N Draper Ln Provo UT 84601","757 S 1040 W Payson UT 846"
  ]}
  phones={["385-338-8010", "435-252-1052", "801-872-7447", "385-404-4422"]}
  website="https://curaleaf.com/"
/>
<InfoSections
  title="The Flower Shop"
  addresses={[
    "3775 S Wall Ave South Odgen UT 84405",
    "2150 N Main St. Suite 1 North Logan UT 84341"
  ]}
  phones={["385-289-1800", "385-289-1800"]}
  website="https://theflowershopusa.com/"
/>
<InfoSections
  title="WholesomeCo"
  addresses={[
    "580 W 100 N Suite 1, West Bountiful UT 84010",
  ]}
  phones={["801-695-4480"]}
  website="https://www.wholesome.co/"
/>
<InfoSections
  title="Zion Medicina"
  addresses={[
    "301 S Main St. Cedar City UT 84720",
  ]}
  phones={["435-244-4485"]}
  website="https://www.zionmed.com/"
/>
</div>
    
 <section className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
      {/* Text (Left) */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-[#084502] font-proximanova">About Utah Grown</h2>
        <p className="text-[#8a8a8a] text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
consequat, vel illum dolore.
        </p>
 <h2 className="text-3xl font-bold mt-20 text-[#084502] font-proximanova">Utah Grown Office</h2>
 <p className="text-xl font-bold text-[#8a8a8a]">730 State Street <br/>
Salt Lake City, Utah 84111</p>
      </div>

      {/* Image (Right) */}
      <div className="md:w-1/2">
        <Image
          src="/base/normalizeitutah.webp"
          alt="#normalizeitutah"
          width={663}
          height={893}
          className="w-full rounded-2xl"
        />
      </div>
    </section>

    
    </div>

    <div className="w-full bg-white border-t-4 border-[#397e25] my-3"> 
  <div className="flex items-end max-w-6xl mx-auto">
    <Image
      src="/base/UtahGrownLogoWhiteBorder.svg"
      alt="Utah Grown Logo"
            width={692}
            height={334}
      className="w-55 h-auto object-contain"
    />
    <span className="text-base text-[#084502] ml-10 font-proximanova">
      Utah&#39;s Cannabis Community
    </span>
  </div>
</div>

<footer className="w-full bg-[#084502] pb-12">
      <div className="max-w-6xl mx-auto flex justify-end items-center gap-4 px-4 py-4 text-white">
        <span className="text-sm">&copy;2023 All Rights Reserved.</span>
        <a href="/privacy" className="text-sm underline ">
          Privacy Policy
        </a>
        <a href="/terms" className="text-sm underline ">
          Terms of Service
        </a>
      </div>
    </footer>

    </>
  );
}
