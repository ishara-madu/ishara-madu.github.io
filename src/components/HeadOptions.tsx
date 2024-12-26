import { useEffect } from 'react';
import homeData from '../data/home.json'

export default function HeadOptions() {
    useEffect(() => {

        //favicon

        const svg = `
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="${homeData.color}" />
        </svg>
        `;

        const favicon = document.querySelector('link[rel="icon"]');
        favicon?.setAttribute('href', 'data:image/svg+xml;utf8,' + encodeURIComponent(svg));

        //title

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = 'Hey there';
            } else {
                document.title = homeData.name[1];
            }
        };
        document.title = homeData.name[1];
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);

        };
    }, []);

    return null;
}
