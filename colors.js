

function nightDay_button(self){

var target = document.querySelector('body').style;

if(self.value == 'night'){
target.backgroundColor='black';
target.color='white';
self.value='day';

var alias = document.querySelectorAll('a');
var a = 0;
while(a < alias.length){

alias[a].style.color = 'powderblue';
a = a+1;
}

}

else {
target.backgroundColor='white';
target.color='black';
self.value='night';

var alias = document.querySelectorAll('a');
var a;

while(a < alias.length){
  alias[a].style.color = 'blue';
  a = a + 1;
}
}

    }
