export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/foreground.svg"
          alt="Foreground Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10">
        <h1 className="text-4xl font-bold text-green-400">Dummy Logo</h1>
        <h2 className="text-3xl font-bold">Sign in to your account</h2>
        <button className="flex items-center justify-center bg-white py-2 px-4 rounded border border-gray-300 w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          <span className="text-base font-normal">Sign in with Google</span>
        </button>
        <div className="flex items-center space-x-2 w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-base font-normal px-2">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border border-gray-300 py-2 px-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 py-2 px-4"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox border-gray-300 rounded"
              />
              <span className="text-base font-normal">Remember me</span>
            </label>
            <button className="text-green-500 text-base font-bold text-green-400">
              Forgot Password?
            </button>
          </div>
          <button
            className="w-full py-2 px-4 rounded-md text-white font-bold bg-green-400"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center space-x-2">
          <span className="text-base font-normal">Don't have an account?</span>
          <button className="text-green-500 text-base font-bold text-green-400">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
