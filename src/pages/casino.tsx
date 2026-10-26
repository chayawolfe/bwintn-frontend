import { Helmet } from 'react-helmet-async';
// sections
import { CasinoView } from 'src/sections/casino/view';

// ----------------------------------------------------------------------

export default function CasinoPage() {
    return (
        <>
            <Helmet>
                <title> Casino: Bwintn Sports betting and online casino</title>
            </Helmet>

            <CasinoView />
        </>
    );
}
