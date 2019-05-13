<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Stock</h1>
                <p>Collection of all Items</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/items.png"><br>
                <h3>Features</h3>
                <div class="list">
                  <li>Display all Items</li>
                  <li>Search Items</li>
                  <li>Edit Item</li>
                  <li>Delete Item</li>
                </div>

              </v-flex>
            </v-layout>
          </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name:'StockDoc',
  components: {
     Navbar
  },
}
</script>

<style>
.list{
  margin-left: 8px;
}

</style>
