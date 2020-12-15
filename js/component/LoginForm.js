import { validateEmail } from "../utils.js";
import InputWrapper from "./InputWrapper.js";

const $template = document.createElement('template')
$template.innerHTML = /*html*/
`

   
<link rel="stylesheet" href="./css/register-form.css">


    <form id="login-form" action ="https://www.google.com/">
    <h2>Login Account</h2>
    <input-wrapper id="email" Label = "Email" type="email" error="" value="" required></input-wrapper>
    
    
    <input-wrapper id="password" Label = "Password" type="password" error="" value="" required></input-wrapper>
    <button id ="login-btn">Dang nhap</button>
    <div id='message'></div>
    <input type="submit" value="Sign Up" id="register-btn">
    <div id="to-login">
        Have you already had an account? <b> <a href = "">Login </a> </b>
     
     </div>


    </form>






`;

    
    
    
    
    


export default class LoginForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))
        this.$form = this.shadowRoot.getElementById('login-form')
        this.$email = this.shadowRoot.getElementById('email')
        this.$name = this.shadowRoot.getElementById('name')
        this.$password = this.shadowRoot.getElementById('password')
        
      


    }

      connectedCallback(){
        this.$form.onsubmit = async (event) => {
            event.preventDefault();
            // console.log(this.$email.value());
            let email = this.$email.value();
          
            let password = this.$password.value();
           

             //     this.$email.error('Nhap vao email');
            // } else {
            //     this.$email.error('')
            // }

            let isPassed = 


            (InputWrapper.validate(this.$email, (value) =>  value != '' ,"Nhap vao email") && InputWrapper.validate(this.$email, (value) => value, 'Dinh dang email khong chinh xac')) &

           

            InputWrapper.validate(this.$password, (value) => value != '', 'Nhap vao mat khau') 

            if (isPassed){
                let result = await firebase
                .firestore()
                .collection('users')
                .where('email','==', email)
                .where('password','==',CryptoJS.MD5(password).toString())
                .get();


                if(result.empty){
                    alert("Email hoac mat khau khong chinh xac")
                } else {
                    alert ("Dang nhap thanh cong");
                }
            }


            
            
           

            

            // window.localStorage.setItem("email",this.$email.value())
            // window.localStorage.setItem("name",this.$name.value())

            // if(this.$password.value() == this.$passwordConfirmation.value()){
                
            //      window.localStorage.setItem("password",this.$password.value())
            //           this.$message.innerHTML = '';
            //           }
            //          else {
            //             this.$message.style.color = 'red';
            //             this.$message.innerHTML = 'Did Not Match. Please Try Again!';
            //         }
            //         console.log(window.localStorage.getItem("password"));

                  }
            
            }
            

        }

    

    


window.customElements.define('login-form' ,LoginForm)
// console.log(localStorage.getItem("name"));






