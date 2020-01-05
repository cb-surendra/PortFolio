<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
        <SideBar/>
      </div>
      <div class=" col-sm-9 col-xs-9 col-xs-9 col-lg-9">
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Skills id="skills" />
        <Interest id="interests"/>
        <Contacts id="contacts"/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar';
import About from './About';
import Contacts from './Contacts';
import Education from './Education';
import Experience from './Experience';
import Interest from './Interest';
import Skills from './Skills';

export default {
  name: 'home',
  components: {
    SideBar,
    About,
    Contacts,
    Education,
    Experience,
    Interest,
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
.home{
  overflow: auto;
}
</style>
