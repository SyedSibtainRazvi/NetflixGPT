export const validateForm = (email: string, password: string, name?: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if (name !== undefined) {
    if (!name) return 'Name is required';
    if (!/^[a-zA-Z]+$/.test(name)) return 'Name must contain only letters';
  }

  if (!emailRegex) return 'Invalid email address';
  if (!passwordRegex) return 'Password is not strong enough';
  return null;
};
