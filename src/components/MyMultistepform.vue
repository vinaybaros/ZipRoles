<template>
  <div>




    <div v-show="step === 1">
      <div class="container-fluid  bottom-base  mx-auto ">
        <div class="row  bottom-base-in rounded bg-white shadow-sm  ">

          <div
            class="col-sm-4 text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
            <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
            <p class="step">02</p>
            <p class="pt-5 fw-light para-4 para-landing">This section contains the
              basic details of your
              information.</p>

          </div>

          <div class="col-sm-8  flex-wrap mx-auto p-5  bottom-left-new">

            <p class="fs-4 fw-regular text-dark">Provide basic information</p>
            <form id="msform" @submit.prevent="next" action="" method="post">

              <div class="row pt-4">
                <div class="col-sm-5">
                  <div class="">
                    <label for="first_name" class="form-label">First Name</label>
                    <input type="text" id="first_name" class="name form-control form-control-lg rounded-pill mb-4 "
                      name="fname" v-model="user.name" required placeholder="Enter your first name" />
                  </div>
                </div>

                <div class="col-sm-5 offset-1">
                  <div class="">
                    <label for="last_name" class="form-label">Last Name</label>
                    <input type="text" id="last_name" class="name form-control form-control-lg rounded-pill mb-4"
                      name="lname" v-model="user.last" required placeholder="Enter last name" />


                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="">
                    <label for="exampleInputEmail1" class="form-label ">Email</label>
                    <input type="email" class="form-control rounded-pill  form-control-lg mb-4" id="exampleInputEmail1"
                      v-model="user.email" required aria-describedby="emailHelp" placeholder="Enter your email address">


                  </div>
                </div>

                <div class="col-sm-5 offset-1">

                  <div class="">
                    <label for="number" class="form-label">Phone Number</label>
                    <input type="text" id="number" class="form-control form-control-lg rounded-pill mb-4" name="phone"
                      v-model="user.phone" required placeholder="(012) 345-6789" v-mask="['(###) ###-####']" />



                  </div>
                </div>




                <div class="col-sm-12 second-bottom">

                  
                    <div class="row ">
                      <div class="col-sm-5 ">
                        <div class="">
                          <label for="birth_date" class="form-label ">Birth Date</label>
                          <datepicker :typeable="true" class="form-control rounded-pill form-control-lg mb-4" id="birth_date"
                            placeholder="MM/DD/YYYY"  v-model="user.dob" required inputFormat="MM/dd/yyyy" />
                         </div>
                      </div>
                      
                      <div class="fancy-form col-sm-5 offset-1">
                      <div class="zip-wrap ">
                        <label for="zip" class="form-label">Zip</label>
                        <input class="form-control form-control-lg rounded-pill mb-4" placeholder="Enter your zip code"
                          v-model="user.zip" type="text" pattern="[0-9]*" minlength="5" maxlength="5" required name="zip"
                          id="zip">
                        <p class="zip-error">Not a real zip code.</p>
                      </div>
                     

                    </div>

                    
                      <div class="col-sm-5">
                        <div class="city-wrap">
                          <label for="city" class="form-label">City</label>
                          <input type="text" class="form-control rounded-pill form-control-lg mb-4" v-model="city"
                            name="city" id="city" disabled>


                        </div>
                      </div>
                      <div class="col-sm-5 offset-1">
                        <div class="state-wrap">
                          <label for="state" class="form-label">State</label>
                          <input type="text" class="form-control form-control-lg rounded-pill mb-4" v-model="state"
                            name="state" id="state" disabled>
                        </div>
                      </div>
                   


                  </div>
                </div>



                <div class="mt-4 d-flex align-items-center col-sm-11">
                  <input v-model="user.term" type="checkbox" id="myCheck" required>

                  <p id="text" class="my-2 ms-2">I agree to the<a href="term"> terms and conditions</a> to start with the
                    application</p>
                </div>





                <div class="col-sm-11 text-center pt-4 btn-main two_buttons-1" >

                  <button type="submit" class="btn btn-1 px-5 py-2 rounded-pill button-new text-white fs-5 "
                    :disabled="disabled">Next</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

    <div v-show="step === 2">

      <div class="container-fluid bottom-base  mx-auto ">
        <div class="row  bg-white bottom-base-in rounded shadow-sm  ">

          <div
            class="col-sm-4 text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
            <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
            <p class="step">03</p>
            <p class="pt-5 fw-light para-4 para-landing">Verify your phone number
              by the OTP.</p>

          </div>

          <div class="col-sm-8 mx-auto py-5  bottom-new-11 p-5 d-flex flex-column justify-content-center">

            <div class=" row align-middle">
              <div class=" m-auto  align-middle">
                <form class="form " method="post" action="#" @submit.prevent="next">
                  <p class="fs-5 fw-regular text-center text-dark">Please enter the OTP sent to
                    your phone number</p>
                  <div class="col-sm-5 m-auto">
                    <input type="text" id="Otp" class="form-control rounded-pill mb-4 text-center form-control-lg"
                      placeholder="Enter OTP" aria-label="otp" required>
                  </div>
                  <div class="two_buttons col-sm-11 two-buttons-2">
                  <button class="bac  btn border-0 px-0 py-2 text-white fs-5   text-left" @click.prevent="prev()">Go
                    Back</button>
                  <button class="btn btn-1 button-new px-5 py-2 rounded-pill text-white fs-5  w-100" type="submit">Next</button>
                  </div>
                </form>
                
              </div>
               
            </div>
          </div>
        </div>
      </div>






    </div>

    <div v-show="step === 3">



      <div class="container-fluid bottom-base  mx-auto ">
        <div class="row  bottom-base-in rounded bg-white shadow-sm  ">

          <div
            class="col-sm-4    text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
            <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
            <p class="step">04</p>
            <p class="pt-5  fw-light para-4 para-landing">Please provide details of
              your current job.</p>
          </div>

          <div class="col-sm-8 experience-new mx-auto p-5 ">
            <div class=" py-3 row">
              <p class="fs-5 fw-regular text-dark">Are you experienced or Fresher?</p>
              <div class="col-sm-5 px-3">
              <select id="selectCategory" class="form-select form-control rounded-pill form-control-lg">
                <option value="none">Please select work Status</option>
                <option value="Industryyes">Experienced</option>
                <option value="Industryno">Fresher</option>
              </select>
            </div>
            </div>
            <form id="none" class="form msform formShownBySelect">

            </form>
            <form id="Industryyes" class="form msform formShownBySelect" method="post" action="#" @submit.prevent="next">


              <div class="row screen-4-form pt-4">
                <div class="col-sm-5">


                  <label for="Industry" class="form-label">Industry</label>
                  <div class="input-group mb-3">
                    <select v-model="user.industry" class="form-select form-control rounded-pill form-control-lg"
                      required>
                      <option value="">None</option>
                      <option value="Industry">Industry</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-5 offset-1">


                  <label for="role" class="form-label role">Role</label>
                  <div class="input-group mb-3">
                    <select v-model="user.role" class="form-select form-control rounded-pill form-control-lg" required>
                      <option value="">None</option>
                      <option value="Role">Role</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-5">
                  <label for="company" class="form-label ">Last business name</label>
                  <input type="text" v-model="user.company" class="form-control rounded-pill form-control-lg mb-4"
                    placeholder=" e.g. McDonalds" id="company" required>
                </div>

                <div class="col-sm-5 offset-1">
                  <label for="started" class="form-label">Work start date</label>
                  
                  <datepicker :typeable="true" class="form-control rounded-pill form-control-lg mb-4" id="birth_date"
                            placeholder="MM/DD/YYYY" v-model="user.demp" required  inputFormat="MM/dd/yyyy"/>
                 
                </div>

                <div class="col-sm-5">
                  <div class="">
                    <label for="Salary" class="form-label ">Salary per hour</label>
                    <input type="text" v-model="user.salary" class="form-control rounded-pill form-control-lg mb-4"
                      placeholder="Current Salary per Hour" id="Salary" required>
                  </div>





                </div>
                <div class="col-sm-5 offset-1">
                  <div class="">
                    <label for="commute" class="form-label">How many miles are you willing to commute?</label>
                    <input type="number" id="commute" max="50" v-model="user.commute"
                      class="form-control form-control-lg rounded-pill mb-4" placeholder="Please enter value less than 51"
                      required>
                  </div>
                </div>
                <div class=" col-sm-11">

                  <legend class="col-form-label  pt-0 form-label">Open to work currently</legend>
                  <div class="d-flex align-items-center">

                    <div class="form-check ">
                      <input class="form-check-input" type="checkbox" false-value="" true-value="Full-Time"
                        v-model="user.otwf" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label form-label" for="flexRadioDefault1">
                        Full Time
                      </label>
                    </div>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="checkbox" false-value="" true-value="Part-Time"
                        v-model="user.otwp" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label  form-label" for="flexRadioDefault2">
                        Part Time
                      </label>
                    </div>


                  </div>

                </div>





              </div>

              <div class="col-sm-11 two_buttons pt-4 d-sm-flex">



                <button class="btn  bac  px-0 py-2 border-0 text-white fs-5  prev-btn  prev-1"
                    @click.prevent="prev()">Go Back</button>
                <button class="btn button-new btn-1 ms-2 px-5 py-2 rounded-pill text-white fs-5 next-btn next-1" type="submit"
                  :disabled="disabledind">Next</button>

              </div>
            </form>

            <form id="Industryno" class="form msform formShownBySelect" @submit.prevent="next">



              <div class="row screen-4-form pt-4">
                <div class="col-sm-5">


                  <label for="Industry" class="form-label">Which industry you want to work for?</label>
                  <div class="input-group mb-3">
                    <select v-model="user.industryfr" class="form-select form-control rounded-pill form-control-lg"
                      required>
                      <option value="">None</option>
                      <option value="Industry">Industry</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-5 offset-1">


                  <label for="role" class="form-label role">Role</label>
                  <div class="input-group mb-3">
                    <select v-model="user.roleno" class="form-select form-control rounded-pill form-control-lg" required>
                      <option value="">None</option>
                      <option value="Role">Role</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-5">

                  <legend class="col-form-label  pt-0 form-label">Open to work currently</legend>
                  <div class="d-flex align-items-center">

                    <div class="form-check ">
                      <input class="form-check-input" type="checkbox" false-value="" true-value="Full-Time"
                        v-model="user.otwfno" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label form-label" for="flexRadioDefault1">
                        Full Time
                      </label>
                    </div>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="checkbox" false-value="" true-value="Part-Time"
                        v-model="user.otwpno" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label  form-label" for="flexRadioDefault2">
                        Part Time
                      </label>
                    </div>


                  </div>

                </div>
                <div class="col-sm-5 offset-1">
                  <div class="">
                    <label for="commute" class="form-label">How many miles are you willing to commute?</label>
                    <input type="number" id="commute" max="50" v-model="user.commuteno"
                      class="form-control form-control-lg rounded-pill mb-4" placeholder="Please enter value less than 51"
                      required>
                  </div>
                </div>
                <div class="col-11 two_buttons pt-4 d-sm-flex">


                  <button class="btn  bac px-0 py-2 border-0 text-white fs-5   prev-btn  prev-1"
                    @click.prevent="prev()">Go Back</button>

                  <button class="btn btn-1 ms-2 px-5 py-2 rounded-pill text-white fs-5 button-new next-btn next-1" type="submit"
                    :disabled="disabledindfr">Next</button>

                </div>

              </div>


            </form>

          </div>
        </div>
      </div>





    </div>
    <div v-show="step === 4">
      <div class="container-fluid bottom-base  mx-auto ">
        <div class="row  bottom-base-in rounded bg-white shadow-sm  ">

          <div
            class="col-sm-4 text-center p-5  text-white rounded-start bottom-left d-flex flex-column align-items-center justify-content-center">
            <p class="text-uppercase fw-normal fs-2 pt-3 para-3"> Step</p>
            <p class="step">05</p>
            <p class="pt-4    fw-light para-4 para-landing">Please create your username
              and password.</p>

          </div>

          <div class="col-sm-8 mx-auto py-5 p-5  step-5-bottom-11 d-flex flex-column justify-content-center ">
            <form class="form " method="post" action="#" @submit.prevent="next">
              <div class="row justify-content-center step-5-bottom" >
                <div class="p-0">
                  <p class="fs-5 fw-regular text-dark text-center pt-5">Please enter the OTP sent to
                    your phone number</p>
                  <div class=" text-left col-sm-5 m-auto">
                    <label for="user" class="form-label">Username</label>
                    <input type="email" id="user" class="form-control rounded-pill mb-4 form-select-lg"
                      :value="user.email">
                  </div>
                  <div class="col-sm-5 m-auto">
                    <label class="form-label text-left" for="txtPassword">
                      Password</label>
                    <input name="txtPassword" type="password" id="txtPassword"
                      title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number"
                      class="form-control rounded-pill mb-4   form-select-lg" placeholder="Enter Password" required
                      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" />
                    <br />
                    <label class="form-label text-left" for="txtConfirmPassword">
                      Confirm Password</label>
                    <input name="txtConfirmPassword" type="password" id="txtConfirmPassword"
                      class="form-control rounded-pill mb-4   form-select-lg" placeholder="Confirm Password" />

                  </div>
                  <div class="col-sm-11 two_buttons-3  two_buttons">

                    <button class="btn  bac px-0 py-2 border-0 text-white fs-5 prev-btn"
                      @click.prevent="prev()">Go Back</button>
                    <button class="btn btn-1 px-5 py-2 button-new rounded-pill text-white fs-5  next-btn"
                      type="submit">Submit</button>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>



    </div>
    <div v-show="step === 5">
      <div class="container-fluid bottom-base  mx-auto ">
        <div class="row  bottom-base-in rounded  shadow-sm  ">

          <div class="col-sm-12 p-5  text-white   bottom-left-6 ">
            <p class=" fw-light para-landing  pt-3 para-screen-6 px-5"> {{ user.name }} {{ user.last }} Thank you for
              filling out our form.</p>

            <p class=" fw-normal para-new pb-5 px-5">We will keep your information
              safe. Feel free to contact us
              with any questions.</p>

          </div>
          <div class="result">

            <h2> {{ user.name }} {{ user.last }}</h2>
            <h2> {{ user.email }}</h2>
            <h2> {{ user.phone }}</h2>
            <h2> {{ user.dob }}</h2>
            <h2> {{ user.commute }}</h2>
            <h2> {{ city }}</h2>
            <h2> {{ state }}</h2>
            <h2> {{ user.zip }}</h2>
            <h2> {{ user.industry }}</h2>
            <h2> {{ user.role }}</h2>
            <h2> {{ user.roleno }}</h2>
            <h2> {{ user.company }}</h2>
            <h2> {{ user.demp }}</h2>
            <h2> {{ user.salary }}</h2>
            <h2> {{ user.otwf }}</h2>
            <h2> {{ user.otwp }}</h2>

          </div>
          <button style="margin: 10px; float: left; width: 40% !important;"
            class="btn bac btn-1 px-5 py-2 rounded-pill text-white fs-5 w-50 prev-btn" @click.prevent="prev()">Go
            Back</button><br /><br />
          <button style=" margin: 10px; float: left; width: 40% !important; "
            class="btn btn-1 px-5 py-2 rounded-pill text-white fs-5 w-50 next-btn" @click.prevent="next()">Next</button>
          <br /><br />

        </div>
      </div>
    </div>

    <Landingpage v-if="isLoaderVisible" />

  </div>
