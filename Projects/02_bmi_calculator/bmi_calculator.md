
# Projects Related to Document Object Model


## Project Name : BMI Calculator

### 📋Project Description : 
Web Project for calculating and displaying the Body Mass Index of the user provided the inputs by user and validating the inputs in the script file before calculating

***

[Github]("https://github.com/HarshKorde5/JavaScript/Projects)

## 💻Code

#### 📂index.html
```html
<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Home</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
    
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="../styles.css" />
    </head>

    <body style="background-color: #212121; color: #fff;">
        <nav>
            <a href="/" aria-current="page">Home</a>
            <a target="_blank" href="https://github.com/Harsh_Korde">Github</a>
        </nav>

        <div class="container">
            <h1>BMI Calculator</h1>

            <form>
                <p><label>Height in CM : </label><input type="text" id="height"></p>
                <p><label>Weight in KG : </label><input type="text" id="weight"></p>
                <button>Calculate</button>
                <div id="results"></div>
                <div id="weight-guide">
                    <h3>BMI Weight Guide</h3>
                    <p>Under weight = Less than 18.6</p>
                    <p>Normal range = 18.6 to 24.9</p>
                    <p>Over weight = More than 24.9</p>
                </div>
            </form>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

#### 📂styles.css
```css
.container {
    width: 575px;
    height: 825px;
  
    background-color: #797978;
    padding-left: 30px;
}

a{
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
}

#height,  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
  }
  
#weight-guide {
    margin-left: 75px;
    margin-top: 25px;
}
  
#results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
}
  
button {
    width: 150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;  
    font-size: 25px;
}
  
h1 {
    padding-left: 15px;
    padding-top: 25px;
}
  
```

#### 📂script.js
```javascript
const form = document.querySelector('form');

//this usecase will give empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === ''|| height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`;
    }
});
```