var R_calcium = [
'Aqua',
'Silica',
'Glycerin',
'Xylitol',
'Sls',
'Xanthan gum',
'Aroma',
'Magnesium chloride',
'Sodium glycerophosphate',
'Calcium glycerophosphate',
'Sodium saccharin',
'Methylparaben',
'Titanium dioxide',
'Sodium silicate',
'Propylparaben',
'Limonene'
];

var R_sensetive = [
'Aqua',
'Silica',
'Glycerin',
'Xylitol',
'Hydroxyapatite',
'Xanthan gum',
'Aroma',
'Calcium glycerophosphate',
'Cocamidopropyl betaine',
'Sodium lauroyl sarcosinate',
'Hydroxyacetophenone',
'Sodium benzoate',
'Sodium saccharin',
'Magnesium chloride',
'O-cymen-5-ol',
'Cl 74160',
'Limonene'
];

var R_medical = [
'Aqua',
'Glycerin',
'Xylitol',
'Potassium nitrate',
'Hydroxyethylcellulose',
'Calcium glycerophosphate',
'Aroma',
'Polysorbate-20',
'Methylparaben',
'Magnesium chloride',
'Hydroxypropyl guar',
'Sodium saccharin'
];

var Sensodyne = [
'Aqua',
'Sorbitol',
'Hydrated Silica',
'Glycerin',
'Potassium nitrate',
'Cocamidopropyl betaine',
'Aroma',
'Zinc citrate',
'Xanthan gum',
'Titanium dioxide',
'Sodium fluoride',
'Sodium Hydroxide',
'Sodium saccharin',
'Sucralose',
'Limonene',
'Cinnamal',
'Eugenol'
];

var Lacalut = [
'Aqua',
'Hydrogenated starch hydrolysate',
'Hydrated Silica',
'Peg-32',
'Silica',
'Poloxamer 188',
'Cocamidopropyl betaine',
'Aroma',
'Propylene Glycol',
'Hydroxyethylcellulose',
'Aluminium lactate',
'Olaflur',
'Sodium fluoride',
'Titanium dioxide',
'Sodium chloride',
'Allantoin',
'Sodium saccharin',
'Glycerin',
'Chlorhexidine digluconate',
'Bisabolol',
'Sodium benzoate',
'Limonene'
];

var data = {'toothpastes':[
{'Name':'R_calcium','Color':'table-info', 'Ingredients': R_calcium},
{'Name':'R_sensetive','Color':'table-primary', 'Ingredients':R_sensetive},
{'Name':'R_medical','Color':'table-danger', 'Ingredients':R_medical},
{'Name':'Sensodyne','Color':'table-warning', 'Ingredients':Sensodyne},
{'Name':'Lacalut','Color':'table-success', 'Ingredients':Lacalut}
]};

w3.displayObject("tab", data);

$(document).ready(function(){
	var text = "";
	var dif_c_s = _.xor(R_calcium, R_sensetive);

	function textFun(value) {
      text += "<li class='list-group-item small'>" + value + "</li>";
    } 

  $("#btn_com").click(function(){
    dif_c_s.forEach(textFun);
	$("#result").removeClass("d-none");    
	$("#result_text").html(text);
	text="";
  });


});
