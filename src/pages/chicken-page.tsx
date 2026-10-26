import { Helmet } from 'react-helmet-async';
// sections
import { ChickenPage } from 'src/sections/chicken/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Chichen | Bwintn Sports betting and online casino</title>
            </Helmet>

            <ChickenPage />
        </>
    );
}
