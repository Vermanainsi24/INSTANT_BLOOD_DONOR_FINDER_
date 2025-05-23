// // import React, { useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { useNavigate } from "react-router-dom";

// // function Signup() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await createUserWithEmailAndPassword(auth, email, password);
// //       navigate("/admin");
// //     } catch (error) {
// //       alert("Signup failed: " + error.message);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <form style={styles.card} onSubmit={handleSignup}>
// //         <h2 style={styles.title}>Create an Account</h2>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           style={styles.input}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           style={styles.input}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit" style={styles.button}>
// //           Sign Up
// //         </button>
// //         <p style={styles.linkText}>
// //           Already have an account? <a href="/login" style={styles.link}>Log in</a>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     height: "100vh",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     background: "#f0f2f5",
// //   },
// //   card: {
// //     background: "#fff",
// //     padding: "30px",
// //     borderRadius: "12px",
// //     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //     width: "100%",
// //     maxWidth: "400px",
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   title: {
// //     marginBottom: "20px",
// //     textAlign: "center",
// //     fontSize: "24px",
// //     color: "#333",
// //   },
// //   input: {
// //     padding: "12px 15px",
// //     marginBottom: "15px",
// //     borderRadius: "8px",
// //     border: "1px solid #ccc",
// //     fontSize: "16px",
// //   },
// //   button: {
// //     background: "#007bff",
// //     color: "#fff",
// //     padding: "12px",
// //     fontSize: "16px",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     marginTop: "10px",
// //   },
// //   linkText: {
// //     marginTop: "15px",
// //     textAlign: "center",
// //     fontSize: "14px",
// //     color: "#666",
// //   },
// //   link: {
// //     color: "#007bff",
// //     textDecoration: "none",
// //   }
// // };

// // export default Signup;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { useNavigate } from "react-router-dom";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Mail, Lock, Loader2 } from "lucide-react";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/admin");
//     } catch (err) {
//       setError("Signup failed: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-white to-gray-100 px-4">
//       <Card className="w-full max-w-md border border-gray-200 shadow-md rounded-2xl animate-fade-in">
//         <CardHeader className="text-center space-y-2 pt-6">
//           <CardTitle className="text-3xl font-bold text-gray-900">Create Your Account</CardTitle>
//           <p className="text-gray-500 text-sm">Join us! Enter your details below.</p>
//         </CardHeader>
//         <CardContent className="pt-0">
//           <form onSubmit={handleSignup} className="space-y-5">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   autoComplete="email"
//                   required
//                   className="pl-10"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="••••••••"
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                   autoComplete="new-password"
//                   required
//                   className="pl-10"
//                 />
//               </div>
//             </div>

//             <Button type="submit" className="w-full bg-red-500 hover:bg-blue-600   " disabled={loading}>
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing up...
//                 </>
//               ) : (
//                 "Sign Up"
//               )}
//             </Button>

//             {error && (
//               <Alert variant="destructive" className="mt-4">
//                 <AlertTitle>Error</AlertTitle>
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}
//           </form>

//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//             <div lassName="text-blue-500">Log in</div>
//             </a>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Lock, Loader2 } from "lucide-react";

const googleProvider = new GoogleAuthProvider();

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Signup failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    setLoadingGoogle(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/admin");
    } catch (err) {
      setError("Google Sign-In failed: " + err.message);
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-white to-gray-100 px-4">
      <Card className="w-full max-w-md border border-gray-200 shadow-md rounded-2xl animate-fade-in">
        <CardHeader className="text-center space-y-2 pt-6">
          <CardTitle className="text-3xl font-bold text-gray-900">
            Create Your Account
          </CardTitle>
          <p className="text-gray-500 text-sm">Join us! Enter your details below.</p>
        </CardHeader>
        <CardContent className="pt-0">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="mt-4 mb-4 flex items-center justify-center space-x-3">
            <span className="border-b border-gray-300 w-1/5 md:w-1/4"></span>
            <p className="text-sm text-gray-500">or sign up with</p>
            <span className="border-b border-gray-300 w-1/5 md:w-1/4"></span>
          </div>

          <Button
            type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            onClick={handleGoogleSignup}
            disabled={loadingGoogle}
          >
            <img
                src="google.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
            {loadingGoogle ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing up with Google...
              </>
            ) : (
              "Sign Up with Google"
            )}
          </Button>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;


