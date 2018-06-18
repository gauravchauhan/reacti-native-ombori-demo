const serverUrl = 'https://reqres.in';

const apiFetchUser = serverUrl + '/api/users?page=';

export async function fetchUserList(params) {
    try {
        let response = await fetch(apiFetchUser + params, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        return await response.json();
    }
    catch (error) {

    }
}
