/* tslint:disable */
/* eslint-disable */
/*
 * Globalize Culture PT-BR
 */

(function (window, undefined) {

	var Globalize;

	if (typeof require !== "undefined" &&
		typeof exports !== "undefined" &&
		typeof module !== "undefined") {
		// Assume CommonJS
		Globalize = require("globalize");
	} else {
		// Global variable
		Globalize = window.Globalize;
	}

	Globalize.addCultureInfo("pt-BR", "default", {
		name: "pt-BR",
		englishName: "Portuguese (Brazil)",
		nativeName: "Português (Brasil)",
		language: "pt",
		isRTL: false,
		numberFormat: {
			// [negativePattern]
			// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
			// but is still defined as an array for consistency with them.
			//   negativePattern: one of "(n)|-n|- n|n-|n -"
			pattern: ["-n"],
			// number of decimal places normally shown
			decimals: 2,
			// string that separates number groups, as in 1,000,000
			",": ".",
			// string that separates a number from the fractional portion, as in 1.99
			".": ",",
			// array of numbers indicating the size of each number group.
			groupSizes: [3],
			// symbol used for positive numbers
			"+": "+",
			// symbol used for negative numbers
			"-": "-",
			// symbol used for NaN (Not-A-Number)
			"NaN": "Não Numérico",
			// symbol used for Negative Infinity
			negativeInfinity: "-Infinito",
			// symbol used for Positive Infinity
			positiveInfinity: "Infinito",
			percent: {
				// [negativePattern, positivePattern]
				//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
				//   positivePattern: one of "n %|n%|%n|% n"
				pattern: ["-n%", "n%"],
				// number of decimal places normally shown
				decimals: 2,
				// array of numbers indicating the size of each number group.
				// TODO: more detailed description and example
				groupSizes: [3],
				// string that separates number groups, as in 1,000,000
				",": ".",
				// string that separates a number from the fractional portion, as in 1.99
				".": ",",
				// symbol used to represent a percentage
				symbol: "%"
			},
			currency: {
				// [negativePattern, positivePattern]
				//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
				//   positivePattern: one of "$n|n$|$ n|n $"
				pattern: ["(R$ n)", "R$ n"],
				// number of decimal places normally shown
				decimals: 2,
				// array of numbers indicating the size of each number group.
				groupSizes: [3],
				// string that separates number groups, as in 1,000,000
				",": ".",
				// string that separates a number from the fractional portion, as in 1.99
				".": ",",
				// symbol used to represent currency
				symbol: "R$"
			}
		},
		calendars: {
			standard: {
				// the first day of the week (0 = Sunday, 1 = Monday, etc)
				firstDay: 1,
				days: {
					names: ["domingo segunda terça quarta quinta sexta sábado"],
					namesAbbr: ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."],
					namesShort: ["do", "se", "te", "qu", "qu", "se", "sa"]
				},
				months: {
					names: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
					namesAbbr: ["jan.", "fev.", "mar", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dec.", ""]
				},
				AM: null,
				PM: null,
				eras: [{ "name": "ap. J.-C.", "start": null, "offset": 0 }],
				patterns: {
					d: "dd/MM/yyyy",
					D: "dddd d MMMM yyyy",
					t: "HH:mm",
					T: "HH:mm:ss",
					f: "dddd d MMMM yyyy HH:mm",
					F: "dddd d MMMM yyyy HH:mm:ss",
					M: "d MMMM",
					Y: "MMMM yyyy"
				}
			}
		},
		// For localized strings
		messages: {

		}
	});

}(this));




var getLocalization = function () {
	var localizationobj = {};
	localizationobj.name = "pt-BR";
	localizationobj.englishName = "Portuguese (Brazil)";
	localizationobj.nativeName = "Português (Brasil)";
	localizationobj.language = "pt";
	localizationobj.numberFormat = {
		",": ".",
		".": ",",
		"NaN": "Não Numérico",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%", "n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-R$ n", "R$ n"],
			",": ".",
			".": ",",
			symbol: "R$"
		}
	};
	localizationobj.calendars = {
		standard: {
			firstDay: 1,
			days: {
				names: ["domingo segunda terça quarta quinta sexta sábado"],
				namesAbbr: ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."],
				namesShort: ["do", "se", "te", "qu", "qu", "se", "sa"]
			},
			months: {
				names: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
				namesAbbr: ["jan.", "fev.", "mar", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dec.", ""]
			},
			AM: null, // ["AM", "am", "AM"]
			PM: null, // ["PM", "pm", "PM"]
			twoDigitYearMax: 2029,
			patterns: {
				d: "M/d/yyyy",
				D: "dddd, MMMM dd, yyyy",
				t: "h:mm tt",
				T: "h:mm:ss tt",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				M: "MMMM dd",
				Y: "yyyy MMMM",
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
				ISO: "yyyy-MM-dd hh:mm:ss",
				ISO2: "yyyy-MM-dd HH:mm:ss",
				d1: "dd.MM.yyyy",
				d2: "dd-MM-yyyy",
				d3: "dd-MMMM-yyyy",
				d4: "dd-MM-yy",
				d5: "H:mm",
				d6: "HH:mm",
				d7: "HH:mm tt",
				d8: "dd/MMMM/yyyy",
				d9: "MMMM-dd",
				d10: "MM-dd",
				d11: "MM-dd-yyyy",
				d12: "dd/MM/yyyy"
			}
		}
	};
	localizationobj.pagergotopagestring = "Ir para:";
	localizationobj.pagershowrowsstring = "Mostrar filas:";
	localizationobj.pagerrangestring = " de ";
	localizationobj.pagerpreviousbuttonstring = "anterior";
	localizationobj.pagernextbuttonstring = "próximo";
	localizationobj.pagerfirstbuttonstring = "primeiro";
	localizationobj.pagerlastbuttonstring = "último";
	localizationobj.filterapplystring = "Aceitar";
	localizationobj.filtercancelstring = "Cancelar";
	localizationobj.filterclearstring = "Limpar filtro";
	localizationobj.filterstring = "avançado";
	localizationobj.filtersearchstring = "Buscar:";
	localizationobj.filterstringcomparisonoperators = ['vazio', 'não vazio', 'contenha', 'contenha (sensitivo)',
		'não contém', 'não contém (sensível)', 'começa com', 'começa com (sensível)',
		'termina em', 'termina em (sensível)', 'igual', 'igual (sensível)', 'nulo', 'não-nulo'];
	localizationobj.filternumericcomparisonoperators = ['igual', 'no igual a', 'menor que', 'menor que o igual a', 'maior que', 'maior que ou igual a', 'nulo', 'não nulo'];
	localizationobj.filterdatecomparisonoperators = ['igual', 'não igual a', 'menor que', 'menor que ou igual a', 'maior que', 'maior que ou igual a', 'nulo', 'não nulo'];
	localizationobj.filterbooleancomparisonoperators = ['igual', 'no igual a'];
	localizationobj.validationstring = "Valor não é válido";
	localizationobj.emptydatastring = "Não há dados para exibir";
	localizationobj.filterselectstring = "Selecione o filtro";
	localizationobj.loadtext = "Carregando...";
	localizationobj.clearstring = "Limpar";
	localizationobj.todaystring = "Hoje";
	localizationobj.loadingerrormessage = "Os dados ainda estão carregando e você não pode definir uma propriedade ou chamar um método. Você pode fazer isso assim que a vinculação de dados estiver concluída. jqxDataTable dispara o evento 'bindingComplete' quando a vinculação for concluída.";

	localizationobj.currencysymbolposition= "before";
	localizationobj.decimalseparator= ',';
	localizationobj.thousandsseparator= '.';
	localizationobj.pagergotopagestring= "Ir para página:";
	localizationobj.pagershowrowsstring= "Mostarar linhas:";
	localizationobj.pagerrangestring= " de ";
	localizationobj.pagerpreviousbuttonstring= "anterior";
	localizationobj.pagernextbuttonstring= "próximo";
	localizationobj.groupsheaderstring = '<b> Filtros: </b> Para filtrar, arraste os campos desejados para esta área.';
	localizationobj.sortascendingstring= "Ordenar Ascendente";
	localizationobj.sortdescendingstring = "Ordenar Descendente";
	localizationobj.sortremovestring= "Remover ordenação";
	localizationobj.groupbystring= "Agrupar por esta coluna";
	localizationobj.groupremovestring= "Remover dos grupos";
	localizationobj.filterclearstring= "Limpar";
	localizationobj.filterstring= "Filtrar";
	localizationobj.filtershowrowstring= "Monstrar linhas onde:";
	localizationobj.filtershowrowdatestring= "Mostrar linhas onde data:";
	localizationobj.filterorconditionstring= "ou";
	localizationobj.filterandconditionstring= "e";
	localizationobj.filterselectallstring= "(Selecionar Todos)";
	localizationobj.filterchoosestring= "Por favor escolha:";

	return localizationobj;
}
