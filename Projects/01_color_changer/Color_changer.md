
# Projects Related to Document Object Model


## Project Name : Color Changer

### 📋Project Description : 

***
Simple web project using Javascript and HTML,CSS
Provided buttons on click change the background color of the webpage using Document Object Model for managing the color scheme


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
    <nav  style="margin:  20px 600px;">
            <a href="/" aria-current="page">Home</a>
            <a target="_blank" href="https://github.com/Harsh_Korde">Github</a>
        </nav>
        <div class="canvas">
            <h1>Color Scheme Switcher</h1>
            <span class="button" id="grey"></span>
            <span class="button" id="blue"></span>
            <span class="button" id="green"></span>
            <span class="button" id="yellow"></span>

            <h2>
                Try clicking on one of the colors above
                <span>to change the background color of this page!</span>
            </h2>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

#### 📂styles.css
```css
html{
    margin: 0;
}

span{
    display: block;
}

a{
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
}
.canvas{
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
}

.button{
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
}

#grey{
    background : grey;
}


#blue{
    background : blue;
}

#green{
    background : green;
}


#yellow{
    background : yellow;
}
```

#### 📂script.js
```javascript

console.log("Start")

const buttons = document.querySelectorAll('.button');
const body  = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === "grey")
        {
            body.style.backgroundColor = e.target.id;
        }


        if(e.target.id === "blue")
        {
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "green")
        {
                body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "yellow")
        {
            body.style.backgroundColor = e.target.id;
        }
            

    });
});
```