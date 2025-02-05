// Set Email in SessionStorage
export const setEmail = (email) => {
    sessionStorage.setItem('email', email)
}


// Get Email From SessionStorage
export const getEmail = () => {
    return sessionStorage.getItem('email')
}

// Clear Everything from SessionStorage, LocalStorage
export function unauthorized(code){
    if(code===401){
        sessionStorage.clear();
        localStorage.clear();
        window.location.href="/login"
    }
}