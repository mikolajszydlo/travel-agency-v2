const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
  formMessages: {
    formIncomplete: 'Please fill required fields!',
  },

  happyHour: {
    title: 'Happy Hour',
    promoDescription: "It's your time! Take advantage of Happy Hour! All offers 20% off!",
  },

  contactData: {
    morning: {
      period: '8:00 - 12:00',
      name: 'Amanda',
      phone: '678.243.8455',
    },
    afternoon: {
      period: '12:00 - 16:00',
      name: 'Tobias',
      phone: '278.443.6443',
    },
    evening: {
      period: '16:00 - 22:00',
      name: 'Helena',
      phone: '167.280.3970',
    },
  },
};

export default settings;