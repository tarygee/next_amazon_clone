/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { ProductProps } from '../../type'
import axios from 'axios';

const ImageDescription =() => {
 return (
    <div className='w-full px-6 grid grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-3'>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
          <div className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group gap-6'>
          <ul>
          <img
          src={'https://i.ibb.co/2d2qBRb/cpu-1.webp'}
           alt="img" 
           width={300} 
           height={300}/>
          <p className='text-xs text-gray-600 text-justify font-arial'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt iste consequuntur quos, minus laborum tempora consequatur distinctio ipsa nulla hic, sit sint optio fugit reiciendis, deleniti minima? Amet autem minima in illum, aliquid quos suscipit aspernatur hic quae deleniti possimus porro eligendi, atque tenetur sapiente? Libero illum eveniet quisquam.
          </p>
          </ul>
          </div>
    </div>
  );
};

export default ImageDescription;


