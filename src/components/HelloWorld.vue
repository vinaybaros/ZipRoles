<template>
  <div class="hello">
    <h1>Talent Web and Mobile Data Entry Screens</h1>
    <div class="row">
    <div class="col-md-6 col-md-offset-3">
        <form id="msform">
            <!-- progressbar -->
          
            <!-- fieldsets -->
            <fieldset>
                <h2 class="fs-title">Personal Details</h2>
                <h3 class="fs-subtitle">Tell us something more about you</h3>
                <input type="text" name="fname" placeholder="First Name" required/>
                <input type="text" name="lname" placeholder="Last Name" required/>
                <input type="text" name="phone" placeholder="Phone"/>
                <input type="submit" name="next" class="next action-button" value="Next"/>
            </fieldset>
            <fieldset>
                <h2 class="fs-title">Social Profiles</h2>
                <h3 class="fs-subtitle">Your presence on the social network</h3>
                <input type="text" name="twitter" placeholder="Twitter"/>
                <input type="text" name="facebook" placeholder="Facebook"/>
                <input type="text" name="gplus" placeholder="Google Plus"/>
                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="button" name="next" class="next action-button" value="Next"/>
            </fieldset>
            <fieldset>
                <h2 class="fs-title">Create your account</h2>
                <h3 class="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="password" name="cpass" placeholder="Confirm Password"/>
                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="submit" name="submit" class="submit action-button" value="Submit"/>
            </fieldset>
        </form>
      
    </div>
</div>
  </div>

  
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#msform {
    text-align: center;
    position: relative;
    margin-top: 30px;
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;

    /*stacking fieldsets above each other*/
    position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}

/*inputs*/
#msform input, #msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
}

#msform input:focus, #msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #ee0979;
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: All 0.5s ease-in;
    -moz-transition: All 0.5s ease-in;
    -o-transition: All 0.5s ease-in;
}

/*buttons*/
#msform .action-button {
    width: 100px;
    background: #ee0979;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979;
}

#msform .action-button-previous {
    width: 100px;
    background: #C5C5F1;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button-previous:hover, #msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;
}

/*headings*/
.fs-title {
    font-size: 18px;
    text-transform: uppercase;
    color: #2C3E50;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: bold;
}

.fs-subtitle {
    font-weight: normal;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
}

/*progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    /*CSS counters to number the steps*/
    counter-reset: step;
}

#progressbar li {
    list-style-type: none;
    color: white;
    text-transform: uppercase;
    font-size: 9px;
    width: 33.33%;
    float: left;
    position: relative;
    letter-spacing: 1px;
}

#progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 24px;
    height: 24px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    background: white;
    border-radius: 25px;
    margin: 0 auto 10px auto;
}

/*progressbar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1; /*put it behind the numbers*/
}

#progressbar li:first-child:after {
    /*connector not needed before the first step*/
    content: none;
}

/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before, #progressbar li.active:after {
    background: #ee0979;
    color: white;
}


/* Not relevant to this form */
.dme_link {
    margin-top: 30px;
    text-align: center;
}
.dme_link a {
    background: #FFF;
    font-weight: bold;
    color: #ee0979;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 5px 25px;
    font-size: 12px;
}

