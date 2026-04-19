import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({ auth }) => { // Receive auth as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // ... rest of your code
  );
};

export default LoginForm;