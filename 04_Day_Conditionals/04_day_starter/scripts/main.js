
alert('hello')

const obj={"0":1,"1" : 2,"3":3};

           for( const [key,value]  of Object.entries(obj)){
               //console.log(`${key} : ${user[key]}`);
               console.log(key,value);
           }