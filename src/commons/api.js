export async function fetchReqAsync(func, ...res) {
    console.log(res)
    const response = await func(...res);
    if (response.ok) {
        return await response.json();
    } else {
        throw response;
    }
}

export async function fetchResAsync(func, ...res) {
    const response = await func(...res);
    if (response.ok) {
        return await response;
    } else {
        throw response;
    }
}

function getFetch(url) {
    return fetch(`${url}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=utf-8"
        }
    });
}

function putFetch(url, data) {
    return fetch(`${url}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });
}

function patchFetch(url, data) {
    return fetch(`${url}`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });
}

function postFetch(url, data) {
    return fetch(`${url}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });
}

function postFileFetch(url, data) {
    const bodyData = new FormData();
    bodyData.append("file", data);

    return fetch(`${url}`, {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: bodyData
    });
}

function deleteFetch(url) {
    return fetch(`${url}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=utf-8"
        }
    });
}

const fetchAPI = {
    get: getFetch,
    put: putFetch,
    patch: patchFetch,
    post: postFetch,
    postFile: postFileFetch,
    delete: deleteFetch
};

export default fetchAPI;