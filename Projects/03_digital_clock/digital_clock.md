
# Projects Related to Document Object Model


## Project Name : Digital Clock

### 📋Project Description : 
Digital Clock displaying the time on the page according to the current time with basic and clean design and using DOM in the script file for updating each second on the webpage making it look like live clock
***

[Github](https://github.com/HarshKorde5/JavaScript/Projects)
## 💻Code

#### 📂index.html

```html
<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Your Local Time</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
    
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="../styles.css" />
    </head>

    <body style="background-color: #212121; color: #fff;">
        <nav>
            <a href="/" aria-current="page">Home</a>
            <a target="_blank" href="https://github.com/Harsh_Korde/JavaScript/Projects">Github</a>
        </nav>

        <div class="center">
            <h1>Digit Clock</h1>
            <div id = "banner"><span>Your local time</span></div>
            <div id = "clock"></div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

#### 📂styles.css
```css
body{
    background-color: #212121;
    color: #fff;
}

.center{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#clock{
    font-size: 40px;
    background-color: orange;
    padding: 20px 50px;
    margin-top: 10px;
    border-radius: 10px;
}
```

#### 📂script.js
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock');

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
```