'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'cnnorteyjr@gmail.com'
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.subtitle}>Let's Connect</h3>
            <p className={styles.description}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className={styles.email}>
              <span className={styles.label}>Email:</span>
              <a href="mailto:cnnorteyjr@gmail.com" className={styles.emailLink}>
                cnnorteyjr@gmail.com
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              />
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className={styles.success}>Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 