const main = document.querySelector("main");
const cards = document.querySelectorAll(".foods");
const foodPrices = [13.49, 14.25, 5.75, 8.99, 10.49, 6.99, 6.25, 7.99, 5.75]; // Prices for each food item

// Add Favorite Button and food Price to each food card
cards.forEach((card, index) => {
    addFavoriteButton(card, foodPrices[index]);
});

let fav_total = 0;

// Create Favorites Section at the end of the page 
const favSection = document.createElement("section");
favSection.id = "fav";

const favTitle = document.createElement("h2");
favTitle.textContent = "Favorites Food List";

const allfav = document.createElement("ol");
allfav.id = "fav-list";

const totalFood = document.createElement("p");
const heading = document.createElement("h2");
heading.textContent = "Total ";
const totalValue = document.createElement("span");
totalValue.id = "fav-total";

totalFood.appendChild(heading);
totalFood.appendChild(totalValue);
favSection.appendChild(favTitle);
favSection.appendChild(allfav);
favSection.appendChild(totalFood);
main.appendChild(favSection);

// Function to add Favorite Button and Price Tag to each food card
function addFavoriteButton(card, price) {

    const foodName = card.querySelector("h4").textContent;
    card.dataset.name = foodName;
    card.dataset.price = price;

    // Add Price of the food
    const priceTag = document.createElement("span");
    priceTag.classList.add("price-tag");
    priceTag.textContent = "$" + price.toFixed(2);
    card.appendChild(priceTag);

    // Add Favorite Button
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("fav-btn");
    btn.textContent = "Add to Favorites";

    card.appendChild(btn);

    // Event Listener for Favorite Button it will add or remove food from favorites list
    btn.addEventListener("click", () => {
        const foodName = card.dataset.name;
        const eachfoodPrice = Number(card.dataset.price);
        const favList = document.getElementById("fav-list");
        const totalPrice = document.getElementById("fav-total");

        if (btn.textContent === "Add to Favorites") {
            const li = document.createElement("li");
            li.dataset.name = foodName;
            li.textContent = foodName + "  : $" + eachfoodPrice.toFixed(2);
            favList.appendChild(li);

            fav_total += eachfoodPrice;
            totalPrice.textContent = "$" + fav_total.toFixed(2);

            card.classList.add("fav-food");
            btn.textContent = "Remove Favorite";
        } else {
            const items = favList.querySelectorAll("li");
            items.forEach(li => {
                if (li.dataset.name === foodName) {
                    favList.removeChild(li);
                }
            });

            fav_total -= eachfoodPrice;
            totalPrice.textContent = "$" + fav_total.toFixed(2);

            card.classList.remove("fav-food");
            btn.textContent = "Add to Favorites";
        }
    });

}