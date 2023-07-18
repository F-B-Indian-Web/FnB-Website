const menu = [
    {
        id: 1,
        title: "mutton biryani",
        category: "main course",
        price: 55.000,
        img: "./images/menu2.jpg",
        desc: `Layers of beautifully spiced mutton and tender grains of rice topped with coriander and fried onions. `,
    },
    {
        id: 2,
        title: "butter chicken",
        category: "main course",
        price: 40.000,
        img: "./images/test.jpg",
        desc: `Tender chicken cooked in a rich tomato and butter-based sauce. `,
    },
    {
        id: 3,
        title: "babi guling",
        category: "main course",
        price: 35.000,
        img: "./images/menu2.jpg",
        desc: `Roasted suckling pig marinated in Balinese spices and served with rice and vegetables.`,
    },
    {
        id: 4,
        title: "ayam betutu",
        category: "main course",
        price: 30.000,
        img: "./images/menu6.jpeg",
        desc: `Balinese style roasted chicken, marinated in rich herbs and spices. `,
    },
    {
        id: 5,
        title: "rogan josh",
        category: "main course",
        price: 55.000,
        img: "./images/menu7.jpeg",
        desc: `A flavorful lamb curry made with aromatic spices and yogurt.`,
    },
    {
        id: 6,
        title: "palak paneer",
        category: "vegetarian",
        price: 35.000,
        img: "./images/menu8.jpeg",
        desc: `Soft cottage cheese cubes cooked in a creamy spinach gravy.`,
    },
    {
        id: 7,
        title: "dal makhani",
        category: "vegetarian",
        price: 33.000,
        img: "./images/menu9.jpeg",
        desc: `A rich and creamy lentil preparation made with black lentils, butter, and cream. `,
    },
    {
        id: 8,
        title: "gado-gado",
        category: "vegetarian",
        price: 25,
        img: "./images/item-8.jpeg",
        desc: `A mix of boiled vegetables, tofu, and tempeh, served with peanut sauce.  `,
    },
    {
        id: 9,
        title: "lawar",
        category: "vegetarian",
        price: 20,
        img: "./images/item-9.jpeg",
        desc: `A traditional Balinese salad made with mixed vegetables, grated coconut, and minced meat substitute.`,
    },
    {
        id: 10,
        title: "baingan bharta",
        category: "vegetarian",
        price: 25,
        img: "./images/item-9.jpeg",
        desc: `Smoky roasted eggplant mashed and cooked with onions, tomatoes, and spices.`,
    },
    {
        id: 11,
        title: "mango lassi",
        category: "beverages",
        price: 30,
        img: "./images/bev2.jpg",
        desc: `A refreshing yogurt-based drink blended with fresh mango pulp.`,
    },
    {
        id: 12,
        title: "masala chai",
        category: "beverages",
        price: 25,
        img: "./images/bev1.jpg",
        desc: `Traditional Indian spiced tea brewed with milk, tea leaves, and aromatic spices.`,
    },
    {
        id: 13,
        title: "es campur",
        category: "beverages",
        price: 30,
        img: "./images/item-9.jpeg",
        desc: `A mixed fruit cocktail with shaved ice, sweet syrups, and condensed milk.`,
    },
    {
        id: 14,
        title: "nimbu pani",
        category: "beverages",
        price: 20,
        img: "./images/item-9.jpeg",
        desc: `A refreshing lemonade made with freshly squeezed lemon juice, water, and sugar.`,
    },
    {
        id: 15,
        title: "es daluman",
        category: "beverages",
        price: 20,
        img: "./images/item-9.jpeg",
        desc: `A refreshing and cooling drink made from the extract of daluman leaves with palm sugar`,
    },
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll('.filter-btn')



window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }

        });
        //console.log(menuCategory);
        if (category === 'all') {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }
    });
});




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rp${item.price}.000</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
