const button = document.querySelectorAll('.sliderButton');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const news1 = document.getElementById('news1');
const news2 = document.getElementById('news2');
const news3 = document.getElementById('news3');

const text1 = document.getElementById('textContent1');
const text2 = document.getElementById('textContent2');
const text3 = document.getElementById('textContent3');

// "Active Button" Function //

button.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        button.classList.add('active')

    })
        
});


// "Show News" Function //

btn1.onclick = function() {

    news1.classList.remove('ima4');
    news2.classList.remove('ima5');
    news3.classList.remove('ima6');

    news1.classList.add('ima1');
    news2.classList.add('ima2');
    news3.classList.add('ima3');

    text1.classList.remove("text4");
    text2.classList.remove("text5");
    text3.classList.remove("text6");

    text1.classList.add("text1");
    text2.classList.add("text2");
    text3.classList.add("text3");

};

btn2.onclick = function() {

    news1.classList.remove('ima1');
    news2.classList.remove('ima2');
    news3.classList.remove('ima3');

    news1.classList.add('ima4');
    news2.classList.add('ima5');
    news3.classList.add('ima6');

    text1.classList.remove("text1");
    text2.classList.remove("text2");
    text3.classList.remove("text3");

    text1.classList.add("text4");
    text2.classList.add("text5");
    text3.classList.add("text6");
};