import iziToast from "izitoast"

export function searchByQuery(query) {

const URL = 'https://pixabay.com/api/'

const API_KEY = '45189521-352d969f92f63c5bc874c10a6'

const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
})

return fetch(`${URL}?${params}`).then((res) => {
    if (!res.ok) {
        throw new Error(res.status)
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!"
        })
    }
    return res.json()
})

}
