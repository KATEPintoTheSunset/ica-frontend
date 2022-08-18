export async function signupPost(email, password) {
    let response = await fetch('http://192.168.31.68:3105/ica/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    let result = await response.json();
    alert(result.message, response.ok);
    return response.ok;
}