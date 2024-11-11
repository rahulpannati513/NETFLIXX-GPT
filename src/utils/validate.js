export const validate = (email, password) => {
  // Regular expressions for email and password validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  // Validate email and password
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  console.log("Email:", email);
  console.log("Email Valid:", isEmailValid); // Log this to check if it's valid
  console.log("Password:", password);
  console.log("Password Valid:", isPasswordValid); // Log this to check if it's valid

  // Check for empty fields
  if (email === "" || password === "") {
    return "Please fill all the fields";
  }

  // If email is invalid
  if (!isEmailValid) {
    return "Email Id is not valid";
  }

  // If password is invalid
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  // If both are valid
  return null;
};

// Test the function
console.log(validate("john.doe123@subdomain.example.org", "Password123"));
