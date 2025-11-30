import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Core Firebase app initialization
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

// Firebase Authentication provider
import { provideAuth, getAuth } from '@angular/fire/auth';

// Firebase Firestore provider
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Firebase Storage provider
import { provideStorage, getStorage } from '@angular/fire/storage';

// Firebase Messaging provider (NEW!)
import { provideMessaging, getMessaging } from '@angular/fire/messaging';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()), // <--- This is the new line in providers
  ]
};

