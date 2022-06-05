import axios from "axios";

async function axiosCore(url) {
    const response = await axios({
        url: url,
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*"},
        baseURL: 'http://13.125.229.199:8080',
        withCredentials: false,
    })
    return response.json
}

export async function getBeerByName(name) {
    return await axiosCore(`/beer?name=${name}`)
}

export async function getBeers() {
    return await axiosCore(`/beers?count=3`)
}