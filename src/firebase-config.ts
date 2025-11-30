import { initializeApp } from 'firebase/app';
// If you are using Authentication, also import getAuth
import { getAuth } from 'firebase/auth';

// Method 1: Using the injected FIREBASE_CONFIG (common for App Hosting)
// Check if the environment variable exists and parse it
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG || '{}');

// OR if you're explicitly using FIREBASE_WEBAPP_CONFIG
// const firebaseConfig = JSON.parse(process.env.FIREBASE_WEBAPP_CONFIG || '{}');

// Method 2: Hardcoding the config (less flexible, but good for testing if env vars are the issue)
// const firebaseConfig = {
//   apiKey: "YOUR_ACTUAL_API_KEY_HERE", // Paste the API Key you copied from step 1
//   authDomain: "sage-nucleus-427103-s9-5b85c.firebaseapp.com",
//   projectId: "sage-nucleus-427103-s9-5b85c",
//   storageBucket: "sage-nucleus-427103-s9-5b85c.appspot.com",
//   messagingSenderId: "1043538624599",
//   appId: "1:1043538624599:web:5db099896ee30c9f196312",
//   // ... other config values
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you're using Auth, you'd then get the Auth instance:
// const auth = getAuth(app);

