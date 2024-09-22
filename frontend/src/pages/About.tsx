import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="AboutImage" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit placeat, quis iste aut optio enim in minus? Laboriosam, impedit enim.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptas hic, placeat molestiae perspiciatis necessitatibus deserunt ratione illo eum. Minima vitae, eius ratione adipisci fugiat delectus nulla omnis laborum illum!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse autem velit quia veritatis molestias unde maxime, impedit accusantium totam?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b className='mb-4 inline-block'>Quanlity Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptas.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b className='mb-4 inline-block'>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptas.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b className='mb-4 inline-block'>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptas.</p>
        </div>
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default About
