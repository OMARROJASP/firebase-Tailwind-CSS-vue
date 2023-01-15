import {defineStore} from "pinia";
import {db,auth} from './firebaseConfig'
import {
    query,
    collection,
    getDoc,
    getDocs,
    where,
    doc,
    addDoc,
    deleteDoc,
    updateDoc
} from 'firebase/firestore/lite'
import router from "./router";

export const useDatabaseStore = defineStore("database",{
    state:()=>({
        documents : [],
        loadingDoc: false,
    }),

    actions:{
        async getUrls(){
            this.loadingDoc = true;

            this.documents = [];
            const q = query(
                collection(db, "urls"),
                where("user", "==", auth.currentUser.uid)
            );
            try {
                const q = query(collection(db, "urls"),
                    where("user","==" ,auth.currentUser.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc)=>{
                    this.documents.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                    console.log(doc.data())
                    console.log("sd")
                })
            }catch (error){
                console.log(error)
            }finally {
                this.loadingDoc = false;
            }
        },

        async addUrl(customer, date, gallons, type ){
            this.loadingDoc = true;
           try {

               const docObjeto = {
                   cliente: customer,
                   fecha: date,
                   galones: gallons,
                   tipo: type,
                   user: auth.currentUser.uid,
               }

              // const q = query(collection(db,"urls"))
               const docRef =await addDoc(collection(db,"urls"), docObjeto)

               this.documents.push({
                   id:docRef.id,
                   cliente: customer,
                   fecha: date,
                   galones: gallons,
                   tipo: type,
                   user: auth.currentUser.uid,
               })


           }catch (error){
               console.log(error)
           }finally {
               this.loadingDoc = false;
           }
        },

        async deleteUrl(id){
            this.loadingDoc = true;
            try{
                const docRef = doc(db,"urls",id);
                await deleteDoc(docRef);
                this.documents = this.documents.filter((item) => item.id !== id);
            }catch (error){
                console.log(error);
            }finally {
                this.loadingDoc = false;
            }
        },

        async leerUrl(id){
            this.loadingDoc = true;
            try {
                const docRef = doc(db,"urls", id);
                const docSnap = await getDoc(docRef);

                return docSnap.data();
            }catch (error)
            {
                console.log(error);
            }finally {
                this.loadingDoc = false;
            }
        },

        async updateUrl(id, costumer){
            this.loadingDoc = true;
            try {
                const docRef = doc(db, "urls", id);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    throw new Error("no existe el doc");
                }

                if (docSnap.data().user === auth.currentUser.uid) {
                    await updateDoc(docRef, {
                        cliente: costumer,
                    });
                    this.documents = this.documents.map((item) =>
                        item.id === id ? { ...item, cliente: costumer } : item
                    );
                } else {
                    throw new Error("no eres el autor");
                }
                router.push('/')
                console.log("dvs")
            } catch (error) {
                console.log(error.message);
            } finally {
                this.loadingDoc = false;
            }
        }


    }

})