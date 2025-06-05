class AuthService {
  static login(email, password) {
    // Simulasi login sederhana
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  static logout() {
    localStorage.removeItem('user');
  }

  static isAuthenticated() {
    return !!localStorage.getItem('user');
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default AuthService;
