<template>
  <div class="box">
    <div class="list">
      <div class="card" v-for="(item, index) in showData" :key="index">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="name">
             {{item.name}} 
          </div> 
          <div class="bottom">
            <div v-if="item.status.on_sale === true" class="discount">
              <span class="currency_dash">NT${{item.price}} </span>
            </div>
            <div class="bottom_row">
               <div v-if="item.status.on_sale === true" class="price">
                   <span class="currency">NT${{item.status.discount_price}} </span> 
               </div>
              <div v-if="item.status.on_sale === false" class="price">
                   <span class="currency">NT${{item.price}}</span> 
               </div>
               <div class="icon">
                <div class="favorite">
                    <img src="../assets/favorite.png" alt="" />
                </div>
                  <div class="cart">
                    <img src="../assets/cart.png" alt="" />
                </div>
               </div>
            </div>
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      orders: [],
    };
  },
  created() {},
  mounted() {
    this.$store.dispatch("getVuexData");
  },
  computed: { 
    //way1 2. 將 Vuex state 中的資料抓出來使用
    userLoaded() {
      return this.$store.state.loadedData;
    },
    showData() {
      return this.$store.state.ordersVuex;
    },
  },
  methods: {
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  /* 設定font-size用 1rem=10px */
  font-size: 10px;
  position: relative;
}


.box {
  width: 100%;
  display: block;
  margin: 20% auto;
  background-color: #ffffff;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card {
  width: 60rem;
  height: 20rem;
  /* border: 1px solid #a9acb8; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  padding: 1rem;
}

.img img {
  height: 120px;
  width: 120px;
}

.name {
  font-size: 0.5rem;
}

.bottom_row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.currency{
  color: #e60012;
}

.currency_dash{
  font-size: 8px;
  color:  #333;
  margin-right: 145px;
  text-decoration:line-through;
}

.icon{
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

}

.favorite img, .cart img{
  height: 20px;
  width: 20px;
  padding: 5px;
}
</style>
