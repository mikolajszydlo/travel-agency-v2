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
};

export default settings;