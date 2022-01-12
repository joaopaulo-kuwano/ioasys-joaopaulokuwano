export interface IUser {
  name: string,
  email: string,
  birthdate: string,
  gender: string,
  id: string
}

/** fallback de user, usado para nao quebrar
 * a pagina de livros durante a renderização */
export const MockUser: IUser = {
  name: '',
  email: '',
  birthdate: '',
  gender: '',
  id: '',
};
