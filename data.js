const doctorsTable = {
  'Dr. John Doe': {
    type: ['Cardiology'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. Jane Smith': {
    type: ['Cardiology'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Michael Johnson': {
    type: ['Dermatology'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'unavailable' },
    ],
  },
  'Dr. Sarah Brown': {
    type: ['Dermatology'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Emily White': {
    type: ['Orthopedics'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. Robert Lee': {
    type: ['Orthopedics'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Mary Adams': {
    type: ['Orthopedics'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'unavailable' },
    ],
  },
  'Dr. David Wilson': {
    type: ['Pediatrics'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Laura Clark': {
    type: ['Pediatrics'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Thomas Brown': {
    type: ['Pediatrics'],
    timings: [
      { slot: '10:30 AM - 12:00 PM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Patricia Lewis': {
    type: ['Oncology'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. Christopher Walker': {
    type: ['Oncology'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Jessica White': {
    type: ['Psychiatry'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'available' },
    ],
  },
  'Dr. Brian Turner': {
    type: ['Psychiatry'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Susan Hill': {
    type: ['Psychiatry'],
    timings: [
      { slot: '10:30 AM - 12:00 PM', status: 'available' },
      { slot: '1:30 PM - 3:00 PM', status: 'available' },
    ],
  },
  'Dr. Matthew Martin': {
    type: ['Urology'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Laura Moore': {
    type: ['Urology'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Richard Clark': {
    type: ['Urology'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'unavailable' },
    ],
  },
  'Dr. Kimberly King': {
    type: ['Hypertension'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'unavailable' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. William Wright': {
    type: ['Hypertension'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Karen Brown': {
    type: ['Migraine'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'unavailable' },
    ],
  },
  'Dr. Joseph Taylor': {
    type: ['Migraine'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Patricia Thomas': {
    type: ['Hypoglycemia'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Melissa Martinez': {
    type: ['Hypoglycemia'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Laura Turner': {
    type: ['Osteoarthritis'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'unavailable' },
    ],
  },
  'Dr. Daniel Wright': {
    type: ['Osteoarthritis'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'available' },
    ],
  },
  'Dr. Susan Young': {
    type: ['Arthritis'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. Robert Taylor': {
    type: ['Arthritis'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Jennifer King': {
    type: ['(Vertigo) Paroxysmal Positional Vertigo'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'unavailable' },
      { slot: '11:30 AM - 1:00 PM', status: 'available' },
    ],
  },
  'Dr. Brian Harris': {
    type: ['(Vertigo) Paroxysmal Positional Vertigo'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'available' },
      { slot: '1:00 PM - 2:30 PM', status: 'unavailable' },
    ],
  },
  'Dr. Michelle Davis': {
    type: ['Acne'],
    timings: [
      { slot: '9:00 AM - 10:30 AM', status: 'available' },
      { slot: '11:00 AM - 12:30 PM', status: 'available' },
    ],
  },
  'Dr. Joseph Wilson': {
    type: ['Acne'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
  'Dr. Kimberly Martinez': {
    type: ['Urinary Tract Infection'],
    timings: [
      { slot: '9:30 AM - 11:00 AM', status: 'available' },
      { slot: '11:30 AM - 1:00 PM', status: 'available' },
    ],
  },
  'Dr. Charles Baker': {
    type: ['Urinary Tract Infection'],
    timings: [
      { slot: '10:00 AM - 11:30 AM', status: 'unavailable' },
      { slot: '12:00 PM - 1:30 PM', status: 'available' },
    ],
  },
};

console.log(JSON.stringify(doctorsTable, null, 2));
