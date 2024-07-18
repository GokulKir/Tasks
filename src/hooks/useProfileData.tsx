// useProfileData.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import profileData from '../data/profileData';

const useProfileData = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call using Axios (replace with your actual API endpoint)
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setLoading(false);
      });
  }, []);

  // Use profileData for simulation if API call fails or not implemented
  return {
    profile: profile || profileData,
    loading,
  };
};

export default useProfileData;
