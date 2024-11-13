const API_DOMAIN = 'https://api.lystio.co'
const API_TENEMENT_SEARCH = `${API_DOMAIN}/tenement/search`;
const DEFAULT_FILTERS = {
    filter: {
        rent: [300, 10000],
    },
}

export {
    API_DOMAIN,
    API_TENEMENT_SEARCH,
    DEFAULT_FILTERS
}
