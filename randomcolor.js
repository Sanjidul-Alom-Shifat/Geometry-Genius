
// for using random color part 

function RandomColors(ColorId) {
    const card = document.getElementById(ColorId);
    card.addEventListener("mouseover", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
    });

    card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "transparent";
    });
}

RandomColors('triangle-card');
RandomColors('rectangle-card');
RandomColors('parallelogram-card');
RandomColors('rhombus-card');
RandomColors('pentagon-card');
RandomColors('ellipse-card');