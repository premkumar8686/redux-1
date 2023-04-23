import { configureStore } from '@reduxjs/toolkit'
import counterReducer5 from '../reducers/reducers';
import myTest from '../reducers/test';


const myStore = configureStore({

    reducer:{
        counter2: counterReducer5,
        counter3: myTest,
    }

});

export default myStore;