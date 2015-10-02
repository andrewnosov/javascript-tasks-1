var hours = process.argv[2];
var minutes = process.argv[3];
var a;
var b;
var c;
var d;

if(hours<=24,minutes<=60){console.log(a+b+':'+c+d)}else{console.log('Время введено неверно!')}

function hours_rim10(z){
	if(parseInt(z/10) == 1){a = 'X';}
	else if(parseInt(z/10) == 2){a = 'XX';}
		else{a = '';}
};

function horse_rim1(m){
	if(m%10 == 0){b = '';}
	if(m%10 == 1){b = 'I';}
    if(m%10 == 2){b = 'II';}
    if(m%10 == 3){b = 'III';}
    if(m%10 == 4){b = 'IV';}
    if(m%10 == 5){b = 'V';}
    if(m%10 == 6){b = 'VI';}
    if(m%10 == 7){b = 'VII';}
    if(m%10 == 8){b = 'VIII';}
    if(m%10 == 9){b = 'IX'}
};

function minutes_rim10(n){
	if(parseInt(n/10) == 0){c = ''}
	if(parseInt(n/10) == 1){c = 'X';}
	if(parseInt(n/10) == 2){c = 'XX';}
	if(parseInt(n/10) == 3){c = 'XXX';}
	if(parseInt(n/10) == 4){c = 'XL';}
    if(parseInt(n/10) == 5){c = 'L';}
    if(parseInt(n/10) == 6){c = 'LX';}
};

function minutes_rim1(t){
	if(t%10 == 0){d = '';}
	if(t%10 == 1){d = 'I';}
    if(t%10 == 2){d = 'II';}
    if(t%10 == 3){d = 'III';}
    if(t%10 == 4){d = 'IV';}
    if(t%10 == 5){d = 'V';}
    if(t%10 == 6){d = 'VI';}
    if(t%10 == 7){d = 'VII';}
    if(t%10 == 8){d = 'VIII';}
    if(t%10 == 9){d = 'IX'}
};

hours_rim10(hours);
horse_rim1(hours);
minutes_rim10(minutes);
minutes_rim1(minutes);	
if(hours<=24,minutes<=60)
	{console.log(a+b+':'+c+d);}
else{console.log('Ошибка ввода');}
