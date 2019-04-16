<template>  
    <div>    
        <h2>Login</h2>    
        <form v-on:submit="login">    
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />    
        </form>    
    </div>
</template>

<script>  
    import router from "../router"    
    import axios from "axios"    
    const baseUrl = "http://localhost:3000";
    export default {    
        name: "Login",    
        methods: {    
            login: (e) => {    
                e.preventDefault()    
                let email = "user@email.com"   
                let password = "password"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }    

                const url = `${baseUrl}/api/login`;
                axios.post(url, data)    
                    .then((response) => {    
                        // console.log('response',': ', response);
                        console.log("Logged in")    
                        router.push("/dashboard")    
                    })    
                    .catch((errors) => {    
                        console.log("Cannot log in")    
                    })    
                }    
                login()    
            }    
        }    
    }
</script>
