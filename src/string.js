function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function contains(source, value) {
	if (source == undefined || value == undefined) {
		return false
	}
	return source.indexOf(value) > -1;
}

function containsAny(source, ...value) {
	if (source == undefined) {
		return false
	}

	for (let i = 0; i < value.length; i++) {
		if (source.indexOf(value[i]) > -1) {
			return true;
		}
	}
	return false;
}

function containsAll(source, ...value) {
	if (source == undefined) {
		return false
	}

	for (let i = 0; i < value.length; i++) {
		if (source.indexOf(value[i]) === -1) {
			return false;
		}
	}
	return true;
}

var CaseType = {
	uppercaseFirst: 1,
	lowercaseFirst: 2,
	toggleCase: 3,
	uppercaseAll: 4,
	lowercaseAll: 5
};

function toggleCase(str) {
	var itemText = "";
	str.split("").forEach(
		function (item) {
			if (/^([a-z]+)/.test(item)) {
				itemText += item.toUpperCase();
			} else if (/^([A-Z]+)/.test(item)) {
				itemText += item.toLowerCase();
			} else {
				itemText += item;
			}
		});
	return itemText;
}

function changeCase(source, caseType) {
	if (source == undefined) {
		return undefined
	}

	switch (caseType) {
		case CaseType.uppercaseFirst:
			return source.replace(/\b\w+\b/g, function (word) {
				return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
			});
		case CaseType.lowercaseFirst:
			return source.replace(/\b\w+\b/g, function (word) {
				return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
			});
		case CaseType.toggleCase:
			return toggleCase(source);
		case CaseType.uppercaseAll:
			return source.toUpperCase();
		case CaseType.lowercaseAll:
			return source.toLowerCase();
		default:
			return source
	}
}

module.exports = {
	isString,
	contains,
	containsAny,
	containsAll,
	changeCase,
	CaseType
};