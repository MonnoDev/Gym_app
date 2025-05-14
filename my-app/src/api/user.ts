import axios from "axios";
import { Membership } from "./membership";

export interface User {
  _id?: string;
  fname?: string;
  lname?: string;
  email?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: string;
  city?: string;
  address?: string;
  password?: string;
  service_id?: string;
  admin?: boolean;
  info?: Membership[];
}

const API_BASE_URL = "http://localhost:3000";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return data;
};

export const getUser = async (id: string): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${API_BASE_URL}/users/${id}`);
  return data;
};

export const postUsers = async (newUser: User): Promise<User> => {
  const { data } = await axios.post<User>(`${API_BASE_URL}/users`, newUser);
  return data;
};
