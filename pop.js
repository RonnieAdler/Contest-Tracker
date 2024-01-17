document.addEventListener('DOMContentLoaded', function () {
  fetchContestData();
});

function fetchContestData() {
  // Replace this URL with the API endpoint providing contest data
  const apiUrl = 'https://example.com/api/contests';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayContests(data))
    .catch(error => console.error('Error fetching contest data:', error));
}

function displayContests(contests) {
  const contestTable = document.getElementById('contestTable');

  if (contests.length === 0) {
    contestTable.innerHTML = '<p>No upcoming contests found.</p>';
    return;
  }

  const table = document.createElement('table');
  table.innerHTML = '<tr><th>Platform</th><th>Name</th><th>Start Time</th></tr>';

  contests.forEach(contest => {
    const row = table.insertRow();
    row.insertCell(0).innerText = contest.platform;
    row.insertCell(1).innerText = contest.name;
    row.insertCell(2).innerText = new Date(contest.startTime).toLocaleString();
  });

  contestTable.appendChild(table);
}
