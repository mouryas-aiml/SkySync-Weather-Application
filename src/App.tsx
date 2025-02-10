import React, { useState } from 'react';
import { WeatherCard } from './components/WeatherCard';
import { SearchBar } from './components/SearchBar';
import { LoginForm } from './components/LoginForm';
import { SocialLinks } from './components/SocialLinks';
import { getWeather } from './services/weatherApi';
import { login, signup } from './services/authService';
import { WeatherData, WeatherError } from './types/weather';
import { User, LoginFormData, SignupFormData } from './types/auth';
import { CloudRain, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string>('');
  const [showContact, setShowContact] = useState<boolean>(false);

  const handleSearch = async (location: string) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeather(location);
      if ('error' in data) {
        const errorData = data as WeatherError;
        throw new Error(errorData.error.message);
      }
      setWeather(data as WeatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (credentials: LoginFormData) => {
    try {
      setAuthError('');
      const userData = await login(credentials);
      setUser(userData);
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    try {
      setAuthError('');
      const userData = await signup(data);
      setUser(userData);
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : 'Signup failed');
    }
  };

  if (!user) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-4">
              <CloudRain className="text-white" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">SkySync</h1>
            <p className="text-white/80">Your Personal Weather Companion</p>
          </div>
          <LoginForm onLogin={handleLogin} onSignup={handleSignup} error={authError} />
        </div>
        <SocialLinks />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <header className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CloudRain className="text-white" size={32} />
            <h1 className="text-2xl font-bold text-white">SkySync</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowContact(!showContact)}
                className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
              >
                <span>{user.name || user.email}</span>
              </button>
              {showContact && (
                <div className="absolute right-0 mt-2 w-64 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 text-white">
                  <div className="space-y-3">
                    <a href="mailto:mouryas@outlook.in" className="flex items-center gap-2 hover:text-blue-300">
                      <Mail size={16} />
                      <span>mouryas@outlook.in</span>
                    </a>
                    <a href="tel:+918762656329" className="flex items-center gap-2 hover:text-blue-300">
                      <Phone size={16} />
                      <span>+91 8762656329</span>
                    </a>
                    <a href="https://maps.app.goo.gl/Ji8CJKizjRofkxGa6?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300">
                      <MapPin size={16} />
                      <span>Location</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setUser(null)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <p className="text-xl text-white/90 font-light">Enter a location to get the current weather conditions</p>
          </div>

          <SearchBar onSearch={handleSearch} />

          {loading && (
            <div className="text-center">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 backdrop-blur-md text-red-200 px-6 py-4 rounded-lg border border-red-500/20">
              {error}
            </div>
          )}

          {weather && <WeatherCard weather={weather} />}
        </div>
      </main>

      <SocialLinks />
    </div>
  );
}

export default App;