class EasyHTTP {
    //make http get reqeusts
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    
    //make post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    
    //put
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    
    //delete
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        const resData = await 'Resource Deleted...';
        return resData;
    }
}