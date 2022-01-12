import axios, { AxiosRequestConfig } from 'axios';
import { IUser } from '../models/User';
import { ILoginForm } from '../pages/Login';
import {
  IBooksResponse, ISigninResponse, MockBooksResponse, MockSigninResponse,
} from './interfaces';

export class SDK {
  baseUrl = '';

  constructor(_baseUrl?: string) {
    this.baseUrl = _baseUrl || 'https://books.ioasys.com.br/api/v1';
  }

  async signIn(data: ILoginForm): Promise<ISigninResponse> {
    try {
      const url = `${this.baseUrl}/auth/sign-in`;
      const config: AxiosRequestConfig = {
        url,
        data,
        method: 'POST',
      };

      const api = await axios(config);
      if (api.status === 200) {
        return {
          success: true,
          data: api.data as IUser,
          auth_token: api.headers.authorization,
          refresh_token: api.headers['refresh-token'],
        };
      }

      return MockSigninResponse;
    } catch (err) {
      return MockSigninResponse;
    }
  }

  // eslint-disable-next-line camelcase
  async refreshToken(refresh_token: string, authorization: string) {
    try {
      const url = `${this.baseUrl}/auth/refresh-token`;
      const config: AxiosRequestConfig = {
        url,
        data: {
          // eslint-disable-next-line camelcase
          refreshToken: refresh_token,
        },
        headers: {
          authorization: `Bearer ${authorization}`,
        },
        method: 'POST',
      };

      const api = await axios(config);
      if (api.status === 204) {
        return {
          success: true,
          auth_token: api.headers.authorization,
          refresh_token: api.headers['refresh-token'],
        };
      }

      return { success: false, auth_token: '', refresh_token: '' };
    } catch (err) {
      return { success: false, auth_token: '', refresh_token: '' };
    }
  }

  async getBooks(authorization: string, page: number): Promise<IBooksResponse> {
    try {
      const url = `${this.baseUrl}/books?page=${page}&amount=50`;
      const config: AxiosRequestConfig = {
        url,
        method: 'GET',
        headers: {
          authorization: `Bearer ${authorization}`,
        },
      };

      const api = await axios(config);
      if (api.status === 200) return api.data;

      return MockBooksResponse;
    } catch (err) {
      return MockBooksResponse;
    }
  }
}
