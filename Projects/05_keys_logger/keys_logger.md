# Projects Related to Events

## Project Name : Keys Logger

### 📋Project Description : 
Javascript provides inbuilt APIs to determine which key is pressed by user.We have used this with the help of event handling, event.key gives us the key pressed by user, event.code gives the key code of the button pressed.
***

[Github](https://github.com/HarshKorde5/JavaScript/Projects)
---
## 💻Code

#### 📂index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    
  </head>
  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>

```

#### 📂styles.css
```css

table,
th,
td {
    border: 1px solid #e7e7e7;
}

.project {
    background-color: #1c1c1c;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
}

.color {
    color: aliceblue;
    display: flex;
    flex-direction: row;
}
```

#### 📂script.js
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```