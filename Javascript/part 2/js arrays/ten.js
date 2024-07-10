let users=[{ id:101,name:"Rahul",gender:"Male"},
            { id:102,name:"Sonia",gender:"Female"},
            { id:103,name:"Priya",gender:"Female"}
        ]
       // for(  user of users  ){
            //if(user.gender==="Female")
              //  console.log(user)

        //}
        let i=0
        while( i<=users.length-1){
            if(users[i].gender==="Female"){
                console.log(users[i])
            }
            i++

        }