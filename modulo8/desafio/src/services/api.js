export default async (url, method, data = null) => {
    const response = await fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1" + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return response.json();
}