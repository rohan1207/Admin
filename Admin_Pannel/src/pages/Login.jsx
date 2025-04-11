import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      if (formData.email === 'admin@gmail.com' && formData.password === 'admin@123') {
        await Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        });
        onLoginSuccess();
        navigate('/home', { replace: true });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Invalid credentials'
        });
      }
    } else {
      // Signup logic
      Toast.fire({
        icon: 'success',
        title: 'Account created successfully'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4" 
         style={{ backgroundImage: 'url("/cloud.jpeg")' }}>
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full max-w-[420px] space-y-6">
        <div className="text-center">
          <div className="bg-gray-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">{isLogin ? 'Admin Portal Access' : 'Create Admin Account'}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Secure access to your organization's administrative dashboard and management tools
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-sm md:text-base"
                placeholder="Email"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-sm md:text-base"
                placeholder="Password"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-gray-800">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            {isLogin ? 'Get Started' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-xs md:text-sm text-gray-600">Or sign in with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs md:text-sm text-gray-600 hover:text-gray-800"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 