<template>
    <div >
        <div class="sidebar-content">
            <div class="dp">
                <img src='../assets/profile.png'>
            </div>
            <a href="#about"> <strong> ABOUT </strong></a>
            <a href="#education"> <strong> EDUCATION <br> & EXPERIENCE</strong> </a>
            <a href="#skills"> <strong> SKILLS <br> & INTERESTS</strong> </a>
            <a href="#contacts"> <strong> CONTACTS </strong> </a>
            </div>
    </div>
</template>
 
<script>

/* eslint-disable */

export default {
  name: 'Index',
  data(){
    return {
    }
  }
};
</script>
<style scoped>
.sidebar-content{
    background-color: #1E2810;
    height: 100vh;
    text-align: center;
    position: fixed;
    left: 0px;
    top: 0px;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    overflow: hidden;
}
.sidebar-content a{
    text-decoration: none;
    padding: 5%;
    display: block;
    color: #f0f0e6d7;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* transform: translateY(-50%); */
}
.sidebar-content a:hover{
    color: #ff8a80;
    font-size: 150%;
}
img{
   height: 200px;
   width: 200px;
   background-color: white;
   border-radius: 50%;
   border: 6px solid white;
   margin-bottom: 20%;
   margin-top: 10%;
}
</style>
