import axios from "axios";
import { Membership } from "./membership";

export interface User {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  service_id?: string;
  info?: Membership[];
}

const API_BASE_URL = "http://localhost:3000";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return data;
};

export const postUsers = async (newUser: User): Promise<User> => {
  const { data } = await axios.post<User>(`${API_BASE_URL}/users`, newUser);
  return data;
};
