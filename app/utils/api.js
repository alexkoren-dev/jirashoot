const baseUrl = 'https://jirashot-backend.herokuapp.com/v1'
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getApi = (url, headers) => {
    return fetch(baseUrl + url, {
        method: 'GET',
        headers: headers ? headers : defaultHeaders,
    })
        .then(res => res.json())
        .then(res => res);
}

export const postApi = (url, body, headers) => {
    return fetch(baseUrl + url, {
        method: 'POST',
        headers: headers ? headers : defaultHeaders,
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => res);
}

export const fileUpload = (url, body, headers) => {
    return fetch(baseUrl + url, {
        method: 'POST',
        // headers: headers ? headers : defaultHeaders,
        body: body
    })
        .then(res => res.json())
        .then(res => res);
}
