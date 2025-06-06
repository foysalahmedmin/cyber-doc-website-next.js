export type User = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  [key: string]: unknown;
};
