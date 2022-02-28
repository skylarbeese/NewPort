const burger = document.querySelector(".burger");
const mun = document.querySelector(".mun");

burger.addEventListener('click', () => {
    console.log('yes')
    burger.classList.toggle('active')
    mun.classList.toggle("active")
})