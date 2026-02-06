
  const moods = [];
  const chart = document.getElementById('chart');

  function addMood(value) {
    moods.push(value);
    renderChart();
  }

  function renderChart() {
    chart.innerHTML = '';
    moods.forEach(m => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = (m * 25) + 'px';
      bar.innerText = m;
      chart.appendChild(bar);
    });
  }

  function saveGoal() {
    const goal = document.getElementById('goalInput').value;
    document.getElementById('goalDisplay').innerText = goal ? 'Today’s Goal: ' + goal : '';
  }

  function saveJournal() {
    document.getElementById('journalSaved').innerText = 'Journal entry saved securely.';
  }

  function setReminder() {
    const med = document.getElementById('med').value;
    document.getElementById('medMsg').innerText = med ? 'Reminder set for ' + med : '';
  }
