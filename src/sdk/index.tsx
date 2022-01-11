export class SDK {
  baseUrl = '';

  constructor(_baseUrl?: string) {
    this.baseUrl = _baseUrl || 'https://books.ioasys.com.br/api/v1';
  }

  async signIn() {
    const url = `${this.baseUrl}/auth/sign-in`;
  }

  async refreshToken() {
    const url = `${this.baseUrl}/auth/refresh-token`;
  }

  async getBooks() {
    const url = `${this.baseUrl}/books`;
  }
}
