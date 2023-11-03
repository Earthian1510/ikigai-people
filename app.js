const people = [
    {
        id: "1",
        name: "Kalpana Chawala",
        img: "./images/kalpna.jpg",
        profession: "Astronaut",
        origin: "Haryana, India"
    },
    {
        id: "2",
        name: "Tulsi Gowda",
        img: "./images/tulsi.jpg",
        profession: "Environmentalist",
        origin: "Karnataka, India"
    },
    {
        id: "3",
        name: "Jadev Payeng",
        img: "./images/jadev.jpeg",
        profession: "Environmentalist",
        origin: "Assam, India"
    },
    {
        id: "4",
        name: "M S Swaminathan",
        img: "./images/swaminathan.jpg",
        profession: "Agricultural Scientist",
        origin: "Tamil Nadu, India"
    },
    {
        id: "5",
        name: "Saalumarada Thimmakka",
        img: "./images/saalu.jpg",
        profession: "Environmentalist",
        origin: "Karnataka, India"
    },
    {
        id: "6",
        name: "Sundarlal Bahuguna",
        img: "./images/sunderlal.jpg",
        profession: "Environmentalist",
        origin: "Uttarakhand, India"
    },
    {
        id: "7",
        name: "Sunita Narain",
        img: "./images/sunitaN.jpg",
        profession: "Environmentalist",
        origin: "New Delhi, India"
    },
    {
        id: "8",
        name: "Rani Bang",
        img: "./images/ranibang.jpg",
        profession: "Activist, Health Researcher",
        origin: "Maharashtra, India"
    },
    {
        id: "9",
        name: "Abhay Bang",
        img: "./images/abhaybang.jpg",
        profession: "Activist, Health Researcher",
        origin: "Maharashtra, India"
    },
    {
        id: "10",
        name: "Vandana Shiva",
        img: "./images/vandana.jpeg",
        profession: "Environmental Activist",
        origin: "Uttarakhand, India"
    }
];



document.addEventListener('DOMContentLoaded', function() {
    var cardsContainer = document.querySelector(".cards-container");
    let div = '';
    for (let i = 0; i < people.length; i++) {
        let data = people[i];
        div += `<div class="card">
                    <div class="card-left">
                        <img class="hero-img" src="${data.img}">
                    </div>
                    <div class="card-right">
                        <h4 class="hero-name">${data.name}</h4>
                        <span class="hero-origin">${data.origin}</span>
                        <p class="hero-profession">${data.profession}</p>
                    </div>
                </div>`;
    }
    cardsContainer.innerHTML = div;
});
