users=[{"eid":1,"ename":"Beau","email":"bbuckberry0@cbslocal.com","gender":"Male"},
{"eid":2,"ename":"Reba","email":"rsalsbury1@quantcast.com","gender":"Female"},
{"eid":3,"ename":"Crissie","email":"ccrinage2@amazon.com","gender":"Polygender"},
{"eid":4,"ename":"Leyla","email":"lcolomb3@imageshack.us","gender":"Female"},
{"eid":5,"ename":"Marlo","email":"msweating4@dot.gov","gender":"Female"},
{"eid":6,"ename":"Noni","email":"ngilffilland5@1688.com","gender":"Female"},
{"eid":7,"ename":"Meta","email":"mklambt6@army.mil","gender":"Female"},
{"eid":8,"ename":"Ned","email":"nburgyn7@utexas.edu","gender":"Male"},
{"eid":9,"ename":"Glyn","email":"gpieterick8@go.com","gender":"Non-binary"},
{"eid":10,"ename":"Joanne","email":"joverill9@networkadvertising.org","gender":"Female"},
{"eid":11,"ename":"Manuel","email":"mhollyara@behance.net","gender":"Male"},
{"eid":12,"ename":"Tobiah","email":"twyneb@shareasale.com","gender":"Polygender"},
{"eid":13,"ename":"Igor","email":"ipinfoldc@marriott.com","gender":"Male"},
{"eid":14,"ename":"Ambros","email":"adoed@amazon.co.jp","gender":"Male"},
{"eid":15,"ename":"Shelia","email":"smyatte@desdev.cn","gender":"Female"},
{"eid":16,"ename":"Wandie","email":"wrobinettef@virginia.edu","gender":"Female"},
{"eid":17,"ename":"Noby","email":"nsimmonsg@dot.gov","gender":"Male"},
{"eid":18,"ename":"Nan","email":"ndrinkhillh@edublogs.org","gender":"Female"},
{"eid":19,"ename":"Zonnya","email":"zziebarti@example.com","gender":"Female"},
{"eid":20,"ename":"Jermayne","email":"jpilsburyj@bloglovin.com","gender":"Male"},
{"eid":21,"ename":"Spike","email":"smoncktonk@utexas.edu","gender":"Male"},
{"eid":22,"ename":"Bartel","email":"bwyperl@google.ca","gender":"Male"},
{"eid":23,"ename":"Franz","email":"fpietruszewiczm@opera.com","gender":"Male"},
{"eid":24,"ename":"Jerad","email":"jripleyn@istockphoto.com","gender":"Male"},
{"eid":25,"ename":"Pedro","email":"pkobierrao@youtube.com","gender":"Male"},
{"eid":26,"ename":"Corrine","email":"cschultzp@intel.com","gender":"Female"},
{"eid":27,"ename":"Laney","email":"lduceq@tripadvisor.com","gender":"Female"},
{"eid":28,"ename":"Alanson","email":"aeytelr@weibo.com","gender":"Male"},
{"eid":29,"ename":"Randie","email":"rdevitas@lulu.com","gender":"Male"},
{"eid":30,"ename":"King","email":"kbagnellt@marriott.com","gender":"Male"},
{"eid":31,"ename":"Zorah","email":"znewcomenu@dmoz.org","gender":"Female"},
{"eid":32,"ename":"Jarret","email":"jkelmerev@ning.com","gender":"Male"},
{"eid":33,"ename":"Delia","email":"ddraiseyw@google.com.au","gender":"Female"},
{"eid":34,"ename":"Martainn","email":"mgossingtonx@nba.com","gender":"Male"},
{"eid":35,"ename":"Karyn","email":"kpowersy@nytimes.com","gender":"Female"},
{"eid":36,"ename":"Ania","email":"awottonz@last.fm","gender":"Female"},
{"eid":37,"ename":"Nert","email":"nkilban10@last.fm","gender":"Female"},
{"eid":38,"ename":"Tabbie","email":"tcoatham11@wikia.com","gender":"Male"},
{"eid":39,"ename":"Arlen","email":"asedwick12@jalbum.net","gender":"Male"},
{"eid":40,"ename":"Kimberlee","email":"kweatherell13@csmonitor.com","gender":"Female"},
{"eid":41,"ename":"Gabe","email":"gpickerill14@businessweek.com","gender":"Male"},
{"eid":42,"ename":"Simonne","email":"surey15@cocolog-nifty.com","gender":"Female"},
{"eid":43,"ename":"Byrann","email":"bjerrard16@xinhuanet.com","gender":"Male"},
{"eid":44,"ename":"Del","email":"dbartosinski17@spotify.com","gender":"Male"},
{"eid":45,"ename":"Saree","email":"ssnoding18@spiegel.de","gender":"Female"},
{"eid":46,"ename":"Berenice","email":"bbromby19@moonfruit.com","gender":"Female"},
{"eid":47,"ename":"Noami","email":"nandriesse1a@friendfeed.com","gender":"Female"},
{"eid":48,"ename":"Carla","email":"cwhitington1b@guardian.co.uk","gender":"Female"},
{"eid":49,"ename":"Dalt","email":"dixor1c@issuu.com","gender":"Male"},
{"eid":50,"ename":"Killy","email":"kginner1d@techcrunch.com","gender":"Male"}]
no_of_Male_users=0
no_of_Female_users=0
i=0
while i<=len(users)-1:
    if users[i]['gender']=='Male':
        no_of_Male_users=no_of_Male_users+1
    elif users[i]['gender']=='Female':
        no_of_Female_users=no_of_Female_users+1
i=i+1
print("No of Male users",no_of_Male_users)
print("No of Female users",no_of_Female_users)

