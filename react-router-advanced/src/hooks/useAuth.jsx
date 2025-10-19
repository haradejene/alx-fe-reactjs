export default function useAuth() {
  // Simple auth simulation using localStorage
  const isAuthenticated = localStorage.getItem('auth') === 'true'
  return { isAuthenticated }
}
