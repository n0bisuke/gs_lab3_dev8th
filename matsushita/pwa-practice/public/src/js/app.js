var deferredPrompt;
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('Service worker registered');
        });
}
//インストールバナーを表示
window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallpropt is  fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});