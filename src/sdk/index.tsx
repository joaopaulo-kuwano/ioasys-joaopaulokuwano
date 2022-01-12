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
        };
      }

      return { success: false, data: MockUser, auth_token: '' };
    } catch (err) {
      return { success: false, data: MockUser, auth_token: '' };
    }
  }

  async refreshToken() {
    const url = `${this.baseUrl}/auth/refresh-token`;
  }

  async getBooks() {
    const url = `${this.baseUrl}/books`;
  }
}
