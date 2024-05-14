// src/components/FeedbackForm.js
import React, { useState } from 'react';
import { sendFeedback } from '../services/api';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      name,
      email,
      phone,
      message,
    };

    try {
      await sendFeedback(feedback);
      setSuccess('Ваше сообщение отправлено!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      if (err.response.status === 422) {
        setError('Ошибка валидации. Проверьте введенные данные.');
      } else {
        setError('Ошибка при отправке сообщения.');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder="Сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;
