


function greet(name, callback){
      console.log('Hii' + ' ' + name);
      callback()
}

//callback function -- method=1
function callback(){
      console.log(`I am a callback function`);
}
greet('aashu',callback);


//callback function -- method=2

function func(value, callme){
      console.log('Hii' + ' ' + value);
      callme();
}

func('Sanhil', function(){
      console.log('I am also a callback function');
})