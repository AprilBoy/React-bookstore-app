import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './components/app';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import store from './store';

const bookstoreService = new BookstoreService();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <App />
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        </Provider>
    </StrictMode>,
);
