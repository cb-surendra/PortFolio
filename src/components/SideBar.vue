<template>
    <div >
        <div class="sidebar-content">
            <div class="dp">
                <img src='../assets/profile.png'>
            </div>
            <a href="#about">ABOUT</a>
            <a href="#"> <strong> EXPERIENCE </strong> </a>
            <a href="#"> <strong> EDUCATION </strong> </a>
            <a href="#"> <strong> SKILLS </strong> </a>
            <a href="#"> <strong> INTEREST </strong> </a>
            <a href="#"> <strong> CONTACTS </strong> </a>
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
    height: 100%;
    text-align: center;
    position: absolute;
    padding-top: 15%;
    padding-left:25%;
    padding-right: 25%;
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
