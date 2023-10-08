import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Strawberry cake ', img: 'https://th.bing.com/th/id/R.36c3a0bfbba7f35ced6b489fb288c92a?rik=y5CF%2fL7WysTl0g&riu=http%3a%2f%2fthekitchenmccabe.com%2fwp-content%2fuploads%2f2014%2f05%2fStrawberry-Shortcake-1.jpg&ehk=7BSdeCMQFUFAdjIErk8bDQbOpXzmsuvUy7VZlX7giNU%3d&risl=&pid=ImgRaw&r=0', price: 75},
    { name: ' Cheesecake ', img: 'https://th.bing.com/th/id/R.8542b1371d523f3a030010f7256da6f6?rik=vX1l4THb6xueQA&pid=ImgRaw&r=0', price: 65 },
    { name: ' Carrot cake ', img: 'https://th.bing.com/th/id/R.a1626ccac9220437c8309f2455f1d14b?rik=NlOa44P5DXU09w&riu=http%3a%2f%2fs3.amazonaws.com%2fstudio-me%2fsystem%2fphotos%2fphotos%2f000%2f503%2f583%2foriginal%2fcarrot-cake-recipe.jpg%3f1396989853&ehk=%2fHStjr0A7mn3zA8uV7HEvqvkTM4pBajsK1qG%2fr8t8rU%3d&risl=&pid=ImgRaw&r=0', price: 60 },
    { name: 'Brownie ', img: 'https://www.awarenessdays.com/wp-content/uploads/2018/12/chocolate-brownie-1.jpg', price: 40 },
    { name: ' Strawberry cupcake ', img: 'https://th.bing.com/th/id/R.2a578536fdfda1ea8523539d06b2a0df?rik=CP6viZVI81ETiw&riu=http%3a%2f%2fwww.thelittleepicurean.com%2fwp-content%2fuploads%2f2013%2f04%2fIMG_7770.jpg&ehk=EoZgponCQZxvcRqhAZjGGvYunDzZUG5bwbzCLadbzYE%3d&risl=&pid=ImgRaw&r=0', price: 35},
    { name: ' Cookies ', img: 'https://starfishmarket.com/wp-content/uploads/2014/06/best-chocolate-chip-cookies-3.jpg', price: 30 },
    { name: ' Hot Chocolate ', img: 'https://th.bing.com/th/id/R.6ed69c82f8b99e14ff2a675e735f9f96?rik=CSK9ywOjXlZkpw&pid=ImgRaw&r=0', price: 45 },
    { name: ' Chocolate cake ', img: 'https://www.lifeloveandsugar.com/wp-content/uploads/2014/11/Chocolate_Nutella_Cake3.jpg', price: 55 },
    { name: ' Fruity cake ', img: 'https://thumbs.dreamstime.com/b/close-up-cream-cake-white-plate-29823669.jpg', price: 75 },
    { name: ' Croissant softserve ', img: 'https://th.bing.com/th/id/OIP.UYfCQWuOAj53Noe-uFEeTQHaHa?pid=ImgDet&rs=1', price: 55 },

  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});