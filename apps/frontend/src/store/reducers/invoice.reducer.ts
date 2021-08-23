import { axios } from 'apps/frontend/src/config';
import { AxiosResponse } from 'axios';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
} from 'apps/frontend/src/utils/actionPrefix';

import { Customer, Invoice, Product } from 'libs/interfaces/invoice';

export interface InvoiceSate {
  invoiceList: Invoice[];
  currentInvoice: Invoice | null;
  totalNumberOfRecords: number;
  loading: boolean;
  success: boolean;
  error: Error | null;
}

export interface Action {
  type: string;
  payload?: any;
}

export const INVOICE_ACTIONS = {
  GET_ALL: 'invoice/GET_ALL',
  GET_ONE: 'invoice/GET_ONE',
  CREATE: 'invoice/CREATE',
  ADD_PRODUCT: 'invoice/ADD_PRODUCT',
  SET_TAXES: 'invoice/SET_TAXES',
  SET_CUSTOMER: 'invoice/SET_CUSTOMER',
  RESET: 'invoice/RESET',
};

const initialState: InvoiceSate = {
  invoiceList: [],
  currentInvoice: null,
  totalNumberOfRecords: 0,
  loading: false,
  success: false,
  error: null,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case REQUEST(INVOICE_ACTIONS.GET_ALL):
    case REQUEST(INVOICE_ACTIONS.GET_ONE):
    case REQUEST(INVOICE_ACTIONS.CREATE): {
      return { ...state, loading: true, success: false, error: null };
    }

    case FAILURE(INVOICE_ACTIONS.GET_ALL):
    case FAILURE(INVOICE_ACTIONS.GET_ONE):
    case FAILURE(INVOICE_ACTIONS.CREATE): {
      return { ...state, loading: false, success: false, error: payload };
    }

    case SUCCESS(INVOICE_ACTIONS.GET_ALL): {
      return {
        ...state,
        loading: false,
        invoiceList: payload.data.invoiceList,
        totalNumberOfRecords: payload.data.totalNumberOfRecords,
      };
    }
    case SUCCESS(INVOICE_ACTIONS.GET_ONE): {
      return { ...state, loading: false, currentInvoice: payload.data };
    }
    case SUCCESS(INVOICE_ACTIONS.CREATE): {
      const currentInvoice = { ...state.currentInvoice };

      currentInvoice._id = payload.data._id;

      return {
        ...state,
        currentInvoice,
        loading: false,
        success: true,
      };
    }
    case INVOICE_ACTIONS.ADD_PRODUCT: {
      const currentInvoice = { ...state.currentInvoice };

      if (!currentInvoice.products) currentInvoice.products = [];

      currentInvoice.products?.push(payload);

      return { ...state, currentInvoice };
    }
    case INVOICE_ACTIONS.SET_CUSTOMER: {
      const currentInvoice = { ...state.currentInvoice };

      currentInvoice.customer = payload;

      return { ...state, currentInvoice };
    }
    case INVOICE_ACTIONS.SET_TAXES: {
      const currentInvoice = { ...state.currentInvoice };

      currentInvoice.tax = payload.tax;
      currentInvoice.discount = payload.discount;

      return { ...state, currentInvoice };
    }
    case INVOICE_ACTIONS.RESET: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export const addProduct = (product: Product) => ({
  type: INVOICE_ACTIONS.ADD_PRODUCT,
  payload: product,
});

export const setTaxes = (taxes: Pick<Invoice, 'tax' | 'discount'>) => ({
  type: INVOICE_ACTIONS.SET_TAXES,
  payload: taxes,
});
export const setCustomer = (customer: Customer) => ({
  type: INVOICE_ACTIONS.SET_CUSTOMER,
  payload: customer,
});

export const createInvoice = (
  invoice: Invoice | null,
  invoiceNumber: string
) => ({
  type: INVOICE_ACTIONS.CREATE,
  payload: axios.post<Invoice, AxiosResponse<Pick<Invoice, '_id'>>>(
    '/invoice/create-invoice',
    { ...invoice, invoiceNumber }
  ),
});

export const getAllInvoices = () => ({
  type: INVOICE_ACTIONS.GET_ALL,
  payload: axios.get('/invoice/all'),
});

export const getLastInvoice = () => ({
  type: INVOICE_ACTIONS.GET_ONE,
  payload: axios.get('/invoice/last'),
});

export const getInvoiceById = (id: string | undefined) => ({
  type: INVOICE_ACTIONS.GET_ONE,
  payload: axios.get(`/invoice/${id}`),
});

export const resetInvoiceState = () => ({
  type: INVOICE_ACTIONS.RESET,
});
