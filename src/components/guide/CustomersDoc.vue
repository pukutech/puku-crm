<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Customers</h1>
                <p>Collection of all customers with their information and updates</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/customers.png"><br>
                <h3>Features</h3>
                <p>
                  <li>Display all customers</li>
                  <li>Search customer</li>
                  <li>Edit Customer</li>
                  <li>Delete Customer</li>
                </p>

                <h3>Add customers  </h3>
                <img src="./../../assets/documentation/customer-add.png"><br>

                <h3>Edit customers </h3>
                <img src="./../../assets/documentation/customer-edit.png"><br>

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
  name:'CustomersDoc',
  components: {
     Navbar
  },
}
</script>

<style>


</style>
