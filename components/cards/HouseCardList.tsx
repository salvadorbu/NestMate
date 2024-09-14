import * as React from 'react';
import HouseCard from './HouseCard';

export interface HouseListProps {
  page: number;
  pageSize: number;
}

export default function HouseList(props: HouseListProps) {
  const { page, pageSize } = props;
  
  // Placeholder data - replace this with your API call later
  const houses = [
    { id: '1', address: '123 Main St', price: 300000, bedrooms: 3, bathrooms: 2, squareFootage: 1500 },
    { id: '2', address: '456 Elm St', price: 250000, bedrooms: 2, bathrooms: 1, squareFootage: 1200 },
    { id: '3', address: '789 Oak St', price: 400000, bedrooms: 4, bathrooms: 3, squareFootage: 2000 },
  ];

  const totalHouses = houses.length; // Replace with actual total from API

  return (
    <>
      <div className='text-sm text-gray-500 pb-4'>
        {`${pageSize * (page - 1) + 1} ~ ${
          pageSize * page > totalHouses ? totalHouses : pageSize * page
        } of over ${totalHouses} results`}
      </div>
      <div className='grid grid-cols-1 gap-x-2 gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
        {houses.map((house) => (
          <HouseCard key={house.id} {...house} />
        ))}
      </div>
    </>
  );
}