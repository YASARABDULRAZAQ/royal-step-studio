import React from 'react'; 
import Logo from '../../public/Logo.png';
import Image from 'next/image'; 
const Header = () => {
  return (
    <main>
      
    <header className="bg-indigo-950 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

        <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            quality={100}
            priority={true}
            className="rounded-md object-contain border border-red shadow-lg"
          />
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:underline text-white">Viral CGI Videos</a>
          <a className="mr-5 hover:underline text-white">AI CGI Videos</a>
          <a className="mr-5 hover:underline text-white">Frame to Creative Videos</a>
          <a className="mr-5 hover:underline text-white">Graphic Design</a>
         
        </nav>
        <a className='text-end'> CONTACT US +971 56 211 0652

</a>
        
            <path d="M5 12h14M12 5l7 7-7 7"></path>
         
      </div>
    </header>
    <div className='bg-purple-900 text-center text-white'> Balancing stunning visual with user-centered design for maximum Impact.</div>
    </main>
  );
};

export default Header;
