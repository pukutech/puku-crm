<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Report</h1>
                <p>Report of current year</p>
                <v-divider class="my-3"></v-divider>
                <p>
                  Well this is an excellent feature. You already know how to add sales of each day<br>
                  This chart will show the total sales of each month and a complete sales history of <br>
                  this current year.
                </p>
                <img width="100%" src="./../../assets/documentation/report1.png"><br>

                <h3>Features</h3>
                <div class="list">
                  <li>Report of Today</li>
                  <li>Report of This Month</li>
                  <li>Report of This Year</li>
                </div>
                <img width="100%" src="./../../assets/documentation/report2.png"><br>

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
  name:'ReportDoc',
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
