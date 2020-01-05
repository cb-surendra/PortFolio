<template>
    <div id="skills">
        <section class="skill-section">
            <div class="resume-item-head">
                <h1>Skills</h1>
            </div>
            <div class="skill-content">
                <div class="pro-lang">
                    <div class="lang">
                        <div class="header">
                            <h4>Programming Language</h4>
                        </div>
                        <div class="content">
                            <i class="devicon-c-line-wordmark colored">C</i>
                            <i class="devicon-cplusplus-plain colored">C++</i>
                        </div>
                    </div>
                    <div class="lang">
                        <div class="header">
                            <h4>Front End</h4>
                        </div>
                        <div class="content">
                            <i class="devicon-bootstrap-plain colored">Bootstrap</i>
                            <i class="devicon-css3-plain colored">Css</i>
                            <i class="devicon-javascript-plain colored">JavaScript</i>
                            <i class="devicon-java-plain colored">Java</i>
                            <i class="devicon-jquery-plain colored">JQuery</i>
                            <i class="devicon-vuejs-plain">Vue</i>
                            <i class="devicon-webpack-plain">Webpack</i>
                        </div>
                        
                    </div>
                    <div class="lang">
                        <div class="header">
                            <h4>Back End</h4>
                        </div>
                        <div class="content">
                            <i class="devicon-django-plain colored">Django</i>
                            <i class="devicon-python-plain">Python</i>
                            <i class="devicon-nodejs-plain-wordmark">Node</i>
                            <i class="devicon-express-original colored">Express</i>
                        </div>
                    </div>
                </div>
                <div class="lang">
                    <div class="header">
                        <h4>Tools</h4>
                    </div>
                    <div class="content">
                        <i class="devicon-git-plain colored">Git</i>
                        <i class="devicon-github-plain colored">Github</i>
                        <i class="devicon-html5-plain colored">Html</i>
                        <i class="devicon-heroku-original-wordmark colored">Heroku</i>
                        <i class="devicon-intellij-plain colored">Intellij</i>
                        <i class="devicon-visualstudio-plain">VisualCodeStudio</i>
                    </div>
                </div>
                <div class="lang">
                    <div class="header">
                        <h4>Databases</h4>
                    </div>
                    <div class="content">
                        <i class="devicon-mongodb-plain colored">Mongodb</i>
                        <i class="devicon-mysql-plain colored">MySQl</i>
                    </div>
                </div>
            </div>
        </section>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#skills{
    height: 100vh;
}
.skill-section{
    display: block;
    margin-top: 20%;
    margin-bottom: 20%;
}
.skill-content{
    padding-top: 10px;
    padding-bottom: 20px;
}
h1, h6{
    font-family: 'Courier New', Courier, monospace;
}
h1{
    color: rgb(54, 34, 4);
}
h3{
    color: rgb(27, 77, 78);
}
h2{
    font-weight: 300;
}
h3{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: gray;
}
.row{
    padding-bottom: 30px;
}
.grad{
    padding-bottom: 30px;
}
.postgrad{
    padding-bottom: 30px;
}
.skill-section {
    padding-top: 12rem!important;
    padding-bottom: 12rem!important;
}
.content{
    display: block;
}
.lang{
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 2%;
}
.content i{
    padding: 20px;
}
i{
    height: 20%;
    width: 20%;
}
</style>