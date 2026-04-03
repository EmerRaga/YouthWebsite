window.openPanel = function(member) {
  const panel = document.getElementById("teamPanel");
  const text = document.getElementById("panelText");


  if (member === "panel1") {
    text.innerHTML = `
      <img src="Images/Profile_PictureNumber2.jpg" class="panel-img">
      <h2>Nazeeya Syedda</h2>
      <p class="panel-role">Founder & Executive Director</p>
      <p>
        <a href="https://www.linkedin.com/in/syedda-nazeeya-487a7335b/" target="_blank" class="btn-linkedin">LinkedIn</a>
      </p>
      <p>
        Syedda Nazeeya is a Year 12 student, based in Australia, and pursuing a career in the biological sciences. She founded @uygyouth in 2025, drawn by her passion for cultural preservation and desire to give back to her community. Her lived experience as a young Uyghur in the diaspora is at the heart of everything she does. Outside of volunteering, she enjoys reading, travelling, spending time with friends, and existing in nature.
      </p>
      <p>
        “Exlaq adem zinniti” – “ئەخلاق ئادەم زىننىتى” - “Virtue is the jewel of a person”
      </p>
    `;
  }


  if (member === "panel2") {
    text.innerHTML = `
      <img src="Images/Profile_PictureNumber1.jpg" class="panel-img">
      <h2>Emin Uyghur</h2>
      <p class="panel-role">Co-Founder & Deputy Director</p>
      <p>
        <a href="https://www.linkedin.com/in/emin-yusuyin-376b18272/" target="_blank" class="btn-linkedin">LinkedIn</a>
      </p>
      <p>
        Emin co-foundeded Uyghur Youth alongside Nazeeya in 2025, and now oversee's everything as Deputy Director, including all work done in Canada, creating social media post's and collabrating within different departments of the Uyghur Youth. Student at the University of Alberta going to studying PoliSci, he hopes to make at least one meaningful impact during his lifetime.
      </p>
      <p>
        “If you don’t awaken, you will remain in darkness forever.” - Abdukhaliq Uyghur
      </p>
    `;
  }


  if (member === "panel3") {
    text.innerHTML = `
      <img src="Images/Untitled7.png" class="panel-img">
      <h2>Alip</h2>
      <p class="panel-role">Developer</p>
      <p>
        Alip likes playing video games, drawing, and cooking! He also like making new meals, and most of all, likes eating them! He hopes to pursue a career in finance one day!
      </p>
      <p>
        "Dost sözini tashlima; tashlap beshingni qashlima - Don’t throw away your friend’s words; if you do, don’t be surprised at your misfortune."
      </p>
    `;
  }


  if (member === "panel4") {
    text.innerHTML = `
      <img src="Images/Untitled6.png" class="panel-img">
      <h2>Alim</h2>
      <p class="panel-role">Developer</p>
      <p>
       Alim is a 17-year-old high school student based in Canada. He joined @uygyouth in its early stages after being invited by the founders, as he wanted to be more connected to his community and contribute to something meaningful. Through his work, he aims to support impactful initiatives while continuing to grow his skills and interests. He has a strong interest in mathematics and the sciences, particularly physics, with a focus on space-related fields such as astronomy and quantum physics. He hopes to pursue a career in this area in the future. Outside of academics, Alim enjoys playing video games, watching anime, and reading manga. He also has a love for food and enjoys cooking, as well as trying new meals and cuisines whenever he gets the chance.
      </p>
      <p>
        "Do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins. Indeed, it is He who is the Forgiving, the Merciful." (Quran 39:53)
      </p>
    `;
  }


  if (member === "panel5") {
    text.innerHTML = `
      <img src="Images/Untitled5 2.png" class="panel-img">
      <h2>Quash</h2>
      <p class="panel-role">Media Editor</p>
      <p>
        Quash is a 17-year-old high school student (VG1), based in Norway, and currently having an interest in space and astronomy. She joined @uygyouth in the early making process, because of her passion to be a part of an Uyghur community that connects, preserve and support one another. Her hobbies are watching K-dramas, playing the piano, being with friends and traveling!
      </p>
      <p>
       “I still haven’t figured out how I should live my life, but I must live fully” - Summer Strike
      </p>
    `;
  }


  panel.style.bottom = "0";
};


window.closePanel = function() {
  document.getElementById("teamPanel").style.bottom = "-100%";
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) 
          || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});
