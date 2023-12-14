import React, { useState } from 'react';
import home1 from '/src/assets/home-1.jpg';
import contactCard1 from '/src/assets/kontakt_kort1.jpg';
import contactCard2 from '/src/assets/kontakt_kort2.jpg';
import contactCard3 from '/src/assets/kontakt_kort3.jpg';

import contactform from '/src/assets/contactform.jpg';
import contactfront from '/src/assets/contactfront.jpg';
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


// Komponent til kontakt-siden
export default function ContactPage() {

  // State til at holde formular-inputværdier
  const [fornavn, setFornavn] = useState('');
  const [efternavn, setEfternavn] = useState('');
  const [email, setEmail] = useState('');
  const [besked, setBesked] = useState('');

  // Funktion til at sende email ved at åbne mailto-link i browseren
  const sendEmail = () => {
    const subject = encodeURIComponent('Ny kontaktformularbesked');
    const body = encodeURIComponent(`Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nBesked: ${besked}`);
    const mailtoLink = `mailto:kj.lerche@gmail.com?subject=${subject}&body=${body}`;


		window.location.href = mailtoLink;


    // Nulstil formularfeltene
    setFornavn('');
    setEfternavn('');
    setEmail('');
    setBesked('');
  };

  return (
    <section>
      {/* Layout for kontaktsektion */}
      <div className='md:flex'>
        {/* Billede til venstre */}
        <div className='md:order-2 md:pl-5 xl:w-full xl:h-full'>
          <img className='img-container' src={contactfront} alt='Woman' />
        </div>
        {/* Tekstindhold til højre */}
        <div className='pt-5 md:p-0 md:w-11/12'>
          <h2 className='heading3 pb-3'>Sig hej!</h2>
          <h1 className='title1'>Kontakt os</h1>
          <p className='bodytext1 xl:w-2/3 pt-1'>
            {/* Kontaktinformation og velkomsttekst */}
            Har du spørgsmål, ønsker en aftale eller vil dele dine tanker med os? Vi er her for at lytte. Du er altid velkommen til at ringe ind med spørgsmål, eller sende os en email, for at komme i forbindelse med vores dedikerede team.
            <br></br><br></br>
            Vi ser altid frem til at høre fra dig og hjælpe med dine behov. Din skønhed og tilfredshed er vores prioritet.
          </p>
          <div className='h-line my-5'></div>
          {/* Kontaktinformation */}
          <div>
            <div className='flex items-center'>
              <FaPhone className='ml-5 text-2xl md:text-4xl'/>
              <p className="ml-2 heading3 pl-5">Telefon: <a href="tel:+4598489911">+45 22 13 09 17</a></p>
            </div>
            <div className='h-line my-5'></div>
            <div className='flex items-center'>
              <IoMail className='ml-5 text-2xl md:text-4xl'/>
              <p className="ml-2 heading3 pl-5">Email: <a href="mailto:Trylle-spejlet@hotmail.dk">Trylle-spejlet@hotmail.dk</a></p>
            </div>
          </div>
          <div className='h-line my-5'></div>
        </div>
      </div>

      {/* Sektion for at finde virksomheden */}
      <div>
        <h2 className='heading3 mt-16'>Find os</h2>
        {/* Grid til kort og links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {/* Kort 1 */}
          <div className="border border-black p-4 ">
            <a href="https://www.google.com/maps/search/?api=1&query=Skagensvej+46,+9982+%C3%85lb%C3%A6k" target="_blank" rel="noopener noreferrer">
              <img  src={contactCard1} alt='img link' /> 
              <hr className="border-t border-black my-4"></hr>
              <p className="text-left title1 text-sm md:text-xl xl:text-3xl">Skagensvej 46, 9982 Ålbæk</p>
            </a>
          </div>
          {/* Kort 2 */}
          <div className="border border-black p-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img  src={contactCard2} alt='img link' /> 
              <hr className="border-t border-black my-4"></hr>
              <p className="text-left title1 text-sm md:text-xl xl:text-3xl">Tilmeld vores nyhedsbrev</p>
            </a>
          </div>
          {/* Kort 3 */}
          <div className="border border-black p-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img  src={contactCard3} alt='img link' /> 
              <hr className="border-t border-black my-4"></hr>
              <p className="text-left title1 text-sm md:text-xl xl:text-3xl">Find os på Instagram</p>
            </a>
          </div>
        </div>
      </div>

      {/* Sektion for kontaktformular */}
      <div className='md:flex md:mb-16 xl:mt-24'>
        <div className=' md:mr-10'>
          {/* Tekst og introduktion til kontaktformular */}
          <div className='mt-14 md:p-0 '>
            <h2 className='heading3 xl:pb-4 xl:pt-10'>Skriv til os</h2>
            <p className='bodytext1 pt-5 pb-5 md:pr-2 xl:pb-14 '>
              {/* Instruktion og introduktion til at udfylde kontaktformularen */}
              Udfyld venligst kontaktformularen nedenfor, hvis du ønsker at sende os en besked eller har spørgsmål. 
              <br></br><br></br>
              Vi værdsætter din tid, og vores team vil gøre deres bedste for at vende tilbage til dig så hurtigt som muligt – vi ser frem til at betjene dig!
            </p>
          </div>
          {/* Kontaktformular */}
          <form className="contact-form border border-black p-5 " onSubmit={sendEmail}>
            <h1 className='title2 pb-8 md:text-4xl pt-5 '>Kontaktformular</h1>
            {/* Inputfelter for fornavn, efternavn, email og besked */}
            <div>
              <input 
                className="form-input heading3"
                id="fornavn" 
                type="text" 
                placeholder="Fornavn" 
                value={fornavn} 
                onChange={(e) => setFornavn(e.target.value)} 
              />
              <hr className="border-t border-black pb-8 xl:pb-12"></hr>
            </div>
            <div className="mb-4">
              <input 
                className="form-input heading3"            
                id="efternavn" 
                type="text" 
                placeholder="Efternavn" 
                value={efternavn} 
                onChange={(e) => setEfternavn(e.target.value)} 
              />
              <hr className="border-t border-black pb-4 xl:pb-8"></hr>
            </div>
            <div className="mb-4">
              <input 
                className="form-input heading3"            
                id="email" 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <hr className="border-t border-black pb-3 xl:pb-7"></hr>
            </div>
            <div className="md:mb-4 xl:mb-0">
              <textarea 
                className="form-input heading3"            
                id="besked" 
                placeholder="Din besked" 
                value={besked} 
                onChange={(e) => setBesked(e.target.value)} 
              />
              <hr className="border-t border-black pb-2 xl:pb-7"></hr>
            </div>
            {/* Send-knap til at udføre sendEmail-funktionen */}
            <div>
              <button 
                className="btn xl:mb-2" 
                type="button"
                onClick={sendEmail}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* Billede til højre, skjult på mindre skærme */}
        <div className='hidden md:block md:mt-28 md:w-fit xl:mt-20 xl:w-2/3'>
          <img className='img-container xl:h-5/6' src={contactform} alt='Product image' />
        </div>
      </div>
    </section>
  );
}
