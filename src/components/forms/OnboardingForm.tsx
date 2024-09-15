"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, Input, Button, Dropdown, Background } from '@/once-ui/components';
import { createUser } from '@/actions/user.actions';

interface OnboardingFormProps {
    email: string;
    userId: string;
}

const OnboardingForm = ({ email, userId }: OnboardingFormProps) => {
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

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDropdownChange = (field: string) => (option: { value: string }) => {
    setFormData({ ...formData, [field]: option.value });
  };

  const handleSmokerChange = (value: boolean) => {
    setFormData({ ...formData, smoker: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newUserParams = {
        userId: userId || '',
        name: formData.name,
        age: parseInt(formData.age, 10),
        bio: formData.bio,
        email: email || '',
        onboarded: true,
        rentMin: formData.rentMin ? formData.rentMin : 0,
        rentMax: formData.rentMax ? formData.rentMax : 10000,
        smoker: formData.smoker,
        sleepType: formData.sleepType,
        cleanliness: formData.cleanliness,
      };

      await createUser(newUserParams);

      router.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '400px',
  };

  const dropdownStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml,...")', // Add a dropdown arrow SVG
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    paddingRight: '24px',
  };

  return (
    <Flex direction="column" alignItems="center" flex={1}>
      <Background dots={false} />
      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        padding="xl"
        maxWidth={600}
        fillWidth
        fillHeight
      >
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="m">
            <Input
              id="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <Input
              id="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              style={inputStyle}
            />
            <Input
              id="bio"
              label="Bio"
              value={formData.bio}
              onChange={handleChange}
              style={inputStyle}
            />
            <Input
              id="rentMin"
              label="Minimum Rent"
              value={formData.rentMin}
              onChange={handleChange}
              style={inputStyle}
            />
            <Input
              id="rentMax"
              label="Maximum Rent"
              value={formData.rentMax}
              onChange={handleChange}
              style={inputStyle}
            />
            <Flex direction="column" gap="s">
              <Flex alignItems="center" style={inputStyle}>
                <span style={{ marginRight: 'auto' }}>Smoker</span>
                <Flex>
                  <Button
                    onClick={() => handleSmokerChange(true)}
                    variant={formData.smoker ? 'primary' : 'secondary'}
                    size="s"
                    label="Yes"
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  />
                  <Button
                    onClick={() => handleSmokerChange(false)}
                    variant={!formData.smoker ? 'primary' : 'secondary'}
                    size="s"
                    label="No"
                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Flex>
              </Flex>
            </Flex>

            <Dropdown
              options={[
                { label: 'Early Bird', value: 'Early Bird' },
                { label: 'Shift Worker', value: 'Shift Worker' },
                { label: 'Night Owl', value: 'Night Owl' },
              ]}
              selectedOption={formData.sleepType}
              onOptionSelect={handleDropdownChange('sleepType')}
              style={dropdownStyle as React.CSSProperties}
            />
            <Dropdown
              options={[
                { label: 'Spotless', value: 'Spotless' },
                { label: 'Moderate', value: 'Moderate' },
                { label: 'Relaxed', value: 'Relaxed' },
              ]}
              selectedOption={formData.cleanliness}
              onOptionSelect={handleDropdownChange('cleanliness')}
              style={dropdownStyle as React.CSSProperties}
            />
            <Button
              type="submit"
              variant="primary"
              size="m"
              label={loading ? 'Submitting...' : 'Complete Profile'}
              disabled={loading}
            />
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default OnboardingForm;
