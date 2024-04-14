



const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      email: null,
      emailList: [],
    }
  },
  methods: {
    fetchEmail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
           
           console.log(response.data.response)
           this.email = response.data.response
        })
    },
    fetchEmails(n){
      for (let i = 0; i < 10; i ++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
           
           this.emailList.push(response.data.response)
        })
      } 
    }

    
    
  },
  created() {
   this.fetchEmail(),
   this.fetchEmails(10)
  },
}).mount('#app')




