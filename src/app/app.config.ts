import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Core Firebase app initialization
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

// Firebase Authentication provider
import { provideAuth, getAuth } from '@angular/fire/auth';

// Firebase Firestore provider (essential for FriendlyChat)
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Firebase Storage provider (if your chat app handles images)
import { provideStorage, getStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // ADD THESE LINES FOR FIRESTORE AND STORAGE
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ]
};

