export interface UserState {
  isLogged: boolean;
  userName: string;
  token: string;
  avatar: string;
  friends: Users;
  enemies: Users;
}

export interface User {
  userName: string;
  avatar: string;
  friends: Users;
  enemies: Users;
  token: string;
}

export type Users = User[];
