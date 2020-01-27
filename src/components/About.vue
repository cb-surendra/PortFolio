<template>
    <div id="education">
        <section class="resume-section">
            <div class="resume-item">
                <mdb-container class="about">
                    <mdb-row>
                        <mdb-col sm="12">
                            <mdb-card dark>
                                <mdb-view class="image_pro" hover>
                                    <a href="#!">
                                        <img style="width:862px; height:380px;" src='../assets/profile_2.jpg'>
                                        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                    </a>
                                </mdb-view>
                                <mdb-card-body color="elegant" class="white-text">
                                    <a class="activator mr-4"><mdb-icon icon="share-alt" /></a>
                                    <mdb-card-title>About Me !</mdb-card-title>
                                    <hr class="hr-light"/>
                                    <p class="font-small mb-3">Hello!, I'm Surendra, A Software Developer in Chargebee, Chennai, India.
                                        I love to build the web apps through the lastest technologies. 
                                        After graduating from IIIT Allahabad, I joined the Chargebee Pvt. Ltd. in july 2019.
                                        
                                        Here are the few Technologies I have been working on.
                                    </p>
                                    <div class="row">
                                        <div class="col">
                                            <mdb-icon style="color: rgb(39, 228, 15);" icon="caret-right" /> Java
                                        </div>
                                        <div class="col">   
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> HTML & CSS
                                        </div>
                                        <div class="col">
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> JavaScript
                                        </div>
                                        <div class="col">
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> Python
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> C++
                                        </div>
                                        <div class="col">
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> Vue
                                        </div>
                                        <div class="col">
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> Node.js
                                        </div>
                                        <div class="col">   
                                            <mdb-icon icon="caret-right" style="color: rgb(39, 228, 15);"/> Django
                                        </div>
                                    </div>
                                </mdb-card-body>
                            </mdb-card>
                        </mdb-col>
                    </mdb-row>
                </mdb-container>
            </div>
        </section>
    </div>
	
</template>
<script>
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		}
	}
</script>
<style scoped>
  
.about{
    margin-top: 10%;
}
.row{
    width: 100%;
}
.image_pro{
    margin-left: auto;
    margin-right: auto;
}
.activator{
    float: right;
}
#education{
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
</style>