</template>

<script>
import Landingpage from './Landingpage.vue'
import { mask } from 'vue-the-mask';
import $ from 'jquery';
import datepicker from 'vue3-datepicker'
import axios from 'axios'
export default {
  directives: { mask },
  name: 'MyMutlistepform',
  components: {
    Landingpage,
    datepicker
  },

  mounted: function () {
    
    var txtPassword = document.getElementById("txtPassword");
    var txtConfirmPassword = document.getElementById("txtConfirmPassword");
    txtPassword.onchange = ConfirmPassword;
    txtConfirmPassword.onkeyup = ConfirmPassword;
    function ConfirmPassword() {
      txtConfirmPassword.setCustomValidity("");
      if (txtPassword.value != txtConfirmPassword.value) {
        txtConfirmPassword.setCustomValidity("Passwords do not match.");
      }
    }

    function is_int(value) {
      if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
        return true;
      } else {
        return false;
      }
    }
    $("#selectCategory").on("change", function () {
      $('.formShownBySelect').hide();
      $("#" + $(this).val()).show();
    }).change();
    $(".fancy-form div > div").show();

    $("#zip").keyup(function () {

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
          success: function (result) {

            $(".zip-error, .instructions").slideUp(200);

            $("#city").val(result.city);
            const input = $("input[name='city']");
            const inputs = $("input[name='state']");

            // Set value
            input.val(result.city);
            inputs.val(result.state);

            // Create native event
            const event = new Event('input', { bubbles: true });
            const event1 = new Event('input', { bubbles: true });
            inputs.get(0).dispatchEvent(event);
            // Dispatch the event on "native" element
            input.get(0).dispatchEvent(event1);

            $("#state").val(result.state);

            $(".fancy-form div > div").slideDown();

            $("#zip").blur();
            $("#address-line-1").show().focus();

          },
          error: function () {

            $(".zip-error").slideDown(300);

          }

        });

      } else if (el.val().length < 5) {

        $(".zip-error").slideUp(200);

      }

    });

  },
  data() {
    return {
      isLoaderVisible: false,
      picked: new Date('MM/dd/yyyy'),
      step: 1,

      multiple: true,
      steps: {},
      user: {
        term: null,
        dob: new Date().getFullYear -14,
        name: null,
        last: null,
        email: null,
        add: null,
        phone: null,
        zip: null,
        city: null,
        state: null,
        commute: null,
        industry: null,
        industryfr: null,
        role: null,
        company: null,
        demp: null,
        salary: null,
        dus: null,
        otwf: null,
        otwp: null,
      }
    }
  },
  computed: {
    disabled() {
      return !this.user.name || !this.user.last || !this.user.email || !this.user.phone || !this.user.dob || !this.user.zip || !this.user.term;
    },
    disabledind() {
      return !this.user.industry || !this.user.company || !this.user.demp || !this.user.role || !this.user.salary || !this.user.commute || !this.user.otwf && !this.user.otwp;
    },
    disabledindfr() {
      return !this.user.industryfr || !this.user.roleno || !this.user.commuteno || !this.user.otwfno && !this.user.otwpno;
    }
  },
  methods: {

    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async adduser() {
      const res = await axios.post(`http://localhost:3000/posts`, {
        name: this.user.name,
        lastName: this.user.last,
        email: this.user.email,
        lang: this.user.lang,
      });
      this.posts = [...this.posts, res.data];
      this.user.name = "";
      this.user.last = "";
      this.user.email = "";
      this.user.lang = "";
    },
    prev() {

      this.step--;
    },

    next() {

      this.step++;
      if (this.step == 5) {
        setTimeout(() => {
          this.isLoaderVisible = true
          this.step = false
        }, 10000)
      }
    }
  }


}
</script>
<style></style>