<template>
    <div id="contacts">
        <section class="resume-section">
            <div class="resume-item-head">
                <h1>Contacts</h1>
            </div>
            <div class="icons">
                <v-icon name="beer"/>
                <v-icon name="phone"/>
                <v-icon name="user"/>
                <v-icon name="car"/>
            </div>
        </section>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
v-icon{
    width: 100%;
    height: 100%;
}
#contacts{
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