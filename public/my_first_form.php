<?php var_dump($_GET) ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <hr>

    <form action="">
        <h2>Checkboxes</h2>
        <label for="">1<input type="checkbox" name="checkbox_input[]" value="1"></label>
        <label for="">2<input type="checkbox" name="checkbox_input[]" value="2"></label>
        <label for="">3<input type="checkbox" name="checkbox_input[]" value="3"></label>
        <label for="">4<input type="checkbox" name="checkbox_input[]" value="4"></label>
        <label for="">5<input type="checkbox" name="checkbox_input[]" value="5"></label>

        <h2>Radio Buttons</h2>
        <label for="">1<input type="radio" name="radio_input" value="1"></label>
        <label for="">2<input type="radio" name="radio_input" value="2"></label>
        <label for="">3<input type="radio" name="radio_input" value="3"></label>
        <label for="">4<input type="radio" name="radio_input" value="4"></label>
        <label for="">5<input type="radio" name="radio_input" value="5"></label>

        <input type="submit">
    </form>

</body>
</html>
