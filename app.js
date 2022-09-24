 let text=document.getElementById('p');
 let ul=document.getElementById('a');
 let p=document.createElement('p');
let body=document.getElementsByTagName('body')
   let input=document.getElementById('in')
   input.focus();
   window.addEventListener('keypress',async(e)=>{
       if(e.key=='Enter'){
         if(input.value){
            let s=document.getElementsByTagName('a');
            Array.from(s).forEach((e)=>{
               e.remove()  
            })
            p.remove();
         }
               let res=await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`)
               input.value=" ";
               if(res.data){
              res.data.forEach(ele => {
               makeimg(ele);         
              });
               }          
               if(!res.data.length){
                  p=document.createElement('p');
                  body[0].append(p);
                  p.innerText="No Result"
               }
               
               }
   })
const makeimg=(shows)=>{
   let a=document.createElement('a');
   let c=document.createElement('img');
   if(shows.show.url){
   a.href=shows.show.url;
   a.target='_blank'
   }
   if(shows.show.image){
   c.src=shows.show.image.medium
      body[0].append(a);
      a.append(c);
   }
   if(!shows.show.image){
      c.src="149306.jpg"
      body[0].append(a);
      a.append(c);
   }
}
