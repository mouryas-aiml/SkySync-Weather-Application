import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { LoginFormData, SignupFormData } from '../types/auth';

interface LoginFormProps {
  onLogin: (data: LoginFormData) => void;
  onSignup: (data: SignupFormData) => void;
  error?: string;
}

export function LoginForm({ onLogin, onSignup, error }: LoginFormProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      onSignup(formData);
    } else {
      onLogin({ email: formData.email, password: formData.password });
    }
  };

  return (
    <div className="w-full backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-8 text-white">
      <div className="flex items-center justify-center gap-3 mb-8">
        <LogIn className="text-white" size={32} />
        <h1 className="text-3xl font-bold">Welcome to SkySync</h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignup && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required={isSignup}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200"
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <p className="mt-6 text-center text-white/80">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={() => {
            setIsSignup(!isSignup);
            setFormData({ email: '', password: '', name: '' });
          }}
          className="text-blue-300 hover:text-blue-400 font-medium"
        >
          {isSignup ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}