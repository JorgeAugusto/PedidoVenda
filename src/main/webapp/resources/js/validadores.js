PrimeFaces.locales['pt_BR'] = {
	messages : {
		'org.hibernate.validator.constraints.NotBlank.message' : '{0} não pode estar em branco',
		'javax.validation.constraints.NotNull.message' : 'deve ser informado'
	}
}

PrimeFaces.converter['com.algaworks.Categoria'] = {
		
		convert : function(element, value) {

			if (value === null || value === '') {
				return null;
			}
			
			return value;
		}
			
};

PrimeFaces.converter['javax.faces.Number']['REGEX'] = /^[-+]?\d+(\.\d+)?(\,\d+)?[d]?$/;

PrimeFaces.validator.NotBlank = {
	
	MESSAGE_ID : 'org.hibernate.validator.constraints.NotBlank.message',
		
	validate : function(element, value) {
		if (value === null || value === undefined || value.trim() === '') {
			var msg = element.data('msg-notblank');
			var label = element.data('p-label');
			var context = PrimeFaces.util.ValidationContext;
			var msgObj;
			
			if (!msg) {
				msgObj = context.getMessage(this.MESSAGE_ID, label);
			} else {
				var msgObj = {
					summary : msg,
					detail : msg
				}
			}
			
			throw msgObj;
		}
	}
		
};

PrimeFaces.validator.SKU = {
	
	pattern : /^([a-zA-Z]{2}\d{4,18})?$/,
		
	validate : function(element, value) {
		if (!this.pattern.test(value)) {
			var msg = element.data('msg-sku');
			
			if (!msg) {
				msg = 'SKU não é válido.';
			}
			
			var msgObj = {
				summary : msg,
				detail : msg
			}
			
			throw msgObj;
		}
	}
		
}