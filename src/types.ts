export interface UserState extends User {
  isLogged: boolean;
}

export interface User {
  userName: string;
  avatar: string;
  friends: Users;
  enemies: Users;
  token: string;
}

export type Users = User[];

export interface UserCredentials {
  userName: string;
  password: string;
}
