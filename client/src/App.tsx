import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./components/Success";
import { useUserStore } from "./store/useUserStore";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading";
import { useThemeStore } from "./store/useThemeStore";
import About from "./components/About";
import Contact from "./components/Contact";
import Careers from "./components/footer-links/Careers";
import Team from "./components/footer-links/Team";
import TrackMeal from "./components/footer-links/TrackMeal";
import SuggestRecipes from "./components/footer-links/SuggestRecipes";
import Community from "./components/footer-links/Community";
import Support from "./components/footer-links/Support";
import Terms from "./components/footer-links/Terms";
import PrivacyPolicy from "./components/footer-links/PrivacyPolicy";
import Sitemap from "./components/footer-links/Sitemap";
import Faqs from "./components/footer-links/Faqs";


const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if(isAuthenticated && user?.isVerified){
    return <Navigate to="/" replace/>
  }
  return children;
};

const AdminRoute = ({children}:{children:React.ReactNode}) => {
  const {user, isAuthenticated} = useUserStore();
  if(!isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  if(!user?.admin){
    return <Navigate to="/" replace/>
  }

  return children;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },

      // ✅ PROTECTED ROUTES
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/order/status",
        element: (
          <ProtectedRoutes>
            <Success />
          </ProtectedRoutes>
        ),
      },

      // ✅ ADMIN ROUTES
      {
        path: "/admin/restaurant",
        element: (
          <AdminRoute>
            <Restaurant />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/menu",
        element: (
          <AdminRoute>
            <AddMenu />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <AdminRoute>
            <Orders />
          </AdminRoute>
        ),
      },

      // ✅ FOOTER LINKS
      { path: "/careers", element: <Careers /> },
      { path: "/team", element: <Team /> },
      { path: "/track-meal", element: <TrackMeal /> },
      { path: "/suggest-recipes", element: <SuggestRecipes /> },
      { path: "/community", element: <Community /> },
      { path: "/support", element: <Support /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "/sitemap", element: <Sitemap /> },
    ],
  },

  // ✅ AUTH ROUTES
  {
    path: "/login",
    element: (
      <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthenticatedUser>
        <Signup />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthenticatedUser>
        <ForgotPassword />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);


function App() {
  const initializeTheme = useThemeStore((state:any) => state.initializeTheme);
  const {checkAuthentication, isCheckingAuth} = useUserStore();
  // checking auth every time when page is loaded
  useEffect(()=>{
    checkAuthentication();
    initializeTheme();
  },[checkAuthentication])

  if(isCheckingAuth) return <Loading/>
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
