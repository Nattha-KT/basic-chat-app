const handleLogin = async ({ username, password }) => {
  return await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
};

const handleLogout = async () => {
  return await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
};

const handleSignUp = async ({ fullName, username, password, confirmPassword, gender })=>{
  return await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
  });
}

export { handleLogin,handleLogout ,handleSignUp};
