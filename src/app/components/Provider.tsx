"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


function Provider() {
    const router = useRouter();
    const checkToken = () => {
        const token = Cookies.get('authToken');
        if (!token) {
            Swal.fire({
                title: 'No Access !',
                text: 'Redirect to Login Page',
                icon: 'error',
            }).then(() => {
                router.push('/');
            });
        }
    }
    return {
        checkToken
    }
}


export default Provider;
