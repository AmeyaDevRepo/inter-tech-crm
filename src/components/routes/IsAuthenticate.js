import cookie from "react-cookies";
export const isAuthenticated = () => {
  if (cookie.load("leadToken")) {
    return true;
  } else {
    return false;
  }
};