'use strict'

const resourceLimit = 2250;

let resourceEligible = false,
netEligible = false,
grossEligible = false;

module.exports.getArraySum = (moneyArray) => {
	let sum = moneyArray.reduce(function(acc, val) {
		return acc + val;
		}, 0);
	return sum;
	}


module.exports.resourceTest = (resourceSum) => {
	if (resourceSum <= resourceLimit) {
		resourceEligible = true;
		return resourceEligible;
	}
}

let shelterMult = 1;

module.exports.convertHousing = (shelterFreq, shelterCost) => {
	if (shelterFreq === 'weekly') {
		shelterMult = 4.3
	} else if (shelterFreq === 'biweekly') {
		shelterMult = 2.15
	}
	let monthlyShelter = shelterCost * shelterMult;
	return monthlyShelter;
}

const p1Gross = 1287,
p2Gross = 1736,
p3Gross = 2184,
p4Gross = 2633,
p5Gross = 3081,
p6Gross = 3530,
p7Gross = 3980,
p8Gross = 4430
//each additional is 451

module.exports.grossTest = (householdSize, income) => {
	switch(householdSize) {
		case 1 && income <= p1Gross:
			//fallthrough
		case 2 && income <= p2Gross:
			//fallthrough
		case 3 && income <= p3Gross:
			//fallthrough
		case 4 && income <= p4Gross:
			//fallthrough
		case 5 && income <= p5Gross:
			//fallthrough
		case 6 && income <= p6Gross:
			//fallthrough
		case 7 && income <= p7Gross:
			//fallthrough
		case 8 && income <= p8Gross:
			grossEligible = true;
			break;
	}
	return grossEligible;
}

const earnedDed = .20; //percent

module.exports.earnedICDed = (grossIC) => {
	let ded = grossIC * earnedDed;
	let result = grossIC - ded;
	return result;
}

const standardDed13 = 157,
standardDed4 = 168,
standardDed5 = 197,
standardDed6 = 226

module.exports.getStd = (householdSize) => {
	let usedStd = '';
	switch(householdSize) {
		case 1:
		case 2:
		case 3:
			usedStd = standardDed13;
			break;
		case 4:
			usedStd = standardDed4;
			break;
		case 5:
			usedStd = standardDed5;
			break;
		case 6:
			usedStd = standardDed6;
			break;
	}
	return usedStd;
}

const sua1 = 308,
sua2 = 319,
sua3 = 331,
sua4 = 343,
sua5 = 353,
sua6 = 365,
sua7 = 375

//max shelter ded is 517

module.exports.getSua = (householdSize) => {
	let usedSua = '';
	switch(householdSize) {
		case 1:
			usedSua = sua1;
			break;
		case 2:
			usedSua = sua2;
			break;
		case 3:
			usedSua = sua3;
			break;
		case 4:
			usedSua = sua4;
			break;
		case 5:
			usedSua = sua5;
			break;
		case 6:
			usedSua = sua6;
			break;
		case (householdSize >= 7):
			usedsua = sua7
			break;
	}
	return usedStd;
}

const p1Net = 990,
p2Net = 1335,
p3Net = 1680,
p4Net = 2025,
p5Net = 2370,
p6Net = 2715,
p7Net = 3061,
p8Net = 3408;
// each additional is 347

module.exports.netTest = (householdSize, netIncome) => {
	switch(householdSize) {
		case 1 && netIncome <= p1Net:
			//fallthrough
		case 2 && netIncome <= p2Net:
			//fallthrough
		case 3 && netIncome <= p3Net:
			//fallthrough
		case 4 && netIncome <= p4Net:
			//fallthrough
		case 5 && netIncome <= p5Net:
			//fallthrough
		case 6 && netIncome <= p6Net:
			//fallthrough
		case 7 && netIncome <= p7Net:
			//fallthrough
		case 8 && netIncome <= p8Net:
			netEligible = true;
			break;
	}
	return netEligible;
	}

module.exports.oneThird = (netIncome) => {
	let benefit = netIncome * .3
	return benefit
}

// max benefit amount
const max1 = 194,
max2 = 357,
max3 = 511,
max4 = 649,
max5 = 771,
max6 = 925,
max7 = 1022,
max8 = 1169

module.exports.getFinalBenefit = (householdSize, netIncome) => {
	let finalBenefit = '';
	switch(householdSize) {
		case 1:
			finalBenefit = max1 - netIncome;
			break;
		case 2:
			finalBenefit = max2 - netIncome;
			break;
		case 3:
			finalBenefit = max3 - netIncome;
			break;
		case 4:
			finalBenefit = max4 - netIncome;
			break;
		case 5:
			finalBenefit = max5 - netIncome;
			break;
		case 6:
			finalBenefit = max6 - netIncome;
			break;
		case 7:
			finalBenefit = max7 - netIncome;
			break;
		case 8:
			finalBenefit = max8 - netIncome;
			break;
	}
	return finalBenefit;
}
