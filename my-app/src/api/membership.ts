import axios from "axios";

export interface Membership {
  _id?: string;
  name: string;
  price: string;
  descripcion: string;
}

const API_BASE_URL = "http://localhost:3000";

export const getMemberships = async (): Promise<Membership[]> => {
  const { data } = await axios.get<Membership[]>(`${API_BASE_URL}/memberships`);
  return data;
};

export const getMembershipById = async (id: string): Promise<Membership> => {
  const { data } = await axios.get<Membership>(`${API_BASE_URL}/memberships/${id}`);
  return data;
};

export const postMembership = async (membership: Membership): Promise<Membership> => {
  const { data } = await axios.post<Membership>(`${API_BASE_URL}/memberships`, membership);
  return data;
};

export const deleteMembership = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/memberships/${id}`);
};
