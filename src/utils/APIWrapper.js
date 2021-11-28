import { API } from 'aws-amplify';
import { getProduct, listProducts } from '../graphql/queries';


export async function getAllProducts() {
    try {
        let apiData = await API.graphql({ query: listProducts });
        if (apiData && apiData.data) {
            return apiData.data.listProducts.items;
        }
    }
    catch (e) {
        console.error(e);
    }
    return [];
}


export async function getProductByID(id) {
    try {
        let apiData = await API.graphql({ query: getProduct, variables: {id} });
        if (apiData && apiData.data) {
            return apiData.data.getProduct;
        }
    }
    catch (e) {
        console.error(e);
    }
    return {};
}


export async function getProductBySlug(slug) {
    try {
        let filter = {
            slug: {
                eq: slug
            }
        };
        let apiData = await API.graphql({ query: listProducts, variables: { filter: filter }});
        if (apiData && apiData.data) {
            if (apiData.data.listProducts) {
                let items = apiData.data.listProducts.items;
                if (items) {
                    if (items.length > 1) {
                        console.log('getProductBySlug returned more than 1 result. Using the first');
                    }
                    return items[0];
                }
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return {};
}


export async function getProductsByCategory(categories) {
    try {
        let filter = {
            or: []
        };
        for (var i = 0; i < categories.length; i++) {
            filter.or.push({ categories: {contains: categories[i]} });
        }
        let apiData = await API.graphql({ query: listProducts, variables: { filter: filter }});
        if (apiData && apiData.data) {
            if (apiData.data.listProducts) {
                let items = apiData.data.listProducts.items;
                if (items) {
                    return items;
                }
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return [];
}