"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, Input, Button, Dropdown } from '@/once-ui/components';

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bio: '',
    email: '',
    rentMin: 0,
    rentMax: 10000,
    smoker: false,
    sleepType: 'Early Bird',
    cleanliness: 'Moderate',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDropdownChange = (field: string) => (option: { value: string }) => {
    setFormData({ ...formData, [field]: option.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Profile data:', formData);
    router.push('/find-roommate');
  };

  return (
    <Flex direction="column" alignItems="center" padding="xl">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="m">
          <Input
            id="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            id="age"
            label="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
          <Input
            id="bio"
            label="Bio"
            value={formData.bio}
            onChange={handleChange}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            id="rentMin"
            label="Minimum Rent"
            type="number"
            value={formData.rentMin}
            onChange={handleChange}
          />
          <Input
            id="rentMax"
            label="Maximum Rent"
            type="number"
            value={formData.rentMax}
            onChange={handleChange}
          />
          <Flex alignItems="center" gap="m">
            <label htmlFor="smoker">Smoker:</label>
            <input
              id="smoker"
              type="checkbox"
              checked={formData.smoker}
              onChange={(e) => setFormData({ ...formData, smoker: e.target.checked })}
            />
          </Flex>
          <Dropdown
            options={[
              { label: 'Early Bird', value: 'Early Bird' },
              { label: 'Shift Worker', value: 'Shift Worker' },
              { label: 'Night Owl', value: 'Night Owl' },
            ]}
            selectedOption={formData.sleepType}
            onOptionSelect={handleDropdownChange('sleepType')}
          />
          <Dropdown
            options={[
              { label: 'Spotless', value: 'Spotless' },
              { label: 'Moderate', value: 'Moderate' },
              { label: 'Relaxed', value: 'Relaxed' },
            ]}
            selectedOption={formData.cleanliness}
            onOptionSelect={handleDropdownChange('cleanliness')}
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
            size="m"
            label="Complete Profile"
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default CompleteProfile;
