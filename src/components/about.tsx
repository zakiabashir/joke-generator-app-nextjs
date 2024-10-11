"use client";

import Image from "next/image";
import bgImage from '../../public/joke1.jpg';
import image from '../../public/joke12.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className='relative mt-4 text-white'>
      {/* Background Image */}
      <Image
        src={bgImage}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="absolute inset-0 z-0"
      />
      
      {/* Content */}
      <div className='relative z-10 mr-12 ml-12 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-16'>
        
        {/* Image Component with Specific Size */}
        <div className="relative mt-8 w-full h-full">
          <Image 
            src={image}
            alt="About" 
            width={500} 
            height={500} 
            className="rounded-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className='mt-4 p-2 mr-4 md:mt-0 text-center flex flex-col h-full shadow-lg rounded-2xl bg-gradient-to-br from-gray-400 to-white'>
          <h2 className='sm:text-5xl text-5xl font-serif font-bold title-font text-center text-white shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400'>
            About Me
          </h2>
          <br />
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-black'>
          Welcome to the world of laughter! Our mission is simple: to spread joy and humor by providing you with a collection of the best jokes around. Whether you&apos;re looking to brighten up your day, share a laugh with friends, or just need a little break, we&apos;ve got you covered.

We believe in the power of a good laugh—it lifts spirits, breaks the ice, and brings people together. From classic jokes that never get old to new ones that are bound to become your favorites, we strive to make sure there&apos;s something here for everyone.
<br /><b>Why Jokes?</b><br />
In a world that can sometimes feel too serious, we think laughter is one of the best ways to unwind. Humor has the magical ability to make even the toughest days better. And we&apos;re here to remind you that laughter truly is the best medicine.

So, sit back, scroll through, and get ready to laugh. After all, life&apos;s too short to not enjoy a good joke!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
