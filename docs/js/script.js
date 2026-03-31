function openPanel(panelId) {
  const content = {
    panel1: `
      <h2>Nazeeya Syedda</h2>
      <p>Founder & Executive Director</p>
      <p>Passionate about cultural preservation and youth leadership.</p>
    `,
    panel2: `
      <h2>Emin Uyghur</h2>
      <p>Co-Founder & Deputy Director</p>
      <p>Leads outreach and initiatives across Canada.</p>
    `,
    panel3: `
      <h2>Alip</h2>
      <p>Developer</p>
    `,
    panel4: `
      <h2>Alim</h2>
      <p>Developer</p>
    `,
    panel5: `
      <h2>Quash</h2>
      <p>Media Editor</p>
    `
  };

  document.getElementById("panelText").innerHTML = content[panelId];
  document.getElementById("teamPanel").style.bottom = "0";
}

function closePanel() {
  document.getElementById("teamPanel").style.bottom = "-100%";
}
