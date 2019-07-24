import LRU from 'lru-cache';

const cache = new LRU({
    //expired time: 1hr
    maxAge: 1000 * 60 * 60
});

