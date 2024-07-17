var istr;
let img2str=( )=>{
      let imageFile = document.getElementById('img').files[0];
      let reader =new FileReader();
      reader.readDataURL(imageFile)
      reader.addEventListener("Load",()=>{
        if (reader.result){
            istr=reader.result;
            console.log(reader.result);
            document.getElementsByTagName("data_tag").innerHTML=reader.result;
        
        }
        })    
}
let str2img=()=>{
    document.getElementsByTagName('img')[0].src=istr;
}

