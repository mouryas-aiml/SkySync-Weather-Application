import { LoginFormData, SignupFormData, User } from '../types/auth';

// Simulated user database - in production, this would be your backend database
let USERS: User[] = [
  { email: 'demo@example.com', password: 'demo123', id: '1', name: 'Demo User' },
];

export async function login(credentials: LoginFormData): Promise<User> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const user = USERS.find(u => u.email === credentials.email);
  
  if (user && credentials.password === user.password) {
    // Don't send password back to client
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  throw new Error('Invalid email or password');
}

export async function signup(data: SignupFormData): Promise<User> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Check if user already exists
  if (USERS.some(u => u.email === data.email)) {
    throw new Error('Email already registered');
  }

  // Create new user
  const newUser = {
    id: String(USERS.length + 1),
    email: data.email,
    password: data.password,
    name: data.name,
  };

  // Add to "database"
  USERS.push(newUser);

  // Don't send password back to client
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}