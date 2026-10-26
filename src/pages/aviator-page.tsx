import { Helmet } from 'react-helmet-async';
// sections
import { AviatorCasino } from 'src/sections/aviator/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Aviator | Bwintn Sports betting and online casino</title>
            </Helmet>

            <AviatorCasino />
        </>
    );
}
