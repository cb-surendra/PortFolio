<template>
    <div id="experience">
        <section class="resume-section">
            <div class="resume-item-head">
                <h1>Education</h1>
            </div>
            <div class="resume-item">
                <div class="schooling">
                    <div class="row">
                        <div class="col">
                            <h3>JNV Hoshangabad</h3>
                            <h4>Schooling 6th - 12th</h4>
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">  
                            <h6> <i>July 2006 - April 2013</i> </h6>
                        </div>
                    </div>
                </div>
                <div class="grad">
                    <div class="row">
                        <div class="col">
                            <h3>IIIT, Allahabad</h3>
                            <h4>Bachelor of Technology</h4>
                            <br>
                            <div class="desc">
                                <h6>Information Technology</h6>
                                <h6>CGPA : 7.94</h6>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">  
                            <h6> <i>July 2014 - may 2019</i> </h6>
                        </div>
                    </div>
                </div>
                <div class="postgrad">
                    <div class="row">
                        <div class="col">
                            <h3>IIIT, Allahabad</h3>
                            <h4>Master of Technology</h4>
                            <br>
                            <div class="desc">
                                <h6>Information Technology</h6>
                                <h6>CGPA : 7.94</h6>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">  
                            <h6> <i>July 2014 - May 2019</i> </h6>
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
#experience{
    height: 100vh;
}
.resume-section{
    display: block;
    margin-top: 20%;
    margin-bottom: 20%;
}
.resume-item{
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
.resume-section {
    padding-top: 12rem!important;
    padding-bottom: 12rem!important;
}
</style>