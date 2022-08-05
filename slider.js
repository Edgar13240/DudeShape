// let page = 1;

// let data = {
//     items: [
//         {
//                 index: 1,
//                 items: [
//                     {
//                         image: "./assets/images/furniture-image.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                     {
//                         image: "./assets/images/furniture-imageT.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                     {
//                         image: "./assets/images/furniture-imagesTh.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                 ]
//         },
//         {
//                 index: 2,
//                 items: [
//                     {
//                         image: "./assets/images/furniture-image.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                     {
//                         image: "./assets/images/furniture-image.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                     {
//                         image: "./assets/images/furniture-image.png",
//                         title: "White Swan Chair",
//                         price: "40$",
//                         isFavourite: false
//                     },
//                 ]
//         }
//     ]
// };


// let preventCarouselButtonElement = document.querySelector("#prevent-button");
// let nextCarouselButtonElement = document.querySelector("#next-button");
// let carouselElement = document.querySelector("#carousel");

// insertCarouselElements(page);

// preventCarouselButtonElement.addEventListener("click", () => {
//     if (page > 1) {
//         page--;
//         carouselElement.innerHTML = "";
//         insertCarouselElements(page);
//     }
// });

// nextCarouselButtonElement.addEventListener("click", () => {
//     if (page != data.items.length) {
//         page++;
//         carouselElement.innerHTML = "";
//         insertCarouselElements(page);
//     }
// });

// function validateCarouselControl(page) {
//     if (page == 1) {
//         preventCarouselButtonElement.setAttribute("disabled", true);
//     } else {
//         preventCarouselButtonElement.removeAttribute("disabled");
//     }

//     if (page == data.items.length) {
//         nextCarouselButtonElement.setAttribute("disabled", true);
//     } else {
//         nextCarouselButtonElement.removeAttribute("disabled");
//     }
// }

// function insertCarouselElements(page) {

// validateCarouselControl(page);

// for (let i = 0; i < data.items.length; i++) {
//     let pageData = data.items[i];

//     if (pageData.index == page) {

//         let furnitureItems = pageData.items;
//         for (let i = 0; i < furnitureItems.length; i++) {
//             let element = furnitureItems[i];

//             carouselElement.insertAdjacentHTML("beforeend", `
//                 <div class="slider__block">
//                     <img src=${element.image}>
//                     <div class="slider__main">
//                         <p  class="slider__text">${element.title}</p>
//                         <div class="slider__flex">
//                             <div class="slider__icon icon">
//                                 <img src="assets/images/Vector1.png">
//                             </div>
//                             <div class="slider__icons">
//                                 <img src="assets/images/Vector.png">
//                             </div>
//                         </div>
//                     </div>
//                     <div class="slider__price">
//                         <p class="slider__pay">${element.price}</p>
//                         <button class="slider__button">Buy Now</button>
//                     </div>
//                 </div>
//             `);
//         }
//     }

// }
//  }



let page = 1;

let data = {
    items: [
        {
                index: 1,
                items: [
                    {
                        id: 1,
                        image: "./assets/images/furniture-image.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                    {
                        id: 2,
                        image: "./assets/images/furniture-imageT.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                    {
                        id:3,
                        image: "./assets/images/furniture-imagesTh.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                ]
        },
        {
                index: 2,
                items: [
                    {
                        id:4,
                        image: "./assets/images/furniture-imageT.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                    {
                        id:5,
                        image: "./assets/images/furniture-imagesTh.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                    {
                        id:6,
                        image: "./assets/images/furniture-image.png",
                        title: "White Swan Chair",
                        price: "40$",
                        isFavourite: false
                    },
                ]
        }
    ]
};

let preventCarouselButtonElement = document.querySelector("#prevent-button");
let nextCarouselButtonElement = document.querySelector("#next-button");
let carouselElement = document.querySelector("#carousel");
let favourite = document.querySelector("#slider__favourite")

insertCarouselElements(page);

preventCarouselButtonElement.addEventListener("click", () => {
    if (page > 1) {
        page--;
        carouselElement.innerHTML = "";
        insertCarouselElements(page);
    }
});

nextCarouselButtonElement.addEventListener("click", () => {
    if (page != data.items.length) {
        page++;
        carouselElement.innerHTML = "";
        insertCarouselElements(page);
    }
});

function validateCarouselControl(page) {
    if (page == 1) {
        preventCarouselButtonElement.setAttribute("disabled", true);
    } else {
        preventCarouselButtonElement.removeAttribute("disabled");
    }

    if (page == data.items.length) {
        nextCarouselButtonElement.setAttribute("disabled", true);
    } else {
        nextCarouselButtonElement.removeAttribute("disabled");
    }
}

function insertCarouselElements(page) {

validateCarouselControl(page);

for (let i = 0; i < data.items.length; i++) {
    let pageData = data.items[i];

    if (pageData.index == page) {
        let furnitureItems = pageData.items;
        for (let i = 0; i < furnitureItems.length; i++) {
            let element = furnitureItems[i];                                                                                        

            let favouriteItemElement = document.createElement("button");

            favouriteItemElement.setAttribute("data-id", element.id);

            let favouriteItemElementClasses = ["slider__icon", `${element.isFavourite ? "slider__favourite" : "icon"}`];

            favouriteItemElement.classList.add(...favouriteItemElementClasses);    

            carouselElement.insertAdjacentHTML("beforeend", `
                <div class="slider__block">
                    <img src=${element.image}>
               <div class="slider__header">
                    <div class="slider__main">
                        <p  class="slider__text">${element.title}</p>
                        <div class="slider__flex">
                            <div class="slider__icons">
                                <img src="assets/images/Vector.png">
                            </div>
                        </div>
                    </div>
                    <div class="slider__price">
                        <p class="slider__pay">${element.price}</p>
                        <button class="slider__button">Buy Now</button>
                    </div>
             </div>
                </div>
            `);

            let productsElementControls = document.querySelectorAll(".slider__flex");

            for (let i = 0; i < productsElementControls.length; i++) {
                let productControlElement = productsElementControls[i];
                productControlElement.insertAdjacentElement("beforeend", favouriteItemElement);
            }

            favouriteItemElement.addEventListener("click", (event) => {
                let {target} = event;
                let productId  = parseInt(target.getAttribute("data-id"));
            
                furnitureItems = furnitureItems.map(element => {
                    if (element.id == productId) {
                        target.classList.toggle("slider__favourite");
                        return { 
                            
                            ...element,
                            isFavourite: !element.isFavourite
                        }
                    }

                    return element;
                });
                
            });
        }
    }

}
}


