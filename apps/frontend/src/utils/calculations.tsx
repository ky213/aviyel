import { Invoice } from 'libs/interfaces/invoice';

export const calculateShares = (invoice: Invoice | null): number[] => {
  const subTotal =
    invoice?.products?.reduce((s, p) => s + +p.price * +p.quantity, 0) || 0;

  const discountAmount = subTotal * (+(invoice?.discount || 0) / 100);
  const taxAmount = (subTotal - discountAmount) * (+(invoice?.tax || 0) / 100);

  const grandTotal = subTotal - discountAmount + taxAmount;

  return [subTotal, discountAmount, taxAmount, grandTotal];
};
