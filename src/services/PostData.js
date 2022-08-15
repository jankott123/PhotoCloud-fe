export function PostData(type, userData) {
    let BaseURL = process.env.REACT_APP_APISERVER+"loginjwt";
   
    return new Promise((resolve, reject) =>{
    fetch(BaseURL, {
   method: 'POST',
   credentials:'include',

   body: JSON.stringify(userData)
   })
   .then((response) => response.json())
   .then((res) => {
    resolve(res);
   })
   .catch((error) => {
    reject(error);
   });
   });
   }

   export function PtData(type, userData) {

    alert ("ahoj");


}