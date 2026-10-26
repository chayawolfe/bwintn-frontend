import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Link, Stack, Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
    disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const logoIcon = (
        <Box
            component="img"
            src="/logo/icon.jpg"
            sx={{ width: 40, height: 40, cursor: 'pointer', mr: 1, borderRadius: '50%' }}
        />
    );

    const logoText = (
        <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="bwin-logo"
                x="0px"
                y="0px"
                viewBox="0 0 600 297.8"
                sx={{
                    height: 40,
                    width: 'auto',
                    cursor: 'pointer',
                }}
            >
                <style type="text/css">
                    {`.st0 { fill: #FFFFFF; }
                    .st1 { fill-rule: evenodd; clip-rule: evenodd; fill: #FFFFFF; }
                    .st2 { fill: #FFD300; }`}
                </style>
                <g id="bwin-txt">
                    <polygon className="st0" points="397.1,165.8 365.5,294.5 416.8,294.5 449.8,160.5" />
                    <path
                        className="st0"
                        d="M566.4,160.2c-15.3-1.5-39.2,3.2-51,12.2c-0.3-4.9-1.2-8.8-2.2-12.7l-45.4,5.6c1.8,12.7,0,26.8-4.4,45.7l-20.4,83.5h51.3l21-85.2c5.1-7.4,13.3-12.3,20.2-12.3c8.6,0,10.6,6.3,8,16.5l-19.7,81h51.3l22-88C602.4,182.6,594.7,163,566.4,160.2z"
                    />
                    <path
                        className="st1"
                        d="M335,161.8l-16.2,37.5c-6,14.1-11.3,27.4-15.9,40.4l-0.6-77.9h-46.3l-38.4,78.6l4.2-80.4l-51,6.4L181,294.5h45.1c0,0,34.2-69.1,37.3-77.1l0.5,77.1h46.3l76.4-132.6H335z"
                    />
                    <path
                        className="st1"
                        d="M115.4,158.5c-13.3,0-23.3,3.5-29.2,6.8c8.4-26,10.3-50.1,10.3-50.1l0,0c0.4-3.9,0.4-8.5,0.3-11.6L43,110.1c0.6,8.6-0.7,22.3-7.6,51.4L9.5,269c-1.2,5.1-4.1,14.9-6.5,18.5c16.2,5.4,34.8,10.3,65.5,10.3c16.8,0,30.1-3.1,43.7-11.1c23.3-13.6,37.7-38.2,43.7-61.9C166.9,180.3,148.7,158.5,115.4,158.5z M101.8,227.1c-5.9,24.7-13.6,35.7-26.6,35.7c-5.3,0-9.7-1.3-12.1-3.1l14.2-58.9c2.7-2.3,7.4-6.4,15.1-6.4C103.9,194.5,108,200.9,101.8,227.1z"
                    />
                </g>
                <ellipse className="st2" cx="430.6" cy="124" rx="29" ry="25" />
            </Box>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: '#FFD300',
                    lineHeight: "21px",
                }}
            >
                TN
            </Typography>
        </Stack>
    );

    const logo = (
        <Stack direction="row" alignItems="center" sx={{ ...sx }} {...other}>
            {logoIcon}
            {logoText}
        </Stack>
    );


    if (disabledLink) {
        return logo;
    }

    return (
        <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
            {logo}
        </Link>
    );
});

export default Logo;
