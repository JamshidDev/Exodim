import { minLength,maxLength, required } from "@vuelidate/validators";

// Vue validate global details
export const globalValidate = {

    // Personal information validate
  firtName: {
    required,
    minLength: minLength(3),
    maxLength:maxLength(16)
  },
  lastName:{
    required,
    minLength: minLength(3),
    maxLength:maxLength(16)
  },
  thirdName:{
    required,
    minLength: minLength(3),
    maxLength:maxLength(16)
  },
  bornDate:{
    required,
  },
  bornRegion:{
    required,
  },
  bornDistric:{
    required,
  },
  adressRegion:{
    required,
  },
  adressDistrict:{
    required,
  },
  adressStreet:{
    required,
  },


// Passport validate
  passportSeriya:{
    required,
    minLength: minLength(9),
  },
  passportJSHR:{
    required,
    minLength: minLength(14),
  },
  passportRegion:{
    required,
  },
  passportDistrict:{
    required,
  },
  passportDate:{
    required,
  },


//   Position validate
  positionDate:{
    required,
  },
  positionPart:{
    required,
  },
  positionName:{
    required,
  },
  positionAmount:{
    required,
  },
  positionFirstDate:{
    required,
  },
  positionDegree:{
    required,
  },


//   Academic validate
academic:{
    required,
  },
  academicDegree:{
    required,
  },
  academicTitle:{
    required,
  },
  employeeNation:{
    required,
  },
  employeeLanguage:{
    required,
  },
  employeeParty:{
    required,
  },
  employeeGender:{
    required,
  },
  employeePhone:{
    required,
  },
  employeeMilitaryTitle:{
    required,
  },
  employeeSelectedOrgan:{
    required,
  },
};

export default { globalValidate };
