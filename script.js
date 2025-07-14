fetch('data/experience.json')
  .then(res => res.json())
  .then(data => {
    const expDiv = document.getElementById('experience');
    data.forEach(exp => {
      expDiv.innerHTML += `<p><strong>${exp.company}</strong>: ${exp.position} (${exp.duration})</p>`;
    });
  });
