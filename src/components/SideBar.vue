<template>
    <div >
        <div class="sidebar-content">
            <div class="dp">
                <img src='../assets/profile.png'>
            </div>
                <a href="#about">ABOUT</a>
                <a href="#experience"> <strong> EXPERIENCE </strong> </a>
                <a href="#education"> <strong> EDUCATION </strong> </a>
                <a href="#skills"> <strong> SKILLS </strong> </a>
                <a href="#interests"> <strong> INTERESTS </strong> </a>
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
        profile
    }
  }
};
</script>
<style scoped>
.sidebar-content{
    background-color: #040707d7;
    height: 100vh;
    text-align: center;
    position: fixed;
    left: 5px;
    top: 5px;
    padding-top: 15%;
    padding-left:5%;
    padding-right: 5%;
    overflow: hidden;
}
.sidebar-content a{
    text-decoration: none;
    padding: 5%;
    display: block;
    color: #f0f0e6d7;
    font-size: 20px;
    /* transform: translateY(-50%); */
}
.sidebar-content a:hover{
    color: #ff8a80;
}
img{
   height: 200px;
   width: 200px;
   background-color: white;
   border-radius: 50%;
   margin-bottom: 25%;
}
</style>
