        // Load the AdsGram SDK
        const showPromise: Promise<ShowPromiseResult> = AdController.show();
        function loadAdsgramSdk(callback) {
            const script = document.createElement('script');
            script.src = 'https://sad.adsgram.ai/js/sad.min.js';
            script.async = true;
            script.onload = callback;
            script.onerror = () => console.error('Failed to load the AdsGram SDK');
            document.head.appendChild(script);
        }

        // Initialize and show the ad
        function showAd() {
            const blockId = "106";
            const AdController = window.Adsgram.init({ blockId: blockId, debug: true });

            AdController.show().then((result) => {
                if (result.done) {
                    console.log('User watched the ad till the end.');
                } else {
                    console.log('User skipped the ad or an error occurred.');
                }
            }).catch((error) => {
                console.error('Error showing ad:', error.description);
            });
        }

        // Set up the button click listener
        document.addEventListener('DOMContentLoaded', () => {
            loadAdsgramSdk(() => {
                document.getElementById('showAdBtn').addEventListener('click', showAd);
            });
        });
