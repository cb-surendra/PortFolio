<template>
  <div class="home">
    <SideBar/>
    <div>
      <About id="about" />
      <Experience id="experience" />
      <Education id="education" />
      <Skills id="skills" />
      <Interest id="interests"/>
      <Contacts id="contacts"/>
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
</style>
