import { 
    SET_USERS, 
    SET_STORIES, 
    SET_USERS_FETCHED, 
    SET_POSTS
} from './types';

export function setUsers(data) {
    return {
        type: SET_USERS,
        payload: data
    }
}

export function setStories(data) {
    return {
        type: SET_STORIES,
        payload: data
    }
}

export function setUsersFetched(data) {
    return {
        type: SET_USERS_FETCHED,
        payload: data
    }
}

export function setPosts(data) {
    return {
        type: SET_POSTS,
        payload: data
    }
}