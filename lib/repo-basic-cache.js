import LRU from 'lru-cache';

const cache = new LRU({
    //expired time: 1hr
    maxAge: 1000 * 60 * 60
});

export function cacheRepo(repo) {
    const full_name = repo.full_name;
    cache.set(full_name, repo);
}

// full_name: facebook/react
export function getRepo(full_name) {
    return cache.get(full_name);
}

export function cacheReposArray(repos=Array) {
    // debugger;
    if (repos && Array.isArray(repos)) {
        repos.forEach(repo => cacheRepo(repo));
    }
}