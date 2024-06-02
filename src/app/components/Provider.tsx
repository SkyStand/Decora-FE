"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


function Provider() {
    const router = useRouter();
    const checkToken = () => {
        const token = Cookies.get('authToken');
        if (!token) {
            return router.push('/auth/login')
        }
    }
    return {
        checkToken
    }
}


export default Provider;
