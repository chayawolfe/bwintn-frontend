import { Helmet } from 'react-helmet-async';
// sections
import { ChickenPlay } from 'src/sections/gameplay/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Game Play : Bwintn Sports betting and online casino </title>
            </Helmet>

            <ChickenPlay />
        </>
    );
}
