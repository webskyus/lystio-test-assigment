const API_DOMAIN = 'https://api.lystio.co'
const API_TENEMENT_SEARCH = `${API_DOMAIN}/tenement/search`;
const API_TENEMENT_MAP_SEARCH = `${API_DOMAIN}/tenement/search/map`;
const DEFAULT_FILTERS = {
    filter: {
        rent: [300, 10000],
    },
}
const OPTIONS = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(DEFAULT_FILTERS)
}

export {
    API_DOMAIN,
    API_TENEMENT_SEARCH,
    API_TENEMENT_MAP_SEARCH,
    DEFAULT_FILTERS,
    OPTIONS
}
