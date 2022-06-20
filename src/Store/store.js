import {configureStore } from '@reduxjs/toolkit'
import MailItemReducer from './MailBodyBox';
import ComposeReducers from './ComposeToggle';
import InboxReducer from './inboxToggle';

const store = configureStore({
    reducer:{
        compose:ComposeReducers,
        isInbox:InboxReducer,
        milItem:MailItemReducer
    },
});

export default store;

