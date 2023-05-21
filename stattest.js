// script.js

document.addEventListener('DOMContentLoaded', function() {
  const outerDropdown = document.getElementById('outer-dropdown');
  const innerDropdown = document.getElementById('inner-dropdown');
  const innerc = document.getElementById('innerc');
  const innerc2 = document.getElementById('innerc2');
  const result = document.getElementById('result');

  function updateResult() {
    const outerSelectedOption = outerDropdown.value;
    const innerSelectedOption = innerDropdown.value;

    let displayRes;
    switch (outerSelectedOption) {
      case 'oo1':
        displayRes = `One-sample z-test <br><br>
        Assumption: X follows Bernoulli distribution <br>
        R: prop.test(p=NULL, correct=F)`;
        break;
      case 'oo2':
        displayRes = `Two-sample z-test <br><br>
        Assumption: both samples are large in size such that CLT normality applies <br>
        R: prop.test(x, n, correct=F)`;
        break;
      case 'oo3':
        displayRes = `McNemar's test <br><br>
        R: mcnemar.test(matrix(c(a, b, c, d), nrow=2), correct=F)`;
        break;
      case 'oo4':
        displayRes = `Wilcox rank-sum test <br><br>
        Assumption: variances of the two variables differ <br>
        R: wilcox.test(x, y, alternative, exact=T)`;
        break;
      default:
        displayRes = 'None';
    }


    // Clear previous result and hide inner dropdown
    result.innerHTML = '';
    innerc.style.display = 'none';
    innerc2.style.display = 'none';

    // Shows inner option
    // if (outerSelectedOption !== '') {
    //   innerc2.style.display = 'block';
    // }

    // Handle selected options
    if (outerSelectedOption !== '') {
      // Clear previous result
      result.innerHTML = '';


      // Display result based on selected options
      // result.innerHTML = `Outer Option: ${outerSelectedOption}, Inner Option: ${innerSelectedOption}`;
      result.innerHTML = displayRes;
    }



  }

  function updateInnerDropdown() {
    const innerSelectedOption = innerDropdown.value;
    const outerSelectedOption = outerDropdown.value;





  }

  outerDropdown.addEventListener('change', updateResult);
  innerDropdown.addEventListener('change', updateInnerDropdown);

  // Call updateResult initially to set the initial state
  updateResult();
});
