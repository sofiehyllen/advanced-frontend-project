import React from 'react';
import SortSection from '../components/SortSection';

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";



export default function AboutPage() {
	return (
		<section>
			<div className='md:flex'>
                <div className='pt-5 md:p-0'>
					<h2 className='heading3'>MØD OS</h2>
                    <br></br>
                    <h1 className='title1'>Tryllespejlet, din favorit frisør i Ålbæk.</h1>
				</div>
                <div className='v-line'></div>
                <div className='h-line'></div>
				    <div className='md:order-2 md:pl-5 xl:w-full'>
                        <p className='bodytext1 pt-5'>
                            Velkommen til din lokale frisørsalon i hjertet af Ålbæk, 
                            hvor skønhed og stil forenes. Vi er stolte af at være din nære 
                            og personlige frisør, ledet af ejeren Pernille Thomsen.  
                            <br></br><br></br>
                            Hos os kombineres ekspertise med en varm atmosfære, og vores 
                            dedikerede team af stylister er klar til at skabe den perfekte frisure, 
                            der passer til netop dig. Oplev den unikke charme i vores salon, 
                            hvor dit hår er i trygge hænder. 
                            <br></br><br></br>
                            Vores team består af erfarne frisører, dygtige barberere og dedikerede 
                            kosmetologer, der alle deler en passion for skønhed og håndværk. 
                        </p>
				    </div>
                <div className='h-line'></div>
			</div>

            <div>
                <div className='pt-3  md:pt-20'>
					<h2 className='heading3'>HVEM ER VI?</h2>
                    <br></br>
                    <h1 className='title1'>Vores ansatte</h1>
                    <p className='bodytext1 max-w-2xl pt-5'>
                        Mød vores passionerede team af erfarne frisører, 
                        dedikerede kosmetologer, dygtige barberere og 
                        engagerede ejere.
                    </p>
				</div>
                <div className="container mx-auto mt-8">
                    <SortSection />
                </div>
			</div>

            <div className='md:flex pt-20 pb-20 '>
                <div className='pt-5 md:p-0'>
					<h2 className='heading3'>FØLG MED</h2>
                    <br></br>
                    <h1 className='title1'>Find os på dine sociale medier</h1>
				</div>
                <div className='v-line'></div>
                <div className='h-line'></div>
                <div className='flex md:block md:mb-3'>
                    <a href='https://www.facebook.com/profile.php?id=100063619180976' target='_blank' rel='noopener noreferrer'>
                        <BsFacebook className='text-3xl mt-0.5 mr-6 ml-1 md:mb-6 md:mt-32 ' />
                    </a>
                    <a href='https://www.instagram.com/tryllespejlet' target='_blank' rel='noopener noreferrer'>
                        <AiFillInstagram className='text-4xl md:mr-6' />
                    </a>
                </div>
                
				    <div className='md:order-2'>
                        <p className='bodytext1  pt-5  md:mt-16 md:ml-5'>
                            Følg med på vores sociale medier for opdateringer, 
                            skønhedstips og særlige tilbud. Bliv en del af vores 
                            fællesskab og del din skønhedsrejse med os. 
                            <br></br><br></br>
                            Vi glæder os til at have dig med!
                        </p>
				    </div>
                </div>

            





        </section>



        );    
}