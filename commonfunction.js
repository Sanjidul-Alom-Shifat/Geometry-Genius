function fieldValidate(fieldId){
    const fieldElement = document.getElementById(fieldId);
    fieldElement.value = '';
    fieldElement.style.color = 'black';
    document.getElementById(fieldId).addEventListener('keyup',(e)=>{
        if(isNaN(e.target.value) || e.target.value < 0 ){
            alert('Enter a Positive Number !!!')
            e.target.value = '';
        }
    });
}

function InputValue(d) {
    const InputId = document.getElementById(d);
    const InputIdValue = InputId.value;
    InputId.value = '';
    return InputIdValue;
}

// multiplication for three elements
function ThreeMultiplication(a,b,c,d) {
    const ElementName = document.getElementById(a).innerText;
    const ElementHeight = InputValue(b);
    const ElementWidth = InputValue(c);
    if (
        ElementHeight == "" ||
        ElementWidth == "" ||
        ElementHeight <= 0 ||
        ElementWidth <= 0
      ) {
        return alert("please enter a valid number not a string.");
    }
    serial+=1;
    const Total = (0.5 * parseFloat(ElementHeight) * parseFloat(ElementWidth)).toFixed(2);
    const ElementArea = parseFloat(Total);
    document.getElementById(d).innerText = ElementArea;
    displayData(ElementName, ElementArea);
}

// multiplication for two elements
function TwoMultiplication(d,e,f,g) {
    const ElementName = document.getElementById(d).innerText;
    const ElementWidth = InputValue(e);
    const ElementLength = InputValue(f);
    if (
        ElementWidth == "" ||
        ElementLength == "" ||
        ElementLength <= 0 ||
        ElementWidth <= 0
      ) {
        return alert("please enter a valid number not a string.");
    }
    serial+=1;
    const Total = (parseFloat(ElementWidth) * parseFloat(ElementLength)).toFixed(2);
    const ElementArea = parseFloat(Total);
    document.getElementById(g).innerText = ElementArea;
    displayData(ElementName, ElementArea);
}

// for calculate the ellipse
function Ellipse(g,h,i) {
    const ElementName = document.getElementById(g).innerText;
    const ElementHeight = InputValue(h);
    const ElementWidth = InputValue(i);
    if (
        ElementHeight == "" ||
        ElementWidth == "" ||
        ElementHeight <= 0 ||
        ElementWidth <= 0
      ) {
        return alert("please enter a valid number not a string.");
    }
    serial+=1;
    const Total = (3.14 * parseFloat(ElementHeight) * parseFloat(ElementWidth)).toFixed(2);
    const ElementArea = parseFloat(Total);
    document.getElementById('ellipse-t').innerText = ElementArea;
    displayData(ElementName, ElementArea);
}

// common function to display data in the table
function displayData(NameOfElement, AreaOfElement) {
    const container = document.getElementById("table-container");
  
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${NameOfElement}</td>
      <td>${AreaOfElement}cm<sup>2</sup></td>
      <td>
      <button class="btn btn-sm btn-red-500"> to m<sup>2</sup></button>
      </td>
    `;
    container.appendChild(tr);
}
