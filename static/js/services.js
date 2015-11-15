function changeActivePag(i){
	for (var j = 3; j > 0; j--) {
		a = document.getElementById("pag"+j);
		a.setAttribute("src","../static/img/inactive.png");
	};
	a = document.getElementById("pag"+i);
	a.setAttribute("src","../static/img/active.png");

}
$(document).ready(function(){
	var s = $( document ).width();
	if(s<900 ){
		$('.hideMeOnTablet').hide();
		$('.alignCenterOnMobile').attr("style","text-align:center;")
	}
	if(s<500)
		$('.hideMeOnMobile').hide();
	if(s<360){
		$(".floatCenterOnMobileAll").attr("style","float:left;margin-left:18%");
	}
	if(s<500 & s>800){
		$('.showOnlyOnTablet').hide();
	}
	if(s<800 && s>500)
		$('.hideMeOnyOnTablet').hide();
	if(s<540 && s>350){
		$('.floatCenterOnMobileLawyers').attr("style","float:left;margin-left:25%");
	}
	if(s<1000 && s>500)
		$('.floatCenterOnMobile').attr("style","float:center");
	
	$( "#findLawyersBlock" ).hover(function() {
	  $( "#findLawyers" ).attr( "style","display:block;max-height:200px;overflow:hidden;" );
	  $( "#ourServices" ).attr( "style","display:none;" );
	  $( "#findLawyersBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock1" ).attr( "style","display:none" );
	},function(){
	  $( "#findLawyers" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block;max-height:200px;overflow:hidden;" );
	  $( "#findLawyersBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#findLawyersBlock2" ).attr( "style","display:none" );
	});


	$( "#makeDocumentsBlock" ).hover(function() {
	  $( "#makeDocuments" ).attr( "style","display:block;max-height:200px;overflow:hidden;" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#makeDocumentsBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock1" ).attr( "style","display:none" );
	 },function() {
	  $( "#makeDocuments" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block;max-height:200px;overflow:hidden;" );
	  $( "#makeDocumentsBlock1").css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 1000);
	  $( "#makeDocumentsBlock2" ).attr( "style","display:none" );
	});	
	$( "#startResearchBlock" ).hover(function() {
	  $( "#startResearch" ).attr( "style","display:block;max-height:200px;overflow:hidden;" );
	  $( "#ourServices" ).attr( "style","display:none" );
	  $( "#startResearchBlock2" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock2" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock1" ).attr( "style","display:none" );
	},function() {
	  $( "#startResearch" ).attr( "style","display:none" );
	  $( "#ourServices" ).attr( "style","display:block" );
	  $( "#startResearchBlock1" ).css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 2000);
	  // $( "#startResearchBlock1" ).css({ "display": "block", "width": "0" }).animate({ "width": "100%" }, 1000);
	  $( "#startResearchBlock2" ).attr( "style","display:none" );
	});

	$(".openSignUp").click(function(){
		$(".loginForm").attr("style","display:none");
		$(".signupForm").attr("style","display:block");
	});
});