// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Handle opening and closing of the sign-in modal
    const modal = document.getElementById('signin');
    const signInBtn = document.querySelector('.signin-btn');
    const closeBtn = document.querySelector('.close');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener to open the modal when the sign-in button is clicked
    signInBtn.addEventListener('click', openModal);

    // Event listener to close the modal when the close button (x) is clicked
    closeBtn.addEventListener('click', closeModal);

    // Event listener to close the modal if the user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Simulate fetching and updating the leaderboard data
    function fetchLeaderboardData() {
        // Placeholder for fetching data logic
        console.log('Fetching the latest leaderboard data...');

        // Update the leaderboard content with the new data
        const leaderboardPlaceholder = document.querySelector('.leaderboard-placeholder');
        leaderboardPlaceholder.innerHTML = '<p>New leaderboard data loaded.</p>';
    }

    // Set an interval to fetch new leaderboard data every 5 minutes
    setInterval(fetchLeaderboardData, 300000);

    // Call it once on page load as well
    fetchLeaderboardData();
});
