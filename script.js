document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const timeElement = document.getElementById('time');
        const dayElement = document.getElementById('day');

        timeElement.textContent = now.toUTCString().split(' ')[4];
        dayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});
