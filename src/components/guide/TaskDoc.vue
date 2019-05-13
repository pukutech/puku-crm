<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Tasks</h1>
                <p>List of all tasks</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/task.png"><br>
                <h3>Features</h3>
                <div class="list">
                  <li>Display all Tasks</li>
                  <li>Edit Task</li>
                  <li>Delete Task</li>
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
  name:'TaskDoc',
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
