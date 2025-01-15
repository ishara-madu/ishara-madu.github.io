import { useEffect } from 'react';
import homeData from '../data/home.json'

export default function HeadOptions() {
    useEffect(() => {

        // Change favicon dynamically
        const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
        if (link) {
            link.href = "/favicon.png"; // Update the path if needed
        }

        //title

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = 'Hey there! 👋';
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
