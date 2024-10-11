'use client';

import Image from "next/image";
import bgImage from '../../public/joke1.jpg';
const ContactSection = () => {

  return (
    <section id="contact" className=' relative grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative z-10 ' >
      <Image
  src={bgImage}
  layout="fill"
  objectFit="cover"
  alt="Background Image"
/>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10 ml-16 shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400'>
        <h1 className='text-xl m-4 pl-64 font-bold text-white shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400 my-2' >Lets Connect</h1>
        <br></br>
        <p className='text-blue p-2 m-2  gap-2 shadow-lg rounded-2xl bg-gradient-to-br from-pink-500 to-teal-500' >
        Got a joke that&apos;s too good not to share? Want to give us feedback or just say hello? We&apos;d love to hear from you! Whether you&apos;re a joke master, a casual comedian, or just someone who loves to laugh, drop us a line
       </p><p className='text-blue p-2 m-2    gap-2 shadow-lg rounded-2xl bg-gradient-to-br from-pink-500 to-teal-500'> <b>Submit Your Jokes:</b><br />
Think you have the perfect punchline? Share your joke with us, and it might get featured! Just email your best jokes to submit@jokeswebsite.com.

<br /><b>Feedback & Suggestions:</b><br />
If you have any suggestions on how we can make the website better or just want to let us know how much you&apos;ve laughed, send your thoughts to feedback@jokeswebsite.com.

We&apos;re always here to make you smile, one joke at a time! 😄
        </p>
        <br></br>
        
      </div>
      <div>
        <form className='  relative flex flex-col p-2 mr-12 shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400' >
          <div className=' mb-6 '>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              placeholder='Your email'
              className='shadow-lg rounded-2xl bg-gradient-to-br from-yellow-200 to-gray-500 border border-[#33353F] placeholder-[gray] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Just saying hi'
              className='bg-gradient-to-br from-yellow-200 to-gray-500 border border-[#33353F] placeholder-[gray] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-gradient-to-br from-yellow-200 to-gray-500 border border-[#33353F] placeholder-[gray] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <button type='submit' className='bg-gradient-to-br from-gray-500 to-yellow-200 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;