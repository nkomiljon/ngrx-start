import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideState({ name: 'books', reducer: booksReducer }),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot({ 
        books: booksReducer,
        collection: collectionReducer
    })
    )
  ],
};
