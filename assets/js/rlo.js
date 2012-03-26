!function ($) {

  $(function(){
	  $('.btn-test-sandbox').click(function(){
		var sandboxContainer = $(this).parent().parent();
		var testdocumentContainer = $('.actual-markup', sandboxContainer.parent().siblings());	
		var evaluateCodeContainer = $('.sandbox-code textarea', sandboxContainer);		
		var debugContainer = $('.sandbox-result', sandboxContainer);
		var evaluateCode = evaluateCodeContainer.attr('value');
		try{
			if(evaluateCode){
				//strip semicolon at the end
				var isComplex = evaluateCodeContainer.attr('isComplex');
				if(!isComplex){
					evaluateCode = evaluateCode.replace(/;/g, '');
				}
								
				var evaluatedNode = $(eval(evaluateCode), testdocumentContainer);
				if(evaluatedNode){
					var tmp = evaluatedNode.clone();
					tmp.attr('id', '');
					debugContainer.append(tmp);					
				}
				
			}
		}
		catch(ex){
			debugContainer.append($('<div></div>').addClass('alert-error').html(ex.message))
		}
		$(debugContainer).scrollTop($(debugContainer)[0].scrollHeight);
	  });
    

  })
}(window.jQuery)