import { ApplicationConfig } from '@angular/core'; // Ensure importProvidersFrom is removed here if it was present
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// Add other Firebase providers here if you need them, e.g., provideFirestore, provideStorage

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Place Firebase providers directly in the array, WITHOUT importProvidersFrom
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // Add other Firebase providers here, e.g.:
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
  ]
};

