<?php var_dump($_POST) ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/css/my_first_external_css.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto|Droid+Serif' rel='stylesheet' type='text/css'>
</head>
<body>
    <h1 id="my-first-heading" class="example-label-class">
        <span class="blue-bg">Please Sign Up</span>
    </h1>


    <hr>
    <a href="http://codeup.com">go to codeup</a>
    <br>
    <a href="http://bing.com">bing</a>
    <br>
    <a href="http://google.com">google</a>
    <br>
    <a href="http://reddit.com">reddit</a>
    <hr>
    <form method="POST">
        <label class="example-label-class" for="username">Username</label>
        <input id="username" type="text" name="username">
        <br>

        <label class="example-label-class" for="email">Email</label>
        <input id="email" type="text" name="email">
        <br>

        <label class="example-label-class" for="password">password</label>
        <input id="password" type="password" name="password">
        <br>

        <label for="confirm_password">confirm password</label>
        <input id="confirm_password" type="password" name="confirm_password">
        <br class="some-other-class">

        <h2 id="my-second-heading">Filing Status</h2>

        <label class="underline-this give-this-red-text" for="single">
            <input id="single" type="radio" name="filing_status" value="single">
            Single
        </label>
        <br>
        
        <label for="">
            <input type="radio" name="filing_status" value="married_joint">
            Married Filing Jointly
        </label>
        <br>
        
        <label for="">
            <input type="radio" name="filing_status" value="married_separate">
            Married Filing Separately
        </label>
        <br>
        
        <label for="">
            <input type="radio" name="filing_status" value="hoh">
            Head of Household
        </label>
        <br>

        <div class="example-div">
            <div>
                <h2>This past year I was (check all that apply)</h2>
            </div>
        </div>

        <label for="">
            <input type="checkbox" name="employment_status[]" value="self_employed">
            Self - Employed
        </label>
        <br>
        
        <label for="">
            <input type="checkbox" name="employment_status[]" value="small_business">
            Employed by a small business (< 50 employees)
        </label>
        <br>
        
        <label for="">
            <input type="checkbox" name="employment_status[]" value="large_business">
            Employed by a large business (> 50 employees)
        </label>
        <br>
        
        <h2>What kind of phone do you have</h2>

        <select name="phone type">
            <option value="android">Android</option>
            <option value="iphone">iPhone</option>
            <option value="windows">Windows Phone</option>
            <option value="other">Other</option>
        </select>
        
        <hr>

        <label for="newsletter">Sign Me Up For The Newsletter
            <input type="checkbox" name="newsletter" id="newsletter" checked>
        </label>

        <button type="submit">Submit</button>

    </form>
    


</body>
</html>
