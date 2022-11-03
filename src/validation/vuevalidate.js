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
    minLength: minLength(10),
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
    minLength: minLength(14),
  },
  employeeMilitaryTitle:{
    required,
  },
  employeeSelectedOrgan:{
    required,
  },

  // University dialog validate
  universityItemdate1:{
    required,
    minLength: minLength(4),
  },
  universityItemdate2:{
    required,
    minLength: minLength(4),
  },
  universityItemname:{
    required,
  },
  universityItemspeciality:{
    required,
  },

  // vacation dialog  validate 
  date1:{
    required,
  },
  date2:{
    required,
  },
  period_date1:{
    required,
  },
  period_date2:{
    required,
  },
  status_decret:{
    required,
  },
  cadry:{
    required,
  },

  


};

export default { globalValidate };
