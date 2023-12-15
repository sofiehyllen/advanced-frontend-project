// KODET AF KAROLINE LERCHE & SOFIE HYLLEN

// Denne fil indeholder en React-komponent for AboutPage
// Komponenten bruger SortSection, motion fra 'framer-motion', og ikoner fra 'react-icons'
// pageFade-animationen anvendes til at animere sidens indhold
import React from 'react';
import SortSection from '../components/SortSection'; // Importer SortSection-komponenten
import { motion } from 'framer-motion'; // Importer motion fra 'framer-motion' til animationer
import { BsFacebook } from 'react-icons/bs'; // Importer Facebook-ikonet fra 'react-icons'
import { AiFillInstagram } from 'react-icons/ai'; // Importer Instagram-ikonet fra 'react-icons'
import { pageFade } from '../components/Animations'; // Importer pageFade-animationen fra 'Animations'

// AboutPage-komponenten indeholder information om frisørsalonen og teamet
export default function AboutPage() {
  return (
    <motion.section variants={pageFade} initial='hidden' animate='visible'>
      {/* Sektion med information om frisørsalonen og dens ejer */}
      <div className='md:flex'>
        <div className='pt-5 md:p-0'>
          <h2 className='heading3'>MØD OS</h2>
          <br />
          <h1 className='title1'>Tryllespejlet, din favorit frisør i Ålbæk.</h1>
        </div>
        <div className='v-line'></div>

        <div className='md:order-2 md:pl-5 xl:w-full'>
          <p className='bodytext1 pt-5'>
            Velkommen til din lokale frisørsalon i hjertet af Ålbæk, hvor skønhed og stil forenes. Vi er stolte af at være din nære og personlige frisør, ledet af ejeren Pernille Thomsen.
            <br />
            <br />
            Hos os kombineres ekspertise med en varm atmosfære, og vores dedikerede team af stylister er klar til at skabe den perfekte frisure, der passer til netop dig. Oplev den unikke charme i vores salon, hvor dit hår er i trygge hænder.
            <br />
            <br />
            Vores team består af erfarne frisører, dygtige barberere og dedikerede kosmetologer, der alle deler en passion for skønhed og håndværk.
          </p>
        </div>
      </div>

      {/* Vandret streg mellem sektioner */}
      <div className='h-line'></div>

      {/* Sektion med information om salonens ansatte */}
      <div>
        <div>
          <h2 className='heading3'>HVEM ER VI?</h2>
          <br />
          <h1 className='title1'>Vores ansatte</h1>
          <p className='bodytext1 max-w-2xl pt-5'>
            Mød vores passionerede team af erfarne frisører, dedikerede kosmetologer, dygtige barberere og engagerede ejere.
          </p>
        </div>
        <div className='container mx-auto mt-8'>
          <SortSection /> {/* Brug SortSection-komponenten til at vise og filtrere ansatte */}
        </div>
      </div>

      {/* Vandret streg mellem sektioner */}
      <div className='h-line'></div>

      {/* Sektion med information om sociale medier */}
      <div className='md:flex mx-auto  md:pb-20 md:w-10/12 '>
        <div className='pt-5 md:p-0'>
          <h2 className='heading3'>FØLG MED</h2>
          <br></br>
          <h1 className='title1'>Find os på dine sociale medier</h1>
        </div>
        <div className='v-line'></div>
        <div className='h-line'></div>
        <div className='flex md:block'>
          {/* Links til Facebook- og Instagram-profiler */}
          <a href='https://www.facebook.com/profile.php?id=100063619180976' target='_blank' rel='noopener noreferrer'>
            <BsFacebook className='text-6xl text-gray-300 mr-6 mt-1 ml-1 md:mb-12 md:mt-24 xl:mt-32' />
          </a>
          <a href='https://www.instagram.com/tryllespejlet' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram className='text-7xl text-gray-300 md:mr-6' />
          </a>
        </div>

        <div className='md:order-2'>
          {/* Tekst om at følge med på sociale medier */}
          <p className='bodytext1  pt-5  md:mt-16 md:ml-5 xl:mt-32'>
            Følg med på vores sociale medier for opdateringer, skønhedstips og særlige tilbud. Bliv en del af vores fællesskab og del din skønhedsrejse med os.
            <br></br>
            <br></br>
            Vi glæder os til at have dig med!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
