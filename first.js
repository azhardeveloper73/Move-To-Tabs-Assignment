const aboutDetails = [
  {
    title: "History",
    titleData: "History, as a discipline, is traditionally centred on peoples, cultures, countries, and regions, but everything has a history that can be described and studied. Examples of these histories include deaf history, the history of movies, the history of Arabia, the history of science, the geologic history of Earth, the history of the organization of work, the history of logic, the history of early Christianity, and the history of coffee, among many others. History is also celebrated through commemorations such as Black History Month and Women’s History Month.",
    imgUrl:
      "https://png.pngtree.com/background/20230613/original/pngtree-mountain-road-with-mountains-covered-in-grass-picture-image_3383948.jpg",
  },
  {
    title: "Vision",
    titleData: "A vision statement outlines the company's long-term goals and aspirations for the future in terms of its long-term growth and impact on the world. Your mission defines what your organization does and what you stand for, while your vision statement speaks to your goals and ideals for the future.",
    imgUrl:
      "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Goals",
    titleData: "Vague goals that lack clarity are often left undone, even if they have great potential. Transform fuzzy objectives into attainable goals with the SMART goals framework. SMART is an acronym for specific, measurable, achievable, realistic, and time-bound. In this article, we'll dive into why each element of the SMART goals acronym is essential and how to apply them to your own goals.",
    imgUrl:
      "https://tse1.mm.bing.net/th/id/OIP.KuVzrEm7351d4-CjOpjAzwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const historyBtn = document.querySelector("#history");
const visionBtn = document.querySelector("#vision");
const goalsBtn = document.querySelector("#goals");
const elementsContent = document.querySelectorAll(".contentData");
const buttons = document.querySelectorAll(".tab-btn");

historyBtn.addEventListener("click", function () {
    setActive(this);
  elementsContent[0].innerHTML = `<img src="${aboutDetails[0].imgUrl}"alt="">`;
  elementsContent[1].innerHTML = `<h4>${aboutDetails[0].title}</h4>
                <p>${aboutDetails[0].titleData}</p>`;
});

visionBtn.addEventListener("click", function () {
    setActive(this);
  elementsContent[0].innerHTML = `<img src="${aboutDetails[1].imgUrl}"alt="">`;
  elementsContent[1].innerHTML = `<h4>${aboutDetails[1].title}</h4>
                <p>${aboutDetails[1].titleData}</p>`;
});

goalsBtn.addEventListener("click", function () {
    setActive(this);
  elementsContent[0].innerHTML = `<img src="${aboutDetails[2].imgUrl}"alt="">`;
  elementsContent[1].innerHTML = `<h4>${aboutDetails[2].title}</h4>
                <p>${aboutDetails[2].titleData}</p>`;
});



function setActive(clickedBtn) {
  buttons.forEach(btn => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
}
