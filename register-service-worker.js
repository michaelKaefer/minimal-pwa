if ('serviceWorker' in navigator) {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            await navigator.serviceWorker.register('/service-worker.js');
        } catch (error) {
            console.error('Failed to register service worker:', error);
        }
    });
} else {
    console.info('Service workers are not supported.');
}
