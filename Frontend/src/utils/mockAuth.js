// Frontend Mock Authentication State Helper

const AUTH_KEY = "the1lookingfor_mock_auth";

export const getMockAuth = () => {
  try {
    const data = localStorage.getItem(AUTH_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to read mock auth", e);
  }
  return {
    isAuthenticated: false,
    role: null, // 'candidate' | 'hirer' | null
    user: null,
  };
};

export const setMockAuth = (authData) => {
  try {
    const current = getMockAuth();
    const updated = { ...current, ...authData };
    localStorage.setItem(AUTH_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("mock-auth-changed"));
    return updated;
  } catch (e) {
    console.error("Failed to set mock auth", e);
  }
};

export const loginMock = (email, role = null) => {
  return setMockAuth({
    isAuthenticated: true,
    role: role || getMockAuth().role || "candidate",
    user: {
      name: email ? email.split("@")[0] : "Demo User",
      email: email || "demo@the1lookingfor.com",
      headline: role === "hirer" ? "Talent Scout & Hiring Lead" : "Full Stack Developer",
    },
  });
};

export const logoutMock = () => {
  localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new Event("mock-auth-changed"));
  window.history.pushState({}, "", "/");
  window.dispatchEvent(new Event("popstate"));
};
