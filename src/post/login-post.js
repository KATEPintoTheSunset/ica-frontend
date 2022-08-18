export async function loginPost(email, password) {
    let response = await fetch('http://192.168.31.68:3105/ica/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    let { data } = await response.json();
    if (data) {
        localStorage.setItem('token', data.token);
    }
    return response.ok;
}
