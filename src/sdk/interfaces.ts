import { IBook } from '../models/Books';
import { IUser, MockUser } from '../models/User';

export interface ISigninResponse {
  data: IUser
  success: boolean
  auth_token: string
  refresh_token: string
}

export const MockSigninResponse: ISigninResponse = {
  data: MockUser,
  success: false,
  auth_token: '',
  refresh_token: '',
};

export interface IBooksResponse {
  data: IBook[]
  page: number
  totalItems: number
  totalPages: number
}

export const MockBooksResponse: IBooksResponse = {
  data: [],
  page: 0,
  totalItems: 0,
  totalPages: 0,
};
