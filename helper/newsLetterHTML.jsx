export const newsLetterHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>

<style>
  body {
    background-color: #09090b;
    color: #f1f5f9;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .content {
    text-align: center;
  }
  .button-container {
    margin-top: 20px;
  }
  .button {
    background-image: linear-gradient(to right, #cfd9df, #e2ebf0);
    border-radius: 10px;
    padding: 10px 20px;
    color: #000;
    text-decoration: none;
  }
</style>

<body>
  <div class="content">
    <h1 >
      Thank you for subscribing to our newsletter!
    </h1>
    <p >Stay tuned for further updates.</p>
    <div class="button-container">
      <a class="button" href="https://www.opendevhub.in/">Visit Us</a>
    </div>
  </div>
</body>
</html>


`;
