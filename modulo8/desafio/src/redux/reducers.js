import { 
    SET_USERS, 
    SET_STORIES, 
    SET_USERS_FETCHED, 
    SET_POSTS
} from './types';

const INITIAL_STATE = {
    showStory: false,
    users: [],
    stories: [],
    usersFetched: 0,
    userInfo: null,
    posts: []
}

export default function reducers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case SET_STORIES:
            return {
                ...state,
                stories: action.payload
            }

        case SET_USERS_FETCHED:
            return {
                ...state,
                usersFetched: action.payload
            }

        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        default: 
            return state;
    }
}