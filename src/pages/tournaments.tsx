import { Helmet } from 'react-helmet-async';
// sections
import { TournamentsView } from 'src/sections/tournaments/view';

// ----------------------------------------------------------------------

export default function TournamentPage() {
    return (
        <>
            <Helmet>
                <title> Tournaments: Bwintn Sports betting and online casino</title>
            </Helmet>

            <TournamentsView />
        </>
    );
}
