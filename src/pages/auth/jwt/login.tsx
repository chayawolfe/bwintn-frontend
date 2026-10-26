import { Helmet } from 'react-helmet-async';
// sections
import { JwtLoginView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Jwt: Bwintn Sports betting and online casino</title>
            </Helmet>

            <JwtLoginView />
        </>
    );
}
