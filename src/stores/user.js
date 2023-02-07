import {defineStore} from "pinia";
import {auth} from "../firebaseConfig";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'
import {useDatabaseStore} from "./database";
import router from "../router";

export const useUserStore = defineStore("user",{
    state:()=>({
        userData: null,
        loadingUser: false,
        loadingSession: false,
    }),
    actions:{

        async registerUser(email, password){
                this.loadingUser = true;
          try{
              const {user} = await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password)
              this.userData = {email:user.email, uid: user.uid}
              router.push('/')
          }catch (error){
              console.log(error.code)
          }finally {
              this.loadingUser = false;
          }
            },

        async loginUser(email, password){
            this.loadingUser = true;
            try {
                const {user} = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
                this.userData= {email:user.email, uid:user.uid}
                router.push('/')
            }catch (error){
                console.log(error)
                this.userData={};
            }finally {
                this.loadingUser = false;
            }
        },

        async signOutUser() {
            this.loading = true;
            const databaseStore = useDatabaseStore()
            try {
                await signOut(auth)
                router.push('/login')
            }catch (error){
                console.log(error)
            }finally {
                this.loading = false;
                this.userData=null;
                databaseStore.$reset();
            }
         },

        currentUser(){
            return new Promise((resolve,reject) => {
                const unsubcribe =  onAuthStateChanged(auth,
                    (user)=>{
                        const databaseStore = useDatabaseStore()
                    if(user){
                        this.userData={
                            email: user.email,
                            uid: user.uid
                        };
                    }else{
                        this.userData = null
                        databaseStore.$reset();
                    }
                    resolve(user);
                    },
                    (e)=>reject(e)
                );
                unsubcribe();
            });
        },




    }
})