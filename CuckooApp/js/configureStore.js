//
//
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
//
// import createSagaMiddleware from 'redux-saga';
// import sagas from './sagas';
//
// const sagaMiddleware = createSagaMiddleware();
//
// export default function configureStore() {
//     const store = createStore(reducers, applyMiddleware(sagaMiddleware));
//     sagaMiddleware.run(sagas);
//     return store;
// }



import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
    const enhancer = compose(
        applyMiddleware(thunk, promise),
        devTools({
            name: 'nativestarterkit', realtime: true,
        }),
    );

    const store = createStore(reducer, enhancer);
    persistStore(store, { storage: AsyncStorage }, onCompletion);

    return store;
}
