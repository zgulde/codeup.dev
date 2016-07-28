<?php var_dump($_POST) ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <h1>Sign up for an Account</h1>

    <form method="POST">
        <label for="username">Username: </label>
        <input disabled type="text" id="username" name="username" value="zach">
        <input type="range" name="range_input" step="10">
        <br>
        <hr>

        <label>Sign Me Up for the newsletter <input type="checkbox" checked disabled></label>
        <input type="submit">
    </form>

    

</body>
</html>
