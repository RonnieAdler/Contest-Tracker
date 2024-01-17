document.addEventListener('DOMContentLoaded', function () {
  fetchContestData();
});

function fetchContestData() {
  const apiUrl = 'https://codeforces.com/api/contest.list?gym=false';
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const upcomingContests = data.result.filter(contest => contest.phase === 'BEFORE');
      displayContests(upcomingContests);
    })
    .catch(error => console.error('Error fetching contest data:', error));
}


function displayContests(contests) {
  const contestTable = document.getElementById('contestTable');

  if (contests.length === 0) {
    contestTable.innerHTML = '<p>No upcoming contests found.</p>';
    return;
  }

  const table = document.createElement('table');
  table.innerHTML = '<tr><th>Contest ID</th><th>Contest Name</th><th>Start Time</th><th>Duration</th></tr>';

  contests.forEach(contest => {
    const row = table.insertRow();
    row.insertCell(0).innerText = contest.id;
    row.insertCell(1).innerText = contest.name;
    row.insertCell(2).innerText = new Date(contest.startTimeSeconds * 1000).toLocaleString();
    
    // Convert duration from seconds to HH:mm format
    const duration = new Date(contest.durationSeconds * 1000).toISOString().substr(11, 8);
    row.insertCell(3).innerText = duration;
  });

  contestTable.appendChild(table);
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
