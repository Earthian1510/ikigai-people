const people = [
    { id: "1", name: "Kalpana Chawala", img: "./images/kalpna.jpg", workArea: "Science & Tech", origin: "Haryana, India" },
    { id: "2", name: "Tulsi Gowda", img: "./images/tulsi.jpg", workArea: "Environment", origin: "Karnataka, India" },
    { id: "3", name: "Jadev Payeng", img: "./images/jadev.jpeg", workArea: "Environment", origin: "Assam, India" },
    { id: "4", name: "M S Swaminathan", img: "./images/swaminathan.jpg", workArea: "Agriculture", origin: "Tamil Nadu, India" },
    { id: "5", name: "Saalumarada Thimmakka", img: "./images/saalu.jpg", workArea: "Environment", origin: "Karnataka, India" },
    { id: "6", name: "Sundarlal Bahuguna", img: "./images/sunderlal.jpg", workArea: "Environment", origin: "Uttarakhand, India" },
    { id: "7", name: "Sunita Narain", img: "./images/sunitaN.jpg", workArea: "Environment", origin: "New Delhi, India" },
    { id: "8", name: "Rani Bang", img: "./images/ranibang.jpg", workArea: "Healthcare", origin: "Maharashtra, India" },
    { id: "9", name: "Abhay Bang", img: "./images/abhaybang.jpg", workArea: "Healthcare", origin: "Maharashtra, India" },
    { id: "10", name: "Vandana Shiva", img: "./images/vandana.jpeg", workArea: "Agriculture", origin: "Uttarakhand, India" }
];

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector(".cards-container");
    const filterBar = document.querySelector(".filterBar");

    function renderCards(filteredPeople) {
        let div = '';
        for (let i = 0; i < filteredPeople.length; i++) {
            let data = filteredPeople[i];
            div += `<div class="card">
                        <div class="card-left">
                            <img class="hero-img" src="${data.img}">
                        </div>
                        <div class="card-right">
                            <h4 class="hero-name">${data.name}</h4>
                            <span class="hero-origin">${data.origin}</span>
                            <p class="hero-workArea">${data.workArea}</p>
                        </div>
                    </div>`;
        }
        cardsContainer.innerHTML = div;
    }

    function filterPeople(filter) {
        if (filter === "All") {
            renderCards(people);
        } else {
            const filteredPeople = people.filter(person => person.workArea === filter);
            renderCards(filteredPeople);
        }
    }

    filterBar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            filterPeople(filter);
            
            // Update active class
            document.querySelectorAll('.filterBar a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }
    });

    // Initial render
    filterPeople("All");

});
