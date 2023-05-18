<template>
<Header/>

<Lang/>
  <Footer/>
  
  
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


import Lang from './components/Lang.vue';
export default {
  name: 'App',
  components: {
    Header,
    Lang,
    Footer
     }

}

</script>

<style>
input[type="submit"]:focus {
  background-color: hsl(210, 100%, 80%);
  border: 1px solid red !important;
}

.invalid {
  border-color: darkred;
  background-color: hsl(0, 30%, 95%);
  margin-bottom: 0em;
}
.error-message {
  margin-bottom: 1em;
  color: hsl(0deg, 100%, 15%);
}

input:required:valid {
  border-color: green;
}     
select:required:valid {
  border-color: green;
}    
</style>
