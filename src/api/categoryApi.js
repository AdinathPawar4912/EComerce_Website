import axios from "axios";

export const getCategories = async () => {
    const response = await axios.get("https://dummyjson.com/products/category-list");
    return response.data;
};

export const getProductsByCategory = async (categoryName) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
    return response.data;
};