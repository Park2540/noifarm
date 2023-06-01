import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';

const useRegisterNavigator = () => {
  const [id, setId] = useState(nanoid());

  // ฟังก์ชันอื่น ๆ ที่ใช้งานใน useRegisterNavigator

  return { id };
};

export default useRegisterNavigator;
