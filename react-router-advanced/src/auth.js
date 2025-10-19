export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}

export const login = () => {
  localStorage.setItem('auth', 'true')
}

export const logout = () => {
  localStorage.setItem('auth', 'false')
}
