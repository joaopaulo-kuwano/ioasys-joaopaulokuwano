export type StorageItems = 'authorization' | 'refresh-token' | 'user';

export class Storage {
  static getItem(key: StorageItems): string {
    return localStorage.getItem(key) || '';
  }

  static setItem(key: StorageItems, data: string): void {
    localStorage.setItem(key, data);
  }

  static removeItem(key: StorageItems): void {
    localStorage.removeItem(key);
  }
}
