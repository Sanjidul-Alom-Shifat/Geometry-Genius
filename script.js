// Set all Input Validation
fieldValidate('triangle-height');
fieldValidate('triangle-width');
fieldValidate('rectangle-width');
fieldValidate('rectangle-length');
fieldValidate('parallelogram-width');
fieldValidate('parallelogram-height');
fieldValidate('rhombus-height');
fieldValidate('rhombus-width');
fieldValidate('pentagon-height');
fieldValidate('pentagon-width');
fieldValidate('ellipse-height');
fieldValidate('ellipse-width');

let serial = 0;

// triangle
document.getElementById('triangle-btn').addEventListener('click', function () {
 
    ThreeMultiplication('triangle-title', 'triangle-height', 'triangle-width','t-area');
})
// triangle

// rectangle 
document.getElementById('rectangle-btn').addEventListener('click', function () {
  
    TwoMultiplication('rectangle-title', 'rectangle-width', 'rectangle-length','rec-t');  
})
// rectangle

// parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    
    TwoMultiplication('parallelogram-title', 'parallelogram-width', 'parallelogram-height','para-t');
})
// parallelogram

// rhombus
document.getElementById('rhombus-btn').addEventListener('click', function () {
    
    ThreeMultiplication('rhombus-title', 'rhombus-height', 'rhombus-width','rhombus-t');
})
// rhombus

// pentagon
document.getElementById('pentagon-btn').addEventListener('click', function () {
  
    ThreeMultiplication('pentagon-title', 'pentagon-height', 'pentagon-width','penta-t');
})
// pentagon

// ellipse
document.getElementById('ellipse-btn').addEventListener('click', function () {
  
    Ellipse('ellipse-title','ellipse-height','ellipse-width');  
})
// ellipse

// for navbar button
document.getElementById('navbar-btn').addEventListener('click', function () {
    window.location.href = 'index1.html';
})
// for navbar button










  