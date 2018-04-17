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

module.exports = {
	isString,
	contains,
	containsAny,
	containsAll,
};