'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, Button } from '@/once-ui/components';

// Mock city data - replace with actual data or API call
const cities = ['San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL', 'San Francisco, CA', 'Columbus, OH', 'Indianapolis, IN', 'Fort Worth, TX', 'Charlotte, NC', 'Seattle, WA', 'Denver, CO', 'El Paso, TX', 'Detroit, MI', 'Boston, MA', 'Memphis, TN', 'Nashville, TN', 'Baltimore, MD', 'Oklahoma City, OK', 'Las Vegas, NV', 'Louisville, KY', 'Milwaukee, WI', 'Albuquerque, NM', 'Tucson, AZ', 'Fresno, CA', 'Sacramento, CA', 'Kansas City, MO', 'Mesa, AZ', 'Atlanta, GA', 'Colorado Springs, CO', 'Virginia Beach, VA', 'Raleigh, NC', 'Omaha, NE', 'Miami, FL', 'Cleveland, OH', 'Tulsa, OK', 'Oakland, CA', 'Minneapolis, MN', 'Wichita, KS', 'Arlington, TX', 'Bakersfield, CA', 'Tampa, FL', 'Aurora, CO', 'Honolulu, HI', 'Anaheim, CA', 'St. Louis, MO', 'Chula Vista, CA', 'San Bernardino, CA', 'Cincinnati, OH', 'Birmingham, AL', 'Anchorage, AK', 'Buffalo, NY', 'Hialeah, FL', 'Glendale, AZ', 'Irvine, CA', 'Reno, NV', 'Chandler, AZ', 'Madison, WI', 'Scottsdale, AZ', 'Lubbock, TX', 'Des Moines, IA', 'Baton Rouge, LA', 'Richmond, VA', 'Boise, ID', 'Spokane, WA', 'Tacoma, WA', 'Shreveport, LA', 'Salt Lake City, UT', 'Grand Rapids, MI', 'Huntsville, AL', 'Knoxville, TN', 'Augusta, GA', 'Portland, ME', 'Mobile, AL', 'Little Rock, AR', 'Columbia, SC', 'Burlington, VT', 'Blackwood, NJ', 'Blacksburg, VA', 'Black Mountain, NC', 'Blackfoot, ID', 'Blackshear, GA', 'Black River Falls, WI', 'Bladensburg, MD', 'Blakely, GA', 'Bladenboro, NC'];


export default function SearchBar() {
  const router = useRouter();
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    router.push('/propertySearch');
  };

  return (
    <Flex alignItems="center" gap="m" fillWidth>
      <div style={{ flexGrow: 1 }}>
        <input
          list="city-suggestions"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a city"
          className="py-6 px-6 border rounded-xl flex-grow text-2xl w-full max-w-3xl"
          style={{ width: '300px', height: '45px' }}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <datalist id="city-suggestions">
          {cities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
      </div>
      <Button
        onClick={handleSearch}
        suffixIcon="chevronRight"
        variant="secondary"
        size="l"
      >
        Find your nest
      </Button>
    </Flex>
  );
}