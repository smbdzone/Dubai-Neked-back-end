import jwt from 'jsonwebtoken';

const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};

export default generateToken;
