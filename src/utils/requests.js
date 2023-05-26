const baseURL = 'http://localhost:3001';

async function getData(callback, endpoint) {
    const response = await fetch(`${baseURL}/${endpoint}`);
    const data = await response.json();
    callback(data);
}

export { getData };
