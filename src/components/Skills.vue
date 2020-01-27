<template>
    <div id="skills">
        <section class="skill-section">
            <div class="skill-content">
                <div class="lang">
                    <div class="lang">
                        <div class="header">
                            <h4>Programming Language</h4>
                        </div>
                        <div class="content">
                            <div class="row">
                                <div class="col-3">
                                    <i class="devicon-c-line-wordmark colored icon">C</i>
                                </div>
                                <div class="col-3">
                                    <i class="devicon-cplusplus-plain colored icon">C++</i>
                                </div>
                                <div class="col-6">
                                    <i class="devicon-css3-plain colored icon">CSS</i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <i class="devicon-html5-plain colored icon">Html</i>
                                </div>
                                <div class="col-3">
                                    <i class="devicon-javascript-plain colored icon">JavaScript</i> 
                                </div>
                                <div class="col-6">
                                    <i class="devicon-vuejs-plain icon" style="color:white">Vue</i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <i class="devicon-django-plain colored icon" style="color:rgb(189, 213, 235);">Django</i>
                                </div>
                                <div class="col-3">
                                    <i class="devicon-python-plain icon" style="color:rgb(147, 187, 145);">Python</i>
                                </div>
                                <div class="col-6">
                                    <i class="devicon-nodejs-plain-wordmark icon" style="color:rgb(119, 199, 231);">Node.js</i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <i class="devicon-java-plain colored icon" style="color:rgb(228, 101, 160);">Java</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lang">
                    <div class="header">
                        <h4>Tools</h4>
                    </div>
                    <div class="content">
                        <i class="devicon-git-plain colored icon">Git</i>
                    </div>
                </div>
                <div class="lang">
                    <div class="header">
                        <h4>Databases</h4>
                    </div>
                    <div class="content">
                        <div class="row">
                            <div class="col-3">
                                <i class="devicon-mongodb-plain colored icon">Mongodb</i>
                            </div>
                            <div class="col-9">
                                <i class="devicon-mysql-plain colored icon">MySQl</i>
                            </div>
                        </div>
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
.lang{
    padding-top: 10px;
    padding-bottom: 10px;
}
#skills{
    height: 100vh;
}
.skill-section{
    display: block;
    margin-top: 20%;
    margin-bottom: 20%;
}
.icon{
    font-size: 1.5rem;
}
.skill-content{
    padding-bottom: 10px;
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
.skill-section {
    padding-top: 12rem!important;
    padding-bottom: 12rem!important;
}
.content{
    display: block;
}
.content i{
    padding: 20px;
}
i{
    height: 20%;
    width: 20%;
}
</style>