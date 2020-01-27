<template>
    <div id="education">
        <section class="resume-section">
            <div class="resume-item">
                <mdb-card class="contact-item" wide>
                    <mdb-card-body class="text-center pb-0" cascade>
                        <mdb-card-title><strong>Surendra Pal Uikey</strong></mdb-card-title>
                        <mdb-card-text> <mdb-icon icon="home" style="color:rgb(8, 41, 12);" size="2x"/> <br> Chennai, TamilNadu</mdb-card-text>
                        <mdb-card-text> <mdb-icon icon="phone" style="color:rgb(58, 92, 202);" size="2x"/>+ 91 7771 854 857</mdb-card-text>
                        <mdb-card-footer class="text-muted mt-4">
                            <div class="contact-icons">
                                <a style="padding:10px; color:rgb(58, 92, 202);" class="icons-sm li-ic"><mdb-icon fab icon="linkedin" size="2x"/></a>
                                <a style="padding:10px; color:rgb(18, 176, 238);" class="icons-sm tw-ic"><mdb-icon fab icon="twitter" size="2x"/></a>
                                <a style="padding:10px; color:rgb(7, 94, 209);" class="icons-sm fb-ic"><mdb-icon fab icon="facebook" size="2x"/></a>
                            </div>
                        </mdb-card-footer>
                    </mdb-card-body>
                </mdb-card>
            </div>
        </section>
    </div>
</template>

<script>
	import { mdbIcon, mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody } from 'mdbvue';
	export default {
		components: {
			mdbCard,
            mdbView,
            mdbIcon,
			mdbMask,
			mdbCardImage,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardBody
		}
	};
</script>

<style scoped>
.contact-icons{
    display: inline-flex;
    padding: 12px;
}
.resume-section {
    padding-top: 12rem!important;
    padding-bottom: 12rem!important;
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