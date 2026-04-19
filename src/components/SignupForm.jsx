import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../utils/auth.js';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password, username);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // ... rest of your code
  );
};

export default SignupForm;