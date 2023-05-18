<template>

<div v-if="option1" class="container-fluid bottom-base  mx-auto">

          <div class="row  bottom-base-in rounded bg-white shadow-sm">

                        <div class="col-sm-4 text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
                                <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
                                <img src="../assets/step-1.png" class="img-3">
                                <p class="pt-5 fw-light para-4 para-landing">Choose your language you 
                                want to proceed with.</p>

                        </div>

                        <div class="col-sm-8 bottom-right  mx-auto py-5 px-3">
                        
                          <div class="mt-4 add lang1">
                                <p class="text-bolder fs-5 fw-regular text-dark">Please Select Your Language</p>

                                <div class="">
                                 <a  @click="MyMultistepform()" class="btn d-flex align-items-center  rounded-pill language" role="button" > <img src="../assets/flag.png" class="flag me-3">English</a>
                                </div>

                                <div class="mt-4">
                                <a class="btn d-flex align-items-center  rounded-pill language" role="button" href="#"> <img src="../assets/flag-2.png" class="flag me-3">Espanyol</a>
                                </div>
                          </div>      
                                
                        
                        </div>
            </div>
</div> 

<MyMultistepform v-if="option2" />
</template>

<script>
import $ from 'jquery';
import MyMultistepform from './MyMultistepform.vue';
export default {
  name: 'MyLang',
  components: {
    MyMultistepform
    
   },
   data() {
    return {
      option1: true,
      current: "",
    };
  },
   mounted: function () {
    
$("#myCheck1").click(function() {
    if($(this).is(":checked")) {
        $(".lang1").removeClass('lang');
    } else {
        $(".add1").addClass("lang");
    }
});


   },
  methods: {
   
    MyMultistepform(){
  this.option1 = false,
  this.option2 = true
}},
  props: {
    msg: String
  }
}
</script>