
let users= [{"id":1,"first_name":"Ingrid","email":"igrewes0@opera.com","gender":"Female"},
{"id":2,"first_name":"Buddie","email":"bdeveraux1@craigslist.org","gender":"Male"},
{"id":3,"first_name":"Nadine","email":"ndevuyst2@sfgate.com","gender":"Female"},
{"id":4,"first_name":"Toinette","email":"tjowling3@oracle.com","gender":"Female"},
{"id":5,"first_name":"Arluene","email":"acorby4@bloglovin.com","gender":"Female"},
{"id":6,"first_name":"Margaux","email":"mnappin5@dailymail.co.uk","gender":"Female"},
{"id":7,"first_name":"Tarra","email":"transtead6@utexas.edu","gender":"Female"},
{"id":8,"first_name":"Laureen","email":"ljosham7@telegraph.co.uk","gender":"Non-binary"},
{"id":9,"first_name":"Bartlet","email":"briditch8@who.int","gender":"Male"},
{"id":10,"first_name":"Lark","email":"lsilberschatz9@tuttocitta.it","gender":"Female"},
{"id":11,"first_name":"Kip","email":"kgoultera@blogs.com","gender":"Male"},
{"id":12,"first_name":"Livvy","email":"leakleb@usnews.com","gender":"Female"},
{"id":13,"first_name":"Leland","email":"llafontc@live.com","gender":"Male"},
{"id":14,"first_name":"Burr","email":"bedbrooked@addthis.com","gender":"Male"},
{"id":15,"first_name":"Kaitlyn","email":"kmcevillye@ft.com","gender":"Female"},
{"id":16,"first_name":"Vanya","email":"vmetcalfef@histats.com","gender":"Female"},
{"id":17,"first_name":"Ricky","email":"rcurdsg@360.cn","gender":"Female"},
{"id":18,"first_name":"Raquel","email":"rguntriph@people.com.cn","gender":"Female"},
{"id":19,"first_name":"Charmian","email":"cnavani@patch.com","gender":"Female"},
{"id":20,"first_name":"Samantha","email":"slondorsj@w3.org","gender":"Female"},
{"id":21,"first_name":"Durand","email":"dmacgillreichk@archive.org","gender":"Male"},
{"id":22,"first_name":"Michal","email":"mgraynel@usda.gov","gender":"Female"},
{"id":23,"first_name":"Lissa","email":"lworksm@ucla.edu","gender":"Female"},
{"id":24,"first_name":"Inger","email":"ihullyern@icio.us","gender":"Male"},
{"id":25,"first_name":"Blanch","email":"bgummoryo@disqus.com","gender":"Female"},
{"id":26,"first_name":"Dehlia","email":"dsimmigp@wunderground.com","gender":"Female"},
{"id":27,"first_name":"Heloise","email":"hmolsonq@chronoengine.com","gender":"Bigender"},
{"id":28,"first_name":"Richy","email":"rluckwellr@google.nl","gender":"Male"},
{"id":29,"first_name":"Dana","email":"dwhitticks@google.pl","gender":"Genderqueer"},
{"id":30,"first_name":"Mort","email":"mbrotherst@youku.com","gender":"Male"}
]
let no_of_Male_users=0;
let no_of_Female_users=0;
for(user of users){
    if( user.gender==="Male"){
        no_of_Male_users++


    }
    else
    if( user.gender==="Female"){
        no_of_Female_users++
         
    }

}
console.log(no_of_Male_users)
 console.log(no_of_Female_users)

