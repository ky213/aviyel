import React, { useState } from 'react';

import CustomerDetails from './customer-details';
import ProductDetails from './product-details';

export default function Body() {
  const [step, setStep] = useState<'customer' | 'product'>('customer');
  return (
    <>
      {step === 'customer' && (
        <CustomerDetails next={() => setStep('product')} />
      )}
      {step === 'product' && (
        <ProductDetails next={() => setStep('customer')} />
      )}
    </>
  );
}
