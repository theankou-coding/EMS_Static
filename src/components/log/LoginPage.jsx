// components/log/LoginPage.jsx (modify the handleSubmit function)
const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsLoading(true);

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Determine user role (in real app, this comes from API)
    const isAdminEmail = formData.email.includes("admin"); // Simple check

    const userData = {
      name: formData.email.split("@")[0],
      email: formData.email,
      role: isAdminEmail ? "admin" : "user",
      avatar: null,
    };

    console.log("Login successful:", userData);

    if (onLogin) {
      onLogin(userData);
    }
  } catch (error) {
    console.error("Login error:", error);
    setErrors({ general: "Invalid email or password" });
  } finally {
    setIsLoading(false);
  }
};
