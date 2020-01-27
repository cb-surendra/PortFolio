<template>
  <div class="home">
    <div class="row">
      <div class="content col-sm-2 col-xs-2 col-md-2 col-lg-2">
        <SideBar/>
      </div>
      <div class="content col-sm-8 col-xs-8 col-xs-8 col-lg-8">
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Skills id="skills" />
        <Interest id="interests"/>
        <Contacts id="contacts"/>
      </div>
      <div class="content col-sm-2 col-xs-2 col-xs-2 col-lg-2">
        <p class="email">
          <strong> surendrapaluikey@gmail.com <hr> </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar';
import About from './About';
import Contacts from './Contacts';
import Education from './Education';
import Skills from './Skills';

export default {
  name: 'home',
  components: {
    SideBar,
    About,
    Contacts,
    Education,
    Skills
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  background-color: #1E2810;
}
.home{
  overflow: auto;
}
.email{
  position:fixed;
  bottom: 30%;
  margin-right: 10vh;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: aliceblue;
}
</style>
