export default {
    namespaced: true,
    state() {
      return {
        products: [
            {
              id: 'p1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
              title: 'Book Collection',
              description:
                'A collection of must-read books. All-time classics included!',
              price: 99.99,
            },
            {
              id: 'p2',
              image:
               'https://imgs.search.brave.com/mHh3gbSWP_f9Uw4wMyTHKK5OtFs823CclPGufwgTwIE/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/MDRvWURZd3NwOV9I/c0lpVWg4aUFRSGFF/NyZwaWQ9QXBp',
              description: 'A tent for the ambitious outdoor tourist.',
              price: 129.99,
            },
            {
              id: 'p3',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
              title: 'Food Box',
              description:
                'May be partially expired when it arrives but at least it is cheap!',
              price: 6.99,
            },
          ],
      };
    },
    getters: {
      products(state) {
        return state.products;
      }
    }
  };
  