.dme_link a:hover, .dme_link a:focus {
    background: #C5C5F1;
    text-decoration: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<template>

    <div>
      
        
         
      <form id="msform" action="" method="post">
        
         
      <div v-show="step === 1">
        <div class="container-fluid  bottom-base  mx-auto ">
                      <div class="row  bottom-base-in rounded bg-white shadow-sm  ">
  
                              <div class="col-sm-4 text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
                                      <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
                                      <p class="step">02</p>
                                      <p class="pt-5 fw-light para-4 para-landing">This section contains the 
                                      basic details of your 
                                      information.</p>
  
                              </div>
  
                              <div class="col-sm-8  flex-wrap mx-auto p-5  bottom-left-new">
                                      
                                      <p class="fs-4 fw-regular text-dark">Provide basic information</p>
                                      <div style="display:none;" class="text-danger" v-if="errors.length">
          please check below error
        <li v-for="e in errors" v-bind:key="e.id">{{ e }}</li>
         </div>
                                              <div class="row pt-4">
                                              <div class="col-sm-6">
                                                  <div class="">
                                                      <label for="first_name" class="form-label">First Name</label>
                                                      <input type="text"  id="first_name" class="form-control form-control-lg rounded-pill mb-4 " name="fname" v-model="user.name" required placeholder="Enter your first name" />
        
            <div  v-if="errors">{{ this.errors }}</div>
                                                     
                                                  </div>
                                              </div>
  
                                              <div class="col-sm-6">
                                                  <div class="">
                                                      <label for="last_name" class="form-label">Last Name</label>
                                                      <input type="text"  id="last_name" class="form-control form-control-lg rounded-pill mb-4" name="lname" v-model="user.last" required placeholder="Enter Last Name" />
            <div v-if="errors">Enter your last name</div>
                                                     
                                                  </div>
                                              </div>
                                                   <div class="col-sm-6">
                                                   <div class="">
                                                      <label for="exampleInputEmail1" class="form-label ">Email</label>
                                                      <input type="email" class="form-control rounded-pill  form-control-lg mb-4"  id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp"
              placeholder="Enter your email address">
              <div style="display:none;" class="error" v-if="errors">Enter your  email</div>
                                                   
                                                  </div></div>
  
                                                  <div class="col-sm-6">
  
                                                  <div class="">
                                                      <label for="number" class="form-label">Phone Number</label>
                                                      <input type="text" id="number" class="form-control form-control-lg rounded-pill mb-4" name="phone" v-model="user.phone" placeholder="Enter your phone number"  v-mask="['(###) ###-####']"  />
            <div style="display:none;" class="danger" v-if="errors">Enter your phone name</div>
            
        
                                                    
                                                  </div>
                                              </div>
                                                  <div class="col-sm-6">
                                                   <div class="">
                                                      <label for="birth_date" class="form-label ">Birth Date</label>
                                                       
          
                                        <datepicker class="form-control rounded-pill form-control-lg mb-4"  id="birth_date" v-model="picked" inputFormat="MM/dd/yyyy"/>
           
                                                    
                                                  </div></div>
  
                                                   <div class="col-sm-6">
                                                  <div class="">
                                                      <label for="commute" class="form-label">How many miles are you willing to commute?</label>
                                                      <input type="text" id="commute" class="form-control form-control-lg rounded-pill mb-4" placeholder="Enter your detail" >
                                                  </div>
                                                  </div>
  
                                                  <div class="col-sm-12">
                                                    <div class="fancy-form">
          <legend>Address</legend>
          <p class="instructions">Start by entering your zip code.</p>
         
          <div>
            <div class="col-sm-6">
            <div class="city-wrap">
              <input type="text" class="form-control rounded-pill form-control-lg mb-4" placeholder="Montgomery"  name="city" value="" id="city" disabled>
              <label for="city">City</label>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="state-wrap">
              <label for="state" class="form-label">State</label>
              <input   class="form-control form-control-lg rounded-pill mb-4"  type="text" name="state" value="" id="state" disabled>
             </div>
            </div>
            
            <div class="zip-wrap">
              <input class="form-control form-control-lg rounded-pill mb-4" placeholder="Enter your zip code"  v-model="user.zip" type="text" pattern="[0-9]*" maxlength="5" required name="zip" id="zip">
              <label for="zip">Zip</label>
              <p class="zip-error">Not a real zip code.</p>
            </div>
            
          </div>
        
       
        
        </div>
                                                  </div>
  
                                                  
                                                                                             
                                             
                                            
                                       
  
                                                 
                                              <div class="col-12 text-center pt-4">
                                                <button  class="btn btn-1 px-5 py-2 rounded-pill text-white fs-5 w-50" @click.prevent="prev()">Previous</button>
            <button type="submit"  class="btn btn-1 px-5 py-2 rounded-pill text-white fs-5 w-50" >Next</button>
                                                    
                                              </div>
                                              </div>
                                      
                              </div>
                      </div>
              </div>
        
        </div>
  
        <div v-show="step === 2">
         
          <h1>Step Two</h1>
        
          <fieldset>
            <h2 class="fs-title">Personal Details</h2>
            <h3 class="fs-subtitle">Tell us something more about you</h3>
         
    
            <input type="text" name="fname" v-model="user.name" required placeholder="First Name" />
            <button @click="adduser()">Add Item</button>
            <div style="display:none;" v-if="errors">Enter your first name</div>
            <input type="text" name="lname" v-model="user.last" required placeholder="Last Name" />
            <div style="display:none;" v-if="errors">Enter your last name</div>
            <input type="text" name="phone" v-model="user.phone" placeholder="Phone"  v-mask="['(###) ###-####']"  />
            <div style="display:none;" class="danger" v-if="errors">Enter your phone name</div>
            
             <div class="alert alert-info">
    <strong>Info!</strong>phone number will be used for OTP verification.
  </div> 
  <datepicker v-model="picked" inputFormat="MM/dd/yyyy"/>
           
  
  
              <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
      <input type="email" id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp"
              placeholder="Enter email">
              <div style="display:none;" class="error" v-if="errors">Enter your  email</div>
    </div>
  
  
              <div class="fancy-form">
          <legend>Address</legend>
          <p class="instructions">Start by entering your zip code.</p>
         
          <div>
            <div class="city-wrap">
              <input type="text" name="city" value="" id="city" disabled>
              <label for="city">City</label>
            </div>
            <div class="state-wrap">
              <input  type="text" name="state" value="" id="state" disabled>
              <label for="state">State</label>
            </div>
            <div class="zip-wrap">
              <input v-model="user.zip" type="text" pattern="[0-9]*" maxlength="5" required name="zip" id="zip">
              <label for="zip">Zip</label>
              <p class="zip-error">Not a real zip code.</p>
            </div>
          </div>
        
       
        
        </div>
        <br/>
            <button class="btn btn-dark" @click.prevent="prev()">Previous</button>
            <button class="btn btn-dark" @click.prevent="next()">Next</button>
            
          </fieldset>
  
  
  
        </div>
  
        <div v-show="step === 3">
          <h1>Step Three</h1>
          
          <fieldset>
  
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label>Industry</label>
              </div>
              <select v-model="user.industry" class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label>Nearest Role you currently are in</label>
              </div>
              <select v-model="user.role" class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <input type="text" v-model="user.company" name="fname" placeholder="Company you work for" />
            <input type="text" name="fname" v-model="user.demp" placeholder="Date you started Employment" />
            
            <input type="text" name="fname" v-model="user.salary" placeholder="Current Salary per Hour" />
            <div class="input-group-text">
              <label>Open to work currently</label>
              <input v-model="user.otw" type="checkbox" aria-label="Checkbox for following text input">
            </div><br/>
            <button class="btn btn-dark" @click.prevent="prev()">Previous</button>
            <button class="btn btn-dark" @click.prevent="next()">Next</button>
          </fieldset>
  
  
  
  
  
        </div>
        <div v-show="step === 4">
          <h1>Step Four</h1>
          <h2> {{ user.lang }}</h2>
          <h2> {{ user.name }} {{ user.last }}</h2>
          <h2> {{ user.email }}</h2>
          <h2> {{ user.phone }}</h2>
          <h2> {{ user.dob }}</h2>
          <h2> {{ user.zip }}</h2>
          <h2> {{ user.city }}</h2>
          <h2> {{ user.state }}</h2>
          <h2> {{ user.add }}</h2>
          <h2> {{ user.add }}</h2>
          <h2> {{ picked }}</h2>
          <h2> {{ user.industry }}</h2>
          <h2> {{ user.role }}</h2>
          <h2> {{ user.company }}</h2>
          <h2> {{ user.dus }}</h2>
          <h2> {{ user.demp }}</h2>
          <h2> {{ user.salary }}</h2>
          <h2> {{ user.otw }}</h2>
          <button class="btn btn-info" @click.prevent="prev()">Previous</button>
  
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import {mask} from 'vue-the-mask';
  import $ from 'jquery'
  import axios from 'axios'
  import Datepicker from 'vue3-datepicker'
  export default {
    directives:{mask},
    name: 'MyMutlistepform',
    components: {
    Datepicker
  },
  
  mounted: function() {
          
  function is_int(value) {
  if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
  return true;
  } else {
  return false;
  }
  }
  
  $(".fancy-form div > div").hide();
  
  $("#zip").keyup(function() {
  
  // Cache
  var el = $(this);
  
  // Did they type five integers?
  if ((el.val().length == 5) && (is_int(el.val()))) {
  
  // Call Ziptastic for information
  $.ajax({
  url: "https://zip.getziptastic.com/v2/US/" + el.val(),
  cache: false,
  dataType: "json",
  type: "GET",
  success: function(result) {
   
  $(".zip-error, .instructions").slideUp(200);
  
  $("#city").val(result.city);
  
  $("#state").val(result.state);
  
  $(".fancy-form div > div").slideDown();
  
  $("#zip").blur();
  $("#address-line-1").show().focus();
  
  },
  error: function() {
  
  $(".zip-error").slideDown(300);
  
  }
  
  });
  
  } else if (el.val().length < 5) {
  
  $(".zip-error").slideUp(200);
  
  }
  
  });
      } ,
    data() {
      return {
        picked: new Date(),
        step: 1,
        multiple: true,
        
        errors: [],
        user: {
          lang: null,
          name: null,
          last: null,
          email: null,
          add: null,
          phone: null,
          zip: null,
          city: null,
          industry: null,
          role: null,
         company: null,
          demp: null,
          salary: null,
          dus: null,
          otw: null,
        }
      }
    },
    methods: {
     
      async adduser() {
        const res = await axios.post(`http://localhost:3000/posts`, {
          name: this.user.name,
          lastName:this.user.last,
          email:this.user.email,
          lang:this.user.lang,
        });
        this.posts = [...this.posts, res.data];
        this.user.name = "";
        this.user.last="";
        this.user.email="";
        this.user.lang="";
      },
      prev() {
        this.errors='';
        this.step--;
      },
     
      next() {
       
        this.step++;
        
      }
              }
      
    
  }
  </script>
  <style>
  .glyphicon {
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: "Glyphicons Halflings";
      font-style: normal;
      font-weight: 400;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .glyphicon-user:before {
      content: "\e008";
  }  
  #msform input,
  #msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
  }
  
  #msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
  
    /*stacking fieldsets above each other*/
    position: relative;
  }
  </style>
























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
                                <p class="text-bolder fs-5 fw-regular text-dark">Please Select Your Language</p>

                                <div class="">
                                 <a  @click="MyMultistepform()" class="btn d-flex align-items-center  rounded-pill language" role="button" > <img src="../assets/flag.png" class="flag me-3">English</a>
                                </div>

                                <div class="mt-4">
                                <a class="btn d-flex align-items-center  rounded-pill language" role="button" href="#"> <img src="../assets/flag-2.png" class="flag me-3">Espanyol</a>
                                </div>
                                
                                <div class="mt-4 d-flex align-items-center">
                                 <input type="checkbox" id="myCheck" >

                                <p id="text" class="my-2 ms-3">I agree to the terms and conditions</p>
                                  </div>
                        
                        </div>
            </div>
</div> 

<MyMultistepform v-if="option2" />
</template>

<script>
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