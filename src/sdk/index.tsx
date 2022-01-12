import axios, { AxiosRequestConfig } from 'axios';
import { IUser, MockUser } from '../models/User';
import { ILoginForm } from '../pages/Login';

export class SDK {
  baseUrl = '';

  constructor(_baseUrl?: string) {
    this.baseUrl = _baseUrl || 'https://books.ioasys.com.br/api/v1';
  }

  async signIn(data: ILoginForm) {
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

      return {
        success: false,
        data: MockUser,
        auth_token: '',
        refresh_token: '',
      };
    } catch (err) {
      return {
        success: false,
        data: MockUser,
        auth_token: '',
        refresh_token: '',
      };
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

  async getBooks() {
    const url = `${this.baseUrl}/books`;
  }
}
