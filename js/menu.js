const menu = [
    {
        id: 1,
        title: "Mutton Biryani",
        label: "main course",
        category: "main course",
        price: 55,
        img: "./images/menu1.jpg",
        desc: `Layers of beautifully spiced mutton and tender grains of rice topped with coriander and fried onions. `,
    },
    {
        id: 2,
        title: "Butter Chicken",
        label: "main course",
        category: "main course",
        price: 40,
        img: "./images/menu5.jpg",
        desc: `Tender chicken cooked in a rich tomato and butter-based sauce. `,
    },
    {
        id: 3,
        title: "Babi Guling",
        label: "main course",
        category: "main course",
        price: 35,
        img: "./images/menu3.jpg",
        desc: `Roasted suckling pig marinated in Balinese spices and served with rice and vegetables.`,
    },
    {
        id: 4,
        title: "Ayam Betutu",
        label: "main course",
        category: "main course",
        price: 30,
        img: "./images/menu4.jpg",
        desc: `Balinese style roasted chicken, marinated in rich herbs and spices. `,
    },
    {
        id: 5,
        title: "Rogan Josh",
        label: "main course",
        category: "main course",
        price: 55,
        img: "./images/menu2.jpg",
        desc: `A flavorful lamb curry made with aromatic spices and yogurt.`,
    },
    {
        id: 6,
        title: "Palak Paneer",
        label: "vegetarian",
        category: "vegetarian",
        price: 35,
        img: "./images/veg1.jpeg",
        desc: `Soft cottage cheese cubes cooked in a creamy spinach gravy.`,
    },
    {
        id: 7,
        title: "Dal Makhani",
        label: "vegetarian",
        category: "vegetarian",
        price: 33,
        img: "./images/veg2.jpeg",
        desc: `A rich and creamy lentil preparation made with black lentils, butter, and cream. `,
    },
    {
        id: 8,
        title: "Gado-gado",
        label: "vegetarian",
        category: "vegetarian",
        price: 25,
        img: "./images/veg3.jpg",
        desc: `A mix of boiled vegetables, tofu, egg, and tempeh, served with peanut sauce.  `,
    },
    {
        id: 9,
        title: "Lawar",
        label: "vegetarian",
        category: "vegetarian",
        price: 20,
        img: "./images/veg4.jpg",
        desc: `A traditional Balinese salad made with mixed vegetables, grated coconut, and minced meat substitute.`,
    },
    {
        id: 10,
        title: "Baingan Bharta",
        label: "vegetarian",
        category: "vegetarian",
        price: 25,
        img: "./images/veg5.jpg",
        desc: `Smoky roasted eggplant mashed and cooked with onions, tomatoes, and spices.`,
    },
    {
        id: 11,
        title: "Mango Lassi",
        label: "beverage",
        category: "beverages",
        price: 30,
        img: "./images/bev2.jpg",
        desc: `A refreshing yogurt-based drink blended with fresh mango pulp.`,
    },
    {
        id: 12,
        title: "Masala Chai",
        label: "beverage",
        category: "beverages",
        price: 25,
        img: "./images/bev1.jpg",
        desc: `Traditional Indian spiced tea brewed with milk, tea leaves, and aromatic spices.`,
    },
    {
        id: 13,
        title: "Es Campur",
        label: "beverage",
        category: "beverages",
        price: 30,
        img: "./images/bev3.png",
        desc: `A mixed fruit cocktail with shaved ice, sweet syrups, and condensed milk.`,
    },
    {
        id: 14,
        title: "Nimbu Pani",
        label: "beverage",
        category: "beverages",
        price: 20,
        img: "./images/bev5.png",
        desc: `A refreshing lemonade made with freshly squeezed lemon juice, water, and sugar.`,
    },
    {
        id: 15,
        title: "Es Daluman",
        label: "beverage",
        category: "beverages",
        price: 20,
        img: "./images/bev4.png",
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
                <h4 class="price">Rp${item.price}.000 </h4>
                
              </header>
              <p class="item-text">
              <h4>${item.label}</h4>
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

const header = document.getElementById("btns-active");
const btns = header.getElementsByClassName("filter-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}