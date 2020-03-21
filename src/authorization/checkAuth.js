import decode from 'jwt-decode';

export default function checkAuth() {
    const token = localStorage.getItem('token');
    if(!token) {
        return false;
    }
    try {
        const decoded = decode(token);
        console.log(decoded)
        if(decoded.exp < Date.now()/1000) {
            return false;
        }
    }
    catch{
        return false;
    }
    return true;
}