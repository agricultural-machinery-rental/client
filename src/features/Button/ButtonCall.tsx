import React, { useState } from 'react';
import { Button } from '@/components/UI/Button/Button';

export const ButtonCall = () => {
  const [clicked, setClicked] = useState(false);
  {
    /* 
    const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
    });
  */
  }

  const handleCallMeClick = () => {
    if (!clicked) {
      setClicked(true);
    }

    setTimeout(() => {
      alert('Ваш запрос на звонок отправлен');
      {
        /* 
      // Очищаем данные формы
      setFormData({
        name: '',
        phoneNumber: '',
      });
    */
      }
    }, 500);
  };

  return (
    <Button label='Позвоните мне' type='submit' onClick={handleCallMeClick} disabled={clicked} />
  );
};
