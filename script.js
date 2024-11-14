document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо заголовок "Категорії товарів" за його ідентифікатором
    const categoriesTitle = document.getElementById("categories-title");

    // Додаємо подію наведення курсору для зміни фону на жовтий
    categoriesTitle.addEventListener("mouseover", function() {
        categoriesTitle.style.backgroundColor = "yellow";
    });

    // Додаємо подію прибирання курсору для повернення фону на прозорий
    categoriesTitle.addEventListener("mouseout", function() {
        categoriesTitle.style.backgroundColor = "transparent";
    });

    // Знаходимо заголовок "Товари" за його ідентифікатором
    const productsTitle = document.getElementById("products-title");

    // Додаємо подію наведення курсору для зміни фону на фіолетовий і тексту на білий
    productsTitle.addEventListener("mouseover", function() {
        productsTitle.style.backgroundColor = "purple";
        productsTitle.style.color = "white";
    });

    // Додаємо подію прибирання курсору для повернення фону і тексту до початкових кольорів
    productsTitle.addEventListener("mouseout", function() {
        productsTitle.style.backgroundColor = "transparent";
        productsTitle.style.color = "black";
    });

    // Знаходимо заголовок "Головна сторінка" за його селектором
    const mainTitle = document.querySelector("main h2");

    // Додаємо подію наведення курсору для зміни фону на синій
    mainTitle.addEventListener("mouseover", function() {
        mainTitle.style.backgroundColor = "blue";
        mainTitle.style.color = "white"; // Додаємо білий колір тексту для контрасту
    });

    // Додаємо подію прибирання курсору для повернення фону і тексту до початкових кольорів
    mainTitle.addEventListener("mouseout", function() {
        mainTitle.style.backgroundColor = "transparent";
        mainTitle.style.color = "black";
    });
});
// Додаємо обробники подій для збільшення картинки
document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.5)';
    });
    
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
