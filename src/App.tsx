import { Suspense } from 'react';
import MainView from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <MainView />
                </BrowserRouter>
            </Suspense>
        </Provider>
    );
}

export default App;
