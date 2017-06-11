const BASE_URL = 'https://www.rehive.com/api/3/'

const HEADERS = {
    'Content-Type': 'application/json'
}

let _call = async (url, _method, data) => {
    try {
        let response = await fetch(BASE_URL + url, {
            method: _method,
            headers: HEADERS,
            body: JSON.stringify(data)})
        let responseJson = response.json()
        return responseJson
    } catch (error) {
        console.log(error)
    }
}

export default API = {
    login: (data) => {
        return _call('auth/login/', 'POST', data)
    }
}