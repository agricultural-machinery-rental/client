import { decode, JwtPayload } from 'jsonwebtoken';

export const decodeToken = (token: string) => {
  try {
    const decoded = decode(token, { complete: true });

    if (!decoded) return null;

    return decoded.payload as JwtPayload;
  } catch (error) {
    return null;
  }
};
