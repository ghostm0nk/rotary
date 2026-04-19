import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm = ({ auth }) => { // Receive auth as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // ... rest of your code
  );
};

export default SignupForm;