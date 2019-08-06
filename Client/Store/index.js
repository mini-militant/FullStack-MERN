import {createStore} from 'redux';
import { defaultState } from '../../Server/defaultState'

export const store = createStore(
  function reducer(state=defaultState,action){    
    return state;    
  }
)