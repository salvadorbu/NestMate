import * as React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

interface HouseProps {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
}

export default function HouseCard(props: HouseProps) {
  const { id, address, price, bedrooms, bathrooms, squareFootage } = props;

  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image
          src={`https://picsum.photos/seed/${id}/384/140`}
          alt={address}
          width={384}
          height={140}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{address}</h2>
        <p className='font-medium text-slate-500'>
          {bedrooms} beds • {bathrooms} baths • {squareFootage} sqft
        </p>
        <div className='card-actions justify-end'>
          <div className='btn'>${price.toLocaleString()}</div>
          <NextLink href={`/house/${id}`} className='btn btn-info'>
            View Details
          </NextLink>
        </div>
      </div>
    </div>
  );
}