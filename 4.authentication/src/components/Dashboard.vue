<template>  
    <div>    
        <h2>Dashboard</h2>    
        <p>Name: {{ user.name }}</p>   
        <p> {{ message }} </p> 
    </div>
</template>  
<script>  
    import axios from "axios"    
    import router from "../router"    
    const baseUrl = "http://localhost:3000";
    export default {    
        name: "Dashboard",    
        data() {    
            return {    
                user: {    
                    name: ""    
                },
                message: "" 
            }    
        },    
        methods: {    
            getUserData: function() {    
                let self = this
                const url = `${baseUrl}/api/user`;
                console.log('url',': ', url);    
                axios.get(url)    
                    .then((response) => {    
                        const {data} = response;
                        console.log('data',': ', data);
                        
                        if (data.user) {
                          self.$set(this, "user", response.data.user)    
                        } else {
                          this.message = response.data;
                        }
                    })    
                    .catch((errors) => {    
                        console.log('errors: ',errors)   
                        this.message = "Sorry something went wrong"
                        // router.push("/")
                    })    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>
