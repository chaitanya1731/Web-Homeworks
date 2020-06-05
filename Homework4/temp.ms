<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
<h1>Users Search</h1>

   <label>{{studentName}}</label><br>
    <label>{{studentID}}</label><br>
    {{#grades}}
        {{#rubricCategories}}
            {{#hw}}
                <label>{{id}}</label><br>
                <label>{{grade}}</label><br>
                <label>{{average}}</label><br>
            {{/hw}}
            {{#prj}}
                <label>{{id}}</label><br>
                <label>{{grade}}</label><br>
                <label>{{average}}</label><br>
            {{/prj}}
        {{/rubricCategories}}
        <label></label>
    {{/grades}}
    {{average}}
    {{rank}}



</body>
</html>
